import React from 'react';

export const Icon: React.FC<{ path: React.ReactNode; className?: string; onClick?: () => void }> = ({ path, className, onClick }) => (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {path}
    </svg>
);

export const Icons = {
    Rocket: (p: any) => <Icon {...p} path={<g><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 2.72-1.68 4-1.68v2c-.2 1.45-1 3-1 3Z"/><path d="M12 15V9c0-1.3 1.05-2.2 4-4 .95 1.5.3 4-2 6Z"/></g>} />,
    Palette: (p: any) => <Icon {...p} path={<g><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></g>} />,
    Star: (p: any) => <Icon {...p} path={<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>} />,
    Calendar: (p: any) => <Icon {...p} path={<g><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></g>} />,
    Clock: (p: any) => <Icon {...p} path={<g><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></g>} />,
    MapPin: (p: any) => <Icon {...p} path={<g><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></g>} />,
    ChevronRight: (p: any) => <Icon {...p} path={<path d="m9 18 6-6-6-6"/>} />,
    ChevronDown: (p: any) => <Icon {...p} path={<path d="m6 9 6 6 6-6"/>} />,
    ChevronUp: (p: any) => <Icon {...p} path={<path d="m18 15-6-6-6 6"/>} />,
    ArrowUp: (p: any) => <Icon {...p} path={<path d="m5 12 7-7 7 7M12 19V5"/>} />,
    Cpu: (p: any) => <Icon {...p} path={<g><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></g>} />,
    Box: (p: any) => <Icon {...p} path={<g><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></g>} />,
    Heart: (p: any) => <Icon {...p} path={<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>} />,
    MousePointer2: (p: any) => <Icon {...p} path={<path d="m12 6 2-2H6.06c-1.3 0-2.4 1-2.5 2.3L3 18.2c-.1 1.3 1 2.3 2.3 2.3H9"/>} />,
    Gift: (p: any) => <Icon {...p} path={<g><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.9 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></g>} />,
    X: (p: any) => <Icon {...p} path={<path d="M18 6 6 18M6 6l12 12"/>} />,
    Check: (p: any) => <Icon {...p} path={<polyline points="20 6 9 17 4 12"/>} />,
    MessageCircle: (p: any) => <Icon {...p} path={<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>} />,
    Send: (p: any) => <Icon {...p} path={<g><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></g>} />,
    Sparkles: (p: any) => <Icon {...p} path={<g><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 7h4"/><path d="M3 3h4"/></g>} />,
    Key: (p: any) => <Icon {...p} path={<g><path d="m21 2-2 2m-7.6 7.6a6.5 6.5 0 1 1-9.199-9.199 6.5 6.5 0 0 1 9.198 9.199Z"/><path d="m21 2-9.6 9.6"/><path d="m21 12-5-5m3 3-2-2"/></g>} />,
    Mic: (p: any) => <Icon {...p} path={<g><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></g>} />,
    MicOff: (p: any) => <Icon {...p} path={<g><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></g>} />,
    Lock: (p: any) => <Icon {...p} path={<g><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></g>} />,
    Save: (p: any) => <Icon {...p} path={<g><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></g>} />,
    Bot: (p: any) => <Icon {...p} path={<g><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></g>} />
};