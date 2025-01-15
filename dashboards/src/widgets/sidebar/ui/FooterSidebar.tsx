import { MoonStar, Settings2, SunMoon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/shared/ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useThemeStore } from "@/shared/store/theme";

export const FooterSidebar = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <Settings2 size={16} strokeWidth={1} />
                <span>Настройки</span>
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuLabel>
                <span className="text-xs font-thin">Тема</span>
              </DropdownMenuLabel>
              <DropdownMenuItem
                className="pointer"
                onClick={() => toggleTheme()}
              >
                {theme === "light" ? (
                  <span
                    className={"flex items-center justify-between px-4 py-1"}
                  >
                    Светлая
                    <SunMoon size={16} strokeWidth={1} />
                  </span>
                ) : (
                  <span
                    className={"flex items-center justify-between px-4 py-1"}
                  >
                    Темная
                    <MoonStar size={16} strokeWidth={1} />
                  </span>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
