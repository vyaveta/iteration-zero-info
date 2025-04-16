import { SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { NavBadge } from "./nav-badge"
import { checkIsActive } from "./utility-functions"
import Link from "next/link"

export function SidebarMenuLink({ item, href}: any) {
    const { setOpenMobile } = useSidebar()
    return (
        <SidebarMenuItem >
        <SidebarMenuButton
          asChild
          isActive={checkIsActive(href, item)}
          tooltip={item.title}
        >
          <Link href={item.url} onClick={() => setOpenMobile(false)}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
}