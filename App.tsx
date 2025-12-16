import React, { useState, useEffect } from 'react';
import { Icons } from './components/ui/Icons';
import CountdownTimer from './components/CountdownTimer';
import AIRecommendationModal from './components/AIRecommendationModal';
import AIChatAssistant from './components/AIChatAssistant';
import Gallery from './components/Gallery';
import StickyAction from './components/StickyAction';
import IntroAnimation from './components/IntroAnimation';
import { CAMPS, REVIEWS } from './constants';

const LegoBrick = ({ color, size, rotation, top, left, right, bottom }: any) => (
    <div className={`absolute ${rotation} hidden lg:block opacity-20 hover:opacity-40 transition-opacity duration-500`} style={{ top, left, right, bottom }}>
        <div className={`relative ${color} shadow-lg rounded-sm`} style={{ width: size === 'large' ? '60px' : '40px', height: size === 'large' ? '30px' : '20px' }}>
            <div className={`absolute -top-1 left-1 w-1/3 h-2 ${color} brightness-110 rounded-sm`}></div>
            <div className={`absolute -top-1 right-1 w-1/3 h-2 ${color} brightness-110 rounded-sm`}></div>
        </div>
    </div>
);

function App() {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [showRecommendation, setShowRecommendation] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        // Check if we've already shown the intro in this session to avoid annoyance on refresh (Optional, currently disabled to show every time per request)
        // const hasShown = sessionStorage.getItem('hasShownIntro');
        // if (hasShown) setShowIntro(false);
        
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleIntroComplete = () => {
        setShowIntro(false);
        // sessionStorage.setItem('hasShownIntro', 'true');
    };

    const toggleTab = (id: string) => {
        setActiveTab(activeTab === id ? null : id);
    };

    const getIconGradient = (id: string) => {
        switch (id) {
            case 'time': return 'bg-gradient-to-br from-cyan-400 to-blue-600 shadow-blue-200';
            case 'art': return 'bg-gradient-to-br from-yellow-400 to-orange-600 shadow-orange-200';
            case 'newyear': return 'bg-gradient-to-br from-red-400 to-rose-600 shadow-red-200';
            default: return 'bg-gray-400';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-yellow-200" style={{ backgroundImage: `radial-gradient(#e5e7eb 15%, transparent 16%), radial-gradient(#e5e7eb 15%, transparent 16%)`, backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px' }}>
            
            {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

            <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-2 md:gap-3">
                            <img src="https://i.ibb.co/JW0ZQX0g/1.jpg" alt="樂程坊 Logo" className="h-8 md:h-10 w-auto rounded-lg object-contain" onError={(e: any) => e.target.style.display = 'none'} />
                            <span className="font-bold text-lg md:text-xl text-gray-800 tracking-tight">樂程坊 冬令營</span>
                        </div>
                        <div className="flex gap-2 md:gap-4 items-center">
                            <div className="hidden md:flex space-x-8">
                                <a href="#courses" className="text-gray-600 hover:text-indigo-600 font-medium flex items-center">課程介紹</a>
                                <a href="#features" className="text-gray-600 hover:text-indigo-600 font-medium flex items-center">營隊特色</a>
                            </div>
                            <a href="https://lin.ee/pYiEYcG" target="_blank" rel="noopener noreferrer" className="bg-[#06C755] text-white px-3 py-2 md:px-4 md:py-2 rounded-full font-medium hover:bg-[#05b34c] transition-colors shadow-lg flex items-center gap-1 text-sm md:text-base">
                                <span className="md:hidden">LINE</span>
                                <span className="hidden md:inline">加入官方LINE</span>
                            </a>
                            <a href="https://forms.gle/f3sfoTYYNKuqbZSV9" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2 md:px-5 md:py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center text-sm md:text-base">立即報名</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="relative bg-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 25%, transparent 26%)', backgroundSize: '40px 40px' }}></div>
                <LegoBrick color="bg-yellow-400" size="large" rotation="rotate-12" top="10%" right="10%" />
                <LegoBrick color="bg-red-500" size="small" rotation="-rotate-6" bottom="20%" left="5%" />
                <LegoBrick color="bg-blue-400" size="large" rotation="rotate-45" top="15%" left="15%" />
                <LegoBrick color="bg-green-400" size="small" rotation="-rotate-12" bottom="10%" right="20%" />
                <div className="max-w-6xl mx-auto px-4 py-10 md:py-24 relative z-10 text-center">
                    <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight drop-shadow-md">點燃孩子的 <span className="text-yellow-400 inline-block transform hover:-translate-y-1 transition-transform">創造力</span> 與 <span className="text-cyan-400 inline-block transform hover:-translate-y-1 transition-transform">科技魂</span></h1>
                    <p className="text-lg md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8 md:mb-10 drop-shadow-sm px-2">三個主題，三種冒險。結合 Minecraft、LEGO 機器人、3D列印與雷射切割的沉浸式學習體驗。</p>
                    
                    <CountdownTimer />

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        <button onClick={() => document.getElementById('courses')?.scrollIntoView({behavior: 'smooth'})} className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-xl border-b-4 border-gray-300 active:border-b-0 active:translate-y-1">探索課程</button>
                        <button onClick={() => setShowRecommendation(true)} className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 shadow-lg border-b-4 border-blue-600 active:border-b-0 active:translate-y-1 flex items-center gap-2">
                            <Icons.Sparkles className="w-5 h-5" /> 🤖 不知道選哪個？AI 幫你挑！
                        </button>
                    </div>
                    <div className="mt-8 md:mt-12 flex justify-center"><img src="https://i.ibb.co/LDF83gSC/unnamed.jpg" alt="課程活動總覽" className="rounded-2xl shadow-2xl border-4 border-white/20 max-w-full h-auto md:max-w-4xl hover:scale-[1.01] transition-transform duration-500" onError={(e: any) => e.target.style.display = 'none'} referrerPolicy="no-referrer" /></div>
                </div>
            </div>
            
            <AIRecommendationModal isOpen={showRecommendation} onClose={() => setShowRecommendation(false)} />

            <div id="courses" className="max-w-5xl mx-auto px-4 py-8 md:py-12 sm:px-6 relative z-10">
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 bg-white/80 inline-block px-6 py-2 rounded-full backdrop-blur-sm shadow-sm border border-white">選擇您的冒險旅程</h2>
                    <p className="text-gray-600 mt-2 font-medium text-sm md:text-base">點擊下方主題查看詳細課程內容</p>
                </div>
                <div className="flex flex-col gap-6 md:gap-8">
                    {Object.values(CAMPS).map((camp) => {
                        const isActive = activeTab === camp.id;
                        const CampIcon = Icons[camp.iconType] || Icons.Rocket;
                        return (
                            <div key={camp.id} className={`group bg-white rounded-3xl overflow-hidden transition-all duration-500 border-2 ${isActive ? `${camp.borderColor} shadow-2xl scale-[1.01]` : 'border-transparent shadow-md hover:shadow-xl'}`}>
                                <button onClick={() => toggleTab(camp.id)} className={`w-full flex flex-col md:flex-row items-start md:items-center justify-between p-5 md:p-8 text-left transition-colors cursor-pointer relative ${isActive ? camp.themeLight : 'bg-white hover:bg-gray-50/80'}`}>
                                    <div className="flex items-center gap-5 md:gap-6 w-full">
                                        <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-transform duration-500 ${isActive ? 'scale-110 ring-4 ring-white/60' : 'group-hover:scale-110 ring-2 ring-white'} ${getIconGradient(camp.id)}`}>
                                            <div className="absolute top-0 right-0 w-full h-full rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                                            <CampIcon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-md" />
                                            <div className="absolute top-2 right-3 w-2 h-2 md:w-3 md:h-3 bg-white/40 rounded-full blur-[1px]"></div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <h3 className={`text-xl md:text-2xl font-black tracking-wide ${isActive ? camp.textColor : 'text-gray-800'}`}>{camp.title.split('：')[0]}</h3>
                                                <span className={`text-sm md:text-base font-bold ${isActive ? camp.accentColor : 'text-gray-500'}`}>{camp.title.split('：')[1]}</span>
                                            </div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full text-xs md:text-sm font-bold bg-white/80 border border-gray-100 text-gray-600 shadow-sm"><Icons.Calendar className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />{camp.date.split('(')[0]}</div>
                                        </div>
                                        <div className="flex items-center gap-2">{!isActive && <span className="text-xs font-bold text-indigo-500 animate-pulse hidden sm:inline-block">👆 查看詳情</span>}<div className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}><Icons.ChevronDown className={`w-5 h-5 md:w-6 md:h-6 ${isActive ? 'text-gray-400' : 'text-indigo-500 animate-bounce'}`} /></div></div>
                                    </div>
                                </button>
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="relative">
                                        <div className="absolute top-0 left-0 bottom-0 w-2 bg-gray-50 flex flex-col items-center justify-start gap-2 py-4 hidden md:flex">{[...Array(20)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-gray-300"></div>)}</div>
                                        <div className="md:pl-8">
                                            <div className="px-5 py-5 md:px-6 md:py-6 md:pr-8"><p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">{camp.description}</p><div className="flex flex-wrap gap-2 mb-6">{camp.tags.map((tag, idx) => (<span key={idx} className={`px-2 py-1 md:px-3 rounded-md text-xs md:text-sm font-medium bg-gray-100 ${camp.textColor} border border-gray-200`}>#{tag}</span>))}</div></div>
                                            {camp.image && (<div className="px-5 md:px-6 md:pr-8 mb-6 md:mb-8"><div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"><img src={camp.image} alt={`${camp.title} 課程海報`} className="w-full h-auto object-cover max-h-[500px]" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/f3f4f6/374151?text=圖片載入失敗"; }} referrerPolicy="no-referrer" /></div></div>)}
                                            <div className="px-5 md:px-6 md:pr-8 pb-6 md:pb-8"><h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2"><Icons.Clock className="text-gray-400 w-5 h-5" />每日精彩課表 (左右滑動)</h4>
                                                <div className="flex flex-row flex-nowrap md:grid md:grid-cols-5 gap-4 overflow-x-auto pb-4 snap-x smooth-scroll">
                                                    {camp.schedule.map((day, index) => (
                                                        <div key={index} className={`flex-shrink-0 w-72 md:w-auto snap-center bg-white rounded-xl border-b-4 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden border border-t-gray-100 border-x-gray-100 ${camp.id === 'time' ? 'border-b-blue-200 hover:border-b-blue-400' : ''} ${camp.id === 'art' ? 'border-b-orange-200 hover:border-b-orange-400' : ''} ${camp.id === 'newyear' ? 'border-b-red-200 hover:border-b-red-400' : ''}`}>
                                                            <div className={`h-2 w-full ${camp.themeColor} opacity-20 flex justify-center gap-1 items-center`}><div className="w-6 h-1 bg-white/40 rounded-full"></div><div className="w-6 h-1 bg-white/40 rounded-full"></div></div>
                                                            <div className={`p-3 text-center text-white font-bold ${camp.themeColor}`}>{day.day}</div>
                                                            <div className="p-4 flex-grow flex flex-col justify-between h-[160px] md:h-[180px]"><div><h5 className={`font-bold text-base md:text-lg mb-2 leading-tight ${camp.textColor}`}>{day.title}</h5><p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">{day.task}</p></div><div className="pt-3 border-t border-gray-100 mt-auto"><div className="flex flex-wrap gap-1">{day.tools.map((tool, i) => (<span key={i} className={`text-[10px] px-2 py-1 rounded bg-gray-100 text-gray-600 font-medium border border-gray-200`}>{tool}</span>))}</div></div></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-5 md:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-100 md:pr-8 rounded-br-3xl">
                                                <div className="flex items-center gap-3 text-gray-600 text-xs md:text-base w-full justify-center md:justify-start"><div className="flex items-center gap-1.5"><Icons.MapPin className="w-4 h-4" /><span className="font-medium">台北市科技教育中心</span></div><div className="block w-px h-3 bg-gray-300"></div><div className="flex items-center gap-1.5"><Icons.Clock className="w-4 h-4" /><span className="font-medium">09:00 - 17:00</span></div></div>
                                                <a href="https://forms.gle/f3sfoTYYNKuqbZSV9" target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto text-center px-8 py-3 rounded-xl font-bold text-white shadow-lg transform transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border-b-4 border-black/20 ${camp.themeColor}`}>報名{camp.title.split('：')[0]} <Icons.ChevronRight className="w-4 h-4" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Gallery />
            
            <div className="bg-white py-12 border-t border-gray-100">
                <div className="max-w-[95%] xl:max-w-screen-2xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">家長好評推薦</h2>
                        <p className="text-gray-500 mt-2">聽聽其他家長怎麼說</p>
                    </div>
                    <div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x">
                        {REVIEWS.map((r, i) => (
                            <div key={i} className="flex-shrink-0 w-80 bg-gray-50 p-6 rounded-2xl border border-gray-100 snap-center shadow-sm">
                                <div className="flex items-center gap-1 mb-3 text-yellow-400">
                                    {[...Array(r.stars)].map((_, si) => <Icons.Star key={si} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-gray-700 mb-4 leading-relaxed">"{r.text}"</p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-bold text-gray-900">{r.name}</span>
                                    <span className="text-gray-500 bg-white px-2 py-1 rounded-md border border-gray-200">{r.kid}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="features" className="bg-white/80 backdrop-blur-md py-12 md:py-16 border-t border-gray-100 relative z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8 md:mb-12"><h2 className="text-2xl md:text-3xl font-bold text-gray-900">為什麼選擇我們？</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-100 border-b-4 hover:translate-y-[-4px] transition-transform"><div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm"><Icons.Cpu className="w-6 h-6" /></div><h3 className="text-xl font-bold text-gray-900 mb-2">跨領域 STEAM 學習</h3><p className="text-gray-600">結合科學、技術、工程、藝術與數學，培養孩子解決真實問題的能力。</p></div>
                        <div className="p-6 bg-orange-50 rounded-2xl border-2 border-orange-100 border-b-4 hover:translate-y-[-4px] transition-transform"><div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 shadow-sm"><Icons.Box className="w-6 h-6" /></div><h3 className="text-xl font-bold text-gray-900 mb-2">實體作品帶回家</h3><p className="text-gray-600">不只是聽課，每個營隊都有豐富的實作產出，讓孩子將自信作品帶回家展示。</p></div>
                        <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-100 border-b-4 hover:translate-y-[-4px] transition-transform"><div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4 shadow-sm"><Icons.Heart className="w-6 h-6" /></div><h3 className="text-xl font-bold text-gray-900 mb-2">專業師資引導</h3><p className="text-gray-600">擁有豐富教學經驗的講師團隊，引導孩子從構思到實踐，激發無限潛能。</p></div>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-900 text-gray-400 py-12 border-t-8 border-indigo-600">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="text-center md:text-left"><h4 className="text-white text-xl font-bold mb-2">樂程坊 冬令營</h4><p>啟發孩子的未來競爭力</p></div><div className="flex gap-4 md:gap-6 text-sm"><a href="#" className="hover:text-white transition">關於我們</a><a href="#" className="hover:text-white transition">常見問題</a><a href="#" className="hover:text-white transition">聯絡我們</a></div><div className="text-xs md:text-sm mt-4 md:mt-0">&copy; 2025 Creative Camp. All rights reserved. 
                </div></div>
            </footer>

            <div className="h-32 md:h-40"></div>

            <StickyAction />

            {showScrollTop && (
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-24 left-4 md:bottom-28 md:left-8 z-[60] bg-white/80 hover:bg-white text-gray-600 p-3 rounded-full shadow-lg border border-gray-200 transition-all hover:-translate-y-1 backdrop-blur-sm"
                >
                    <Icons.ArrowUp className="w-5 h-5" />
                </button>
            )}
            
            <AIChatAssistant />
        </div>
    );
}

export default App;