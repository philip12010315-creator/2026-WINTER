import React, { useState } from 'react';
import { Icons } from './ui/Icons';
import SimpleMarkdown from './SimpleMarkdown';
import { INTEREST_TAGS } from '../constants';
import { getCampRecommendation } from '../services/geminiService';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const AIRecommendationModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const [age, setAge] = useState('');
    const [selectedInterests, setSelectedInterests] = useState<Set<string>>(new Set());
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const toggleInterest = (tag: string) => {
        const newSet = new Set(selectedInterests);
        if (newSet.has(tag)) newSet.delete(tag);
        else newSet.add(tag);
        setSelectedInterests(newSet);
    };

    const handleAnalyze = async () => {
        if (!age || selectedInterests.size === 0) return;
        setLoading(true);
        
        try {
            const recommendation = await getCampRecommendation(age, Array.from(selectedInterests));
            setResult(recommendation);
        } catch (e) {
            setResult("分析過程發生錯誤，請稍後再試。");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-scale">
            <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><Icons.X className="w-6 h-6"/></button>
                
                <div className="text-center mb-6">
                    <div className="inline-block p-3 rounded-full bg-blue-50 mb-3 text-blue-600"><Icons.Bot className="w-8 h-8" /></div>
                    <h3 className="text-2xl font-bold text-gray-800">AI 智能選課助手</h3>
                    <p className="text-gray-500 text-sm mt-1">選擇孩子的興趣，幫您找到本命營隊！</p>
                </div>

                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">1. 孩子幾歲？</label>
                        <select value={age} onChange={e=>setAge(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                            <option value="">請選擇年齡</option>
                            {[...Array(9)].map((_, i) => <option key={i} value={`${i+7}歲`}>{i+7} 歲</option>)}
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">2. 平常喜歡做什麼？ (可複選)</label>
                        <div className="flex flex-wrap gap-2">
                            {INTEREST_TAGS.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => toggleInterest(tag)}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                        selectedInterests.has(tag)
                                        ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {!result && (
                        <button onClick={handleAnalyze} disabled={loading || !age || selectedInterests.size === 0} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4">
                            {loading ? 'AI 正在思考中...' : <><Icons.Sparkles className="w-5 h-5" /> 開始分析</>}
                        </button>
                    )}

                    {result && (
                        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 mt-4 animate-slide-up">
                            <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">🎯 推薦結果：</h4>
                            <div className="text-gray-700 leading-relaxed text-sm">
                                <SimpleMarkdown text={result} />
                            </div>
                            <button onClick={() => {setResult(''); setAge(''); setSelectedInterests(new Set());}} className="mt-3 text-xs text-indigo-500 hover:text-indigo-700 font-bold underline block w-full text-center py-2">再測一次</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIRecommendationModal;