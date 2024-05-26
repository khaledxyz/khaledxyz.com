export const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Projects',
        path: '#projects',
    },
    {
        name: 'Technologies',
        path: '#technologies',
    },
    {
        name: 'Guestbook',
        path: '/guestbook',
    },
    {
        name: 'Blog',
        path: 'https://blog.khaledxyz.com/',
    }
] as const;

export const techStack = [
    {
        name: 'TypeScript',
        icon: 'skill-icons-typescript',
    },
    {
        name: 'NestJS',
        icon: 'skill-icons-nestjs-dark',
    },
    {
        name: 'PostgreSQL',
        icon: 'skill-icons-postgresql-dark',
    },
    {
        name: 'MongoDB',
        icon: 'skill-icons-mongodb',
    },
    {
        name: 'NextJs',
        icon: 'skill-icons-nextjs-dark',
    },
    {
        name: 'TailwindCSS',
        icon: 'skill-icons-tailwindcss-dark',
    },
    {
        name: 'Docker',
        icon: 'skill-icons-docker',
    },
] as const;

export const projectCategories = ['all', 'commercial', 'personal', 'openSource'] as const;
export type ProjectCategory = typeof projectCategories[number];;

export const projects = [
    {
        title: 'This Portfolio',
        description: 'Well, you\'re looking at it right now, so I guess it does not need a description, does it?',
        tags: ['typescript', 'next.js', 'tailwind', 'shadcn/ui'],
        category: 'personal' as ProjectCategory,
        buttons: [
            {
                path: 'https://khaledxyz.com',
                icon: 'bi-globe',
                ariaLabel: 'Website'
            },
            {
                path: 'https://www.github.com/khaledxyz/next-portfolio',
                icon: 'bi-github',
                ariaLabel: 'Github'
            }
        ]
    },
    {
        title: 'satim-api-wrapper',
        description: 'This is a minimal wrapper for Satim\'s payments API. Type-safe and available on npm',
        tags: ['typescript', 'docusaurus'],
        category: 'openSource' as ProjectCategory,
        buttons: [
            {
                path: 'https://satim.khaledxyz.com',
                icon: 'bi-globe',
                ariaLabel: 'documentation'
            },
            {
                path: 'https://www.github.com/khaledxyz/satim-api-wrapper',
                icon: 'bi-github',
                ariaLabel: 'Github'
            },
            {
                path: 'https://www.npmjs.com/package/satim-api-wrapper',
                icon: 'tabler-brand-npm',
                ariaLabel: 'NPM'
            },
        ]
    },
    {
        title: 'Promexia',
        description: 'Promexia is a global trading platform created to link exporters, importers, and stakeholders.',
        tags: ['typescript', 'next.js', 'nest.js', 'mui', 'mongodb'],
        category: 'commercial' as ProjectCategory,
        buttons: [
            {
                path: 'https://promexia.com',
                icon: 'bi-globe',
                ariaLabel: 'Website'
            },
            {
                path: 'https://www.linkedin.com/company/promexia',
                icon: 'bi-linkedin',
                ariaLabel: 'LinkedIn'
            },
        ]
    },
    {
        title: 'Bekakria Energie',
        description: 'Bekakria Energy LLC was established in April 2015, specializing in the production of pre-stressed concrete electrical supports.',
        tags: ['react', 'tailwind', 'antd'],
        category: 'commercial' as ProjectCategory,
        buttons: [
            {
                path: 'https://bekakria-energie.com',
                icon: 'bi-globe',
                ariaLabel: 'Website'
            }
        ]
    },
    {
        title: 'Valkyrie',
        description: 'Valkyrie is a full-stack Discord app clone. Created as a learning experience.',
        tags: ['react', 'express', 'mongodb', 'socket.io'],
        category: 'personal' as ProjectCategory,
        buttons: [
            {
                path: 'https://valkyrieapp.vercel.app/',
                icon: 'bi-globe',
                ariaLabel: 'Website'
            },
            {
                path: 'https://github.com/khaledxyz/valkyrie',
                icon: 'bi-github',
                ariaLabel: 'Github'
            }
        ]
    },
] as const;