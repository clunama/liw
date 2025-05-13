
"use client";

import { useLanguage } from "@/contexts/language-context";
import { Database } from "lucide-react";

// SVG Icon Components
const GoogleSheetsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#188038"/>
    <path d="M14 2V8H20" fill="#107C34"/>
    <path d="M12 19L16 15L12 11" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 15H15.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 5.889V18C22 19.104 21.104 20 20 20H4C2.896 20 2 19.104 2 18V5.889L11.438 12.64C11.782 12.878 12.218 12.878 12.562 12.64L22 5.889Z" fill="#EA4335"/>
    <path d="M22 5.889L12.562 12.64C12.218 12.878 11.782 12.878 11.438 12.64L2 5.889L2.75 4.5C3.094 3.902 3.782 3.596 4.5 3.596H19.5C20.218 3.596 20.906 3.902 21.25 4.5L22 5.889Z" fill="#4285F4"/>
    <path d="M2 5.889V4.722C2 4.334 2.204 3.982 2.528 3.782L11.438 12.64L2 5.889Z" fill="#34A853"/>
    <path d="M22 5.889V4.722C22 4.334 21.796 3.982 21.472 3.782L12.562 12.64L22 5.889Z" fill="#FBBC05"/>
  </svg>
);

const GoogleDriveIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 192 166" xmlns="http://www.w3.org/2000/svg">
    <path d="M102.122 0 32 117.333l35.014 48.667L174.236 48.667 102.122 0z" fill="#fbbc04"/>
    <path d="M32 117.333 0 166h70.014L102.122 117.333H32z" fill="#0f9d58"/>
    <path d="M174.236 48.667 102.122 117.333l35.014 48.667H224L174.236 48.667z" fill="#4285f4"/>
  </svg>
);


const GoogleCalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z" fill="#4285F4"/>
    <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">31</text>
  </svg>
);

const PdfIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2H14.5858C14.851 2 15.1054 2.10536 15.2929 2.29289L19.7071 6.70711C19.8946 6.89464 20 7.149 20 7.41421V20C20 21.1046 19.1046 22 18 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2Z" fill="#F40F02"/>
    <path d="M14 2.5V7.5H19.5" stroke="#FF8A80" strokeWidth="0.5" strokeLinejoin="round"/> {/* Lighter red for folded corner line */}
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">PDF</text>
  </svg>
);


const SupabaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="supabaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#3ECF8E', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <path fill="url(#supabaseGradient)" d="M50,3.7L50,3.7C30.1,3.7,13.8,17.8,10,36.9c-1.7,8.4,1.9,17.2,8.4,22.2l29.3,22.8c1.5,1.2,3.6,1.2,5.1,0L81.6,59c6.5-5,10.1-13.8,8.4-22.2C86.2,17.8,69.9,3.7,50,3.7z M67.3,63.8L67.3,63.8c-0.8,0.6-1.7,0.9-2.7,0.9c-1,0-2-0.3-2.7-0.9L50,54.5l-11.9,9.3c-0.8,0.6-1.7,0.9-2.7,0.9c-1,0-2-0.3-2.7-0.9l0,0c-2.3-1.8-2.9-5.1-1.5-7.8L45.1,36c2.3-4.2,8.6-4.2,10.9-0.1l14.3,20.1C70.2,58.7,69.6,62,67.3,63.8z"/>
  </svg>
);


const integrationsData = [
  { name: "Google Sheets", IconComponent: GoogleSheetsIcon },
  { name: "Gmail", IconComponent: GmailIcon },
  //{ name: "Google Drive", IconComponent: GoogleDriveIcon },
  {
    name: "Drive Icon",
    IconComponent: ({ className }: { className?: string }) => (
      <img
        src="/drive_icon.svg"
        alt="Drive Icon"
        className={className}
        style={{ width: "64px", height: "64px" }} // Tamaño explícito
      />
    )
  },
  { name: "Google Calendar", IconComponent: GoogleCalendarIcon },
  { name: "PDF", IconComponent: PdfIcon },
  { name: "Supabase", IconComponent: SupabaseIcon },
  { name: "SQL", IconComponent: Database, colorClass: "text-blue-400" }, // Lucide icon
];

const duplicatedIntegrations = [...integrationsData, ...integrationsData, ...integrationsData, ...integrationsData];

export function IntegrationsMarquee() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 w-full bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 animate-fadeIn">
          {t('integrationsTitle')}
        </h2>
        <div className="relative flex overflow-x-hidden group">
          <div className="py-4 animate-marquee whitespace-nowrap flex items-center">
            {duplicatedIntegrations.map((integration, index) => (
              <div key={`marquee1-${index}-${integration.name}`} className="inline-block mx-6 md:mx-8" title={integration.name}>
                <integration.IconComponent className={`h-16 w-16 md:h-20 md:w-20 ${integration.colorClass || ''}`} />
              </div>
            ))}
          </div>
          <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex items-center">
            {duplicatedIntegrations.map((integration, index) => (
              <div key={`marquee2-${index}-${integration.name}`} className="inline-block mx-6 md:mx-8" title={integration.name}>
                 <integration.IconComponent className={`h-16 w-16 md:h-20 md:w-20 ${integration.colorClass || ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

