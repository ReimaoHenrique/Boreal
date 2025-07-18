import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOREAL CLUB - PARADISE EDITION | 15 de Agosto, 2025",
  description:
    "A experiência mais imersiva de música eletrônica do Brasil. Uma noite inesquecível com os melhores DJs da cena nacional, em um ambiente paradisíaco à beira-mar no Paradise Beach Club.",
  keywords:
    "Boreal Club, Paradise Edition, música eletrônica, DJ Aurora, Neon Beats, Cyber Wave, Paradise Beach Club, Rio de Janeiro",
  authors: [{ name: "Boreal Crew" }],
  creator: "Boreal Crew",
  publisher: "Boreal Crew",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://borealcrew.vercel.app/"),
  alternates: {
    canonical: "/ultimoseventos/paradiseedition",
  },
  openGraph: {
    title: "Boreal Crew - PARADISE EDITION | 15 de Agosto, 2025",
    description:
      "A experiência mais imersiva de música eletrônica do Brasil. Uma noite inesquecível com os melhores DJs da cena nacional, em um ambiente paradisíaco à beira-mar no Paradise Beach Club.",
    url: "https://borealcrew.vercel.app/ultimoseventos/paradiseedition",
    siteName: "Boreal Crew",
    images: [
      {
        url: "https://borealcrew.vercel.app/assets/events/ParadiseEdition/CapaParadiseEdition.jpg",
        width: 800,
        height: 800,
        alt: "Boreal Crew - Paradise Edition",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boreal Crew - PARADISE EDITION | 15 de Agosto, 2025",
    description:
      "A experiência mais imersiva de música eletrônica do Brasil. Uma noite inesquecível com os melhores DJs da cena nacional, em um ambiente paradisíaco à beira-mar no Paradise Beach Club.",
    images: ["https://borealcrew.vercel.app/assets/events/boreal.jpg"],
    creator: "@boreaCrew",
  },
  other: {
    "theme-color": "#0ea5e9",
    "msapplication-TileColor": "#0ea5e9",
  },
};

export default function ParadiseEditionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="paradise-edition-layout">{children}</div>;
}
