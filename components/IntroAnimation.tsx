import React, { useEffect, useState } from 'react';

interface Props {
    onComplete: () => void;
}

const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
    const [phase, setPhase] = useState<'tunnel' | 'flash' | 'done'>('tunnel');

    useEffect(() => {
        // Start Flash phase before ending
        const flashTimer = setTimeout(() => {
            setPhase('flash');
        }, 2200);

        // Complete animation
        const endTimer = setTimeout(() => {
            setPhase('done');
            onComplete();
        }, 2600);

        return () => {
            clearTimeout(flashTimer);
            clearTimeout(endTimer);
        };
    }, [onComplete]);

    if (phase === 'done') return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden tunnel-container">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-black to-black opacity-80"></div>
            
            {/* Tunnel Rings */}
            {[...Array(8)].map((_, i) => (
                <div 
                    key={`ring-${i}`} 
                    className="tunnel-ring"
                    style={{
                        width: '40vw',
                        height: '40vw',
                        animation: `tunnel-move 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite`,
                        animationDelay: `${i * 0.3}s`
                    }}
                ></div>
            ))}

            {/* Moving Stars/Particles */}
            {[...Array(20)].map((_, i) => (
                <div 
                    key={`star-${i}`} 
                    className="tunnel-particle w-1 h-1 md:w-2 md:h-2"
                    style={{
                        animation: `star-fly 1.5s linear infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                ></div>
            ))}

            {/* Central Content */}
            <div className={`relative z-10 text-center transition-all duration-500 ${phase === 'flash' ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}>
                <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.8)] tracking-wider mb-4 animate-pulse">
                    2026
                </div>
                <div className="text-white text-lg md:text-2xl font-bold tracking-[0.5em] uppercase text-shadow-lg">
                    前往樂程坊時空...
                </div>
            </div>

            {/* White Flash Overlay */}
            <div 
                className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-300 ${phase === 'flash' ? 'opacity-100' : 'opacity-0'}`}
                style={{ animation: phase === 'flash' ? 'flash-white 0.5s ease-out forwards' : 'none' }}
            ></div>
        </div>
    );
};

export default IntroAnimation;