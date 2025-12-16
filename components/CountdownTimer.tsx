import React, { useState, useEffect } from 'react';
import { Icons } from './ui/Icons';

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2025-12-31T23:59:59'); 
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const f = (n: number) => n.toString().padStart(2, '0');

    return (
        <div className="mt-8 bg-blue-900/60 backdrop-blur-md border border-blue-400/30 rounded-2xl p-4 md:p-6 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl ring-1 ring-white/10">
            <div className="flex items-center gap-5">
                <div className="bg-indigo-600 p-4 rounded-2xl shadow-[0_0_15px_rgba(79,70,229,0.5)] ring-1 ring-white/20">
                    <Icons.Clock className="w-8 h-8 text-white animate-pulse-soft" />
                </div>
                <div className="text-left">
                    <div className="text-yellow-300 text-base md:text-lg font-bold tracking-[0.15em] mb-2 drop-shadow-md uppercase flex items-center gap-2">
                         早鳥優惠倒數 <span className="animate-pulse">🔥</span>
                    </div>
                    <div className="text-white font-black text-2xl md:text-3xl flex flex-wrap items-center gap-3 drop-shadow-xl tracking-tight">
                        12/31 前現折 
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-xl text-xl md:text-2xl shadow-lg transform -rotate-2 border-2 border-white/20">
                            $500
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                {['天', '時', '分', '秒'].map((label, i) => {
                    const val = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
                    return (
                        <div key={i} className="flex flex-col items-center">
                            <div className="bg-white/10 backdrop-blur-sm text-white font-mono text-xl md:text-3xl font-bold w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                                {f(val)}
                            </div>
                            <span className="text-blue-200 text-xs mt-2 font-bold uppercase tracking-wider">{label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CountdownTimer;