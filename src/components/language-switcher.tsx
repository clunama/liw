"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, type Locale } from "@/contexts/language-context";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage, t, availableLocales } = useLanguage();

  const languageNames: Record<Locale, string> = {
    es: t('spanish'),
    en: t('english'),
    de: t('german'),
    pt: t('portuguese'),
    fr: t('french'),
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t('languageSwitcherLabel')}>
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLocales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => setLanguage(locale)}
            className={language === locale ? "bg-accent text-accent-foreground" : ""}
          >
            {languageNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}