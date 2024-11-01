export interface ProjectData {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    github?: string;
    live?: string;
    details: {
        overview: string;
        features: string[];
        challenges: string[];
        solutions: string[];
        architecture: string;
    };
}

export const projects = [
    {
        id: 'portfolio',
        title: 'Personal Portfolio',
        description:
            'Modern portfolio website featuring bento grid layout, smooth animations, and responsive design.',
        image: '/images/projects/Editor_Freepik.pngditor_Freepik.png',
        category: 'frontend',
        technologies: ['React.js', 'Next.js', 'TailwindCSS', 'Framer Motion'],
        github: 'https://github.com/sanntintdev/the-bento-one',
        // live: 'https://www.abc.com/',
        details: {
            overview:
                'personal portfolio website, built using Next.js 14 and Framer Motion for smooth animations.',
            features: ['Responsive grid layout', 'Smooth page transitions and scroll animations'],
            challenges: [
                'Implementing complex animation sequences',
                'Creating responsive bento grid system',
            ],
            solutions: [
                'Used Framer Motion for animations',
                'Implemented view-based animation triggering',
                'Created custom responsive grid system',
            ],
            architecture:
                'Built with Next.js 14 App Router, utilizing server components for improved performance. Animation logic separated into custom hooks for reusability.',
        },
    },
    {
        id: 'aqbox',
        title: 'AQBox - Anonymous Q&A Platform [coming soon]',
        description:
            'Real-time Q&A platform enabling anonymous room creation and participation with instant updates.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'fullstack',
        technologies: ['React.js', 'Next.js', 'TailwindCSS', 'Supabase', 'Real-time API'],
        // github: 'https://github.com',
        // live: 'https://www.abc.com/',
        details: {
            overview:
                'Anonymous Q&A platform enabling real-time interaction through virtual rooms.',
            features: [
                'Real-time room creation and joining',
                'Anonymous question submission',
                'Live updates using Supabase subscriptions',
                'Room moderation capabilities',
                'Mobile-responsive design',
            ],
            challenges: [
                'Managing real-time state updates',
                'Handling anonymous user sessions',
                'Implementing room security',
            ],
            solutions: [
                'Leveraged Supabase real-time subscriptions',
                'Implemented custom session management',
                'Created role-based access control',
            ],
            architecture:
                'Next.js frontend with Supabase backend, utilizing row-level security and real-time subscriptions for live updates.',
        },
    },
    {
        id: 'enable-pwa-api-lms',
        title: 'Enable LMS API for Progressive Web App',
        description:
            'RESTful API development for LMS Progressive Web App, featuring OTP authentication and Azure cloud integration.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: [
            'PHP',
            'Laravel',
            'PostgreSQL',
            'REST API',
            'Azure Blob',
            'Azure Repos',
            'OTP Authentication',
        ],
        details: {
            overview:
                'API backend for LMS Progressive Web App, focusing on data consistency and performance optimization for offline-capable frontend.',
            features: [
                'OTP-based authentication system',
                'RESTful API endpoints for PWA',
                'Azure Blob integration for file storage',
                'Data synchronization for offline access',
                'Version control with Azure Repos',
            ],
            challenges: [
                'Integrating multiple service data sources',
                'Maintaining data consistency across services',
                'Optimizing API response for PWA performance',
                'Managing complex data relationships',
            ],
            solutions: [
                'Implemented data transformation layers',
                'Created efficient caching mechanisms',
                'Optimized database queries for faster response',
                'Built robust error handling system',
                'Developed consistent data format across services',
            ],
            architecture:
                'Laravel API backend with service layer architecture, integrated with Azure services for storage and version control. Optimized endpoints for PWA consumption with focus on performance.',
        },
    },
    {
        id: 'cms-laravel',
        title: 'Enable Enterprise CMS with Laravel',
        description:
            'Content Management System built with Laravel and MSSQL, featuring event handling and complex data management.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: [
            'PHP',
            'Laravel',
            'MSSQL',
            'REST API',
            'Azure Blob',
            'Azure Repos',
            'Event Handling',
        ],
        details: {
            overview:
                'CMS backend system handling complex data structures, composite keys, and event-driven operations.',
            features: [
                'Event-driven architecture',
                'Complex data structure management',
                'Composite key handling',
                'Azure Blob integration',
                'Robust error handling',
            ],
            challenges: [
                'Managing composite API keys',
                'Handling complex event chains',
                'Maintaining data consistency',
                'Complex data relationships',
                'MSSQL optimization',
            ],
            solutions: [
                'Implemented event listeners and observers',
                'Created custom key management system',
                'Built structured error handling',
                'Optimized database queries',
                'Developed data validation layers',
            ],
            architecture:
                'Laravel backend with event-driven design, integrated with MSSQL for complex data structures and Azure services for storage.',
        },
    },
    {
        id: 'cms-nestjs',
        title: 'Enable Enterprise CMS with NestJS',
        description:
            'Content Management System built with NestJS, TypeScript, and Prisma, featuring event handling and type-safe data management.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: [
            'TypeScript',
            'NestJS',
            'Prisma',
            'MSSQL',
            'REST API',
            'Azure Blob',
            'Event Handling',
        ],
        details: {
            overview:
                'Type-safe CMS backend with Prisma ORM, handling complex data structures and event-driven operations.',
            features: [
                'Type-safe event system',
                'Prisma ORM integration',
                'Composite key management',
                'Azure service integration',
                'Structured error handling',
            ],
            challenges: [
                'Type-safe event handling',
                'Prisma schema optimization',
                'Complex data relationships',
                'Error handling across layers',
                'Performance optimization',
            ],
            solutions: [
                'Used NestJS event emitter',
                'Implemented Prisma middleware',
                'Created type-safe error handling',
                'Built efficient data mappers',
                'Developed event-driven architecture',
            ],
            architecture:
                'NestJS backend with Prisma ORM, leveraging TypeScript for type safety and event-driven patterns for data operations.',
        },
    },
    {
        id: 'enable-crm',
        title: 'Enterprise CRM System',
        description:
            'Enterprise-level CRM with dynamic schema management and extensive integrations.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: [
            'Express.js',
            'Sequelize ORM',
            'MySQL',
            'REST API',
            'Azure Blob',
            'Azure Repos',
            'Node.js',
        ],
        details: {
            overview:
                'Enterprise CRM system handling dynamic schemas and complex data relationships with performance optimization.',
            features: [
                'Multiple dynamic schema management',
                'Model caching system',
                'Email integration',
                'Azure cloud storage',
                'Performance optimized queries',
            ],
            challenges: [
                'Managing multiple dynamic schemas',
                'Complex model caching',
                'Performance with large datasets',
                'Email system integration',
                'Data consistency across schemas',
            ],
            solutions: [
                'Implemented advanced caching mechanism',
                'Created dynamic model loading',
                'Optimized query performance',
                'Built robust email system',
                'Developed schema versioning',
            ],
            architecture:
                'Express.js backend with Sequelize ORM, implementing dynamic schema management and model caching for performance.',
        },
    },
    {
        id: 'enable-survey',
        title: 'CRM Survey System',
        description:
            'Survey management sub-service for Enterprise CRM, handling dynamic form creation and responses.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: ['Express.js', 'Sequelize ORM', 'MySQL', 'REST API', 'Azure Services'],
        details: {
            overview:
                'Survey management system integrated with main CRM, featuring dynamic schema handling and response management.',
            features: [
                'Dynamic survey schemas',
                'Response data management',
                'CRM integration',
                'Dynamic form generation',
                'Result analytics',
            ],
            challenges: [
                'Schema synchronization with CRM',
                'Managing survey responses',
                'Performance optimization',
                'Data consistency',
                'Complex query handling',
            ],
            solutions: [
                'Built schema sync system',
                'Implemented response caching',
                'Optimized data queries',
                'Created consistent data structure',
                'Developed analytics system',
            ],
            architecture:
                'Express.js backend sharing core infrastructure with main CRM, focused on survey-specific functionality.',
        },
    },
    {
        id: 'yolo-travel',
        title: 'YOLO Travel & Tour',
        description: 'Tour and travel e-commerce platform with booking management system.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'fullstack',
        technologies: ['PHP', 'Laravel', 'PostgreSQL', 'REST API'],
        details: {
            overview:
                'Travel and tour booking platform with integrated payment system and tour package management.',
            features: [
                'Tour package management',
                'Booking system',
                'Admin dashboard',
                'RESTful API endpoints',
                'Customer management',
            ],
            challenges: [
                'Complex booking logic',
                'Payment integration',
                'Tour availability management',
                'Data consistency',
                'User experience',
            ],
            solutions: [
                'Implemented booking workflow',
                'Built admin dashboard',
                'Created tour management system',
                'Developed API endpoints',
                'Designed user interface',
            ],
            architecture:
                'Laravel-based architecture with PostgreSQL database, featuring RESTful APIs and admin dashboard.',
        },
    },
    {
        id: 'sein-thiha',
        title: 'Sein Thiha E-commerce',
        description: 'Retail e-commerce platform for product sales and inventory management.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'fullstack',
        technologies: ['PHP', 'Laravel', 'MySQL', 'REST API'],
        details: {
            overview: 'Retail e-commerce system with inventory management and order processing.',
            features: [
                'Product management',
                'Inventory tracking',
                'Order processing',
                'Admin dashboard',
                'Customer management',
            ],
            challenges: [
                'Inventory management',
                'Order workflow',
                'Product categorization',
                'Admin interface',
                'API development',
            ],
            solutions: [
                'Created inventory system',
                'Implemented order processing',
                'Built category management',
                'Developed admin interface',
                'Designed RESTful APIs',
            ],
            architecture:
                'Laravel backend with MySQL database, featuring product management system and order processing workflow.',
        },
    },
];
