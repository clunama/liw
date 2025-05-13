import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'LockedInWork',
  description: 'Dedícate a lo que te diferencia, deja el resto a la IA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.variable,
          'font-sans antialiased min-h-screen flex flex-col bg-gradient-to-br from-[#D91EFF] to-[#2C00FF] text-foreground selection:bg-primary selection:text-primary-foreground'
        )}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
