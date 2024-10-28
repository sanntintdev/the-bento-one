'use client';
import { motion } from 'framer-motion';
import { skills } from '../skill/data';
import { SkillCard } from '../skill/SkillCard';

export function Skills() {
    return (
        <section id="skills" className="relative min-h-screen bg-muted/50 px-4 py-20 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold lg:text-4xl">Skills & Expertise</h2>
                    <p className="max-w-2xl text-muted-foreground">
                        Core technologies and tools I specialize in.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.id} skill={skill} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
