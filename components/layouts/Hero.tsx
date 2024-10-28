'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HeroContent } from '../hero/HeroContent';
import { ScrollIndicator } from '../hero/ScrollIndicator';
import { HeroImage } from '../hero/HeroImage';

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <section ref={containerRef} id="hero" className="relative min-h-[150vh] w-full bg-white">
            <motion.div
                style={{ opacity, scale }}
                className="fixed left-0 top-0 flex h-screen w-full items-center justify-between px-6 pt-16 lg:px-28"
            >
                <div className="grid h-full w-full grid-cols-1 gap-8 lg:grid-cols-2">
                    <HeroContent />
                    <HeroImage />
                </div>
                <ScrollIndicator progress={scrollYProgress} />
            </motion.div>
        </section>
    );
}
