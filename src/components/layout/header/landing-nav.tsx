import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon, ChevronDown, File, FileText, GraduationCap, LayoutDashboard, Pen, PenBox, StarsIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'

export const LandingNav = () => {
    return (
        <nav className='container mx-auto px-4 h-16 flex items-center justify-between' >
            Iteration Zero
            <div
                className={cn(
                    "group flex rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
            >
                <AnimatedShinyText className="whitespace-nowrap flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>✨ Start Learning Today</span>
                    {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
                </AnimatedShinyText>
            </div>
        </nav>
    )
}

