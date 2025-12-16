import React, { useState, useEffect, useRef } from 'react';
import { Icons } from './ui/Icons';
import SimpleMarkdown from './SimpleMarkdown';
import { getChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'model', text: '👋 您好！我是樂程坊 AI 顧問。想了解 **適合年齡** 或 **早鳥優惠** 嗎？我可以快速為您說明！✨' }]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    const suggestedQuestions = ["適合幾歲？", "有什麼優惠？", "時空探險隊內容？", "✨ 生成創意點子"];
    
    useEffect(() => { 
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); 
    }, [messages]);
    
    const startListening = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert("您的瀏覽器不支援語音輸入，請使用 Chrome 或 Safari。");
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.lang = 'zh-TW';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onerror = () => setIsListening(false);
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
            setTimeout(() => handleSend(transcript), 500);
        };

        recognition.start();
    };

    const handleSend = async (text = input) => {
        if (!text.trim()) return;
        const userMsg = text.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsLoading(true);
        
        try {
            const reply = await getChatResponse(userMsg);
            setMessages(prev => [...prev, { role: 'model', text: reply }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`fixed bottom-24 right-4 md:bottom-28 md:right-8 z-[60] p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 group ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-gradient-to-r from-indigo-500 to-purple-600'}`}
            >
                {isOpen ? <Icons.X className="w-6 h-6 text-white" /> : <Icons.MessageCircle className="w-7 h-7 text-white" />}
                {!isOpen && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>}
            </button>

            {isOpen && (
                <div className="fixed bottom-40 right-4 md:bottom-44 md:right-8 z-[60] w-[90vw] md:w-96 h-[500px] max-h-[60vh] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-slide-up ring-1 ring-black/5">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1.5 rounded-lg"><Icons.Sparkles className="w-5 h-5 text-yellow-300" /></div>
                            <span className="text-white font-bold">AI 課程顧問</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white"><Icons.X className="w-5 h-5"/></button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'}`}>
                                    <SimpleMarkdown text={msg.text} />
                                </div>
                            </div>
                        ))}
                        {isLoading && <div className="flex justify-start"><div className="bg-white text-gray-500 rounded-2xl px-4 py-3 text-sm border border-gray-100 typing-cursor">AI 思考中...</div></div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="px-4 py-2 bg-gray-50 overflow-x-auto whitespace-nowrap hide-scrollbar flex gap-2">
                        {suggestedQuestions.map((q, idx) => (
                            <button key={idx} onClick={() => handleSend(q)} className="text-xs bg-white border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full hover:bg-indigo-50 shadow-sm" disabled={isLoading}>{q}</button>
                        ))}
                    </div>

                    <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
                        <input 
                            type="text" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            onKeyPress={handleKeyPress} 
                            placeholder={isListening ? "聆聽中..." : "輸入問題..."} 
                            className="flex-1 bg-gray-100 border-0 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
                        />
                        <button onClick={startListening} disabled={isLoading} className={`p-2 rounded-xl transition ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                            {isListening ? <Icons.Mic className="w-5 h-5" /> : <Icons.MicOff className="w-5 h-5" />}
                        </button>
                        <button onClick={() => handleSend()} disabled={isLoading} className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"><Icons.Send className="w-5 h-5" /></button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChatAssistant;