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


// import { motion } from "framer-motion";
// import profilePhoto from "@/assets/profile-photo.jpg";

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
//             Full-Stack Developer & Tech Enthusiast
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

//             <a
//               href="C:\Users\HP\Desktop\aero-ayushi-sparkle\src\assets\Resume_Ayushi.pdf"
//               className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold 
//                        transition-all duration-300 hover:scale-105 glow-cyan hover:shadow-lg"
//             >
//               Download Resume
//             </a>

//           </motion.div>
//         </motion.div>

//         {/* Right side - Floating profile photo with 3D effect */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//           className="relative flex items-center justify-center"
//         >
//           {/* Outer glow ring - animated */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-20 blur-3xl animate-glow-pulse" />
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
//               ease: "easeInOut",
//             }}
//             className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden glass border-2 border-primary/30"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <img
//               src={profilePhoto}
//               alt="Ayushi Dutta"
//               className="w-full h-full object-cover object-top"
//               style={{ objectPosition: "center top" }}
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
import { useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Ayushi.pdf"; // Make sure this file is inside your public folder
    link.download = "Ayushi_Dutta_Resume.pdf";
    link.click();
    setShowModal(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white text-xl md:text-2xl font-medium tracking-wide"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-gradient leading-tight"
          >
            Ayushi Dutta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground"
          >
             Tech Enthusiast & Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-foreground/80 text-lg leading-relaxed max-w-xl"
          >
            Crafting creativity with technical expertise to build applications that make a difference.
            Passionate about clean code, beautiful design, and innovative solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="space-x-4"
          >
            <a
              href="#projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold 
                         transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/50"
            >
          
              View My Work
            </a>

            <button
              onClick={() => setShowModal(true)}
              className="inline-block px-8 py-4 bg-gradient-to-r from-sky-300 via-blue-400 to-sky-500 text-white rounded-full font-semibold 
             transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-sky-400/60"
            >
              Download Resume
            </button>


          </motion.div>
        </motion.div>

        {/* Right side - Floating image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-20 blur-3xl animate-pulse" />
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-30 blur-sm" />
          </motion.div>

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
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 mix-blend-overlay" />
          </motion.div>
        </motion.div>
      </div>

      {/* 💖 Confirmation Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center max-w-md w-full"
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Download Resume?
            </h2>
            <p className="text-muted-foreground mb-6">
              Would you like to download <b>Ayushi Dutta’s Resume</b> now?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all duration-300"
              >
                Yes, download 💖
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-full border border-muted-foreground text-muted-foreground hover:bg-muted-foreground/10 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
