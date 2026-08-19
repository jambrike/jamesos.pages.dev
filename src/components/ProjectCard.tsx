"use client";

import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Project } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { createElement, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import Icon from "./Icon";

interface Props {
  project: Project;
}

function InteractiveModel({ model, name }: { model: string; name: string }) {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return createElement("model-viewer", {
    src: model,
    "camera-controls": true,
    "auto-rotate": true,
    "shadow-intensity": "1",
    "interaction-prompt": "none",
    "camera-orbit": "0deg 75deg 2.5m",
    "min-camera-orbit": "auto auto 1m",
    "max-camera-orbit": "auto auto 5m",
    "aria-label": `${name} interactive 3D model`,
    style: { height: "18rem", width: "100%", background: "#09090b" },
  });
}

export function ProjectCard({ project }: Props) {
  const { name, href, description, image, video, model, featured, tags, links } =
    project;

  return (
    <Card className={cn("flex flex-col", featured && "sm:col-span-2")}>
      <CardHeader className={cn(video && image && "space-y-3")}>
        {model && <InteractiveModel model={model} name={name} />}
        {video && (
          <video
            className="aspect-video w-full bg-zinc-950 object-contain"
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            onEnded={(event) => {
              event.currentTarget.currentTime = 0;
              event.currentTarget.pause();
            }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        )}
        {image && (
          <Link href={href || image}>
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              className={cn(
                "h-40 w-full object-cover object-top",
                featured && "bg-zinc-950 object-contain sm:h-72",
              )}
            />
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle>{name}</CardTitle>
        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </CardContent>
      <CardFooter className="flex h-full flex-col items-start justify-between gap-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.toSorted().map((tag) => (
              <Badge
                key={tag}
                className="px-1 py-0 text-[10px]"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.toSorted().map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  <Icon name={link.icon} className="size-3" />
                  {link.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
