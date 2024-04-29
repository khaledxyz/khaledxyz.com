import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { BsDiscord } from 'react-icons/bs';
import { buttonVariants } from 'src/components/ui/button';
import ThemeToggler from 'src/components/theme-toggler';
import { cn } from 'src/lib/utils';
import { siteConfig } from 'src/config/site';
import MobileNav from './mobile-nav';
import MainNav from './main-nav';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto px-4 flex h-14 max-w-screen-2xl items-center justify-between">
                <MainNav />
                <div className="flex md:flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center space-x-1">
                        <Link className='hidden md:inline-flex' href={siteConfig.links.github} target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-9 px-0')}>
                                <GitHubLogoIcon className="h-4 w-4 fill-current" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link className='hidden md:inline-flex' href={siteConfig.links.discord} target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-9 px-0')}>
                                <BsDiscord className="h-4 w-4 fill-current" />
                                <span className="sr-only">Discord</span>
                            </div>
                        </Link>

                        <ThemeToggler />
                        <MobileNav />
                    </nav>
                </div>
            </div>
        </header>
    );
}