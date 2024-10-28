import { motion } from 'framer-motion';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

export function HeroContent() {
    return (
        <div className="flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-2"
                >
                    <h2 className="text-lg font-semibold text-blue-600">Hello, I&apos;m</h2>
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                        Sann Tint Aung
                    </h1>
                    <p className="text-xl font-medium text-gray-600 md:text-2xl">
                        Full Stack Developer
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-md text-gray-600"
                >
                    I craft responsive websites where technology meets creativity. With a strong
                    foundation in design and engineering, I create engaging digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex gap-4"
                >
                    <Link href="#projects" className={buttonVariants()}>
                        View Projects
                    </Link>
                    <Link href="#contact" className={buttonVariants()}>
                        Contact Me
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
