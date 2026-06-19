"use client";

import { useEffect, useRef } from "react";
import RevealWrapper from "./RevealWrapper";
import { radarData, techMatrix } from "@/data/tech-stack";

function RadarChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const center = { x: 160, y: 160 };
    const radius = 110;
    const sides = radarData.length;
    const angleStep = (2 * Math.PI) / sides;

    // 绘制背景网格
    const gridGroup = svg.querySelector(".grid-group")!;
    for (let level = 1; level <= 5; level++) {
      const r = (radius * level) / 5;
      const points = [];
      for (let i = 0; i < sides; i++) {
        const angle = angleStep * i - Math.PI / 2;
        points.push({
          x: center.x + r * Math.cos(angle),
          y: center.y + r * Math.sin(angle),
        });
      }
      const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      polygon.setAttribute(
        "points",
        points.map((p) => `${p.x},${p.y}`).join(" ")
      );
      polygon.setAttribute("fill", "none");
      polygon.setAttribute("stroke", "rgba(255,255,255,0.06)");
      polygon.setAttribute("stroke-width", "1");
      gridGroup.appendChild(polygon);
    }

    // 绘制轴线
    for (let i = 0; i < sides; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", String(center.x));
      line.setAttribute("y1", String(center.y));
      line.setAttribute("x2", String(center.x + radius * Math.cos(angle)));
      line.setAttribute("y2", String(center.y + radius * Math.sin(angle)));
      line.setAttribute("stroke", "rgba(255,255,255,0.06)");
      line.setAttribute("stroke-width", "1");
      gridGroup.appendChild(line);
    }

    // 绘制维度标签
    radarData.forEach((d, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const labelR = radius + 30;
      const x = center.x + labelR * Math.cos(angle);
      const y = center.y + labelR * Math.sin(angle);

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", String(x));
      text.setAttribute("y", String(y));
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "middle");
      text.setAttribute("fill", "var(--color-text-secondary)");
      text.setAttribute("font-size", "12");
      text.textContent = d.label;

      const valueText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      valueText.setAttribute("x", String(x));
      valueText.setAttribute("y", String(y + 14));
      valueText.setAttribute("text-anchor", "middle");
      valueText.setAttribute("dominant-baseline", "middle");
      valueText.setAttribute("fill", "var(--color-accent-cyan)");
      valueText.setAttribute("font-size", "10");
      valueText.setAttribute("font-weight", "600");
      valueText.textContent = `${d.value}/10`;

      svg.appendChild(text);
      svg.appendChild(valueText);
    });

    // 动画绘制数据多边形
    const polygon = svg.querySelector(".data-polygon")!;
    const targetPoints = radarData.map((d, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const r = (d.value / 10) * radius;
      return {
        x: center.x + r * Math.cos(angle),
        y: center.y + r * Math.sin(angle),
      };
    });

    let startTime: number | null = null;
    const duration = 1000;

    function animatePolygon(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const currentPoints = targetPoints.map((p) => ({
        x: center.x + (p.x - center.x) * eased,
        y: center.y + (p.y - center.y) * eased,
      }));

      polygon.setAttribute(
        "points",
        currentPoints.map((p) => `${p.x},${p.y}`).join(" ")
      );

      if (progress < 1) {
        requestAnimationFrame(animatePolygon);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animatePolygon);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 340"
      className="w-full max-w-[320px] mx-auto"
      style={{ overflow: "visible" }}
    >
      <g className="grid-group" />
      <polygon
        className="data-polygon"
        fill="rgba(0, 212, 255, 0.1)"
        stroke="var(--color-accent-cyan)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function TechMatrixTable() {
  return (
    <div className="overflow-x-auto -mx-4 px-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--color-border-default)]">
            <th className="py-3 pr-4 text-left text-xs tracking-wider text-[var(--color-text-tertiary)] uppercase">
              维度
            </th>
            <th className="py-3 px-4 text-left text-xs tracking-wider text-[var(--color-text-tertiary)] uppercase">
              精通
            </th>
            <th className="py-3 px-4 text-left text-xs tracking-wider text-[var(--color-text-tertiary)] uppercase">
              熟练
            </th>
            <th className="py-3 pl-4 text-left text-xs tracking-wider text-[var(--color-text-tertiary)] uppercase">
              了解
            </th>
          </tr>
        </thead>
        <tbody>
          {techMatrix.map((row) => (
            <tr
              key={row.dimension}
              className="border-b border-[var(--color-border-default)] last:border-0 group hover:bg-[rgba(255,255,255,0.02)] transition-colors"
            >
              <td className="py-3 pr-4 font-medium text-[var(--color-text-primary)] whitespace-nowrap">
                {row.dimension}
              </td>
              <td className="py-3 px-4 text-[var(--color-accent-cyan)]">{row.proficient}</td>
              <td className="py-3 px-4 text-[var(--color-text-secondary)]">{row.skilled}</td>
              <td className="py-3 pl-4 text-[var(--color-text-tertiary)]">{row.familiar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section id="tech" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <RevealWrapper>
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold tracking-tight mb-16">
            技术能力
          </h2>
        </RevealWrapper>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex justify-center">
            <RevealWrapper>
              <RadarChart />
            </RevealWrapper>
          </div>
          <div className="lg:col-span-8">
            <RevealWrapper>
              <TechMatrixTable />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
