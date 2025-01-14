import { FC } from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar";
import { navMap } from "../model";
import { Link } from "react-router-dom";

export const NavSidebar: FC = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Навигация</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {navMap.map((el) => (
            <SidebarMenuItem key={el.name} className="flex items-center">
              {el.icon}

              <SidebarMenuButton asChild>
                <Link to={el.to}>{el.name}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
