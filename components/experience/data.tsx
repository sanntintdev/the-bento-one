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
        role: 'Backend Developer',
        company: 'ONOW Enable Inc',
        type: 'Full-time (Remote)',
        duration: 'Jun 2024 - Present',
        location: 'USA',
        responsibilities: [
            `play a crucial role in the backend development of the company's core enterprise product. take responsibility for the api-design, development, and maintenance of the backend services and APIs.`,
        ],
        technologies: [
            'Node.js',
            'Express',
            'Nest.js',
            'MongoDB',
            'MSSQL',
            'PostgresSQL',
            'REST APIs',
            'Azure Functions - Eventhubgs',
        ],
    },
    {
        id: 'exp-2',
        role: 'Backend Developer',
        company: 'ONOW Myanmar',
        type: 'Full-time',
        duration: 'Aung 2022 - Jun 2024',
        location: 'Myanmar',
        responsibilities: [
            `play a crucial role in the backend development of the company's core enterprise product. take responsibility for the api-design, development, and maintenance of the backend services and APIs.`,
        ],
        technologies: [
            'Node.js',
            'Express',
            'Nest.js',
            'MongoDB',
            'MSSQL',
            'PostgresSQL',
            'REST APIs',
            'Azure Functions - Eventhubgs',
            'PHP',
            'Laravel',
        ],
    },
    {
        id: 'exp-3',
        role: 'Junior FullStack Developer',
        company: 'MMIT Innovation',
        type: 'Full-time',
        duration: 'Oct 2021 - Jul 2022',
        location: 'Myanmar',
        responsibilities: [
            `take responsibility for fullstack development of the company several projects. work closely with the team to design, develop, and maintain the web applications.`,
        ],
        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
            'Vue.js',
            'Deployment',
            'REST APIs',
            'DigitalOcean',
        ],
    },
    {
        id: 'exp-4',
        role: 'Junior API Developer',
        company: 'WebCom Technologies',
        type: 'Full-time',
        duration: 'Nov 2020 - Dec 2021',
        location: 'Myanmar',
        responsibilities: [
            `take responsibility for fullstack development of the company several projects. work closely with the team to design, develop, and maintain the web applications.`,
        ],
        technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
    },
];
