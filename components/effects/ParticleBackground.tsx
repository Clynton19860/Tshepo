"use client";

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated particles using CSS */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 3 + 3}s`,
          }}
        />
      ))}
      {/* Connecting lines effect */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9333EA" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

