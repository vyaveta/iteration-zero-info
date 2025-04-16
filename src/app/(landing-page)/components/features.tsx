import { MagicCard } from '@/components/magicui/magic-card'
import { Card, CardContent } from '@/components/ui/card'
import { features } from '@/data/static-datas'
import React from 'react'

export const Features = () => {
    return (
        <section className='w-full pt-12 md:pb-24 lg:pb-12  bg-background' >
            <div className='container mx-auto px-4 md:px-6' >
                <h2 className='text-3xl font-bold tracking-tighter text-center mb-12' >
                    Powerful features for your career growth
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full bg-gr een-500' >
                    {
                        features.map((feature: any, i: number) => (
                            <Card
                                key={i}
                                // className='border-2 hover:border-primary transition-colors duration-300' 
                                className='p-0 max-w-sm w-full shadow-none border-none mx-auto'
                            >
                                <MagicCard
                                    gradientColor={"#262626"}
                                    gradientFrom='#fff'
                                    gradientTo='#fff'
                                    className="p-5 h-full"
                                >
                                    <CardContent className='pt-4 text-center flex flex-col items-center' >
                                        <div className='flex flex-col items-center justify-center'>
                                            <div>{feature.icon}</div>
                                            <h3 className='text-xl font-bold mb-2' >
                                                {feature.title}
                                            </h3>
                                            <p className='text-muted-foreground'>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </MagicCard>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

