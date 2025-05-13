
"use client";

import { Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { CtaButtons } from './cta-buttons';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-20 md:pt-32 pb-10 md:pb-16 text-center">
      <div className="container mx-auto px-4">
        <Bot className="mx-auto h-20 w-20 md:h-28 md:w-28 text-primary mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }} />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-md animate-fadeIn md:leading-tight" style={{ animationDelay: '0.4s' }}>
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          {t('heroSubtitle')}
        </p>
        <div className="animate-fadeIn flex justify-center" style={{ animationDelay: '0.8s' }}>
          <CtaButtons />
        </div>
      </div>
      <style jsx>{`
        .text-shadow-md {
          text-shadow: 0px 2px 4px rgba(0,0,0,0.1);
        }
        @media (prefers-color-scheme: dark) {
           .text-shadow-md {
             text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
           }
        }
      `}</style>
    </section>
  );
}

