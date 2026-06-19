export interface Experience {
  company: string;
  role: string;
  period: string;
  badges: string[];
  paragraphs: string[];
}

export const experiences: Experience[] = [
  {
    company: "小鹏汽车",
    role: "引擎开发工程师",
    period: "2025.07 — 至今",
    badges: ["架构", "性能", "自研", "攻关"],
    paragraphs: [
      "主导 XMapEngine 从单体结构重构为 Core / Services / Tools 三层架构，运用策略模式与状态模式解耦节点树，产出完整架构图与对接文档。",
      "建立 GPU > 80% 即卡顿加剧的量化阈值，驱动全团队性能优化方向。将回放工具从 30 秒提速至 400 毫秒（75×），抹平拖拽 1 帧延迟实现 0 帧响应。",
      "自研生产者-消费者异步日志系统（主线程投递 < 0.2ms），将线上 crash 从 8844 例分类收敛为三类根因并全量修复。目前主导高德车道级审图迁移，突破启动期 Unity 与高德 SDK 抢占 GL 上下文根因。",
    ],
  },
  {
    company: "上海哔哩哔哩科技",
    role: "资深开发工程师",
    period: "2021.09 — 2024.06",
    badges: ["架构", "性能", "自研", "攻关", "协议"],
    paragraphs: [
      "担任虚拟形象技术负责人，横跨 Unity 与 Web 端，构建 B 站虚拟人直播技术体系。",
      "自研 Mediapipe 面部解算器（卡尔曼滤波 + 低通滤波），CPU 占用从 50% 降至 10%。制定 CompatibleFaceData 通用面捕数据协议，解决 ARKit 与 VRM 不兼容问题。",
      "发现并根治 UnityWebRequest 在弱网下 timeout 失效的系统性 Bug，自研 MLive 多任务异步下载框架。",
      "主导虚拟形象从 Unity 到 Three.js 的技术迁移。修改 Three.js 底层 WebGL 源码根治换装内存泄漏，通过 KTX2 + Draco 压缩将 3D 覆盖率从 30% 提升至 93%，低端机帧率从 11FPS 优化至稳定 30FPS。",
      "技术直接驱动 2D 虚拟姬开播：日活 5000 → 18000，全年营收 1550 万+。搭建 Unity 云日志系统，问题排查周期 5 天 → 1 天。",
    ],
  },
  {
    company: "杭州亿真网络科技",
    role: "资深开发工程师",
    period: "2020.06 — 2021.08",
    badges: ["架构", "自研"],
    paragraphs: [
      "主导 AstralVR SDK 核心架构设计，运用面向接口编程与表驱动法，模块耦合度降低约 40%。SDK 覆盖登录鉴权、资源打包、数据统计、云端上传等完整工具链。",
    ],
  },
  {
    company: "浙江盛和网络科技",
    role: "高级开发工程师",
    period: "2018.12 — 2020.05",
    badges: ["架构", "性能"],
    paragraphs: [
      "主导《弓箭传说》核心战斗模块，独立设计资源 AB 管理与热更新框架。使用 Profiler 系统性优化性能。获评 2019 年度盛和优秀员工。",
    ],
  },
];
