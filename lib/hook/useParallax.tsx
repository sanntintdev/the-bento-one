import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

type UseParallaxProps = {
    ref: RefObject<HTMLElement>;
    speed?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset?: [any, any];
};

export function useParallax({
    ref,
    speed = 1,
    offset = ['start start', 'end start'],
}: UseParallaxProps) {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset,
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

    return { y, scrollProgress: scrollYProgress };
}
