'use client'
import { useSectionInView } from "src/lib/hooks";
import { techStack } from "src/lib/data";
import { Icons } from "../icons";
import { cn } from "src/lib/utils";

export default function Technologies() {
    const { ref } = useSectionInView('Technologies');

    return (
        <section ref={ref} id='technologies' className='mb-10 animate-fade-up min-h-[60vh] scroll-m-28 mx-auto max-w-screen-2xl px-4'>
            <div className='md:flex text-center items-end gap-2 justify-center mb-10'>
                <h1 className="text-4xl font-medium tracking-tight">Technologies</h1>
                <p className='max-w-[750px] text-lg text-muted-foreground sm:text-xl'>My everyday tech-stack</p>
            </div>

            <div className="flex items-center justify-center gap-5">
                {techStack.map(tech => (
                    <i key={tech.name} className={`text-5xl ${tech.icon}`} />
                ))}
            </div>
        </section>
    )
}