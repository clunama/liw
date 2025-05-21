
import { HeroSection } from '@/components/landing/hero';
import { BenefitsSection } from '@/components/landing/benefits';
import { PricingSection } from '@/components/landing/pricing';
import { BusinessMarquee } from '@/components/landing/business-marquee';
// import { IntegrationsMarquee } from '@/components/landing/integrations-marquee';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <BenefitsSection />
      <BusinessMarquee />
      <PricingSection />
      {/* <IntegrationsMarquee /> */}
    </div>
  );
}
