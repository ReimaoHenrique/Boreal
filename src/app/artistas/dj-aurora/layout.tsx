import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJ AURORA - Boreal Club | Progressive House",
  description:
    "Pioneira do Progressive House no Brasil, DJ Aurora é conhecida por suas transições suaves e atmosferas mágicas que transportam o público para dimensões sonoras únicas. Confira sua performance no Boreal Club - Paradise Edition!",
  keywords:
    "DJ Aurora, Progressive House, Boreal Club, música eletrônica, Brasil, DJ brasileira",
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
    canonical: "/artistas/dj-aurora",
  },
  openGraph: {
    title: "DJ AURORA - Boreal Club | Progressive House",
    description:
      "Pioneira do Progressive House no Brasil, DJ Aurora é conhecida por suas transições suaves e atmosferas mágicas que transportam o público para dimensões sonoras únicas.",
    url: "https://borealclub.com/artistas/dj-aurora",
    siteName: "Boreal Club",
    images: [
      {
        url: "/assets/artists/dj-aurora-og.jpg",
        width: 1200,
        height: 630,
        alt: "DJ Aurora - Boreal Club",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ AURORA - Boreal Club | Progressive House",
    description:
      "Pioneira do Progressive House no Brasil, DJ Aurora é conhecida por suas transições suaves e atmosferas mágicas.",
    images: ["/assets/artists/dj-aurora-og.jpg"],
    creator: "@borealclub",
  },
  other: {
    "theme-color": "#0ea5e9",
    "msapplication-TileColor": "#0ea5e9",
  },
};

export default function DJAuroraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="dj-aurora-layout">{children}</div>;
}
