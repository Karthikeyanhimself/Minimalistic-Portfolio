/* 
 * Copyright (c) 2025 Karthikeyan Reddy T
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

// src/components/project-card.tsx
import Link from "next/link";
import type { Project } from "@/lib/projects-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card
        className="h-full bg-white/70 border border-gray-200 rounded-xl backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"
        style={{
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
        }}
      >
        {/* Project Text */}
        <CardHeader className="pt-5 pb-2 px-5">
          <CardTitle className="font-headline text-xl tracking-tight text-gray-900">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed text-sm">
            {project.description}
          </CardDescription>
        </CardHeader>

        {/* Call to Action */}
        <CardContent className="px-5 pb-5">
          <div className="flex items-center text-sm font-medium text-gray-800 group-hover:text-black transition-colors">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
