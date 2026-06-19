export interface TechCategory {
  dimension: string;
  proficient: string;
  skilled: string;
  familiar: string;
}

export interface RadarDimension {
  label: string;
  value: number; // 0-10
  description: string;
}

export const techMatrix: TechCategory[] = [
  { dimension: "引擎", proficient: "Unity", skilled: "Three.js / WebGL", familiar: "—" },
  { dimension: "语言", proficient: "C#", skilled: "Python（工具向）", familiar: "C++, Lua" },
  { dimension: "性能", proficient: "Profiler", skilled: "火焰图, DevTools", familiar: "—" },
  { dimension: "虚拟人", proficient: "面捕, BS/骨骼", skilled: "VRM, Live2D", familiar: "—" },
  { dimension: "AI", proficient: "—", skilled: "—", familiar: "LangChain, RAG" },
  { dimension: "工具链", proficient: "Git, Jenkins", skilled: "KSP注解, 协议设计", familiar: "Docker" },
];

export const radarData: RadarDimension[] = [
  { label: "引擎架构", value: 9, description: "主导 Unity/XMapEngine 双引擎架构重构" },
  { label: "性能优化", value: 9, description: "CPU降80%、FPS+200%、75×提速、0帧延迟" },
  { label: "虚拟人技术", value: 8, description: "自研面捕解算器+通用协议+BS/骨骼双轨" },
  { label: "跨平台渲染", value: 7, description: "Unity+Three.js双端，修改底层源码" },
  { label: "AI工程化", value: 5, description: "LangChain自研+飞书CLI Agent（加分项）" },
];
