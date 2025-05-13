
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { RefreshCcw, ListChecks, Heart, type Icon as LucideIcon } from "lucide-react"; // Added History, ListChecks, Heart

interface UseCase {
  icon: LucideIcon;
  iconColorClass: string;
  titleKey: string;
  shortDescKey: string;
  longDescKey: string;
}

const useCasesData: UseCase[] = [
  { 
    icon: RefreshCcw, 
    iconColorClass: "text-secondary", // Mapped from blue in image
    titleKey: "serviceCardTitle", 
    shortDescKey: "serviceCardDescShort",
    longDescKey: "serviceCardDescLong" 
  },
  { 
    icon: ListChecks, 
    iconColorClass: "text-accent", // Mapped from purple in image
    titleKey: "acquisitionCardTitle", 
    shortDescKey: "acquisitionCardDescShort",
    longDescKey: "acquisitionCardDescLong"
  },
  { 
    icon: Heart, 
    iconColorClass: "text-primary", // Mapped from red in image (using primary yellow for site consistency)
    titleKey: "engagingAICardTitle", 
    shortDescKey: "engagingAICardDescShort",
    longDescKey: "engagingAICardDescLong"
  },
];

export function BenefitsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background/10 backdrop-blur-sm rounded-xl shadow-xl my-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('useCasesTitle')}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            {t('useCasesSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {useCasesData.map((useCase, index) => (
            <Card 
              key={index} 
              className="bg-card/80 border-border/50 shadow-lg hover:shadow-primary/30 transition-shadow duration-300 flex flex-col animate-fadeIn"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <CardHeader className="items-center text-center pb-3 md:pb-6">
                <div className={`p-4 bg-primary/10 rounded-full mb-4 inline-block ${useCase.iconColorClass.replace('text-', 'bg-').replace('primary', 'primary/20').replace('secondary', 'secondary/20').replace('accent', 'accent/20')}`}>
                  <useCase.icon className={`h-10 w-10 ${useCase.iconColorClass}`} />
                </div>
                <CardTitle className={`text-xl font-semibold ${useCase.iconColorClass} min-h-[3.5rem] flex items-center justify-center`}>{t(useCase.titleKey)}</CardTitle>
                <CardDescription className="text-muted-foreground mt-1 text-sm min-h-[3.75rem]">{t(useCase.shortDescKey)}</CardDescription>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-start pt-0 md:pt-0">
                <p className="text-foreground/90 text-base">{t(useCase.longDescKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

