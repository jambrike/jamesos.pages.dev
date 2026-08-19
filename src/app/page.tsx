import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import SwipeCards from "@/components/SwipeCards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import Link from "next/link";
import { Award, BookOpen, Trophy } from "lucide-react";

const JAMES_BIRTH_YEAR = 2008;
const LIMIT = 3; // featured project plus two supporting projects

export default function Home() {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <SwipeCards className="md:mr-8" />

        <div className="flex max-w-[320px] flex-col sm:max-w-full">
          <h1 className="title text-balance text-4xl sm:text-5xl">
            Hello, Monsieur/Madame 👋
          </h1>

          <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base">
            17yo software engineer from Ireland 🇮🇪
          </p>

          <p className="mt-4 max-w-sm text-balance text-sm sm:text-base">
            I like building things that mix software, electronics and a bit of mechanical engineering. Most of my time goes into robotics, weird hardware projects, maths, hackathons and figuring out how to make an idea actually work.
          </p>

          <div className="mt-6 flex items-center gap-1">
            <p className="text-balance text-sm font-semibold sm:text-base">
              Wanna know more about me? Chat with my custom chatbot
            </p>
            <ArrowDownRight className="hidden size-5 animate-bounce sm:block" />
            <ArrowDown className="block size-5 animate-bounce sm:hidden" />
          </div>

          <section className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="title text-2xl sm:text-3xl">highlights</h2>
          <LinkWithIcon
            href="/highlights"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="see more"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Outside the Lab",
              detail: "Sport, safety, and the things that keep me moving.",
              icon: Award,
            },
            {
              title: "VEX Worlds",
              detail: "Reached a peak ranking of #1 in Europe and went to the World Championship in St. Louis.",
              icon: Trophy,
            },
            {
              title: "Meitheal",
              detail: "Helping incoming first years settle in and feel welcome.",
              icon: BookOpen,
            },
          ].map(({ title, detail, icon: Icon }) => (
            <Link href="/highlights" key={title}>
              <Card className="h-full transition-colors hover:border-foreground/30">
                <CardHeader className="gap-3">
                  <Icon className="size-6" aria-hidden="true" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {detail}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">certificates</h2>
          <LinkWithIcon
            href="/mathematics"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view all"
          />
        </div>
        <p className="text-muted-foreground">
          View my UCC Math Tutor certification and Irish Mathematical Olympiad honours.
        </p>
      </section>
    </article>
  );
}
