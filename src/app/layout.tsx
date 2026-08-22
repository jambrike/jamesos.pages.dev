import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://jamesosullivan.space";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "James O'Sullivan | Patch 2026, VEX #1 Europe & Maths Olympiad",
  description:
    "James O'Sullivan is a Patch 2026 participant, VEX Robotics competitor whose team reached #1 in Europe, and Irish Mathematical Olympiad 2026 Honourable Mention recipient. He is a software and mechatronics engineering student from Cork, Ireland.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/fire-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/fire-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "James O'Sullivan | Patch 2026, VEX #1 Europe & Maths Olympiad",
    description:
      "Robotics, embedded systems and software projects by James O'Sullivan, including Heron Labs' Agami river-monitoring vessel.",
    images: [{ url: "/profile.jpg", alt: "James O'Sullivan" }],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "YwE7xpfkL1QTnj1GM3sOy6hVFZHOjhB-FKwgWTkuUko",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        mainEntity: { "@id": `${siteUrl}/#james-osullivan` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#james-osullivan`,
        name: "James O'Sullivan",
        url: siteUrl,
        image: `${siteUrl}/profile.jpg`,
        description:
          "Software and mechatronics engineering student from Cork, Ireland; Patch 2026 participant, VEX Robotics competitor and Irish Mathematical Olympiad Honourable Mention recipient.",
        jobTitle: "Co-Founder & Engineer",
        homeLocation: { "@type": "Place", name: "Cork, Ireland" },
        sameAs: [
          "https://www.linkedin.com/in/jamesosullivan123",
          "https://github.com/jambrike",
          "https://www.instagram.com/james_os08/",
        ],
        affiliation: [
          { "@id": `${siteUrl}/#heron-labs` },
          { "@type": "Organization", name: "Patch", url: "https://www.joinpatch.org/" },
        ],
        award: [
          "Patch 2026 — selected for the summer accelerator cohort of 36 young technologists, scientists and entrepreneurs",
          "VEX Robotics — peak team ranking of #1 in Europe; competitor at the VEX World Championship in St. Louis",
          "Irish Mathematical Olympiad (IrMO) 2026 — Honourable Mention",
          "Hack Club Vienna — earned a fully funded place at an international hackathon",
          "UCC Math Tutoring Programme — certified mathematics tutor",
        ],
        knowsAbout: ["Robotics", "Embedded systems", "Mechatronics", "Computer vision", "Environmental monitoring"],
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#heron-labs`,
        name: "Heron Labs",
        url: "https://heronlabs.ie",
        description: "Heron Labs develops Agami, a semi-autonomous vessel for river monitoring.",
        founder: { "@id": `${siteUrl}/#james-osullivan` },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          calistoga.variable,
        )}
      >
        <Providers>
          <Header />
          <div className="mx-auto flex max-w-3xl flex-col px-8">
            <main className="grow">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
