import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "@/components/logout-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AcuScan",
  description:
    "Transforming medical insights with accurate, efficient, and understandable 3D imaging.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const isLoggedIn = !!session?.user;
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {!isLoggedIn && <Navbar />}
          <SidebarProvider>
            <AppSidebar />
            <main className="">
              <SidebarTrigger />
              {children}
              <LogoutButton />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
