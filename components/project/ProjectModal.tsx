import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectData } from './data';
import Image from 'next/image';

interface ProjectModalProps {
    project: ProjectData | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, isOpen, onOpenChange }: ProjectModalProps) {
    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>

                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>

                <div className="space-y-4">
                    {/* Tech stack */}
                    <div className="space-y-2">
                        <h3 className="font-semibold">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                        {project.github && (
                            <Button
                                variant="outline"
                                onClick={() => window.open(project.github, '_blank')}
                            >
                                <Github className="mr-2 h-4 w-4" />
                                View Source
                            </Button>
                        )}
                        {project.live && (
                            <Button onClick={() => window.open(project.live, '_blank')}>
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Visit Site
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
