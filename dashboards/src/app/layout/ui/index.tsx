import { Outlet } from "react-router-dom";

import { SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/widgets/sidebar";
import { Container } from "@/shared/components/container";

export const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <Container>
        <SidebarTrigger />
        <Outlet />
      </Container>
    </SidebarProvider>
  );
};
