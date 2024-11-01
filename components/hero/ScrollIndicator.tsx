import { DoubleArrowDownIcon } from '@radix-ui/react-icons';
import { motion, MotionValue, useTransform } from 'framer-motion';

type ScrollIndicatorProps = {
    progress: MotionValue<number>;
};

export function ScrollIndicator({ progress }: ScrollIndicatorProps) {
    const opacity = useTransform(progress, [0, 0.5], [1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="absolute bottom-8 left-1/2  -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                }}
            >
                <DoubleArrowDownIcon className="w-6 h-6 text-primary" />
            </motion.div>
        </motion.div>
    );
}
