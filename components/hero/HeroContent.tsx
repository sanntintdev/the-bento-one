import { motion } from 'framer-motion';

export function HeroContent() {

    const slideInLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.6 } },
    };

    const slideInRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.6 } },
    };

    // Desktop Layout with Bento Grid
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
                        I&apos;m Sann Tint Aung
                    </h1>
                </motion.div>

                {/* First Description - 1 column */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInRight}
                    className="col-span-1 flex items-center rounded-3xl bg-muted/50 p-6"
                >
                    <p className="text-base text-muted-foreground">
                        I&apos;ve been in the development industry since +5 years. I craft digital
                        products that are useful & enjoyable for the final users.
                    </p>
                </motion.div>

                {/* Second Description - 1 column */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInLeft}
                    className="col-span-1 flex items-center rounded-3xl bg-muted/50 p-6"
                >
                    <p className="text-base text-muted-foreground">
                        I&apos;ve worked with some of the most ambitious brands such as Google,
                        Apple, Space X, Amazon, and many more
                    </p>
                </motion.div>

                {/* Role Title - Spans 3 columns */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInRight}
                    className="col-span-3 rounded-3xl bg-muted/50 p-8"
                >
                    <h2 className="text-6xl font-bold tracking-tight lg:text-8xl">
                        Backend Developer
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
                    {/* Tech Stack */}
                    <div className="col-span-2 rounded-3xl bg-muted/50 p-6">
                        <h3 className="mb-4 text-lg font-semibold">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {/* Add your tech stack icons/labels here */}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="col-span-2 rounded-3xl bg-muted/50 p-6">
                        <h3 className="mb-4 text-lg font-semibold">Experience</h3>
                        <div className="flex justify-around">
                            <div className="text-center">
                                <div className="text-2xl font-bold">5+</div>
                                <div className="text-sm text-muted-foreground">Years</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">50+</div>
                                <div className="text-sm text-muted-foreground">Projects</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
