import ParticlesBackground from "./ParticlesBackground";
import { Mail, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <ParticlesBackground />

      <div className="relative z-10 text-center max-w-3xl">
        <h1
          className="text-[clamp(3rem,8vw,5rem)] font-bold tracking-tight leading-none animate-fade-in-up mb-4"
          style={{ animationDelay: "0.1s", fontFamily: "'Inter', 'Noto Sans SC', sans-serif" }}
        >
          罗子初
        </h1>

        <p
          className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium text-[var(--color-text-secondary)] animate-fade-in-up mb-3"
          style={{ animationDelay: "0.35s" }}
        >
          资深引擎开发工程师
        </p>

        <p
          className="text-[clamp(0.875rem,2vw,1.125rem)] text-[var(--color-text-tertiary)] animate-fade-in-up mb-10"
          style={{ animationDelay: "0.5s" }}
        >
          将复杂的技术问题，转化为清晰的工程方案。
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="mailto:rainknightpox@gmail.com"
            className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
            style={{ background: "var(--color-accent-gradient)" }}
          >
            <Mail size={18} />
            联系我
          </a>
          {/* 下载简历按钮 — 等待PDF文件生成后启用 */}
          {/* <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-[var(--color-text-primary)] border border-[var(--color-border-hover)] transition-all duration-200 hover:border-[rgba(255,255,255,0.2)] active:scale-[0.97]"
          >
            <Download size={18} />
            下载简历
          </a> */}
        </div>
      </div>

      {/* 滚动指示器 */}
      <div
        className="absolute bottom-10 flex flex-col items-center gap-2 text-[var(--color-text-tertiary)] text-xs animate-fade-in"
        style={{ animationDelay: "1.5s" }}
      >
        <span>向下滚动</span>
        <ChevronDown
          size={18}
          style={{ animation: "scrollBounce 2s var(--ease-in-out) infinite" }}
        />
      </div>
    </section>
  );
}
