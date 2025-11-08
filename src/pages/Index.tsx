import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

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
