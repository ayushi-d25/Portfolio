// import { motion } from "framer-motion";
// import profilePhoto from "@/assets/profile-photo.jpg";

// /**
//  * Hero Component
//  * 
//  * The landing section with:
//  * - Floating 3D profile photo with subtle breathing animation
//  * - Animated text entrance effects
//  * - Glassmorphic design with neon accents
//  * - CTA button with glow effect
//  */
// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
//         {/* Left side - Text content with staggered animations */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-left space-y-6"
//         >
//           {/* Greeting text with fade-in */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-primary text-lg font-medium tracking-wide"
//           >
//             Hello, I'm
//           </motion.p>

//           {/* Main name with gradient text effect */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-5xl md:text-7xl font-bold text-gradient leading-tight"
//           >
//             Ayushi Dutta
//           </motion.h1>

//           {/* Tagline/subtitle */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.6 }}
//             className="text-xl md:text-2xl text-muted-foreground"
//           >
//             Full-Stack Developer & Creative Technologist
//           </motion.p>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//             className="text-foreground/80 text-lg leading-relaxed max-w-xl"
//           >
//             Crafting elegant digital experiences with modern web technologies.
//             Passionate about clean code, beautiful design, and innovative solutions.
//           </motion.p>

//           {/* CTA Button with glow effect */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.6 }}
//           >
//             <a
//               href="#projects"
//               className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold 
//                        transition-all duration-300 hover:scale-105 glow-cyan hover:shadow-lg"
//             >
//               View My Work
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Right side - Floating profile photo with 3D effect */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//           className="relative flex items-center justify-center "
//         >
//           {/* Outer glow ring - animated */}
//           <div className="absolute inset-0 flex items-center justify-center ">
//             <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-20 blur-3xl animate-glow-pulse " />
//           </div>

//           {/* Rotating gradient border ring */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-30 blur-sm" />
//           </motion.div>

//           {/* Profile photo container with glassmorphism */}
//           <motion.div
//             animate={{ 
//               y: [0, -15, 0],
//               rotateY: [0, 5, 0, -5, 0],
//               rotateX: [0, 2, 0, -2, 0],
//             }}
//             transition={{ 
//               duration: 6, 
//               repeat: Infinity, 
//               ease: "easeInOut" 
//             }}
//             className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden glass border-2 border-primary/30"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <img
//               src={profilePhoto}
//               alt="Ayushi Dutta"
//               className="w-full h-full object-cover"
//             />
            
//             {/* Overlay gradient for extra depth */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 mix-blend-overlay" />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

/**
 * Hero Component
 *
 * The landing section with:
 * - Floating 3D profile photo with subtle breathing animation
 * - Animated text entrance effects
 * - Glassmorphic design with neon accents
 * - CTA button with glow effect
 */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left side - Text content with staggered animations */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          {/* Greeting text with fade-in */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary text-lg font-medium tracking-wide"
          >
            Hello, I'm
          </motion.p>

          {/* Main name with gradient text effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-gradient leading-tight"
          >
            Ayushi Dutta
          </motion.h1>

          {/* Tagline/subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground"
          >
            Full-Stack Developer & Creative Technologist
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-foreground/80 text-lg leading-relaxed max-w-xl"
          >
            Crafting elegant digital experiences with modern web technologies.
            Passionate about clean code, beautiful design, and innovative solutions.
          </motion.p>

          {/* CTA Button with glow effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold 
                       transition-all duration-300 hover:scale-105 glow-cyan hover:shadow-lg"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Floating profile photo with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Outer glow ring - animated */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-20 blur-3xl animate-glow-pulse" />
          </div>

          {/* Rotating gradient border ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-30 blur-sm" />
          </motion.div>

          {/* Profile photo container with glassmorphism */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateY: [0, 5, 0, -5, 0],
              rotateX: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden glass border-2 border-primary/30"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={profilePhoto}
              alt="Ayushi Dutta"
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: "center top" }}
            />

            {/* Overlay gradient for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 mix-blend-overlay" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
