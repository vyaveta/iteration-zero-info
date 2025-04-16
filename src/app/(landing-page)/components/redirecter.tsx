import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { AuroraText } from '@/components/magicui/aurora-text'
import { BorderBeam } from '@/components/magicui/border-beam'
import { Particles } from '@/components/magicui/particles'
import { SparklesText } from '@/components/magicui/sparkles-text'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const Redirector = () => {
    return (
        <div className='flex flex-col items-center justify-center  w-full relative companies'>
            <div className='py-20 max-w-3xl mx-auto'>
                <div className='relative flex flex-col items-center justify-between pt-12 px-12 lg:pt-20 pb-6 lg:pb-10  rounded-2xl
            lg:rounded-3xl text-center border border-foreground/20 overflow-hidden'>
                    <Particles
                        refresh
                        ease={80}
                        quantity={80}
                        color='#fff'
                        className='hidden lg:block absolute inset-0 z-0'
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={35}
                        color='#fff'
                        className='block lg:hidden absolute inset-0 z-0'
                    />
                    {/* <div className='flex h-full justify-between flex-col bg-green-300'> */}
                    <h2 className='text-3xl md:text-5xl  font-heading font-medium !leading-snug' >
                        No More Waiting and Learn
                        <SparklesText>
                            <AuroraText className='text-4xl'>
                                Whatever You Want!
                            </AuroraText>
                        </SparklesText>
                    </h2>
                    <p className='text-sm md:text-md text-center text-accent-foreground/80 max-w-2xl mx-auto mt-4'>
                        Embrace the new Era of digital learning with Iteration Zero. Our team combines cutting edge
                        technology with pure magic for our customers.
                    </p>
                    {/* <div className="z-10 flex min-h-64 items-center justify-center"> */}
                        <div
                            className={cn(
                                "group rounded-full mt-6 lg:mt-10 border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                            )}
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                <span>✨ Start Learning Today</span>
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </div>
                    {/* </div> */}
                    {/* </div> */}
                    <BorderBeam duration={8} colorFrom='#fff' colorTo='#fff' size={200} />
                </div>
            </div>
        </div>
    )
}

export default Redirector