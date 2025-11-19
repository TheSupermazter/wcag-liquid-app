import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WCAGLevel, WCAGRole } from '@/data/wcagRules';

interface AppState {
    language: 'en' | 'nl';
    activeLevels: WCAGLevel[];
    activeRoles: WCAGRole[];
    completedRules: string[]; // Array of rule IDs
    expandedRule: string | null;
    websiteName: string;

    setLanguage: (lang: 'en' | 'nl') => void;
    toggleLevel: (level: WCAGLevel) => void;
    toggleRole: (role: WCAGRole) => void;
    toggleRuleCompletion: (ruleId: string) => void;
    setExpandedRule: (ruleId: string | null) => void;
    setWebsiteName: (name: string) => void;
    resetProgress: () => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            language: 'en',
            activeLevels: ['A', 'AA'],
            activeRoles: ['Design', 'Develop', 'Content'],
            completedRules: [],
            expandedRule: null,
            websiteName: '',

            setLanguage: (lang) => set({ language: lang }),

            toggleLevel: (level) => set((state) => {
                const levels = state.activeLevels.includes(level)
                    ? state.activeLevels.filter((l) => l !== level)
                    : [...state.activeLevels, level];
                return { activeLevels: levels };
            }),

            toggleRole: (role) => set((state) => {
                const roles = state.activeRoles.includes(role)
                    ? state.activeRoles.filter((r) => r !== role)
                    : [...state.activeRoles, role];
                return { activeRoles: roles };
            }),

            toggleRuleCompletion: (ruleId) => set((state) => {
                const completed = state.completedRules.includes(ruleId)
                    ? state.completedRules.filter((id) => id !== ruleId)
                    : [...state.completedRules, ruleId];
                return { completedRules: completed };
            }),

            setExpandedRule: (ruleId) => set({ expandedRule: ruleId }),

            setWebsiteName: (name) => set({ websiteName: name }),

            resetProgress: () => set({ completedRules: [] }),
        }),
        {
            name: 'wcag-app-storage',
        }
    )
);
