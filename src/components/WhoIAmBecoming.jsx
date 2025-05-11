
import React from 'react';
import { motion } from 'framer-motion';

const WhoIAmBecoming = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(3px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] }
    }
  };
  
   const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="who-im-becoming" 
      className="py-16 md:py-24 bg-card/70 rounded-xl shadow-xl px-6 md:px-10 who-i-am-becoming-bg"
    > 
      <div className="curved-border-line"></div>
      <motion.h2 
        className="who-i-am-becoming-subheading text-center classic-serif-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        Who I’m Becoming
      </motion.h2>

      <motion.div 
        className="prose prose-xl prose-headings:font-heading prose-p:font-body prose-p:leading-loose text-warm-grey mx-auto max-w-3xl text-center prose-poetic"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp}>
          I was born in chaos, trained by silence, and raised by purpose.
        </motion.p>
        <motion.p variants={fadeInUp}>
          I build not for trends, but for truth. My words are echoes of the past, my actions a bridge to the future.
        </motion.p>
        <motion.p variants={fadeInUp}>
          This journey is about becoming—unfolding, learning, and building a legacy that echoes with authenticity.
        </motion.p>
        <motion.p 
          className="font-signature italic text-2xl text-dark-grey mt-10"
          variants={fadeInUp}
        >
          Still writing... until I become.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default WhoIAmBecoming;
