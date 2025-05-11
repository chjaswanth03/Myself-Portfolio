
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
   const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  return (
    // Ensure this section has an id="about" if linked from Navbar
    <section id="about" className="py-12"> 
       <motion.h2 
        className="text-3xl font-bold mb-8 text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        About Me
      </motion.h2>

      {/* Apply prose for typography styling */}
      <motion.div 
        className="prose prose-lg max-w-none" // Use prose classes
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp}>
          Hello! I'm Alex Johnson, a developer and creative thinker passionate about building useful and engaging digital products. My background is in [Your Field/Area], but I've always been drawn to the intersection of technology and [Your Interest, e.g., community, design, storytelling].
        </motion.p>
        <motion.p variants={fadeInUp}>
          Over the past [Number] years, I've worked on various projects ranging from [Type of Project, e.g., web applications] to [Another Type, e.g., design systems]. I enjoy the challenge of solving complex problems and the process of turning ideas into reality.
        </motion.p>
         <motion.p variants={fadeInUp}>
          Currently, I'm particularly interested in [Specific Area, e.g., building online communities, exploring AI tools for creators, mastering serverless architecture]. I believe that technology should empower people and facilitate meaningful connections.
        </motion.p>
        <motion.p variants={fadeInUp}>
          When I'm not coding or thinking about tech, you can find me [Your Hobby, e.g., exploring hiking trails, reading sci-fi novels, trying out new coffee shops].
        </motion.p>
         <motion.p variants={fadeInUp}>
          Feel free to <a href="#contact">reach out</a> if you'd like to collaborate or just chat!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
