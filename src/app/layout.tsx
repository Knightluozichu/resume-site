import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "罗子初 · 资深引擎开发工程师 | 个人简历",
  description:
    "罗子初，7年+引擎开发经验，虚拟人技术专家。主导小鹏XMapEngine架构重构、B站虚拟人直播技术体系，拥有12项虚拟技术专利。",
  keywords: [
    "罗子初",
    "引擎开发工程师",
    "Unity开发",
    "虚拟人技术",
    "简历",
    "Three.js",
    "性能优化",
  ],
  openGraph: {
    title: "罗子初 · 资深引擎开发工程师",
    description:
      "7年+引擎开发经验 · 虚拟人技术专家 · 12项专利 · 驱动B站1550W+年营收",
    url: "https://resume.luozichu.ink",
    siteName: "罗子初个人简历",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "罗子初 · 资深引擎开发工程师 | 个人简历",
    description:
      "7年+引擎开发经验 · 虚拟人技术专家 · 12项专利 · 驱动B站1550W+年营收",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "罗子初",
              jobTitle: "资深引擎开发工程师",
              description: "7年+引擎开发经验，虚拟人技术专家，12项专利",
              email: "rainknightpox@gmail.com",
              telephone: "13928245451",
              address: {
                "@type": "PostalAddress",
                addressLocality: "上海",
                addressCountry: "CN",
              },
              knowsAbout: [
                "Unity引擎开发",
                "Three.js",
                "WebGL",
                "性能优化",
                "虚拟人技术",
                "面部捕捉",
              ],
              url: "https://resume.luozichu.ink",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
