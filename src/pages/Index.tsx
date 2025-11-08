import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

/**
 * Index Page - Main Portfolio Page
 * 
 * Combines all portfolio sections:
 * 1. AnimatedBackground - Interactive gradient background
 * 2. Hero - Landing section with floating photo
 * 3. About - Skills and background
 * 4. Projects - Portfolio carousel
 * 5. Contact - Contact form and info
 * 
 * Each section has scroll-triggered animations and glassmorphic design
 */
const Index = () => {
  return (
    <div className="relative">
      {/* Animated cursor-following background */}
      <AnimatedBackground />
      
      {/* All sections stack vertically */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p>© 2024 Ayushi Dutta </p>
      </footer>
    </div>
  );
};

export default Index;
