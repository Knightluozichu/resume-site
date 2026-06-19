export interface Project {
  title: string;
  subtitle: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "XMapEngine 架构重构与性能治理",
    subtitle: "小鹏汽车 · 2025.07 — 至今",
    description:
      "主导 XMapEngine 三层架构重构，建立 GPU 量化方法论，自研异步日志系统保障线上稳定。回放工具 75× 提速，攻克拖拽 0 帧延迟与 SR 黑屏 P0 缺陷。突破 Unity 与高德 SDK 抢占 GL 上下文根因。",
  },
  {
    title: "B 站虚拟人直播技术体系",
    subtitle: "上海哔哩哔哩 · 2021.09 — 2024.06",
    description:
      "从 0 到 1 搭建面捕技术栈：自研解算器（CPU 降 80%）、MLive 下载框架（根治 UnityWebRequest 系统 Bug）、CompatibleFaceData 通用协议（解决协议不兼容）。相关专利申请 10+ 项。",
  },
  {
    title: "跨平台虚拟形象渲染引擎",
    subtitle: "上海哔哩哔哩 · 2022 — 2024",
    description:
      "主导 Unity → Three.js 技术迁移，修改底层 WebGL 源码根治换装内存泄漏。KTX2 + Draco 压缩 + 异步加载，3D 覆盖率 30% → 93%，低端机帧率 11FPS → 30FPS。效果媲美原生引擎。",
  },
];
