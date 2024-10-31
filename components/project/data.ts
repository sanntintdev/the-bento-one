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
                'Modern portfolio website with bento grid layout, built using Next.js 14 and Framer Motion for smooth animations.',
            features: [
                'Responsive bento grid layout',
                'Smooth page transitions and scroll animations',
                'Dynamic project filtering and categorization',
                'Dark/light mode theming',
                'Performance optimized with Next.js 13 features',
            ],
            challenges: [
                'Implementing complex animation sequences',
                'Optimizing performance with many animated elements',
                'Creating responsive bento grid system',
            ],
            solutions: [
                'Used Framer Motion for orchestrated animations',
                'Implemented view-based animation triggering',
                'Created custom responsive grid system',
            ],
            architecture:
                'Built with Next.js 13 App Router, utilizing server components for improved performance. Animation logic separated into custom hooks for reusability.',
        },
    },
    {
        id: 'aqbox',
        title: 'AQBox - Anonymous Q&A Platform',
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
        id: 'enable-pwa',
        title: 'Enable Progressive Web App',
        description:
            'Full-featured PWA with offline capabilities, push notifications, and seamless mobile integration.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: ['PHP', 'Laravel', 'PostgresSQL', 'REST API', 'PWA', 'AZURE'],
        details: {
            overview: 'Progressive Web App providing offline functionality and push notifications.',
            features: [
                'Offline data synchronization',
                'Push notification system',
                'File upload and management',
                'Role-based access control',
                'Azure AD integration',
            ],
            challenges: [
                'Implementing reliable offline sync',
                'Managing large file uploads',
                'Integrating with Azure services',
            ],
            solutions: [
                'Created custom sync mechanism',
                'Implemented chunked file uploads',
                'Utilized Azure Blob Storage',
            ],
            architecture:
                'Laravel backend with service workers for offline capabilities, integrated with Azure services for authentication and storage.',
        },
    },
    {
        id: 'enable-cms',
        title: 'Enable CMS - NestJS',
        description:
            'Modern CMS rebuilt with NestJS featuring improved performance and TypeScript integration.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: ['Node.js', 'NestJS', 'TypeScript', 'MSSQL', 'AZURE'],
        details: {
            overview: 'Modern headless CMS built with NestJS and TypeScript.',
            features: [
                'Content versioning',
                'Media asset management',
                'API access control',
                'Custom field types',
                'Workflow automation',
            ],
            challenges: [
                'Designing flexible content structures',
                'Managing content relationships',
                'Performance optimization',
            ],
            solutions: [
                'Implemented dynamic schema system',
                'Created efficient caching strategy',
                'Used TypeORM for complex queries',
            ],
            architecture:
                'NestJS backend with modular architecture, utilizing MSSQL for data storage and Azure for deployment.',
        },
    },
    {
        id: 'enable-crm',
        title: 'Enable CRM System',
        description:
            'Customer relationship management system with analytics and reporting capabilities.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: ['Node.js', 'Express.js', 'MSSQL', 'REST API', 'AZURE'],
        details: {
            overview:
                'Enterprise CRM system with comprehensive customer data management and analytics.',
            features: [
                'Customer data management',
                'Sales pipeline tracking',
                'Automated reporting',
                'Email integration',
                'Custom dashboard creation',
            ],
            challenges: [
                'Handling large data volumes',
                'Complex reporting requirements',
                'System integration needs',
            ],
            solutions: [
                'Implemented data partitioning',
                'Created report caching system',
                'Built modular integration framework',
            ],
            architecture:
                'Express.js backend with MSSQL database, utilizing Azure services for scalability and authentication.',
        },
    },
    {
        id: 'enable-survey',
        title: 'Enable Survey Platform',
        description:
            'Dynamic survey creation and analytics platform with real-time response tracking.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: ['Node.js', 'Express.js', 'MSSQL', 'REST API', 'AZURE'],
        details: {
            overview:
                'Comprehensive survey platform for creating, managing, and analyzing surveys.',
            features: [
                'Dynamic form builder',
                'Real-time response tracking',
                'Advanced analytics',
                'Response validation',
                'Export capabilities',
            ],
            challenges: [
                'Complex form validation',
                'Real-time data processing',
                'Scalable response storage',
            ],
            solutions: [
                'Created custom validation engine',
                'Implemented WebSocket updates',
                'Designed efficient data structure',
            ],
            architecture:
                'Express.js backend with real-time capabilities, utilizing MSSQL for data storage and Azure for hosting.',
        },
    },
    {
        id: 'yolo',
        title: 'YOLO Travel & Tour',
        description:
            'Comprehensive travel booking platform with payment integration and booking management.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: ['PHP', 'Laravel', 'PostgresSQL', 'REST API'],
        details: {
            overview: 'Full-featured travel booking platform with comprehensive tour management.',
            features: [
                'Tour package management',
                'Booking system',
                'Payment integration',
                'User reviews',
                'Tour guide assignment',
            ],
            challenges: [
                'Complex booking logic',
                'Payment gateway integration',
                'Availability management',
            ],
            solutions: [
                'Implemented booking engine',
                'Created payment abstraction layer',
                'Built inventory management system',
            ],
            architecture:
                'Laravel backend with PostgreSQL database, featuring RESTful API for frontend integration.',
        },
    },
    {
        id: 'sein-thiha',
        title: 'Sein Thiha E-commerce',
        description:
            'Feature-rich e-commerce platform with inventory management and order tracking.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: ['PHP', 'Laravel', 'MySQL', 'Redis'],
        details: {
            overview: 'Modern e-commerce platform with advanced inventory management.',
            features: [
                'Product management',
                'Order processing',
                'Inventory tracking',
                'Customer management',
                'Analytics dashboard',
            ],
            challenges: ['Stock synchronization', 'Order processing flow', 'Cache management'],
            solutions: [
                'Implemented Redis for caching',
                'Created order state machine',
                'Built inventory sync system',
            ],
            architecture:
                'Laravel backend utilizing MySQL for data storage and Redis for caching and queue management.',
        },
    },
    {
        id: 'seaman-note',
        title: 'Seaman Note',
        description:
            'Digital documentation system for maritime professionals with offline capabilities.',
        image: '/images/projects/Editor_Freepik.png',
        category: 'backend',
        technologies: ['PHP', 'Laravel', 'MySQL', 'REST API'],
        details: {
            overview: 'Specialized documentation platform for maritime industry professionals.',
            features: [
                'Document management',
                'Offline access',
                'Version control',
                'Search functionality',
                'Role-based permissions',
            ],
            challenges: ['Offline synchronization', 'Document versioning', 'Search optimization'],
            solutions: [
                'Implemented sync protocol',
                'Created version control system',
                'Built search indexing',
            ],
            architecture:
                'Laravel backend with MySQL database, featuring REST API and offline-first architecture.',
        },
    },
];
