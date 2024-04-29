// icons
import { RxGlobe, RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx';
import { TbBrandNpm } from 'react-icons/tb';
import { Icons } from 'src/components/icons';

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
        icon: <Icons.typescript className='max-w-12' />
    },
    {
        name: 'NodeJs',
        icon: <Icons.nodejs className='max-w-12' />
    },
    {
        name: 'ExpressJs',
        icon: <Icons.expressjs className='max-w-12 bg-gray-800' />
    },
    {
        name: 'NestJs',
        icon: <Icons.nestjs className='max-w-12' />
    },
    {
        name: 'MongoDB',
        icon: <Icons.mongodb className='max-w-12' />
    },
    {
        name: 'PostgreSQL',
        icon: <Icons.postgres className='max-w-12' />
    },
    {
        name: 'React',
        icon: <Icons.react className='max-w-12' />
    },
    {
        name: 'NextJs',
        icon: <Icons.nextjs className='max-w-12' />
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
                icon: <RxGlobe className="h-4 w-4" />,
                ariaLabel: 'Website'
            },
            {
                path: 'https://www.github.com/khaledxyz/next-portfolio',
                icon: <RxGithubLogo className="h-4 w-4" />,
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
                icon: <RxGlobe className="h-4 w-4" />,
                ariaLabel: 'documentation'
            },
            {
                path: 'https://www.github.com/khaledxyz/satim-api-wrapper',
                icon: <RxGithubLogo className="h-4 w-4" />,
                ariaLabel: 'Github'
            },
            {
                path: 'https://www.npmjs.com/package/satim-api-wrapper',
                icon: <TbBrandNpm className="h-4 w-4" />,
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
                icon: <RxGlobe className="h-4 w-4" />,
                ariaLabel: 'Website'
            },
            {
                path: 'https://www.linkedin.com/company/promexia',
                icon: <RxLinkedinLogo className="h-4 w-4" />,
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
                icon: <RxGlobe className="h-4 w-4" />,
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
                path: 'https://github.com/khaledxyz/valkyrie',
                icon: <RxGlobe className="h-4 w-4" />,
                ariaLabel: 'Github'
            },
            {
                path: 'https://valkyrieapp.vercel.app/',
                icon: <RxGithubLogo className="h-4 w-4" />,
                ariaLabel: 'Website'
            }
        ]
    },
] as const;