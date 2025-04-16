import { MagicCard } from '@/components/magicui/magic-card'
import { Button } from '@/components/ui/button'
import { DownloadIcon, FilterIcon, TrendingUp } from 'lucide-react'
import React from 'react'

const DashboardInfo = () => {
    return (
        <div className='relative felx flex-col items-center justify-center companies w-full py-20' >
            <div>
                <div className='flex flex-col items-center text-center max-w-3xl mx-auto mb-16' >
                    <h2 className='text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug' >
                        Decidated Learning <br /> Dashboard
                    </h2>
                    <p className='text-base md:text-lg text-accent-foreground/80 mt-4' >
                        From conecpt to execution, We deliver Notes, Diagrams, Codes, AI tools more over a dedicated dashboard to help you learn,
                        grow in your career, make new connections, build communities around the world. Never stop and give up on
                        learning as we are 24/7 available for support and mentor you.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-6 relative w-full' >
                <div className='max-w-4xl mx-auto'>
                    <div className='rounded-2xl bg-background/40 relative border border-border/50 md:px-4' >
                        <MagicCard
                            gradientFrom='#fff'
                            gradientTo='#fff'
                            className='p-4 lg:p-8 w-full overflow-hidden'
                        >
                            <div className='absolute bottom-0 right-0 bg-white w-1/4 h-1/4 blur-[8rem] z-20' />
                            <div className='space-y-4'>
                                <h3 className='text-xl font-semibold'>
                                    Learning Progress Tracker
                                </h3>
                                <p className='text-sm text-muted-foreground'>
                                    Keep track of your performance with data-driven insights
                                </p>
                                <div className='space-y-4'>
                                    <div className='flex justify-between items-baseline' >
                                        <div>
                                            <div className='text-3xl font-semibold'>
                                                12 Topics
                                            </div>
                                            <div className='text-sm text-green-500 flex items-center gap-1 mt-2'>
                                                <TrendingUp className='w-4 h-4' /> +25% from last month
                                            </div>
                                        </div>
                                        <div className='flex gap-2'>
                                            <Button variant={"ghost"} size={"icon"}>
                                                <FilterIcon className='w-5 h-5' />
                                            </Button>
                                            <Button variant={"ghost"} size={"icon"}>
                                                <DownloadIcon className='w-5 h-5' />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='space-y-2'>
                                        <div className='grid grid-cols-5 text-sm text-muted-foreground py-2'>
                                            <div>Topics</div>
                                            <div>Status</div>
                                            <div className='text-center'>Tests Completed</div>
                                            <div className='text-center'>Rewards</div>
                                            <div className='text-center'>Progress</div>
                                        </div>
                                        {tableData.map((course, index) => (
                                            <div key={course.name} className='grid grid-cols-5 text-sm py-2 border-t border-border/50' >
                                                <div className='text-sm'>{course.name}</div>
                                                <div className='text-sm'>{course.status}</div>
                                                <div className="text-center font-semibold">{course.tests}</div>
                                                <div className="text-center font-semibold">{course.rewards}</div>
                                                <div className="text-center font-semibold">{course.progress}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </div>
            </div>
        </div>
    )
}


const tableData = [
    {
        name: "Typescript",
        status: "Ongoing",
        tests: 23,
        rewards: 3,
        progress: "90%"
    },
    {
        name: "React Native",
        status: "Ongoing",
        tests: 2,
        rewards: 0,
        progress: "20%"
    },
    {
        name: "LLMs",
        status: "Ongoing",
        tests: 13,
        rewards: 8,
        progress: "10%"
    },
    {
        name: "Prompt Engineering",
        status: "Completed",
        tests: 223,
        rewards: 30,
        progress: "100%"
    },
    {
        name: "Advanced Promt Engineering",
        status: "Ongoing",
        tests: 1,
        rewards: 0,
        progress: "0.3%"
    },
]

export default DashboardInfo