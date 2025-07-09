import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Boreal Crew - Paradise Edition",
  description:
    "A experiência mais imersiva de música eletrônica do Brasil. Prepare-se para uma noite inesquecível no Paradise Beach Club.",
  keywords: [
    "música eletrônica",
    "festa",
    "boreal crew",
    "paradise edition",
    "copacabana",
    "Salvador Bahia",
  ],
  authors: [{ name: "Boreal Crew" }],
  openGraph: {
    title: "Boreal Crew - Paradise Edition",
    description: "A experiência mais imersiva de música eletrônica do Brasil.",
    type: "website",
    locale: "pt_BR",
    siteName: "Boreal Crew",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boreal Crew - Paradise Edition",
    description: "A experiência mais imersiva de música eletrônica do Brasil.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
