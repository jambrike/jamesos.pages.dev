import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://jamesosullivan.space";
const watchUrl = `${siteUrl}/watch/agami`;
const videoUrl = `${siteUrl}/heron-demo.m4v`;
const thumbnailUrl = `${siteUrl}/heron-agami.webp`;

export const metadata: Metadata = {
  title: "Watch Agami River-Monitoring Vessel Demo | James O'Sullivan",
  description:
    "Watch a demonstration of Agami, Heron Labs' semi-autonomous river-monitoring vessel, built by James O'Sullivan with embedded sensors, GPS, LTE telemetry and environmental monitoring systems.",
  alternates: { canonical: "/watch/agami" },
  openGraph: {
    type: "video.other",
    url: watchUrl,
    title: "Agami river-monitoring vessel demo",
    description:
      "A demonstration of Agami, a semi-autonomous vessel for environmental river monitoring.",
    images: [{ url: thumbnailUrl, alt: "Agami river-monitoring vessel" }],
  },
};

export default function AgamiWatchPage() {
  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Agami river-monitoring vessel demo",
    description:
      "A demonstration of Agami, Heron Labs' semi-autonomous river-monitoring vessel. James O'Sullivan developed the embedded sensing, GPS, LTE telemetry, navigation and monitoring systems.",
    thumbnailUrl,
    uploadDate: "2026-08-06T21:18:09+01:00",
    contentUrl: videoUrl,
    embedUrl: watchUrl,
  };

  return (
    <article className="mt-8 flex flex-col gap-6 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
      />
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-muted-foreground">Heron Labs · Agami</p>
        <h1 className="title mt-2 text-4xl sm:text-5xl">Agami demo.</h1>
        <p className="mt-4 text-muted-foreground">
          Watch Agami, a semi-autonomous vessel built to collect GPS-tagged water-quality
          measurements while navigating waterways.
        </p>
      </header>

      <video
        className="aspect-video w-full rounded-lg bg-zinc-950 object-contain"
        controls
        preload="metadata"
        poster="/heron-agami.webp"
      >
        <source src="/heron-demo.m4v" type="video/mp4" />
        Your browser does not support embedded video.
      </video>

      <p className="max-w-2xl text-sm text-muted-foreground">
        James co-founded Heron Labs and developed major parts of Agami&apos;s embedded sensing,
        ESP32 firmware, LTE/GNSS telemetry, GPS navigation and web-based monitoring.
      </p>
      <Link className="link w-fit" href="/projects">← Back to projects</Link>
    </article>
  );
}
