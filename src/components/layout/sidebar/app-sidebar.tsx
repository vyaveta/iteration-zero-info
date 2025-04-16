"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from "@/components/ui/sidebar";
import { useEffect } from "react";
import { NavGroup } from "./nav-group";
import { navGroups } from "./sidebar-data";
import { NavUser } from "./nav-user";
import { ProjectSwitcher } from "./project-switcher";

export function AppSidebar() {

  const areas = []
  // const setAreas =
  // const setActiveArea = useAreaStore((state) => state.setActiveArea)
  const user = {}

  useEffect(() => {
    // getAreas(setAreas, setActiveArea)
  }, [])

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader >
        {areas.length > 0 && <ProjectSwitcher projects={[]} />}
      </SidebarHeader>
      <SidebarContent >
        {navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>

  )
}
