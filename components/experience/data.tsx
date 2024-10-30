export interface ExperienceData {
    id: string;
    role: string;
    company: string;
    type: string;
    duration: string;
    location: string;
    responsibilities: string[];
    technologies: string[];
}

export const experiences: ExperienceData[] = [
    {
        id: 'exp-1',
        role: 'Senior Frontend Developer',
        company: 'Tech Corp',
        type: 'Full-time',
        duration: 'Jan 2022 - Present',
        location: 'San Francisco, CA',
        responsibilities: [
            `Led development of company's flagship web application`,
            'Mentored junior developers and conducted code reviews',
            'Implemented CI/CD pipelines and testing strategies',
            'Improved application performance by 40%',
        ],
        technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    },
    {
        id: 'exp-2',
        role: 'Frontend Developer',
        company: 'StartUp Inc',
        type: 'Full-time',
        duration: 'Jun 2020 - Dec 2021',
        location: 'New York, NY',
        responsibilities: [
            'Developed responsive web applications',
            'Collaborated with designers to implement UI/UX improvements',
            'Integrated third-party APIs and services',
            'Participated in agile development processes',
        ],
        technologies: ['React', 'JavaScript', 'Redux', 'SASS', 'REST APIs'],
    },
    // Add more experiences...
];
