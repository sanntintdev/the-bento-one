import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
// import Image from 'next/image';
import { ProjectData } from './data';

interface ProjectCardProps {
    project: ProjectData;
    index: number;
    onSelect: (project: ProjectData) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
    // Define the card size based on index
    const getCardSize = (index: number) => {
        // First project (featured)
        if (index === 0) {
            return 'md:col-span-2 md:row-span-2';
        }
        // Every fourth project after the first
        if ((index - 1) % 4 === 0) {
            return 'md:col-span-2 md:row-span-1';
        }
        // Every fifth project
        if (index % 5 === 0) {
            return 'md:col-span-1 md:row-span-2';
        }
        // Default size
        return 'md:col-span-1 md:row-span-1';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${getCardSize(index)} group`}
        >
            <Card
                className="cursor-pointer h-full overflow-hidden transition-all duration-300 hover:shadow-lg"
                onClick={() => onSelect(project)}
            >
                <div className="relative flex h-full flex-col">
                    {/* Image Container */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:1200/0*ywP7NFzW-8ZWilwJ.png"
                            alt={project.title}
                            // fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/5 opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-4 text-white">
                        <div className="space-y-2">
                            {/* Project Type Badge */}
                            <Badge variant="outline" className="w-fit border-white/30 text-white">
                                {project.category}
                            </Badge>

                            {/* Title */}
                            <h3 className="text-lg font-semibold md:text-xl">{project.title}</h3>

                            {/* Description - Only show for larger cards */}
                            {(index === 0 || (index - 1) % 4 === 0) && (
                                <p className="line-clamp-2 text-sm text-white/80">
                                    {project.description}
                                </p>
                            )}

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-1">
                                {project.technologies
                                    .slice(0, index === 0 ? undefined : 3)
                                    .map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-white/10 text-white hover:bg-white/20"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                {project.technologies.length > 3 && index !== 0 && (
                                    <Badge
                                        variant="secondary"
                                        className="bg-white/10 text-white hover:bg-white/20"
                                    >
                                        +{project.technologies.length - 3}
                                    </Badge>
                                )}
                            </div>

                            {/* Links */}
                            <div className="flex gap-2 pt-2">
                                {project.github && (
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 border-white/30 bg-white/10 hover:bg-white/20"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(project.github, '_blank');
                                        }}
                                    >
                                        <Github className="h-4 w-4" />
                                    </Button>
                                )}
                                {project.live && (
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 border-white/30 bg-white/10 hover:bg-white/20"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(project.live, '_blank');
                                        }}
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
