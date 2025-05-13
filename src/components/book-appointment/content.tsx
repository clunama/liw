
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BookAppointmentContent() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-lg mx-auto shadow-2xl bg-card/80 border-border/50 animate-fadeIn">
        <CardHeader className="text-center">
          <div className="mx-auto mb-6 inline-block p-4 bg-primary/20 rounded-full">
            <CalendarDays className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">{t('bookAppointmentTitle')}</CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            {t('bookAppointmentDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-soft shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
            <Link href="https://calendly.com/lockedinwork05/30min" target="_blank" rel="noopener noreferrer">
              {t('ctaBookAppointment')} {/* Re-using existing translation key, can be made specific */}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

