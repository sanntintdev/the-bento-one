import { motion } from 'framer-motion';
import { info } from './data';
import { FileIcon, Mail } from 'lucide-react';

export function MobileHeroContent() {
    const fadeUp = {
        hidden: { y: 10, opacity: 0 },
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
                    <h1 className="text-4xl font-bold tracking-tight">{info.greeting}</h1>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="rounded-3xl bg-muted/50 p-6"
                >
                    <h2 className="text-4xl font-bold tracking-tight">{info.position}</h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="rounded-3xl bg-muted/50 p-6"
                >
                    <p className="text-sm text-muted-foreground">{info.aboutMeOne}</p>
                </motion.div>

                {/* Highlights Section - Horizontal Scroll */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="rounded-3xl bg-muted/50 p-4"
                >
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {info.highlights.map(({ label, value }, index) => (
                            <div key={index} className="flex-none text-center">
                                <div className="text-sm text-muted-foreground">{label}</div>
                                <div className="text-xl font-bold">{value}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Compact Contact Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <motion.button
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        onClick={() => window.open('/resume.pdf', '_blank')}
                        className="group rounded-2xl bg-muted/50 p-3"
                    >
                        <div className="flex items-center gap-2">
                            <div className="rounded-full bg-black/5 p-1.5">
                                <FileIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground">Download</div>
                                <div className="text-sm font-medium">Resume</div>
                            </div>
                        </div>
                    </motion.button>

                    <motion.a
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        href={`mailto:${info.mail}`}
                        className="group rounded-2xl bg-muted/50 p-3"
                    >
                        <div className="flex items-center gap-2">
                            <div className="rounded-full bg-black/5 p-1.5">
                                <Mail className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground">Write</div>
                                <div className="text-sm font-medium">Email</div>
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
