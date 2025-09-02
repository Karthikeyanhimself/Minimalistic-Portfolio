// src/app/projects/[slug]/page.tsx
import { projects } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const fontStyle = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16" style={fontStyle}>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1
            className="text-3xl md:text-5xl font-extralight tracking-tighter mb-4"
            style={fontStyle}
          >
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-light" style={fontStyle}>
            {project.description}
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <h3
                className="text-base md:text-lg mb-3 font-normal"
                style={fontStyle}
              >
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    style={fontStyle}
                    className="
            text-sm md:text-base 
            text-gray-500 
            font-light 
            leading-relaxed
            border border-gray-300
            rounded
            px-2 py-1
            transition-colors duration-200
            hover:bg-gray-100 hover:text-gray-700
          "
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>

          <div className="md:col-span-2">
            <section className="mb-8">
              <h2
                className="text-2xl md:text-3xl tracking-tight mb-2 font-normal"
                style={fontStyle}
              >
                The Challenge
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light" style={fontStyle}>
                {project.caseStudy.problem}
              </p>
            </section>
            <section className="mb-8">
              <h2
                className="text-2xl md:text-3xl tracking-tight mb-2 font-normal"
                style={fontStyle}
              >
                The Solution
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light" style={fontStyle}>
                {project.caseStudy.solution}
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
