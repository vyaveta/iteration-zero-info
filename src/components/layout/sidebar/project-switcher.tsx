import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { ChevronsUpDown, LandPlot, Plus } from 'lucide-react'

export function ProjectSwitcher({
  projects,
}: {
  projects: Record<string, any>
}) {
  const { isMobile } = useSidebar()
  const setActiveArea = (something: any) => { }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground shadow-md">
                <LandPlot className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-sidebar-foreground">
                  --
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  --
                </span>
              </div>
              <ChevronsUpDown className="ml-auto text-muted-foreground" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-popover text-popover-foreground shadow-lg border border-border"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground">
              Projects
            </DropdownMenuLabel>
            {projects.map((team: any, index: number) => (
              <DropdownMenuItem
                key={team.area_name}
                onClick={() => setActiveArea(team)}
                className="gap-2 p-2 cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-all"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border bg-muted">
                  <LandPlot className="size-4 shrink-0 text-muted-foreground" />
                </div>
                {team.area_name}
                <DropdownMenuShortcut className="text-muted-foreground">
                  ⌘{index + 1}
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2 cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-all">
              to={"/area/new"}
              className="flex gap-2 flex-row items-center justify-center rounded-md"
              <div className="flex size-6 items-center justify-center rounded-md border bg-muted">
                <Plus className="size-4 text-muted-foreground" />
              </div>
              <div className="font-medium text-muted-foreground">
                Onboard an Area
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
