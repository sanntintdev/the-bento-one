'use client';
import { motion } from 'framer-motion';
import { SocialLinks } from '../contact/SocialLinks';
import { AvailabilityCard } from '../contact/AvailabilityCard';

export function Contact() {
    return (
        <section id="contact" className="relative min-h-1/2 bg-background px-4 py-20 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold lg:text-4xl">Let&apos;s Connect</h2>
                    <p className="max-w-2xl text-muted-foreground">
                        Open for collaboration and new opportunities
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <SocialLinks />
                    <AvailabilityCard />
                </div>
            </motion.div>
        </section>
    );
}
