'use client'

import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useMedia } from 'react-use'
import NavButton from '@/components/navButton';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
  

const routes = [
    {
        href: '/',
        label: 'Overview'
    },
    {
        href: '/budget-planning',
        label: 'Budget Planning'
    },
    {
        href: '/forecasting',
        label: 'Forecasting'
    },
    {
        href: '/reports',
        label: 'Reports'
    },
    {
        href: '/settings',
        label: 'Settings'
    },
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useMedia("(max-width: 1024px)", false);

    const onClick = (href: string) => {
        router.push(href);
        setIsOpen(false);
    }

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                    <Button 
                        variant='outline'
                        size="sm"
                        className='font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition'
                    >
                        <MenuIcon className='size-4'/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className='px-2'>
            {/* <SheetHeader> */}


                    <nav className='flex flex-col gap-y-2 pt-6'>
                        {routes.map((route) => (
                            <Button
                            key={route.href}
                            variant={route.href === pathname ? 'secondary' : 'ghost'}
                            onClick={() => onClick(route.href)}
                            className='w-full justify-start'
                            >
                                 
                                {route.label}
                            </Button>
                        ))}
                    </nav>
                        {/* </SheetHeader>
  <SheetTitle className='hidden'>
    
    </SheetTitle> */}
                </SheetContent>
            </Sheet>
        )
    }

  return (
    <nav className='hidden lg:flex items-center gap-x-2 overflow-x-auto'>
        {routes.map((route) => (
            <NavButton 
                key={route.href}
                href={route.href}
                label={route.label}
                isActive={pathname === route.href}
            />
        ))}
    </nav>
  )
}

export default Navigation