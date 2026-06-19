import RevealWrapper from "./RevealWrapper";
import { projects } from "@/data/projects";

function ProjectCard({
  title,
  subtitle,
  description,
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  index: number;
}) {
  return (
    <RevealWrapper>
      <article
        className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[rgba(0,212,255,0.15)] active:scale-[0.98] h-full"
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[var(--color-accent-cyan)]">
          {title}
        </h3>
        <p
          className="text-xs tracking-wider mb-3 text-[var(--color-text-tertiary)] uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {subtitle}
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>
      </article>
    </RevealWrapper>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <RevealWrapper>
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold tracking-tight mb-16">
            精选项目
          </h2>
        </RevealWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
