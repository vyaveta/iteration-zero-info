import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon, ChevronDown, LayoutDashboard, StarsIcon } from 'lucide-react'
import { LandingNav } from './landing-nav'
import { cn } from '@/lib/utils'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'

export const LandingHeader = () => {
  return (
    <header className='flex items-center justify-between z-[60] fixed top-0 w-full border-b bg-background/80 backdrop-blur-md  supports-[backdrop-filter]:bg-background/60:' >
      <LandingNav />
      
    </header>
  )
}

