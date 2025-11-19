import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { ExternalLink, Wrench, Book, Monitor } from 'lucide-react';

export const ResourcesPanel: React.FC = () => {
    const { language } = useAppStore();

    const resources = [
        {
            title: 'WAVE Evaluation Tool',
            desc: language === 'en' ? 'Browser extension for evaluating web accessibility.' : 'Browser extensie voor het evalueren van webtoegankelijkheid.',
            url: 'https://wave.webaim.org/',
            icon: <Wrench size={18} className="text-pink-400" />
        },
        {
            title: 'Contrast Checker',
            desc: language === 'en' ? 'Check color contrast ratios.' : 'Controleer kleurcontrast verhoudingen.',
            url: 'https://webaim.org/resources/contrastchecker/',
            icon: <Monitor size={18} className="text-cyan-400" />
        },
        {
            title: 'WCAG 2.1 Guidelines',
            desc: language === 'en' ? 'Official W3C documentation.' : 'Officiële W3C documentatie.',
            url: 'https://www.w3.org/TR/WCAG21/',
            icon: <Book size={18} className="text-indigo-400" />
        }
    ];

    return (
        <div className="glass-panel rounded-3xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                {language === 'en' ? 'Tools & Resources' : 'Tools & Bronnen'}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
                {resources.map((res) => (
                    <a
                        key={res.title}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card rounded-xl p-4 flex flex-col gap-2 hover:bg-white/20 transition-all group"
                    >
                        <div className="flex justify-between items-start">
                            {res.icon}
                            <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                        </div>
                        <span className="font-bold text-white">{res.title}</span>
                        <span className="text-xs text-white/60">{res.desc}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};
