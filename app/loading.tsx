'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-background">
            <div className="space-y-6 text-center">
                <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Loading Animation */}
                    <motion.div className="h-1 w-40 overflow-hidden rounded-full bg-muted">
                        <motion.div
                            className="h-full w-full bg-foreground"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm text-muted-foreground"
                >
                    Loading amazing things...
                </motion.p>
            </div>
        </div>
    );
}
