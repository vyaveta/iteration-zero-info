import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  LogOut
} from 'lucide-react'
import Link from 'next/link'

export function NavUser({
  user,
}: {
  user: any
}) {
  const { isMobile } = useSidebar()

  user = {
    first_name: "Adwaith",
    phone_number: "9037426810",
    profile_pic: "github.com/vyaveya.png"
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-primary'
            >
              <Avatar className='h-8 w-8 rounded-lg text-primary'>
                <AvatarImage src={user.profile_pic} alt={user.first_name} />
                <AvatarFallback className='rounded-lg'>{user?.first_name[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight text-primary '>
                <span className='truncate font-semibold '>{user.first_name}</span>
                <span className='truncate text-xs'>{user.phone_number}</span>
              </div>
              <ChevronsUpDown className='ml-auto size-4 text-primary' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal text-primary'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar className='h-8 w-8 rounded-lg'>
                  <AvatarImage src={user.profile_pic} alt={user.first_name} />
                  <AvatarFallback className='rounded-lg'>{user?.first_name[0]?.toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight text-primary'>
                  <span className='truncate font-semibold'>{user.first_name}</span>
                  <span className='truncate text-xs'>{user.phone_name}</span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuGroup className='text-primary'>
              <DropdownMenuItem asChild >
                <Link href='/settings/account' >
                  <BadgeCheck className='text-primary' />
                  Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href='/settings/notifications'>
                  <Bell className='text-primary' />
                  Notifications
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {
            }} >
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
