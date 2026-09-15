import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { isLocale, locales, localizedPath } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { alternatesFor, openGraphLocale, SITE_URL } from "@/lib/seo";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    title: {
      default: dict.meta.title,
      template: "%s - Hernan Rochon",
    },
    description: dict.meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: alternatesFor("/", locale),
    openGraph: {
      type: "website",
      locale: openGraphLocale(locale),
      alternateLocale: openGraphLocale(locale === "es" ? "en" : "es"),
      url: localizedPath("/", locale),
      siteName: "Hernan Rochon",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/opengraph-image"],
    },
    icons: { icon: "/icon.svg" },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn("h-full", "antialiased", "font-sans", inter.variable, jetbrainsMono.variable)}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col flex-1 min-h-screen">
            <Navbar locale={locale} dict={dict.nav} />
            <main className="flex-1">{children}</main>
            <Footer dict={dict.footer} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
