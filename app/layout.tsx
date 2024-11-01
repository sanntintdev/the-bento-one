import type { Metadata } from 'next';

import './globals.css';
import { afacad } from './fonts/fonts';
import { StickyNav } from '@/components/layouts/StickyNav';

export const metadata: Metadata = {
    title: 'sanntintaung | backend engineer',
    description: 'Building robust systems with clean architectures',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${afacad.className} antialiased`}>
                <div className="relative min-h-screen bg-gray-50">
                    <StickyNav />
                    <main className="ml-0 lg:ml-24">{children}</main>
                </div>
            </body>
        </html>
    );
}
