'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/lib/types';
import { NavigationItem } from '../ui/navigation-items';
import { SocialLink } from '../ui/social-links';
import { usePathname } from 'next/navigation';

export function StickyNav() {
    const currentPath = usePathname();
    console.log(currentPath);
    const [activeSection, setActiveSection] = useState<string>('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = NAVIGATION_ITEMS.map((item) => ({
                id: item.id,
                element: document.getElementById(item.id),
            }));

            const currentSection = sectionElements.find((section) => {
                if (!section.element) return false;
                const rect = section.element.getBoundingClientRect();
                return rect.top <= 300 && rect.bottom >= 300;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="fixed top-4 right-4 z-50 lg:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="rounded-full bg-white p-2 shadow-lg"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Navigation */}
            <nav
                className={`
                    fixed left-0 top-0 z-40 h-full w-16 lg:w-24
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
                    transform bg-white shadow-lg transition-transform duration-300 ease-in-out
                    lg:translate-x-0
                `}
            >
                <div className="flex h-full flex-col items-center justify-between py-8">
                    <div className="space-y-8">
                        {NAVIGATION_ITEMS.map((item) => (
                            <NavigationItem
                                key={item.id}
                                {...item}
                                isActive={activeSection === item.id}
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                        ))}
                    </div>

                    <div className="space-y-4">
                        {SOCIAL_LINKS.map(
                            (link) => link.enable && <SocialLink key={link.label} {...link} />
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
