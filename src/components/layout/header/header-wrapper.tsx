"use client"
import React, { ReactNode } from 'react'
import { useSidebar } from '@/components/ui/sidebar'
import { ThemeToggle } from '../toggle-theme'
import ThemeColorToggle from '../zero-color-toggle'
import UserHeading from '../user-heading'
import { Header } from './header'
import TopNav from './top-nav'
import { ProfileDropdown } from '../profile-dropdown'

interface HeaderWrapperProps {
    children?: ReactNode
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
    const { state } = useSidebar()
    
    return (
        <div className={`flex flex-col justify-start items-stretch transition-[width] duration-200 ease-linear ${
            state === 'collapsed' 
                ? 'w-[calc(100vw-var(--sidebar-width-icon))]'
                : 'w-[calc(100vw-var(--sidebar-width))]'
        }`}>
            <Header className='shadow w-full'>
                <TopNav />
                <UserHeading />
                <div className='ml-auto flex items-center gap-2'>
                    <ThemeToggle />
                    <ThemeColorToggle />
                    <ProfileDropdown />
                </div>
            </Header>
            {children}
        </div>
    )
}

export default HeaderWrapper