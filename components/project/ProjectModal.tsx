import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectData } from './data';
import { NoImagePreview } from './NoImagePreview';

interface ProjectModalProps {
    project: ProjectData | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, isOpen, onOpenChange }: ProjectModalProps) {
    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <div className="relative  w-full overflow-hidden rounded-lg p-5">
                        <NoImagePreview message="No photo available yet" />
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="overview">
                            <AccordionTrigger>Overview</AccordionTrigger>
                            <AccordionContent>{project.details.overview}</AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="features">
                            <AccordionTrigger>Features</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc pl-4 space-y-1">
                                    {project.details.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="challenges">
                            <AccordionTrigger>Challenges & Solutions</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium mb-2">Challenges:</h4>
                                        <ul className="list-disc pl-4 space-y-1">
                                            {project.details.challenges.map((challenge, index) => (
                                                <li key={index}>{challenge}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Solutions:</h4>
                                        <ul className="list-disc pl-4 space-y-1">
                                            {project.details.solutions.map((solution, index) => (
                                                <li key={index}>{solution}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="architecture">
                            <AccordionTrigger>Architecture</AccordionTrigger>
                            <AccordionContent>{project.details.architecture}</AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="tech">
                            <AccordionTrigger>Technologies</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="flex flex-wrap gap-4 pt-2">
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
