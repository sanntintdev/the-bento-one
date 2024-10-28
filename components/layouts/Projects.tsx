'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectData, projects } from '../project/data';
import { ProjectFilter } from '../project/ProjectFilter';
import { ProjectCard } from '../project/ProjectCard';
import { ProjectModal } from '../project/ProjectModal';

type FilterType = 'all' | 'web' | 'mobile' | 'design';

export function Projects() {
    const [filter, setFilter] = useState<FilterType>('all');
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    const filteredProjects = projects.filter((project) =>
        filter === 'all' ? true : project.category === filter
    );

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

                    <ProjectFilter currentFilter={filter} onFilterChange={setFilter} />

                    <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                onSelect={setSelectedProject}
                            />
                        ))}
                    </div>
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
