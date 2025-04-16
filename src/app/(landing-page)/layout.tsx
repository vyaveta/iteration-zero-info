import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import { ZeroThemeProvider } from '@/context/theme-provider';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/sidebar/app-sidebar';
import HeaderWrapper from '@/components/layout/header/header-wrapper';

export const metadata: Metadata = {
    title: 'Iteration Zero',
    description: 'Learn Anything'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en' className='text-primary' >
            <body
                className={`bg-background text-foreground overscroll-none antialiased`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        forcedTheme='dark'
                        disableTransitionOnChange
                        enableColorScheme
                    >
                        <ZeroThemeProvider>
                                {children}
                        </ZeroThemeProvider>
                    </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
