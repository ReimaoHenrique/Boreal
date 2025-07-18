import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOREAL CREW - First Dance | 2 de Fevereiro, 2025",
  description:
    "A primeira edição da Boreal Open Air foi uma experiência inesquecível de união, arte e celebração. Com a sensação de dever cumprido, agradecemos a todos que tornaram esse sonho possível — desde a produção até cada setor envolvido.",
  keywords:
    "Boreal Crew, Open Air, música eletrônica, DJ Aurora, Neon Beats, Cyber Wave, Paradise Beach Club, Rio de Janeiro",
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
    canonical: "/ultimoseventos/FirstDance",
  },
  openGraph: {
    title: "BOREAL CREW - First Dance | 2 de Fevereiro, 2025",
    description:
      "A primeira edição da Boreal Open Air foi uma experiência inesquecível de união, arte e celebração. Com a sensação de dever cumprido, agradecemos a todos que tornaram esse sonho possível — desde a produção até cada setor envolvido.",
    url: "https://borealcrew.vercel.app/ultimoseventos/openair",
    siteName: "Boreal Crew",
    images: [
      {
        url: "https://borealcrew.vercel.app/assets/events/FirstDance/CapaFirstDance.webp",
        width: 1024,
        height: 1536,
        alt: "Boreal Crew - First Dance",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOREAL CREW - First Dance  | 16 de Agosto, 2025",
    description:
      "A primeira edição da Boreal Open Air foi uma experiência inesquecível de união, arte e celebração. Com a sensação de dever cumprido, agradecemos a todos que tornaram esse sonho possível — desde a produção até cada setor envolvido.",
    images: [
      "https://borealcrew.vercel.app/assets/events/FirstDance/CapaFirstDance.webp",
    ],
    creator: "@borealcrew",
  },
  other: {
    "theme-color": "#0ea5e9",
    "msapplication-TileColor": "#0ea5e9",
  },
};

export default function OpenAirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="open-air-layout">{children}</div>;
}
