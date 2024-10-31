'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectData, projects } from '../project/data';
import { ProjectCard } from '../project/ProjectCard';
import { ProjectModal } from '../project/ProjectModal';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const PROJECTS_PER_PAGE = 6;

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [showAll, setShowAll] = useState(false);

    const displayedProjects = showAll ? projects : projects.slice(0, PROJECTS_PER_PAGE);

    const hasMoreProjects = projects.length > PROJECTS_PER_PAGE;

    return (
        <>
            <section
                id="projects"
                className="relative z-10 min-h-screen bg-background px-4 py-20 lg:px-24"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold lg:text-4xl">Featured Projects</h2>
                        <p className="max-w-2xl text-muted-foreground">
                            A collection of projects that showcase my skills and experience in
                            building digital products.
                        </p>
                    </div>

                    {/* <ProjectFilter
                        currentFilter={filter}
                        onFilterChange={(newFilter) => {
                            setFilter(newFilter);
                            setShowAll(false);
                        }}
                    /> */}

                    <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4">
                        {displayedProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                onSelect={setSelectedProject}
                            />
                        ))}
                    </div>

                    {/* More Work Section */}
                    {hasMoreProjects && !showAll && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative mt-16 text-center"
                        >
                            {/* Decorative Line */}
                            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => setShowAll(true)}
                                className="relative bg-background px-8 py-6 group"
                            >
                                <span className="flex items-center gap-2">
                                    More Work
                                    <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                                </span>
                            </Button>

                            {/* Project Count */}
                            <p className="mt-4 text-sm text-muted-foreground">
                                Showing {PROJECTS_PER_PAGE} of {projects.length} projects
                            </p>
                        </motion.div>
                    )}

                    {/* Show Less Option */}
                    {showAll && hasMoreProjects && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center mt-8"
                        >
                            <Button
                                variant="ghost"
                                onClick={() => setShowAll(false)}
                                className="hover:text-primary"
                            >
                                Show Less
                            </Button>
                        </motion.div>
                    )}
                </motion.div>
            </section>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onOpenChange={(open) => !open && setSelectedProject(null)}
            />
        </>
    );
}
