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
        const title = language === 'en' ? 'WCAG Compliance Report' : 'WCAG Nalevingsrapport';
        const site = websiteName ? `Website: ${websiteName}` : '';
        const date = new Date().toLocaleDateString();

        // Header
        doc.setFillColor(49, 46, 129); // Dark Indigo
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.text(title, 14, 20);
        doc.setFontSize(12);
        doc.text(site, 14, 30);
        doc.text(date, 180, 30, { align: 'right' });

        // Filter rules based on active levels and roles
        const filteredRules = wcagRules.filter(rule =>
            activeLevels.includes(rule.level) &&
            rule.roles.some(role => activeRoles.includes(role))
        );

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
            headStyles: { fillColor: [14, 116, 144] }, // Cyan-700
            alternateRowStyles: { fillColor: [240, 249, 255] },
            styles: { fontSize: 10 },
            columnStyles: {
                0: { cellWidth: 20 },
                2: { cellWidth: 20 },
                3: { cellWidth: 30, fontStyle: 'bold' }
            },
            didParseCell: (data) => {
                if (data.section === 'body' && data.column.index === 3) {
                    const isPass = data.cell.raw === 'Pass' || data.cell.raw === 'Voldaan';
                    data.cell.styles.textColor = isPass ? [22, 163, 74] : [220, 38, 38]; // Green or Red
                }
            }
        });

        doc.save(`${websiteName || 'wcag-checklist'}-report.pdf`);
        setShowExportMenu(false);
    };

    return (
        <header className="glass-panel rounded-3xl p-6 mb-8 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        WCAG Liquid Checklist
                    </h1>
                    <p className="text-white/80 mt-1">
                        {language === 'en' ? 'Accessible Web Design Guide' : 'Gids voor Toegankelijk Webdesign'}
                    </p>
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
                                <div className="absolute right-0 top-12 glass-panel rounded-xl p-2 flex flex-col gap-1 min-w-[160px] z-50">
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

            <div className="flex flex-col md:flex-row gap-6 justify-between">
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
