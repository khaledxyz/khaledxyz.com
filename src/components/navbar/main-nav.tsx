'use client'
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from 'src/lib/utils';
import { siteConfig } from 'src/config/site';
import { links } from 'src/lib/data';
import { useActiveSectionContext } from 'src/context/active-section-context';

export default function MainNav() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const isActive = (name: string) => activeSection === name;

    return (
        <div className='mr-4 flex'>
            <Link href='/' className='mr-6 flex items-center space-x-2'>
                <Image width={50} height={50} src='/logo.svg' alt={siteConfig.name} />
            </Link>
            <nav className='hidden md:flex items-center gap-6 text-sm'>{links.map(({ name, path }) => (
                <Link
                    className={cn('transition-colors hover:text-foreground/80', isActive(name) ? 'text-foreground' : 'text-foreground/60')}
                    target={path.includes('https') ? '_blank' : ''}
                    key={name}
                    href={path}
                    onClick={() => { setActiveSection(name); setTimeOfLastClick(Date.now()); }}
                >
                    {name}
                </Link>
            ))}
            </nav>
        </div>
    );
}