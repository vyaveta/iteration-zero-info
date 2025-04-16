import { Ripple } from '@/components/magicui/ripple'
import React from 'react'

const WhatWeOffer = () => {
    return (
        <div className="relative companies flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
            <div className='container mx-auto px-4 md:px-6' >
                <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 max-w-6xl mx-auto' >
                    <div className='flex flex-col items-center justify-center space-y-2 ' >
                        <h3 className='md:text-2xl lg:text4xl font-bold text-center' >
                            50+
                        </h3>
                        <p className='text-muted-foreground text-center' >
                            Industries Covered
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-2' >
                        <h3 className='md:text-2xl lg:text4xl font-bold text-center' >
                            1000+
                        </h3>
                        <p className='text-muted-foreground' >
                            Interview Questions
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-2' >
                        <h3 className='md:text-2xl lg:text4xl font-bold text-center' >
                            100%
                        </h3>
                        <p className='text-muted-foreground' >
                            Success Rate
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-2' >
                        <h3 className='md:text-2xl lg:text4xl font-bold text-center' >
                            24/7
                        </h3>
                        <p className='text-muted-foreground' >
                            AI Support
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-2' >
                        <h3 className='md:text-2xl lg:text4xl font-bold text-center' >
                            World Wide
                        </h3>
                        <p className='text-muted-foreground text-center' >
                            Community Building
                        </p>
                    </div>
                </div>
            </div>
            <Ripple />
        </div>
    )
}

export default WhatWeOffer