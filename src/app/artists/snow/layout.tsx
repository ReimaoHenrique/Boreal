import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJ SNOW - Boreal Crew | Techno Underground",
  description:
    "DJ Snow (@djsnow71) é um dos nomes mais respeitados da cena Techno underground brasileira. Conhecido por suas batidas profundas e atmosferas industriais que levam o público a uma jornada sonora intensa e imersiva.",
  keywords:
    "DJ Snow, djsnow71, Techno, música eletrônica underground, Boreal Crew, Brasil, Techno brasileiro, DJ underground",
  authors: [{ name: "Boreal Crew" }],
  creator: "Boreal Crew",
  publisher: "Boreal Crew",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://borealcrew.com"),
  alternates: {
    canonical: "/artistas/snow",
  },
  openGraph: {
    title: "DJ SNOW - Boreal Crew | Techno Underground",
    description:
      "DJ Snow (@djsnow71) é um dos nomes mais respeitados da cena Techno underground brasileira. Conhecido por suas batidas profundas e atmosferas industriais.",
    url: "https://borealcrew.com/artistas/snow",
    siteName: "Boreal Crew",
    images: [
      {
        url: "/assets/artists/snow.jpeg",
        width: 1200,
        height: 630,
        alt: "DJ Snow - Boreal Crew",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ SNOW - Boreal Crew | Techno Underground",
    description:
      "DJ Snow (@djsnow71) é um dos nomes mais respeitados da cena Techno underground brasileira. Conhecido por suas batidas profundas e atmosferas industriais.",
    images: ["/assets/artists/snow.jpeg"],
    creator: "@borealcrew",
  },
  other: {
    "theme-color": "#0ea5e9",
    "msapplication-TileColor": "#0ea5e9",
  },
};

export default function DJSnowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="dj-snow-layout">{children}</div>;
}
