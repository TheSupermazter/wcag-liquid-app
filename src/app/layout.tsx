import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MADE Marketing WCAG Checklist',
    description: 'A comprehensive checklist for WCAG 2.1 compliance (A, AA, AAA)',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    );
}
