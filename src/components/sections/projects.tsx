
'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Badge } from 'src/components/ui/badge';
import { Button } from 'src/components/ui/button';
import { Card, CardBadges, CardDescription, CardFooter, CardHeader, CardTitle } from 'src/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';
import { ProjectCategory, projectCategories, projects } from 'src/lib/data';
import { useSectionInView } from 'src/lib/hooks';
import { toLabel } from 'src/lib/utils';

export default function Projects() {
    const { ref } = useSectionInView('Projects');
    const [currentTab, setCurrentTab] = useState<ProjectCategory>('all');
    const onTabChange = (tab: string) => setCurrentTab(tab as ProjectCategory);

    return (
        <section ref={ref} id='projects' className='mb-10 animate-fade-up min-h-[60vh] scroll-m-28 mx-auto max-w-screen-2xl px-4'>
            <div className='md:flex text-center items-end gap-2 justify-center mb-10'>
                <h1 className="text-4xl font-medium tracking-tight">My Projects</h1>
                <p className='max-w-[750px] text-lg text-muted-foreground sm:text-xl'>Here are my most notable works</p>
            </div>

            <div className=''>
                <Tabs defaultValue={currentTab} onValueChange={onTabChange}>
                    <div className='flex items-center justify-center mb-10'>
                        <TabsList>{projectCategories.map(category => (
                            <TabsTrigger key={category} value={category}>{toLabel(category)}</TabsTrigger>
                        ))}
                        </TabsList>
                    </div>

                    <TabsContent className='flex flex-col lg:grid grid-cols-3 gap-4' value={currentTab}>
                        {projects
                            .filter(project => currentTab === 'all' || project.category === currentTab)
                            .map(project => (
                                <Card key={project.title} className='hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer'>
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                        <CardBadges className='space-x-1'>{project.tags.map(tag => (
                                            <Badge key={tag} variant="outline">{tag}</Badge>
                                        ))}
                                        </CardBadges>
                                    </CardHeader>
                                    <CardFooter className='space-x-1'>
                                        <Button size='sm'>Read More</Button>
                                        {project.buttons.map((button, index) => (
                                            <Link key={index} href={button.path} target='_blank'>
                                                <Button aria-label={button.ariaLabel} variant="outline" size="icon">{button.icon}</Button>
                                            </Link>
                                        ))}
                                    </CardFooter>
                                </Card>
                            ))}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}