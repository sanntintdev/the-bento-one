import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function HeroImage() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    return (
        <motion.div ref={ref} style={{ y }} className="relative hidden h-full lg:flex">
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl bg-gray-100">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50"
                >
                    {/* Add your hero image or 3D element here */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-64 w-64 rounded-full bg-blue-200/50" />
                        <div className="absolute h-32 w-32 rounded-full bg-blue-300/50" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
