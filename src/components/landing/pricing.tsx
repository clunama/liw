
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  const { t } = useLanguage();

  const fullPriceText = t('pricingPlanName');
  const lastSpaceIndex = fullPriceText.lastIndexOf(' ');
  
  let mainPricePart = fullPriceText;
  let currencyFrequencyPart = '';

  if (lastSpaceIndex !== -1 && lastSpaceIndex < fullPriceText.length - 1) {
    mainPricePart = fullPriceText.substring(0, lastSpaceIndex);
    currencyFrequencyPart = fullPriceText.substring(lastSpaceIndex + 1);
  }

  return (
    <section className="py-8 md:py-12 w-full">
      <div className="container mx-auto px-4">
        {/* Removed "Democratizando la IA" title and the subtitle below it */}
        
        <div className="flex justify-center pt-8"> {/* Added pt-8 here to maintain some top spacing after removing subtitle */}
          <Card 
            className="w-full max-w-md bg-card/90 border-primary/50 shadow-2xl hover:shadow-primary/40 transition-all duration-300 animate-fadeIn transform hover:scale-105"
            style={{ animationDelay: '0.4s' }}
          >
            <CardHeader className="text-center items-center">
              <div className="p-4 bg-primary/20 rounded-full mb-4 inline-block">
                <Zap className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">
                {mainPricePart}
                {currencyFrequencyPart && (
                  <span className="text-xs font-medium align-baseline"> {currencyFrequencyPart}</span>
                )}
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                {t('pricingPlanDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="space-y-3 text-left mt-3 mb-8 text-foreground/90">
                {[
                  t('pricingFeature1'),
                  t('pricingFeature2'),
                  t('pricingFeature3'),
                  t('pricingFeature4'),
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-soft shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
                <Link href="/book-appointment">
                  {t('pricingCta')}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

