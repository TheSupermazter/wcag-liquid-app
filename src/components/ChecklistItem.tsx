import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { WCAGRule } from '@/data/wcagRules';
import { Info, Check, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

interface ChecklistItemProps {
    rule: WCAGRule;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({ rule }) => {
    const {
        language,
        completedRules,
        toggleRuleCompletion,
        expandedRule,
        setExpandedRule
    } = useAppStore();

    const isCompleted = completedRules.includes(rule.id);
    const isExpanded = expandedRule === rule.id;

    const toggleExpand = (e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedRule(isExpanded ? null : rule.id);
    };

    return (
        <div
            className={clsx(
                "glass-card rounded-2xl p-4 mb-4 cursor-pointer group border-l-4 transition-all",
                isCompleted ? "border-l-green-400 bg-white/10" : "border-l-white/30 hover:border-l-white/60"
            )}
            onClick={() => toggleRuleCompletion(rule.id)}
        >
            <div className="flex items-start gap-4">
                {/* Checkbox */}
                <div className={clsx(
                    "mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0",
                    isCompleted
                        ? "bg-green-400 border-green-400 text-black"
                        : "border-white/40 group-hover:border-white/80"
                )}>
                    {isCompleted && <Check size={14} strokeWidth={3} />}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/20 text-white/90">
                                    {rule.refId} • {rule.level}
                                </span>
                                <div className="flex gap-1">
                                    {rule.roles.map(role => (
                                        <span key={role} className="text-[10px] uppercase tracking-wide opacity-60 border border-white/20 px-1.5 rounded">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className={clsx(
                                "text-lg font-medium transition-all",
                                isCompleted ? "text-white/50 line-through" : "text-white"
                            )}>
                                {rule.title[language]}
                            </h3>
                        </div>

                        <button
                            onClick={toggleExpand}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            {isExpanded ? <ChevronUp size={20} /> : <Info size={20} color="#FF4459" />}
                        </button>
                    </div>

                    {/* Expanded Content */}
                    <div className={clsx(
                        "grid transition-all duration-300 ease-in-out overflow-hidden",
                        isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    )}>
                        <div className="min-h-0 border-t border-white/10 pt-4">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-bold text-cyan-300 mb-2 uppercase tracking-wider">
                                        {language === 'en' ? 'Simplified' : 'Vereenvoudigd'}
                                    </h4>
                                    <p className="text-white/90 leading-relaxed">
                                        {rule.description.easy[language]}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-white/50 mb-2 uppercase tracking-wider">
                                        {language === 'en' ? 'Official Rule' : 'Officiële Regel'}
                                    </h4>
                                    <p className="text-white/70 text-sm italic leading-relaxed">
                                        "{rule.description.original[language]}"
                                    </p>

                                    <a
                                        href={rule.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-flex items-center gap-1 text-xs text-white/40 hover:text-white mt-4 transition-colors"
                                    >
                                        {language === 'en' ? 'Read W3C Documentation' : 'Lees W3C Documentatie'}
                                        <ExternalLink size={10} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
