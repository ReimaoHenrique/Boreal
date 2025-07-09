import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Artistas - Boreal Crew",
    template: "%s | Boreal Crew",
  },
  description:
    "Conheça os talentos que fazem do Boreal Crew a experiência mais imersiva de música eletrônica do Brasil.",
  keywords:
    "artistas, DJs, música eletrônica, Boreal Crew, Brasil, Progressive House, Techno, Synthwave",
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
    canonical: "/artistas",
  },
  openGraph: {
    title: "Artistas - Boreal Crew",
    description:
      "Conheça os talentos que fazem do Boreal Crew a experiência mais imersiva de música eletrônica do Brasil.",
    url: "https://borealcrew.com/artistas",
    siteName: "Boreal Crew",
    images: [
      {
        url: "/assets/artists-og.jpg",
        width: 1200,
        height: 630,
        alt: "Artistas - Boreal Crew",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistas - Boreal Crew",
    description:
      "Conheça os talentos que fazem do Boreal Crew a experiência mais imersiva de música eletrônica do Brasil.",
    images: ["/assets/artists-og.jpg"],
    creator: "@borealcrew",
  },
  other: {
    "theme-color": "#0ea5e9",
    "msapplication-TileColor": "#0ea5e9",
  },
};

export default function ArtistasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="artistas-layout">{children}</div>;
}
