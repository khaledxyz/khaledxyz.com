
'use client'
import { ReactNode, useState } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from 'src/components/ui/sheet';
import { ScrollArea } from 'src/components/ui/scroll-area';
import { Button } from 'src/components/ui/button';
import { cn } from 'src/lib/utils';
import { siteConfig } from 'src/config/site';
import { links } from 'src/lib/data';
import { useActiveSectionContext } from 'src/context/active-section-context';
import Image from 'next/image';

export default function MobileNav() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [open, setOpen] = useState(false);

    const isActive = (name: string) => activeSection === name;

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    aria-label='Toggle mobile menu'
                    variant="outline" size='icon'
                    className="mr-2 px-0 text-base focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M21 5H13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M21 12H8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M21 19H3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setOpen}
                >
                    <Image width={50} height={50} src='/logo.svg' alt={siteConfig.name} />
                </MobileLink>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                        {links?.map(({ name, path }) =>
                            path && (
                                <MobileLink
                                    key={name}
                                    href={path}
                                    onOpenChange={setOpen}
                                    className={cn('transition-colors hover:text-foreground/80', isActive(name) ? 'text-foreground' : 'text-foreground/60')}
                                    onClick={() => { setActiveSection(name); setTimeOfLastClick(Date.now()); setOpen(false); }}
                                >
                                    {name}
                                </MobileLink>
                            )
                        )}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (_: boolean) => void
    children: ReactNode
    className?: string
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    const router = useRouter();
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    );
}