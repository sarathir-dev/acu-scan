"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { IconBodyScan } from "@tabler/icons-react";
import { createClient } from "@/lib/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "./logout-button";

const navItems = [
  { href: "/profile", label: "Profile" },
  { href: "/billing", label: "Biling" },
  { href: "/team", label: "Team" },
];

const ChatNavbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any | null>(null);
  const [userEmailFirstLetter, setUserEmailFirstLetter] = useState<
    string | null
  >(null);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = await createClient(); // Await the client creation
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        setIsLoggedIn(false);
        setUser(null);
        setUserEmailFirstLetter(null);
      } else {
        setIsLoggedIn(true);
        setUser(data.user);
        if (data.user.email) {
          setUserEmailFirstLetter(data.user.email?.charAt(0).toUpperCase());
        } else {
          setUserEmailFirstLetter(null);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <nav className="bg-background/95 backdrop-blur fixed top-0 left-0 right-0 flex justify-center z-50 border-b">
      <div className="flex w-full items-center justify-between h-16 px-4">
        <Link href="/chat" className="font-bold text-xl flex gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <IconBodyScan className="size-4" />
          </div>
          AcuScan.
        </Link>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="" alt="Email" />
                <AvatarFallback className="border-b-2">
                  {userEmailFirstLetter}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-t py-4 flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-4">
            <LogoutButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default ChatNavbar;
