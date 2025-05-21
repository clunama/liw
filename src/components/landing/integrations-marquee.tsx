/*
"use client";

import { useLanguage } from "@/contexts/language-context";

const integrationsData = [
  { name: "Calendar", IconComponent: () => <img src="/calendar.png" alt="Calendar" className="h-40 w-auto object-contain" /> },
  { name: "Drive", IconComponent: () => <img src="/drive.png" alt="Drive" className="h-40 w-auto object-contain" /> },
  { name: "Excel", IconComponent: () => <img src="/excel.png" alt="Excel" className="h-40 w-auto object-contain" /> },
  { name: "Instagram", IconComponent: () => <img src="/instagram.png" alt="Instagram" className="h-40 w-auto object-contain" /> },
  { name: "PDF", IconComponent: () => <img src="/pdf.png" alt="PDF" className="h-40 w-auto object-contain" /> },
  { name: "SQL", IconComponent: () => <img src="/sql.png" alt="SQL" className="h-40 w-auto object-contain" /> },
  { name: "WhatsApp", IconComponent: () => <img src="/whatsapp.png" alt="WhatsApp" className="h-40 w-auto object-contain" /> },
];

const duplicatedIntegrations = [
  ...integrationsData,
  ...integrationsData,
  ...integrationsData,
  ...integrationsData,
];

export function IntegrationsMarquee() {
  const { language } = useLanguage();

  return (
    <div className="overflow-hidden py-8">
      <div className="flex animate-marquee space-x-8">
        {duplicatedIntegrations.map((integration, index) => (
          <div
            key={`${integration.name}-${index}`}
            className="inline-block mx-12 md:mx-16"
            title={integration.name}
          >
            <integration.IconComponent />
          </div>
        ))}
      </div>
    </div>
  );
}

*/