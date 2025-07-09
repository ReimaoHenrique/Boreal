import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOREAL CLUB - MYSTIC EDITION | 20 de Setembro, 2025",
  description:
    "Uma jornada mística através da música eletrônica. O Boreal Club apresenta Mystic Edition, uma experiência transcendental com os melhores DJs da cena nacional em um ambiente místico e envolvente.",
  keywords:
    "Boreal Club, Mystic Edition, música eletrônica, DJ Aurora, Neon Beats, Cyber Wave, Paradise Beach Club, Rio de Janeiro, evento místico",
  authors: [{ name: "Boreal Club" }],
  creator: "Boreal Club",
  publisher: "Boreal Club",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://borealclub.com"),
  alternates: {
    canonical: "/proximoevento/mysticedition",
  },
  openGraph: {
    title: "BOREAL CLUB - MYSTIC EDITION | 20 de Setembro, 2025",
    description:
      "Uma jornada mística através da música eletrônica. O Boreal Club apresenta Mystic Edition, uma experiência transcendental com os melhores DJs da cena nacional.",
    url: "https://borealclub.com/proximoevento/mysticedition",
    siteName: "Boreal Club",
    images: [
      {
        url: "/assets/events/mystic-edition-og.jpg",
        width: 1200,
        height: 630,
        alt: "Boreal Club - Mystic Edition",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOREAL CLUB - MYSTIC EDITION | 20 de Setembro, 2025",
    description:
      "Uma jornada mística através da música eletrônica. O Boreal Club apresenta Mystic Edition, uma experiência transcendental com os melhores DJs da cena nacional.",
    images: ["/assets/events/mystic-edition-og.jpg"],
    creator: "@borealclub",
  },
  other: {
    "theme-color": "#0ea5e9",
    "msapplication-TileColor": "#0ea5e9",
  },
};

export default function MysticEditionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mystic-edition-layout">{children}</div>;
}
