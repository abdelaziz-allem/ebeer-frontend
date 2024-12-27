import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toogle";
import { AppSidebar } from "@/components/AppSideBar";
import { getUserInSession } from "@/lib/userInSession";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = getUserInSession();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar user={user} />
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full h-screen">
          <div className="flex gap-3 items-center">
            <SidebarTrigger />
            <ModeToggle />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
