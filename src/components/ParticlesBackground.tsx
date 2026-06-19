export default function ParticlesBackground() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    color: i % 2 === 0 ? "#00d4ff" : "#7b61ff",
    duration: `${Math.random() * 60 + 60}s`,
    delay: `${Math.random() * 10}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* 光晕 */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.06] blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent-cyan), transparent)",
          animation: "pulseGlow 4s var(--ease-in-out) infinite",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.04] blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent-purple), transparent)",
          animation: "pulseGlow 4s var(--ease-in-out) infinite 2s",
        }}
      />

      {/* 粒子 */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: 0.08,
            animation: `particleDrift ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* 微妙网格线 */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
