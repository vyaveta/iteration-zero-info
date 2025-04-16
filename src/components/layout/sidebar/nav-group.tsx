import { SidebarGroup, SidebarGroupLabel, SidebarMenu, useSidebar } from "@/components/ui/sidebar"
import SidebarMenuCollapsedDropdown from "./sidebar-menu-collapsed"
import { SidebarMenuLink } from "./sidebar-menu-link"
import { SidebarMenuCollapsible } from "./sidebar-menu"

export function NavGroup({ title, items }: any) {
    const { state } = useSidebar()
    const pathname = "/"

    console.log(items)

    return (
      <SidebarGroup>
        <SidebarGroupLabel>{title}</SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item: any) => {
            const key = `${item.title}-${item.url}`
  
            if (!item.items)
              return <SidebarMenuLink key={key} item={item} href={pathname} />
  
            if (state === 'collapsed')
              return (
                <SidebarMenuCollapsedDropdown key={key} item={item} href={pathname} />
              )
  
            return <SidebarMenuCollapsible key={key} item={item} href={pathname} />
          })}
        </SidebarMenu>
      </SidebarGroup>
    )
  }
