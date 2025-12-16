import React, { useState } from 'react';
import { Icons } from './ui/Icons';

const StickyAction: React.FC = () => {
    const [showPromoDetails, setShowPromoDetails] = useState(false);

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4">
            {showPromoDetails && (
                <div className="absolute bottom-full left-0 right-0 mb-2 mx-3 md:mx-auto max-w-2xl bg-white rounded-2xl shadow-2xl border border-red-100 overflow-hidden animate-slide-up max-h-[60vh] overflow-y-auto">
                    <div className="bg-red-50 p-4 border-b border-red-100 flex justify-between items-center sticky top-0 z-10"><h3 className="font-bold text-red-800 flex items-center gap-2"><Icons.Gift className="w-5 h-5" /> 優惠活動詳情</h3><button onClick={() => setShowPromoDetails(false)} className="p-1 hover:bg-red-100 rounded-full transition"><Icons.X className="w-5 h-5 text-red-400" /></button></div>
                    <div className="p-5 space-y-4">
                        <div className="flex items-start gap-3"><div className="bg-red-100 text-red-600 p-1 rounded-full mt-0.5 shrink-0"><Icons.Check className="w-3 h-3" /></div><div><span className="block text-red-600 text-sm font-bold">🔥 早鳥優惠</span><span className="text-gray-600 text-sm">12/31 前報名現折 500 元</span></div></div>
                        <div className="flex items-start gap-3"><div className="bg-red-100 text-red-600 p-1 rounded-full mt-0.5 shrink-0"><Icons.Check className="w-3 h-3" /></div><div><span className="block text-red-600 text-sm font-bold">🔥 舊生再報名</span><span className="text-gray-600 text-sm">折 500 元</span></div></div>
                        <div className="flex items-start gap-3"><div className="bg-red-100 text-red-600 p-1 rounded-full mt-0.5 shrink-0"><Icons.Check className="w-3 h-3" /></div><div><span className="block text-red-600 text-sm font-bold">🔥 團報 or 一位多報 (含兩梯)</span><span className="text-gray-600 text-sm">折 500 元</span></div></div>
                        <div className="flex items-start gap-3"><div className="bg-red-100 text-red-600 p-1 rounded-full mt-0.5 shrink-0"><Icons.Check className="w-3 h-3" /></div><div><span className="block text-red-600 text-sm font-bold">🔥 分享貼文 @朋友</span><span className="text-gray-600 text-sm">折 500 元</span></div></div>
                    </div>
                </div>
            )}
            <div className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl p-2.5 md:p-4 max-w-4xl mx-auto flex items-center justify-between gap-2 md:gap-4 ring-1 ring-black/5">
                <div className="flex items-center gap-2 md:gap-3 cursor-pointer group flex-1" onClick={() => setShowPromoDetails(!showPromoDetails)}><div className="bg-gradient-to-br from-red-500 to-pink-600 text-white p-2 md:p-2.5 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300"><Icons.Gift className="w-4 h-4 md:w-6 md:h-6" /></div><div className="flex flex-col"><span className="text-red-600 font-extrabold text-sm md:text-lg tracking-tight leading-tight">最高折 $2000</span><span className="text-gray-400 text-[10px] md:text-sm flex items-center gap-1 group-hover:text-red-400 transition-colors">查看詳情 <Icons.ChevronUp className={`w-3 h-3 transition-transform duration-300 ${showPromoDetails ? 'rotate-180' : ''}`} /></span></div></div>
                
                <div className="flex items-center gap-2">
                    <a href="https://lin.ee/pYiEYcG" target="_blank" rel="noopener noreferrer" className="bg-[#06C755] text-white p-2.5 md:px-4 md:py-3 rounded-xl font-bold shadow-lg hover:bg-[#05b34c] transition-all active:scale-95 flex items-center justify-center gap-1">
                        <Icons.Rocket className="w-5 h-5 fill-current hidden md:block" /> 
                        <span className="text-sm md:text-base whitespace-nowrap">LINE</span>
                        <span className="hidden md:inline">好友</span>
                    </a>
                    <a href="https://forms.gle/f3sfoTYYNKuqbZSV9" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all active:scale-95 whitespace-nowrap text-sm md:text-base flex items-center gap-1.5 md:gap-2">立即報名 <Icons.ChevronRight className="w-4 h-4 hidden sm:block" /></a>
                </div>
            </div>
        </div>
    );
};

export default StickyAction;