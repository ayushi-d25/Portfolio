// import { motion } from "framer-motion";
// import { Mail, MapPin, Phone, Send, Github, Linkedin, } from "lucide-react";
// import { useState } from "react";
// import { toast } from "sonner";


// export default function SocialLinks() {
//   return (
//     <div className="pt-8">
//       <p className="text-muted-foreground mb-4">Follow me on</p>
//       <div className="flex gap-4">
//         {[
//           { name: "GitHub", icon: <Github size={22} />, link: "https://github.com/ayushi-d25" },
//           { name: "LinkedIn", icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/ayushi-dutta-7015b6337/" },
//           { name: "Gmail", icon: <Mail size={22} />, link: "mailto:ayusi.dutta25@gmail.com" },
//         ].map(({ name, icon, link }) => (
//           <a
//             key={name}
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow-cyan"
//           >
//             <span className="text-primary">{icon}</span>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// /**
//  * Contact Component
//  * 
//  * Contact form with:
//  * - Glassmorphic design
//  * - Input focus glow effects
//  * - Form validation
//  * - Success/error feedback with toast notifications
//  */

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.name || !formData.email || !formData.message) {
//       toast.error("Please fill in all fields");
//       return;
//     }
    
//     // Show success message
//     toast.success("Message sent successfully! I'll get back to you soon.");
    
//     // Reset form
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
//       <div className="max-w-6xl mx-auto w-full">
        
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Have a project in mind or just want to say hello? I'd love to hear from you.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12">
          
//           {/* Contact info cards */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <h3 className="text-2xl font-bold text-foreground mb-8">
//               Let's Connect
//             </h3>

//             {/* Contact info items */}
//             {[
//               { icon: Mail, label: "Email", value: "ayusi.dutta25gmail.com", href: "mailto:ayusi.dutta25gmail.com" },
//               { icon: Phone, label: "Phone", value: "+91 (931) 506-5778", href: "tel:+919315065778" },
//               { icon: MapPin, label: "Location", value: "Delhi", href: "#" },
//             ].map((item, index) => (
//               <motion.a
//                 key={item.label}
//                 href={item.href}
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="glass rounded-2xl p-6 flex items-center gap-4 hover-lift group block"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
//                   <item.icon className="text-primary" size={24} />
//                 </div>
//                 <div>
//                   <div className="text-sm text-muted-foreground">{item.label}</div>
//                   <div className="text-foreground font-medium">{item.value}</div>
//                 </div>
//               </motion.a>
//             ))}

//             {/* Social links placeholder */}

//             <div className="pt-8">
//               <p className="text-muted-foreground mb-4">Follow me on</p>
//               <div className="flex gap-4">
//                 {["GitHub", "LinkedIn", "Gmail"].map((platform) => {
//                   let link = "";

//                   // set each platform's link
//                   if (platform === "GitHub") link = " https://github.com/ayushi-d25 ";
//                   if (platform === "LinkedIn") link = "https://www.linkedin.com/in/ayushi-dutta-7015b6337/ ";
//                   if (platform === "Gmail") link = "mailto:ayusi.dutta25gmail.com ";

//                   return (
//                     <a
//                       key={platform}
//                       href={link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110 glow-cyan"
//                     >
//                       <span className="text-sm font-medium text-primary">
//                         {platform[0]}
//                       </span>
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//           </motion.div>

//           {/* Contact form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="glass rounded-3xl p-8 md:p-10"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
              
//               {/* Name input */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-xl text-foreground 
//                            focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
//                            transition-all duration-300"
//                   placeholder="First Name"
//                 />
//               </div>

//               {/* Email input */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-xl text-foreground 
//                            focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
//                            transition-all duration-300"
//                   placeholder="Someone@example.com"
//                 />
//               </div>

//               {/* Message textarea */}
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-xl text-foreground 
//                            focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
//                            transition-all duration-300 resize-none"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>

//               {/* Submit button */}
//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold 
//                          flex items-center justify-center gap-2 transition-all duration-300 glow-cyan hover:shadow-lg"
//               >
//                 <Send size={20} />
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Let's Connect
            </h3>

            {/* Contact info cards */}
            {[
              {
                icon: Mail,
                label: "Email",
                value: "ayusi.dutta25@gmail.com",
                href: "mailto:ayusi.dutta25@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "(+91) 931-506-5778",
                href: "tel:+919315065778",
              },
              { icon: MapPin, label: "Location", value: "Delhi", href: "#" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 flex items-center gap-4 hover-lift group block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="text-foreground font-medium">{item.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social Links Section */}
            <div className="pt-8">
              <p className="text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-4">
                {[
                  {
                    name: "GitHub",
                    icon: <Github size={22} />,
                    link: "https://github.com/ayushi-d25",
                  },
                  {
                    name: "LinkedIn",
                    icon: <Linkedin size={22} />,
                    link: "https://www.linkedin.com/in/ayushi-dutta-7015b6337/",
                  },
                  {
                    name: "Gmail",
                    icon: <Mail size={22} />,
                    link: "mailto:ayushi.dutta25@gmail.com",
                  },
                ].map(({ name, icon, link }) => (
                  <motion.a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary/20 
                               transition-all duration-300 glow-cyan"
                  >
                    <span className="text-primary">{icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-xl text-foreground 
                             focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                             transition-all duration-300"
                  placeholder="Name"
                />
              </div>

              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-xl text-foreground 
                             focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                             transition-all duration-300"
                  placeholder="someone@example.com"
                />
              </div>

              {/* Message textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-xl text-foreground 
                             focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                             transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold 
                           flex items-center justify-center gap-2 transition-all duration-300 glow-cyan hover:shadow-lg"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
