import { motion } from 'framer-motion';
import { info } from './data';
import { FileIcon, Mail } from 'lucide-react';
import { FeatureTooltip } from '../ui/feature-tooltip';

export function HeroContent() {
    const slideInLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.6 } },
    };

    const slideInRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.6 } },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-12 md:py-24"
        >
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-4 gap-6">
                {/* Main Title - Spans 3 columns */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInLeft}
                    className="col-span-3 rounded-3xl bg-muted/50 p-8"
                >
                    <h1 className="text-6xl font-bold tracking-tight lg:text-8xl">
                        <span className="text-8xl">_</span>
                        {info.greeting}
                    </h1>
                </motion.div>

                {/* First Description - 1 column */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInRight}
                    className="col-span-1 flex items-center rounded-3xl bg-muted/50 p-6"
                >
                    <p className="text-xs lg:text-base text-muted-foreground">{info.aboutMeOne}</p>
                </motion.div>

                {/* Second Description - 1 column */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInLeft}
                    className="col-span-1 flex items-center rounded-3xl bg-muted/50 p-6"
                >
                    <p className="text-xs lg:text-base text-muted-foreground">{info.aboutMeTwo}</p>
                </motion.div>

                {/* Role Title - Spans 3 columns */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInRight}
                    className="col-span-3 rounded-3xl bg-muted/50 p-8"
                >
                    <h2 className="text-6xl font-bold tracking-tight lg:text-8xl">
                        {info.position}
                        <span className="text-8xl">_</span>
                    </h2>
                </motion.div>

                {/* Optional: Additional Bento Cards */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="col-span-4 mt-6 grid grid-cols-4 gap-6"
                >
                    {/* Highlights Box */}
                    <div className="col-span-2 rounded-3xl bg-muted/50 p-6">
                        <h3 className="mb-4 text-lg font-semibold">Highlights</h3>
                        <div className="flex justify-around">
                            {info.highlights.map(({ label, value }, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold">{value}</div>
                                    <div className="text-sm text-muted-foreground">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <FeatureTooltip>
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="col-span-1 group relative overflow-hidden rounded-3xl bg-muted/50 p-4 transition-all hover:bg-red-50 dark:hover:bg-red-900/30"
                        >
                            <div className="flex flex-col items-start gap-3">
                                <div className="rounded-full bg-black/5 p-2">
                                    <FileIcon className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-lg font-semibold text-gray-900">Resume</p>
                                    <h3 className="text-sm font-medium text-gray-500 group-hover:text-gray-600">
                                        Download
                                    </h3>
                                </div>
                            </div>
                        </button>
                    </FeatureTooltip>

                    {/* Email Box */}
                    <a
                        href={`mailto:${info.mail}`}
                        className="col-span-1 group relative overflow-hidden rounded-3xl bg-muted/50 p-4 transition-all hover:bg-muted/70"
                    >
                        <div className="flex flex-col items-start gap-3">
                            <div className="rounded-full bg-black/5 p-2">
                                <Mail className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-lg font-semibold text-gray-900">Email</p>
                                <h3 className="text-sm font-medium text-gray-500 group-hover:text-gray-600">
                                    Write me
                                </h3>
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
}
