
"use client";

import { useLanguage } from "@/contexts/language-context";

const businessTypes_es = [
  "Peluquerías", 
  "Bienes Raíces", 
  "Marketing", 
  "Automotoras", 
  "Petshops", 
  "Centros Médicos", 
  "Veterinarias", 
  "Restaurantes"
];

const businessTypes_en = [
  "Hair Salons",
  "Real Estate",
  "Marketing",
  "Car Dealerships",
  "Pet Shops",
  "Medical Centers",
  "Veterinary Clinics",
  "Restaurants"
];

const businessTypes_de = [
  "Friseursalons",
  "Immobilien",
  "Marketing",
  "Autohäuser",
  "Tierhandlungen",
  "Medizinische Zentren",
  "Tierkliniken",
  "Restaurants"
];

const businessTypes_pt = [
  "Salões de Cabeleireiro",
  "Imobiliárias",
  "Marketing",
  "Concessionárias de Carros",
  "Pet Shops",
  "Centros Médicos",
  "Clínicas Veterinárias",
  "Restaurantes"
];

const businessTypes_fr = [
  "Salons de Coiffure",
  "Immobilier",
  "Marketing",
  "Concessionnaires Automobiles",
  "Animaleries",
  "Centres Médicaux",
  "Cliniques Vétérinaires",
  "Restaurants"
];

const getBusinessTypesByLang = (lang: string) => {
  switch (lang) {
    case 'es': return businessTypes_es;
    case 'en': return businessTypes_en;
    case 'de': return businessTypes_de;
    case 'pt': return businessTypes_pt;
    case 'fr': return businessTypes_fr;
    default: return businessTypes_es;
  }
}


export function BusinessMarquee() {
  const { language } = useLanguage();
  const businessTypes = getBusinessTypesByLang(language);
  const duplicatedBusinessTypes = [...businessTypes, ...businessTypes, ...businessTypes, ...businessTypes]; // Duplicate for seamless scroll

  return (
    <section className="py-8 md:py-12 w-full bg-transparent overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee whitespace-nowrap flex">
          {duplicatedBusinessTypes.map((type, index) => (
            <span key={index} className="text-xl md:text-3xl font-semibold text-foreground mx-6 md:mx-8"> {/* Increased font size */}
              {type}
            </span>
          ))}
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex">
           {duplicatedBusinessTypes.map((type, index) => (
            <span key={index} className="text-xl md:text-3xl font-semibold text-foreground mx-6 md:mx-8">  {/* Increased font size */}
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

