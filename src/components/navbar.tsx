"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Demo" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur fixed top-0 left-0 right-0 flex justify-center z-50 border-b">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="font-bold text-xl">
          AcuScan
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

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm">
            Log In
          </Button>
          <Button size="sm">Sign Up</Button>
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
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
