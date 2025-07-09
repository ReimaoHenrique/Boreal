import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Artistas - Boreal Club",
    template: "%s | Boreal Club",
  },
  description:
    "Conheça os talentos que fazem do Boreal Club a experiência mais imersiva de música eletrônica do Brasil.",
  keywords:
    "artistas, DJs, música eletrônica, Boreal Club, Brasil, Progressive House, Techno, Synthwave",
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
    canonical: "/artistas",
  },
  openGraph: {
    title: "Artistas - Boreal Club",
    description:
      "Conheça os talentos que fazem do Boreal Club a experiência mais imersiva de música eletrônica do Brasil.",
    url: "https://borealclub.com/artistas",
    siteName: "Boreal Club",
    images: [
      {
        url: "/assets/artists-og.jpg",
        width: 1200,
        height: 630,
        alt: "Artistas - Boreal Club",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistas - Boreal Club",
    description:
      "Conheça os talentos que fazem do Boreal Club a experiência mais imersiva de música eletrônica do Brasil.",
    images: ["/assets/artists-og.jpg"],
    creator: "@borealclub",
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
