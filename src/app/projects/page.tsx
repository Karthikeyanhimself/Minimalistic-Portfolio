/* 
 * Copyright (c) 2025 Your Name
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

// src/app/projects/page.tsx
"use client";
// import { ProjectCard } from "@/components/project-card";
// import { projects } from "@/lib/projects-data";

// export default function ProjectsPage() {
//   return (
//     <div
//       className="container mx-auto px-6 py-16"
//       style={{
//         fontFamily:
//           '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
//       }}
//     >
//       <section className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4">
//           Digital Craftsmanship
//         </h1>
//         <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto leading-relaxed text-center font-light">
//           A curated collection of my work, showcasing a passion for creating
//           elegant and effective solutions. Each project is a story of a
//           challenge met with code and creativity.
//         </p>
//       </section>

//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projects.map((project) => (
//           <ProjectCard key={project.slug} project={project} />
//         ))}
//       </section>
//     </div>
//   );
// }
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center px-6"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extralight tracking-tight mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Page under development
      </motion.h1>

      <motion.p
        className="text-base md:text-lg text-gray-500 max-w-lg mx-auto leading-relaxed font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hey! maybe you can visit my{" "}
        <a
          href="https://github.com/Karthikeyanhimself"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub profile
        </a>{" "}
        to see the projects I did.
      </motion.p>

      <motion.div
        className="mt-10 flex space-x-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delay: 1, staggerChildren: 0.2 },
          },
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-gray-400"
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: {
                opacity: 1,
                y: [0, -8, 0],
                transition: {
                  repeat: Infinity,
                  duration: 0.8,
                  delay: i * 0.2,
                },
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}