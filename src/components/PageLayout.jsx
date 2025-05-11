
import React from 'react';
import { motion } from 'framer-motion';

const PageLayout = ({ children, title, subtitle }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20, filter: 'blur(2px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 pt-32 pb-16 md:pt-40 md:pb-24">
      <motion.header 
        className="mb-12 md:mb-16 text-center"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {title && (
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-soft-charcoal mb-4 classic-serif-title"
            variants={fadeInUp}
          >
            {title}
          </motion.h1>
        )}
        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl text-warm-grey/80 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageLayout;
