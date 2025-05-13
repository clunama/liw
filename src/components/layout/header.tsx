
"use client";

import Link from "next/link";
import { Bot } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/contexts/language-context";
// import { Button } from "@/components/ui/button"; // No longer needed
// import { cn } from "@/lib/utils"; // No longer needed
// import { usePathname } from "next/navigation"; // No longer needed

export default function Header() {
  const { t } = useLanguage();
  // const pathname = usePathname(); // No longer needed

  // const navItems = [ // No longer needed
  //   { href: "/", labelKey: "navHome" },
  //   { href: "/demo", labelKey: "navDemo" },
  //   { href: "/book-appointment", labelKey: "navBook" },
  // ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity">
          <Bot className="h-7 w-7" />
          <span className="font-bold text-xl">{t('appName')}</span>
        </Link>
        {/* <nav className="hidden md:flex items-center space-x-6 text-sm font-medium"> // No longer needed
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav> */}
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          {/* Mobile Menu Trigger (optional, can be added later) */}
        </div>
      </div>
    </header>
  );
}
