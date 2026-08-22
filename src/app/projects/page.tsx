import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heron Labs & Agami | James O'Sullivan Projects",
  description:
    "Projects by James O'Sullivan, including Heron Labs' Agami: a semi-autonomous river-monitoring vessel built with embedded sensing, GPS, LTE telemetry and robotics.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">my projects.</h1>

      <Projects />
    </article>
  );
}
