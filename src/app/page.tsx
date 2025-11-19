'use client';

import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { ProgressBar } from '@/components/ProgressBar';
import { Checklist } from '@/components/Checklist';
import { ResourcesPanel } from '@/components/ResourcesPanel';

export default function Home() {
    return (
        <Layout>
            <Header />
            <ProgressBar />
            <Checklist />
            <div className="mt-12">
                <ResourcesPanel />
            </div>

            <footer className="mt-12 text-center text-white/40 text-sm pb-8">
                <p>Built with Next.js & Liquid Glass UI</p>
            </footer>
        </Layout>
    );
}
