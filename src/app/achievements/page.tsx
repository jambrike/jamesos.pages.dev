import {
  Award,
  BookOpen,
  BrainCircuit,
  Handshake,
  Rocket,
  Trophy,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const achievements = [
  {
    icon: Award,
    title: "Outside the Lab",
    detail:
      "Placed 1st in the Munster Schools Badminton Championship, 2nd in tennis, completed the 10k Cork Marathon, and earned Lifeguard and First Aid certifications.",
  },
  {
    icon: Handshake,
    title: "Patch 2026",
    detail:
      "Joined a cohort of 36 young people aged 16–23 and lived in Dublin for two months while developing Heron Labs.",
  },
  {
    icon: Trophy,
    title: "VEX Robotics World Championship",
    detail:
      "Went to St. Louis, Missouri, with our robotics team for the VEX World Championship. We raised the money to go through sponsorships and even speaking on 96FM, and received a letter from the President.",
    href: "/projects",
    linkLabel: "See it in projects →",
  },
  {
    icon: Award,
    title: "Hack Club Vienna",
    detail:
      "Earned a fully-paid ticket to an international Hack Club hackathon in Vienna. It was really fun!",
  },
  {
    icon: Rocket,
    title: "Heron Labs — Agami",
    detail:
      "Built an autonomous river-monitoring robot designed to track pollution sources, working as the software and electronics lead.",
    href: "https://heronlabs.ie",
  },
  {
    icon: BrainCircuit,
    title: "Irish Mathematical Olympiad",
    detail:
      "Competed in the 2026 Irish Maths Olympiad and received an honourable mention.",
  },
  {
    icon: BookOpen,
    title: "Meitheal team leader",
    detail:
      "As a Meitheal team leader, I helped incoming first years settle in, supported them through the transition, and made sure they felt welcome.",
  },
  {
    icon: Rocket,
    title: "Projects & Experiments",
    detail:
      "Built Edith Glasses, Red-light Green-light, a Murdle app, an Othello study site, and this portfolio website.",
  },
  {
    icon: Handshake,
    title: "Work & Volunteering",
    detail:
      "Gained experience at Workvivo/Zoom, Coakley Moloney Solicitors, and Dunnes Stores, and volunteered at Cork Penny Dinners.",
  },
];

export default function AchievementsPage() {
  return (
    <article className="mt-8 flex flex-col gap-10 pb-16">
      <section className="max-w-2xl">
        <p className="text-sm font-medium text-muted-foreground">a few things I&apos;m proud of</p>
        <h1 className="title mt-2 text-4xl sm:text-5xl">highlights over the years.</h1>
        <p className="mt-4 text-muted-foreground">
          From building robots to helping other students build them, these are the
          experiences that have shaped how I learn, lead, and make things.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {achievements.map(({ icon: Icon, title, detail, href, linkLabel }) => {
          const content = (
            <Card className="h-full transition-colors hover:border-foreground/30">
              <CardHeader>
                <Icon className="mb-2 size-7" aria-hidden="true" />
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {detail}
                {href && (
                  <p className="mt-3 font-medium text-foreground">
                    {linkLabel || "Visit Heron Labs →"}
                  </p>
                )}
              </CardContent>
            </Card>
          );

          return href ? (
            <a href={href} target="_blank" rel="noreferrer" key={title}>
              {content}
            </a>
          ) : (
            <div key={title}>{content}</div>
          );
        })}
      </section>

    </article>
  );
}
