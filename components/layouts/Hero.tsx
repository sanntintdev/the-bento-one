'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { HeroContent } from '../hero/HeroContent';
import { ScrollIndicator } from '../hero/ScrollIndicator';
import { MobileHeroContent } from '../hero/MobileHeroContent';

export function Hero() {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0], { clamp: true });
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6], { clamp: true });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-[150vh] w-full bg-background"
        >
            <motion.div
                style={{ opacity, scale }}
                className="fixed left-0 top-0 flex h-screen w-full items-center 
                    px-4 pt-2
                    sm:px-8 
                    md:px-12 
                    lg:pl-[96px] lg:pr-12
                    xl:pl-[128px] xl:pr-16"
            >
                <div className="relative w-full max-w-[1600px] mx-auto">
                    {isMobile ? <MobileHeroContent /> : <HeroContent />}
                </div>
                <div className="mx-auto">
                    <ScrollIndicator progress={scrollYProgress} />
                </div>
            </motion.div>
        </section>
    );
}
