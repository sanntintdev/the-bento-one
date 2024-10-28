import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

interface AutoScrollCarouselProps {
    children: React.ReactNode;
    className?: string;
    speed?: number;
}

export function AutoScrollCarousel({
    children,
    className = '',
    speed = 0.5,
}: AutoScrollCarouselProps) {
    const baseX = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);

    useAnimationFrame(() => {
        if (!scrollerRef.current || !containerRef.current) return;

        baseX.current -= speed;
        if (baseX.current <= -scrollerRef.current.offsetWidth / 2) {
            baseX.current = 0;
        }
        scrollerRef.current.style.transform = `translateX(${baseX.current}px)`;
    });

    return (
        <div className={`relative overflow-hidden ${className}`} ref={containerRef}>
            <div ref={scrollerRef} className="flex w-max">
                {children}
                {children} {/* Duplicate for seamless loop */}
            </div>
        </div>
    );
}
