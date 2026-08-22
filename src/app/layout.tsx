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
  title: "James O'Sullivan | Software Engineer, Heron Labs Co-Founder",
  description:
    "James O'Sullivan is a Cork, Ireland software and mechatronics engineering student, co-founder of Heron Labs and Patch accelerator participant. His work includes Agami, robotics, embedded systems, computer vision and environmental monitoring.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "James O'Sullivan | Software Engineer, Heron Labs Co-Founder",
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
          "Software and mechatronics engineering student from Cork, Ireland; co-founder and engineer at Heron Labs; Patch accelerator participant.",
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
