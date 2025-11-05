"use client";

import { useEffect, useState } from "react";

interface Vapor {
  id: number;
  initialX: number;
  initialY: number;
  size: number;
  colorOffset: number;
}

// 1. Initial empty state for vapors
const initialVapors: Vapor[] = [];

// 2. Function to generate the random elements
const generateVapors = () => {
  return Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: 0.8 + Math.random() * 0.4,
    colorOffset: Math.random(),
  }));
};

export default function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0);
  // 3. New state for vapors, initialized to the empty array
  const [vapors, setVapors] = useState<Vapor[]>(initialVapors);
  // 4. State to track if we're past the initial mount (i.e., on the client)
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This runs ONLY on the client after hydration

    // Set the random vapor data here
    setVapors(generateVapors());

    // Set the client flag
    setIsClient(true);

    // Scroll listener setup (your original logic)
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Return null or a basic, non-random element during the initial SSR pass
  if (!isClient && vapors.length === 0) {
    // Minimal render for the server and initial client hydration.
    // We only render the *fixed* parts, not the random vapors.
    return (
      <div
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{
          // Fixed base background for SSR
          background: `radial-gradient(at 50% 50%, hsl(240, 100%, 98%), hsl(220, 10%, 95%))`,
        }}
      >
        {/* SVG filter is static, so it can stay here */}
        <svg>
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves="3"
              stitchTiles="stitch"
              seed="1" // Use a fixed seed for consistent grain
            />
            <feBlend in="SourceGraphic" mode="overlay" />
          </filter>
        </svg>
      </div>
    );
  }

  // --- Normal Rendering proceeds only after the client has mounted ---

  // Calculate dynamic values based on scroll (only used after client mount)
  const scrollFactor = scrollY * 0.1;
  const gradientShift = Math.min(scrollY * 0.1, 30);
  const gradientHueShift = Math.min(scrollY * 0.05, 50);

  // Define a color palette for the vapors
  const lightVaporColors = [
    [200, 220, 255], // Light blue
    [230, 210, 255], // Light purple
    [255, 220, 220], // Light pink
  ];

  const getVaporColor = (offset: number, scroll: number) => {
    const totalOffset = (offset + scroll * 0.0005) % 1;
    const colorIndex = Math.floor(totalOffset * lightVaporColors.length);
    const color = lightVaporColors[colorIndex];
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.2)`;
  };

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        // Full, scroll-aware background style
        background: `radial-gradient(at ${50 + gradientShift}% ${
          50 - gradientShift
        }%, hsl(240, 100%, ${
          98 - gradientHueShift * 0.05
        }%), hsl(220, 10%, 95%))`,
        transition: "background 0.3s ease-out",
      }}
    >
      {/* SVG filter can remain hidden */}
      <svg>
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="3"
            stitchTiles="stitch"
            seed="1"
          />
          <feBlend in="SourceGraphic" mode="overlay" />
        </filter>
      </svg>

      {/* Render the vapor elements using the stable 'vapors' state */}
      {vapors.map((vapor) => (
        <div
          key={vapor.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${
              vapor.initialX + scrollFactor * (vapor.id % 2 === 0 ? 0.5 : -0.5)
            }%`,
            top: `${
              vapor.initialY + scrollFactor * (vapor.id % 2 === 0 ? -0.5 : 0.5)
            }%`,
            width: `${200 * vapor.size}px`,
            height: `${200 * vapor.size}px`,
            background: getVaporColor(vapor.colorOffset, scrollY),
            filter: `blur(${40 * vapor.size}px) url(#grain)`,
            opacity:
              0.1 +
              Math.min(1, Math.abs(Math.sin(scrollFactor * 0.01 + vapor.id))) *
                0.1,
            transform: `scale(${
              1 + Math.sin(scrollFactor * 0.005 + vapor.id) * 0.05
            })`,
            transition: "all 0.1s linear",
          }}
        />
      ))}
    </div>
  );
}
