'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { TimelineProgress } from '../experience/TimelineProgress';
import { experiences } from '../experience/data';
import { TimelineCard } from '../experience/TimelineCard';

export function Experiences() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end'],
    });

    return (
        <section
            id="experience"
            className="relative min-h-screen bg-background px-4 py-20 lg:px-24"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold lg:text-4xl">Work Experience</h2>
                    <p className="max-w-2xl text-muted-foreground">
                        My professional journey and the amazing companies I&apos;ve worked with.
                    </p>
                </div>

                <div ref={containerRef} className="relative mt-16">
                    {/* Timeline Progress Bar */}
                    <TimelineProgress progress={scrollYProgress} />

                    {/* Timeline Items */}
                    <div className="ml-4 space-y-16 md:ml-12">
                        {experiences.map((experience, index) => (
                            <TimelineCard
                                key={experience.id}
                                experience={experience}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
