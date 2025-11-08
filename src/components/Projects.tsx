// import { motion } from "framer-motion";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
// import weatherimage from "@/assets/weather.jpg";
// import financeimage from "@/assets/fintack.jpg";
// import  fruitimage from "@/assets/fruit.jpg"

// // Sample project data
// const projects = [
//   {
//     id: 1,
//     title: "Weather - Prediction  App",
//     description: "responsive web app that gives real-time weather updates with around 98% accuracy using live APIs",
//     tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
//     image: weatherimage,
//     github: "https://github.com/ayushi-d25/Weather-forecast-2",
//     demo: "#",
//   },
//   {
//     id: 2,
//     title: "Personal Finance-Tracker",
//     description: "It helps users manage expenses and visualize data with personalized dashboards",
//     tech: ["Reactjs", "Nodejs", "Tailwind"],
//     image: financeimage,
//     github: "https://github.com/ayushi-d25/Finance-Tracker-",
//     demo: "#",
//   },
//   {
//     id: 3,
//     title: "Fruit-Image Classification App",
//     description: "It’s a machine-learning based application that classifies fruit images and even suggests healthier alternatives based on user preferences.",
//     tech: ["Tensorflow", "Python",],
//     image: fruitimage,
//     github: "https://github.com/ayushi-d25/Image-Classification2",
//     demo: "#",
//   },
// ];

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   // Navigate to previous project
//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//   };

//   // Navigate to next project
//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
//       <div className="max-w-7xl mx-auto w-full">
        
//         {/* Section header with animation */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             A selection of my recent work showcasing creativity, technical skills, and attention to detail.
//           </p>
//         </motion.div>

//         {/* Carousel container */}
//         <div className="relative">
          
//           {/* Project cards with slide animation */}
//           <div className="overflow-hidden">
//             <motion.div
//               className="flex transition-transform duration-500 ease-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {projects.map((project, index) => (
//                 <div
//                   key={project.id}
//                   className="min-w-full px-4"
//                 >
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     onHoverStart={() => setHoveredCard(project.id)}
//                     onHoverEnd={() => setHoveredCard(null)}
//                     className="glass rounded-3xl overflow-hidden hover-lift group relative"
//                     style={{
//                       transform: hoveredCard === project.id 
//                         ? "perspective(1000px) rotateX(2deg) rotateY(-2deg)" 
//                         : "perspective(1000px) rotateX(0) rotateY(0)",
//                       transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
//                     }}
//                   >
//                     {/* Glow effect on hover */}
//                     <div className={`absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                    
//                     <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                      
//                       {/* Project image */}
//                       <div className="relative rounded-2xl overflow-hidden">
//                         <img
//                           src={project.image}
//                           alt={project.title}
//                           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
//                       </div>

//                       {/* Project details */}
//                       <div className="flex flex-col justify-center space-y-6">
//                         <h3 className="text-3xl md:text-4xl font-bold text-foreground">
//                           {project.title}
//                         </h3>
                        
//                         <p className="text-muted-foreground text-lg leading-relaxed">
//                           {project.description}
//                         </p>

//                         {/* Tech stack tags */}
//                         <div className="flex flex-wrap gap-2">
//                           {project.tech.map((tech) => (
//                             <span
//                               key={tech}
//                               className="px-4 py-2 bg-secondary/50 border border-primary/20 rounded-full text-sm font-medium text-foreground"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Action buttons */}
//                         <div className="flex gap-4 pt-4">
//                           <a
//                             href={project.github}
//                             className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-full font-medium transition-all duration-300 hover:scale-105"
//                           >
//                             <Github size={20} />
//                             Code
//                           </a>
//                           <a
//                             href={project.demo}
//                             className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 glow-cyan"
//                           >
//                             <ExternalLink size={20} />
//                             Live Demo
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Navigation buttons */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
//             aria-label="Previous project"
//           >
//             <ChevronLeft className="text-primary" size={24} />
//           </button>
          
//           <button
//             onClick={handleNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
//             aria-label="Next project"
//           >
//             <ChevronRight className="text-primary" size={24} />
//           </button>

//           {/* Carousel indicators */}
//           <div className="flex justify-center gap-3 mt-12">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? "w-12 bg-primary glow-cyan"
//                     : "w-2 bg-muted hover:bg-primary/50"
//                 }`}
//                 aria-label={`Go to project ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import weatherimage from "@/assets/weather.jpg";
import financeimage from "@/assets/fintack.jpg";
import fruitimage from "@/assets/fruit.jpg";

/**
 * Projects Component
 *
 * A carousel showcasing portfolio projects with:
 * - 3D hover tilt effects on cards
 * - Smooth slide transitions
 * - Glassmorphic card design with neon borders
 * - Glowing hover states
 */

// Sample project data
const projects = [
  {
    id: 1,
    title: "Weather - Prediction App",
    description:
      "Responsive web app that gives real-time weather updates with around 98% accuracy using live APIs.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    image: weatherimage,
    github: "https://github.com/ayushi-d25/Weather-forecast-2",
    // demo: "#",
  },
  {
    id: 2,
    title: "Personal Finance-Tracker",
    description:
      "It helps users manage expenses and visualize data with personalized dashboards.",
    tech: ["Reactjs", "Nodejs", "Tailwind"],
    image: financeimage,
    github: "https://github.com/ayushi-d25/Finance-Tracker-",
    // demo: "#",
  },
  {
    id: 3,
    title: "Fruit-Image Classification App",
    description:
      "It’s a machine-learning based application that classifies fruit images and even suggests healthier alternatives based on user preferences.",
    tech: ["Tensorflow", "Python"],
    image: fruitimage,
    github: "https://github.com/ayushi-d25/Image-Classification2",
    // demo: "#",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Navigate to previous project
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Navigate to next project
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing creativity, technical
            skills, and attention to detail.
          </p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Project cards with slide animation */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-full px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onHoverStart={() => setHoveredCard(project.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="glass rounded-3xl overflow-hidden hover-lift group relative"
                    style={{
                      transform:
                        hoveredCard === project.id
                          ? "perspective(1000px) rotateX(2deg) rotateY(-2deg)"
                          : "perspective(1000px) rotateX(0) rotateY(0)",
                      transition:
                        "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    />

                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                      {/* Project image */}
                      <div className="relative rounded-2xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </div>

                      {/* Project details */}
                      <div className="flex flex-col justify-center space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech stack tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-secondary/50 border border-primary/20 rounded-full text-sm font-medium text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-4 pt-4">
                          <a
                            href={project.github}
                            className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-full font-medium transition-all duration-300 hover:scale-105"
                          >
                            <Github size={20} />
                            Code
                          </a>

                          {/* Uncomment this Live Demo button if demo links are added in the future */}
                          {/*
                          <a
                            href={project.demo}
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 glow-cyan"
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </a>
                          */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft className="text-primary" size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight className="text-primary" size={24} />
          </button>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "w-12 bg-primary glow-cyan"
                    : "w-2 bg-muted hover:bg-primary/50"
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
