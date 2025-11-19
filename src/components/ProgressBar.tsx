import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { wcagRules } from '@/data/wcagRules';

export const ProgressBar: React.FC = () => {
    const { activeLevels, completedRules, language, activeRoles } = useAppStore();

    // Filter rules based on active levels AND active roles
    const relevantRules = wcagRules.filter(
        (r) => activeLevels.includes(r.level) && r.roles.some(role => activeRoles.includes(role))
    );

    const total = relevantRules.length;
    const completed = relevantRules.filter((r) => completedRules.includes(r.id)).length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    // Calculate per-level stats
    const statsByLevel = activeLevels.map(level => {
        const levelRules = relevantRules.filter(r => r.level === level);
        const levelTotal = levelRules.length;
        const levelCompleted = levelRules.filter(r => completedRules.includes(r.id)).length;
        const levelPercent = levelTotal === 0 ? 0 : Math.round((levelCompleted / levelTotal) * 100);

        return { level, total: levelTotal, completed: levelCompleted, percent: levelPercent };
    });

    return (
        <div className="glass-panel rounded-2xl p-6 mb-8 mx-4">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        {language === 'en' ? 'Your Progress' : 'Jouw Voortgang'}
                    </h2>
                    <p className="text-white/60 text-sm mt-1">
                        {completed} / {total} {language === 'en' ? 'rules passed' : 'regels behaald'}
                    </p>
                </div>
                <div className="text-4xl font-bold text-white/90">
                    {percentage}%
                </div>
            </div>

            {/* Main Bar */}
            <div className="h-4 bg-black/20 rounded-full overflow-hidden mb-6 backdrop-blur-sm border border-white/10">
                <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {/* Level Breakdown */}
            <div className="grid grid-cols-3 gap-4">
                {statsByLevel.map((stat) => (
                    <div key={stat.level} className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs font-medium text-white/70">
                            <span>Level {stat.level}</span>
                            <span>{stat.percent}%</span>
                        </div>
                        <div className="h-1.5 bg-black/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white/60 transition-all duration-700 ease-out"
                                style={{ width: `${stat.percent}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
