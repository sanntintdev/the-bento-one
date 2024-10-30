import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { ProjectData } from './data';

interface ProjectCardProps {
    project: ProjectData;
    index: number;
    onSelect: (project: ProjectData) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group md:col-span-4 lg:col-span-4" // Adjusted to 3 cards per row
        >
            <Card
                className="cursor-pointer h-full overflow-hidden transition-all duration-500 hover:shadow-xl relative bg-gradient-to-br from-background via-background/80 to-background border-border/50"
                onClick={() => onSelect(project)}
            >
                <div className="relative flex h-full flex-col p-6">
                    {/* Header with Category and Arrow */}
                    <div className="flex items-start justify-between mb-3">
                        <Badge
                            variant="outline"
                            className="w-fit bg-primary/5 text-primary border-primary/20"
                        >
                            {project.category}
                        </Badge>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-2.5 mb-6">
                        <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground/80 line-clamp-2">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-secondary-foreground/70"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto pt-4 border-t border-border/40">
                        <div className="flex flex-wrap gap-2 items-center">
                            {project.github && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-3 text-muted-foreground hover:text-primary hover:bg-primary/10"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(project.github, '_blank');
                                    }}
                                >
                                    <Github className="h-4 w-4 mr-1.5" />
                                    <span className="text-sm">Source</span>
                                </Button>
                            )}
                            {project.live && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-3 text-muted-foreground hover:text-primary hover:bg-primary/10"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(project.live, '_blank');
                                    }}
                                >
                                    <ExternalLink className="h-4 w-4 mr-1.5" />
                                    <span className="text-sm">Demo</span>
                                </Button>
                            )}
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 px-3 ml-auto text-muted-foreground hover:text-primary hover:bg-primary/10"
                            >
                                View Details
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
