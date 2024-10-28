import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';
import { ExperienceData } from './data';

interface TimelineCardProps {
    experience: ExperienceData;
    index: number;
}

export function TimelineCard({ experience, index }: TimelineCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-4 md:pl-14"
        >
            {/* Timeline Node */}
            <Card className="overflow-hidden">
                <CardHeader className="space-y-4 bg-muted/50 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold">{experience.role}</h3>
                            <div className="text-lg font-medium text-primary">
                                {experience.company}
                            </div>
                        </div>
                        <Badge variant="default" className="h-fit">
                            {experience.type}
                        </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <CalendarDays className="h-4 w-4" />
                            <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4 p-6">
                    {/* Responsibilities */}
                    <div className="space-y-2">
                        <h4 className="font-semibold">Key Responsibilities:</h4>
                        <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
                            {experience.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                        <h4 className="font-semibold">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
