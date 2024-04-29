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

            <div className="grid grid-cols-4 md:grid-cols-6 auto-rows-fr place-items-center border max-w-md">
                <div className="col-span-full md:col-span-2 text-xl font-semibold flex items-center justify-center pl-5">
                    Your framework, your way.
                </div>
                {techStack.map(tech => (
                    <div
                        key={tech.name}
                        className={`w-full aspect-square grid place-items-center grid-borders`}
                    >
                        {tech.icon}
                    </div>
                ))}</div>
        </section>
    )
}