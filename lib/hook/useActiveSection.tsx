import { useState, useEffect } from 'react';

export function useActiveSection(sections: readonly { id: string; label: string }[]) {
    const [activeSection, setActiveSection] = useState<string>(sections[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map((section) => ({
                id: section.id,
                element: document.getElementById(section.id),
            }));

            const currentSection = sectionElements.find((section) => {
                if (!section.element) return false;
                const rect = section.element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return activeSection;
}
