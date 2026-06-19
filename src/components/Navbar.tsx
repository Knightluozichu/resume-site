"use client";

import { useState } from "react";
import { useNavScroll, useActiveSection } from "@/hooks/useNavScroll";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "experience", label: "工作经历" },
  { id: "projects", label: "精选项目" },
  { id: "tech", label: "技术能力" },
  { id: "patents", label: "专利" },
  { id: "contact", label: "联系" },
];

export default function Navbar() {
  const isSticky = useNavScroll();
  const activeSection = useActiveSection(sections.map((s) => s.id));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isSticky
            ? "glass-nav border-b border-[var(--color-border-default)] shadow-sm"
            : "bg-transparent"
        }`}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="mx-auto max-w-6xl h-full flex items-center justify-between px-6 md:px-12">
          <a
            href="#hero"
            className="text-base font-semibold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent-cyan)] transition-colors"
          >
            罗子初
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-active={activeSection === s.id}
                className="nav-link relative text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors py-2"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[var(--color-text-secondary)]"
            onClick={() => setMobileOpen(true)}
            aria-label="打开菜单"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-60 md:hidden flex flex-col items-center justify-center gap-6 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(10, 10, 15, 0.97)",
          backdropFilter: "blur(24px)",
        }}
      >
        <button
          className="absolute top-6 right-6 p-2 text-[var(--color-text-secondary)]"
          onClick={() => setMobileOpen(false)}
          aria-label="关闭菜单"
        >
          <X size={24} />
        </button>
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={() => setMobileOpen(false)}
            className={`text-xl font-medium transition-all duration-300 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{
              transitionDelay: `${i * 0.05}s`,
              color: activeSection === s.id ? "var(--color-accent-cyan)" : "var(--color-text-primary)",
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </>
  );
}
