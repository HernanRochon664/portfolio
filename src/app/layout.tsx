import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: 'Hernan Rochon — ML Engineer & Data Scientist',
    template: '%s — Hernan Rochon',
  },
  description: 'ML Engineer and Data Scientist building production ML systems with a focus on interpretability and measurable impact.',
  metadataBase: new URL('https://portfolio-five-mu-o76n21qfaq.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-five-mu-o76n21qfaq.vercel.app',
    siteName: 'Hernan Rochon',
    title: 'Hernan Rochon — ML Engineer & Data Scientist',
    description: 'ML Engineer and Data Scientist building production ML systems with a focus on interpretability and measurable impact.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hernan Rochon — ML Engineer & Data Scientist',
    description: 'ML Engineer and Data Scientist building production ML systems with a focus on interpretability and measurable impact.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", "font-sans", inter.variable, jetbrainsMono.variable)}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col flex-1 min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
