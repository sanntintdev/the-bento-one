export interface ProjectData {
    id: string;
    title: string;
    description: string;
    image: string;
    category: 'web' | 'mobile' | 'design';
    technologies: string[];
    github?: string;
    live?: string;
}

export const projects: ProjectData[] = [
    {
        id: 'project-1',
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with Next.js and Stripe integration.',
        image: '/api/placeholder/800/600',
        category: 'web',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        id: 'project-2',
        title: 'Task Management App',
        description: 'A mobile-first task management application with real-time updates.',
        image: '/api/placeholder/400/300',
        category: 'mobile',
        technologies: ['React Native', 'Firebase', 'Redux'],
        github: 'https://github.com',
    },
    {
        id: 'project-3',
        title: 'Design System',
        description: 'A comprehensive design system for enterprise applications.',
        image: '/api/placeholder/400/300',
        category: 'design',
        technologies: ['Figma', 'Storybook', 'React'],
        live: 'https://example.com',
    },
    {
        id: 'project-4',
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with Next.js and Stripe integration.',
        image: '/api/placeholder/800/600',
        category: 'web',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        id: 'project-5',
        title: 'Task Management App',
        description: 'A mobile-first task management application with real-time updates.',
        image: '/api/placeholder/400/300',
        category: 'mobile',
        technologies: ['React Native', 'Firebase', 'Redux'],
        github: 'https://github.com',
    },
    {
        id: 'project-6',
        title: 'Design System',
        description: 'A comprehensive design system for enterprise applications.',
        image: '/api/placeholder/400/300',
        category: 'design',
        technologies: ['Figma', 'Storybook', 'React'],
        live: 'https://example.com',
    },
    {
        id: 'project-7',
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with Next.js and Stripe integration.',
        image: '/api/placeholder/800/600',
        category: 'web',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        id: 'project-8',
        title: 'Task Management App',
        description: 'A mobile-first task management application with real-time updates.',
        image: '/api/placeholder/400/300',
        category: 'mobile',
        technologies: ['React Native', 'Firebase', 'Redux'],
        github: 'https://github.com',
    },
    {
        id: 'project-9',
        title: 'Design System',
        description: 'A comprehensive design system for enterprise applications.',
        image: '/api/placeholder/400/300',
        category: 'design',
        technologies: ['Figma', 'Storybook', 'React'],
        live: 'https://example.com',
    },
];
