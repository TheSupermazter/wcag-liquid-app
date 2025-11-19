import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { wcagRules } from '@/data/wcagRules';
import { ChecklistItem } from './ChecklistItem';

export const Checklist: React.FC = () => {
    const { activeLevels, activeRoles, language } = useAppStore();

    const filteredRules = wcagRules.filter(
        (rule) => activeLevels.includes(rule.level) && rule.roles.some(role => activeRoles.includes(role))
    );

    if (filteredRules.length === 0) {
        return (
            <div className="text-center py-12 text-white/50">
                <p className="text-lg">
                    {language === 'en'
                        ? 'No rules match your filters. Try selecting more levels or roles.'
                        : 'Geen regels gevonden. Probeer meer niveaus of rollen te selecteren.'}
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-1 mx-4">
            {filteredRules.map((rule) => (
                <ChecklistItem key={rule.id} rule={rule} />
            ))}
        </div>
    );
};
