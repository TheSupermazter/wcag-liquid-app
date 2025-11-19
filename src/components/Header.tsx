import React, { useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { Languages, Download, FileJson, FileText, ChevronDown } from 'lucide-react';
import { WCAGLevel, WCAGRole, wcagRules } from '@/data/wcagRules';
import clsx from 'clsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const Header: React.FC = () => {
    const {
        language, setLanguage,
        activeLevels, toggleLevel,
        activeRoles, toggleRole,
        websiteName, setWebsiteName,
        completedRules
    } = useAppStore();

    const [showExportMenu, setShowExportMenu] = useState(false);

    const levels: WCAGLevel[] = ['A', 'AA', 'AAA'];
    const roles: WCAGRole[] = ['Design', 'Develop', 'Content'];

    const handleExportJSON = () => {
        const state = useAppStore.getState();
        const data = {
            websiteName: state.websiteName,
            timestamp: new Date().toISOString(),
            completedRules: state.completedRules,
            activeLevels: state.activeLevels,
            activeRoles: state.activeRoles,
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${websiteName || 'wcag-checklist'}-export.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setShowExportMenu(false);
    };

    const handleExportPDF = () => {
        const doc = new jsPDF();
        const title = language === 'en' ? 'MADE Marketing WCAG Checklist' : 'MADE Marketing WCAG Checklist';
        const site = websiteName ? `Website: ${websiteName}` : '';
        const date = new Date().toLocaleDateString();

        // Header
        doc.setFillColor(39, 60, 80); // #273C50
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.text(title, 14, 20);
        doc.setFontSize(12);
        doc.text(site, 14, 30);
        doc.text(date, 180, 30, { align: 'right' });

        // Filter rules based on active levels and roles
        const levelWeight = { 'A': 1, 'AA': 2, 'AAA': 3 };

        const filteredRules = wcagRules.filter(rule =>
            activeLevels.includes(rule.level) &&
            rule.roles.some(role => activeRoles.includes(role))
        ).sort((a, b) => {
            const weightDiff = levelWeight[a.level] - levelWeight[b.level];
            if (weightDiff !== 0) return weightDiff;
            return a.refId.localeCompare(b.refId, undefined, { numeric: true });
        });

        // Stats
        const totalRules = filteredRules.length;
        const completedCount = filteredRules.filter(rule => completedRules.includes(rule.id)).length;
        const percentage = totalRules > 0 ? Math.round((completedCount / totalRules) * 100) : 0;

        doc.setTextColor(0, 0, 0);
        doc.setFontSize(14);
        doc.text(`${language === 'en' ? 'Progress' : 'Voortgang'}: ${percentage}% (${completedCount}/${totalRules})`, 14, 50);

        // Table
        const tableData = filteredRules.map(rule => {
            const isCompleted = completedRules.includes(rule.id);
            const status = isCompleted ? (language === 'en' ? 'Pass' : 'Voldaan') : (language === 'en' ? 'Pending' : 'Te doen');
            return [
                rule.refId,
                language === 'en' ? rule.title.en : rule.title.nl,
                rule.level,
                status
            ];
        });

        autoTable(doc, {
            startY: 60,
            head: [[
                'ID',
                language === 'en' ? 'Rule' : 'Regel',
                language === 'en' ? 'Level' : 'Niveau',
                'Status'
            ]],
            body: tableData,
            headStyles: { fillColor: [43, 68, 87] }, // #2B4457
            alternateRowStyles: { fillColor: [240, 249, 255] },
            styles: { fontSize: 10 },
            columnStyles: {
                0: { cellWidth: 20 },
                1: { cellWidth: 'auto' },
                2: { cellWidth: 20 },
                3: { cellWidth: 30 }
            },
            didParseCell: (data) => {
                if (data.section === 'body' && data.column.index === 3) {
                    const isPass = data.cell.raw === 'Pass' || data.cell.raw === 'Voldaan';
                    data.cell.styles.textColor = isPass ? [22, 163, 74] : [220, 38, 38]; // Green or Red
                }
            }
        });

        doc.save(`${websiteName || 'made-marketing-wcag'}-checklist.pdf`);
        setShowExportMenu(false);
    };

    return (
        <header className="sticky top-2 md:top-4 z-50 mb-4 md:mb-8 px-3 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl mx-2 md:mx-4 border border-white/20 shadow-lg backdrop-blur-xl bg-[#273C50]/95">
            <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
                <div className="flex flex-col items-start gap-2 md:gap-4">
                    <img src="/logo.png" alt="MADE Marketing Logo" className="h-10 md:h-20 w-auto object-contain" />
                    <div>
                        <h1 className="text-lg md:text-2xl font-bold text-white">
                            MADE Marketing WCAG Checklist
                        </h1>
                        <p className="text-white/80 text-xs md:text-sm">
                            {language === 'en' ? 'Accessible Web Design Guide' : 'Gids voor Toegankelijk Webdesign'}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                    <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
                            className="glass-button rounded-full p-2 flex items-center gap-2 px-4 text-sm h-10"
                        >
                            <Languages size={18} />
                            {language === 'en' ? 'English' : 'Nederlands'}
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setShowExportMenu(!showExportMenu)}
                                className="glass-button rounded-full p-2 flex items-center gap-2 px-4 text-sm h-10"
                            >
                                <Download size={18} />
                                <span className="hidden sm:inline">{language === 'en' ? 'Export' : 'Exporteer'}</span>
                                <ChevronDown size={14} />
                            </button>

                            {showExportMenu && (
                                <div className="absolute right-0 top-12 rounded-xl p-2 flex flex-col gap-1 min-w-[160px] z-50 border border-white/20 shadow-lg backdrop-blur-xl bg-[#273C50]/95">
                                    <button
                                        onClick={handleExportJSON}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-left transition-colors"
                                    >
                                        <FileJson size={16} />
                                        JSON
                                    </button>
                                    <button
                                        onClick={handleExportPDF}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-left transition-colors"
                                    >
                                        <FileText size={16} />
                                        PDF
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <input
                        type="text"
                        placeholder={language === 'en' ? 'Website Name (e.g. my-site.com)' : 'Website Naam (bv. mijn-site.nl)'}
                        value={websiteName}
                        onChange={(e) => setWebsiteName(e.target.value)}
                        className="glass-button w-full md:w-64 px-4 py-2 rounded-xl text-sm placeholder:text-white/40 focus:outline-none focus:bg-white/10 transition-all"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-between border-t border-white/10 pt-4">
                {/* Levels */}
                <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                        {language === 'en' ? 'Levels' : 'Niveaus'}
                    </span>
                    <div className="flex gap-2">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => toggleLevel(level)}
                                className={clsx(
                                    'glass-button rounded-xl px-4 py-2 text-sm font-medium transition-all',
                                    activeLevels.includes(level) ? 'active bg-white/40' : 'opacity-60 hover:opacity-100'
                                )}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Roles */}
                <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                        {language === 'en' ? 'Roles' : 'Rollen'}
                    </span>
                    <div className="flex gap-2 flex-wrap">
                        {roles.map((role) => (
                            <button
                                key={role}
                                onClick={() => toggleRole(role)}
                                className={clsx(
                                    'glass-button rounded-xl px-4 py-2 text-sm font-medium transition-all',
                                    activeRoles.includes(role) ? 'active bg-white/40' : 'opacity-60 hover:opacity-100'
                                )}
                            >
                                {role}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};
