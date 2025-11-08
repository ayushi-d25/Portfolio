import { useEffect, useRef } from "react";

/**
 * AnimatedBackground Component
 * 
 * Creates an interactive gradient background that responds to mouse movement.
 * Features:
 * - Dynamic gradient that follows cursor position
 * - Smooth transitions using CSS custom properties
 * - Animated floating orbs for depth
 */
const AnimatedBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Track mouse position and update gradient center
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      // Calculate mouse position as percentage
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      // Update CSS custom properties for smooth gradient movement
      backgroundRef.current.style.setProperty("--mouse-x", `${x}%`);
      backgroundRef.current.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        // @ts-ignore - CSS custom properties
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      }}
    >
      {/* Main animated gradient background */}
      <div
        className="absolute inset-0 opacity-50 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), 
            hsl(180 100% 50% / 0.15), 
            hsl(270 100% 65% / 0.1), 
            transparent 50%)`,
        }}
      />
      
      {/* Floating orbs for depth - these create the "living" effect */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "4s" }} />
    </div>
  );
};

export default AnimatedBackground;
