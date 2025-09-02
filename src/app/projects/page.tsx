/* 
 * Copyright (c) 2025 Your Name
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

// src/app/projects/page.tsx
"use client";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <div
      className="container mx-auto px-6 py-16"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      }}
    >
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4">
          Digital Craftsmanship
        </h1>
        <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto leading-relaxed text-center font-light">
          A curated collection of my work, showcasing a passion for creating
          elegant and effective solutions. Each project is a story of a
          challenge met with code and creativity.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}