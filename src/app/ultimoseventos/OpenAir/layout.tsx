import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOREAL CREW - PARADISE EDITION | 15 de Agosto, 2025",
  description:
    "A experiência mais imersiva de música eletrônica do Brasil. Uma noite inesquecível com os melhores DJs da cena nacional, em um ambiente paradisíaco à beira-mar no Paradise Beach Club.",
  keywords:
    "Boreal Crew, Paradise Edition, música eletrônica, DJ Aurora, Neon Beats, Cyber Wave, Paradise Beach Club, Rio de Janeiro",
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
    title: "BOREAL CREW - PARADISE EDITION | 15 de Agosto, 2025",
    description:
      "A primeira edição da Boreal Open Air foi uma experiência inesquecível de união, arte e celebração. Com a sensação de dever cumprido, agradecemos a todos que tornaram esse sonho possível — desde a produção até cada setor envolvido.",
    url: "https://borealcrew.vercel.app/ultimoseventos/paradiseedition",
    siteName: "Boreal Crew",
    images: [
      {
        url: "https://borealcrew.vercel.app/assets/events/OpenAir/CapaOpenAir.jpeg",
        width: 1350,
        height: 1688,
        alt: "Boreal Crew - Open Air",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOREAL CREW - PARADISE EDITION | 15 de Agosto, 2025",
    description:
      "A primeira edição da Boreal Open Air foi uma experiência inesquecível de união, arte e celebração. Com a sensação de dever cumprido, agradecemos a todos que tornaram esse sonho possível — desde a produção até cada setor envolvido.",
    images: [
      "https://borealcrew.vercel.app/assets/events/OpenAir/CapaOpenAir.jpeg",
    ],
    creator: "@borealcrew",
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
