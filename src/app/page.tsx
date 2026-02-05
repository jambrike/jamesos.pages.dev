import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import SwipeCards from "@/components/SwipeCards";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const JAMES_BIRTH_YEAR = 2008;
const LIMIT = 2; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <SwipeCards className="md:mr-8" />

        <div className="flex max-w-[320px] flex-col sm:max-w-full">
          <h1 className="title text-balance text-4xl sm:text-5xl">
            Hello, Monsieur/Madame 👋
          </h1>

          <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base">
            {new Date().getFullYear() - JAMES_BIRTH_YEAR}
            yo software & mechatronics engineer from Ireland 🇮🇪
          </p>

          <p className="mt-4 max-w-sm text-balance text-sm sm:text-base">
            Aspiring software and mechatronics engineer with hands-on experience in hardware integration, computer vision, and web development. Active in hackathons, engineering competitions, and building innovative projects that merge software with real-world applications.
          </p>

          <div className="mt-6 flex items-center gap-1">
            <p className="text-balance text-sm font-semibold sm:text-base">
              For Q&A, chat with James Support
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
          <h2 className="title text-3xl">recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  );
}
