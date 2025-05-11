
import React from 'react';
import { motion } from 'framer-motion';

const Guides = () => {
  const guides = [
    {
      id: 1,
      title: 'Find winning startup ideas using Reddit & AI',
      excerpt: 'My exact playbook for how to find internet gold on Reddit and use AI to find and validate startup ideas. (video tutorial included)',
      link: '#', 
    },
    {
      id: 2,
      title: 'Startup ideas bank (+ how I\'d start them)',
      excerpt: 'A database with 30+ of my favorite startup ideas, collected from hundreds of conversations with top entrepreneurs.',
      link: '#',
    },
    {
      id: 3,
      title: '2 growth playbooks for your business',
      excerpt: 'Get a B2B & B2C growth playbooks to build your business.',
      link: '#',
    },
     {
      id: 4,
      title: '6 Tools I Use to Validate Business Ideas',
      excerpt: 'These 6 tools gave me an unfair advantage to validate 0.01% startup ideas. Use them to get paid.',
      link: '#',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
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
    <section id="guides" className="py-12">
      <motion.h3
        className="section-heading" // Use consistent heading style
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        Popular guides
      </motion.h3>
      
      <motion.div 
        className="grid grid-cols-1 gap-4" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {guides.map((guide) => (
          <motion.a 
            key={guide.id} 
            href={guide.link} 
            className="guide-card group" // Add group for potential inner hover effects
            variants={fadeInUp}
            whileHover={{ y: -4 }} // Lift card slightly on hover
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h4 className="text-lg font-semibold text-foreground"> {/* Adjusted size/weight */}
              {guide.title}
            </h4>
            <p>{guide.excerpt}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Guides;
