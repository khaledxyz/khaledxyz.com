import type { Metadata } from "next";
import { Poppins as FontSans } from 'next/font/google';
import "./styles/globals.css";
import 'src/assets/iconify-icons/generated-icons.css'
import { cn } from "src/lib/utils";
import { ThemeProvider } from "src/components/theme-provider";
import { Toaster } from "src/components/ui/sonner";
import Navbar from "src/components/navbar";
import ActiveSectionContextProvider from "src/context/active-section-context";
import Footer from "src/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const fontSans = FontSans({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "khaledxyz",
  description: "Khaled is a full-stack developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang='en' className={fontSans.className}>
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            <Navbar />
            <main vaul-drawer-wrapper="" className="bg-background">
              {children}
              <SpeedInsights />
            </main>
            <Footer />
            <Toaster richColors />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
