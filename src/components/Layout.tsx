import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="liquid-bg min-h-screen text-white selection:bg-pink-500 selection:text-white">
            <div className="min-h-screen w-full bg-black/10 backdrop-blur-[2px]">
                <div className="container mx-auto px-4 py-8 max-w-5xl">
                    {children}
                </div>
            </div>
        </div>
    );
};
