import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

/**
 * About Component
 * 
 * Showcases skills and background with:
 * - Staggered reveal animations for skill cards
 * - Glassmorphic cards with hover effects
 * - Icon animations on scroll
 */

// Skills data with icons
const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable applications with React, Node.js, and modern frameworks.",
    color: "neon-cyan",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting beautiful, intuitive interfaces with attention to detail and user experience.",
    color: "neon-pink",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Ensuring lightning-fast load times and smooth interactions across all devices.",
    color: "neon-purple",
  },
  {
    icon: Zap,
    title: "Creative Problem Solving",
    description: "Turning complex challenges into elegant, innovative solutions.",
    color: "neon-cyan",
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves turning ideas into reality through code.
            With a keen eye for design and a commitment to excellence, I create digital
            experiences that are both beautiful and functional.
          </p>
        </motion.div>

        {/* Skills grid with staggered animations */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              className="glass rounded-2xl p-8 hover-lift group relative overflow-hidden"
            >
              {/* Animated background glow on hover */}
              <div className={`absolute inset-0 bg-${skill.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon with pulse animation on hover */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-2xl bg-${skill.color}/10 flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <skill.icon className={`text-${skill.color}`} size={32} />
                </motion.div>

                {/* Skill title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Decorative corner gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "5+", label: "Projects Completed" },
            { number: "1+", label: "Years Experience" },
            // { number: "30+", label: "Happy Clients" },
            { number: "∞", label: "Cups of Coffee" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center glass rounded-2xl p-6 hover-lift"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200 
                }}
                className="text-4xl md:text-5xl font-bold text-gradient mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
