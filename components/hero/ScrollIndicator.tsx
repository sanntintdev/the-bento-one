import { motion, MotionValue, useTransform } from 'framer-motion';

type ScrollIndicatorProps = {
    progress: MotionValue<number>;
};

export function ScrollIndicator({ progress }: ScrollIndicatorProps) {
    const opacity = useTransform(progress, [0, 0.5], [1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
            <span className="text-sm font-medium text-gray-500">Scroll to explore</span>
            <motion.div
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                className="h-16 w-8 rounded-full border-2 border-gray-500 p-2"
            >
                <div className="h-3 w-full rounded-full bg-gray-500" />
            </motion.div>
        </motion.div>
    );
}
