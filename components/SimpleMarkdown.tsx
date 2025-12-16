import React from 'react';

const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
    if (!text) return null;
    const lines = text.split('\n');
    return (
        <div className="space-y-1">
            {lines.map((line, i) => {
                const parts = line.split(/(\*\*.*?\*\*)/g);
                return (
                    <div key={i} className="min-h-[1.2em]">
                        {parts.map((part, j) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <span key={j} className="markdown-bold">{part.slice(2, -2)}</span>;
                            }
                            return part;
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default SimpleMarkdown;