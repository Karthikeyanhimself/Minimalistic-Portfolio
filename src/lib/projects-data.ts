/* 
 * Copyright (c) 2025 Your Name
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

// src/lib/projects-data.ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  caseStudy: {
    problem: string;
    solution: string;
    techStack: string[];
  };
}

export const projects: Project[] = [
  {
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with a custom CMS and payment integration.',
    caseStudy: {
      problem: 'The client, a boutique fashion retailer, needed a robust online presence to expand their market reach. Their existing static website lacked e-commerce functionality, inventory management, and a way to engage with customers.',
      solution: 'We developed a scalable MERN stack application. The platform features a user-friendly product catalog, secure checkout with Stripe, and a custom-built CMS for managing products and orders. The design is clean, modern, and fully responsive, reflecting the brand\'s aesthetic.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API'],
    }
  },
  {
    slug: 'project-management-tool',
    title: 'Project Management Tool',
    description: 'A collaborative tool to help teams organize tasks and track progress seamlessly.',
    caseStudy: {
      problem: 'Small to medium-sized teams struggled with fragmented communication and inefficient task tracking using spreadsheets and emails. They needed a centralized, intuitive platform for project management.',
      solution: 'A real-time, collaborative project management app was built. It features Kanban boards, task assignments, deadline tracking, and an integrated chat function. The use of WebSockets allows for instant updates across all users, fostering seamless teamwork.',
      techStack: ['React', 'Firebase', 'Tailwind CSS', 'React-beautiful-dnd'],
    }
  },
  {
    slug: 'personal-blogging-platform',
    title: 'Personal Blogging Platform',
    description: 'A minimalist blogging platform with a focus on typography and readability.',
    caseStudy: {
      problem: 'Existing blogging platforms were often bloated with features, offering a poor writing and reading experience. The goal was to create a serene, distraction-free environment for writers and readers.',
      solution: 'We designed and built a clean, minimalist blogging platform using Next.js for static site generation, ensuring incredible performance and SEO. The editor uses Markdown for a simple writing experience, and the front-end prioritizes typography and whitespace for maximum readability.',
      techStack: ['Next.js', 'Markdown', 'Vercel', 'PostgreSQL'],
    }
  }
];
