import { motion } from 'framer-motion';

export function MobileHeroContent() {
    const fadeUp = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-4"
        >
            <div className="grid gap-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="rounded-3xl bg-muted/50 p-6"
                >
                    <h1 className="text-4xl font-bold tracking-tight">I&apos;m Sann Tint Aung</h1>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="rounded-3xl bg-muted/50 p-6"
                >
                    <p className="text-sm text-muted-foreground">
                        I&apos;ve been in the development industry since +5 years. I craft digital
                        products that are useful & enjoyable for the final users.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="rounded-3xl bg-muted/50 p-6"
                >
                    <h2 className="text-4xl font-bold tracking-tight">Backend Developer</h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="rounded-3xl bg-muted/50 p-6"
                >
                    <p className="text-sm text-muted-foreground">
                        I&apos;ve worked with some of the most ambitious brands such as Google,
                        Apple, Space X, Amazon, and many more
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}
