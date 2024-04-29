'use client'
import Link from 'next/link';
import { Button } from 'src/components/ui/button';
import { Badge } from 'src/components/ui/badge';
import { useSectionInView } from 'src/lib/hooks';
import ContactDrawer from '../contact-drawer';

export default function Hero() {
    const { ref } = useSectionInView('Home');

    return (
        <header ref={ref} className='mx-auto my-20 flex flex-col md:items-center max-w-screen-2xl space-y-5 px-4 '>
            <Link href="https://github.com/khaledxyz/portfolio" target='_blank'>
                <Badge className='animate-fade-up' variant="secondary">Still under development!</Badge>
                {/* <Badge variant="secondary">See this portfolio on Github →</Badge> */}
            </Link>

            <h1
                className='[font-size:_clamp(2.5em,10vw,4.5em)] opacity-0 animate-fade-up md:text-center leading-[0.9] font-bold [&>*]:block text-ellipsis whitespace-nowrap'
                style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
            >
                <span>Hi, I&apos;m Khaled</span>
                <span>a <span className='text-purple-700'>Front</span> & <span className='italic text-background stroke'>Back</span></span>
                <span>Developer</span>
            </h1>

            <p
                className="animate-fade-up max-w-md text-xs sm:mx-auto sm:text-center text-muted-foreground font-normal opacity-0"
                style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
            >
                Gets everything done, from creating simple HTML pages to developing web and
                mobile applications, to server-side apps, hosting, deployments, and server
                setups.
            </p>

            <div
                className="animate-fade-up opacity-0 max-w-md space-y-3 sm:mx-auto sm:flex sm:gap-3 sm:space-y-0 sm:text-center [&>*]:w-[100%] sm:[&>*]:w-60"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
                <Link href='#projects'><Button className='w-full'>Projects</Button></Link>
                <ContactDrawer />
            </div>
        </header>
    );
}