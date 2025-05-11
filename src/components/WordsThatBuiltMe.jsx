
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart } from 'lucide-react';

const WordsThatBuiltMe = () => {
  const influences = [
    {
      source: 'Ramana Maharshi',
      quote: '“Silence is also speech.”',
      category: 'Wisdom',
      Icon: BookOpen,
      size: 'text-2xl md:text-3xl', // Example for varying size
    },
    {
      source: 'Swami Vivekananda',
      quote: '“Arise, awake, and stop not till the goal is reached.”',
      category: 'Inspiration',
      Icon: Users,
      size: 'text-xl md:text-2xl',
    },
    {
      source: 'My Amma (Mother)',
      quote: '“నువ్వు చేసే పనిలో నిజాయితీ ఉంటే, భయం దానంతట అదే పోతుంది.”',
      category: 'Life Lesson',
      Icon: Heart,
      size: 'text-2xl md:text-3xl font-telugu', // Telugu font for this quote
    },
     {
      source: 'Rumi',
      quote: '“What you seek is seeking you.”',
      category: 'Poetry',
      Icon: BookOpen,
      size: 'text-xl md:text-2xl',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(3px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="words-that-built-me" className="py-16 md:py-24 bg-card/50 rounded-xl relative overflow-hidden">
      <div className="ink-manuscript-bg words-built-me-bg opacity-[0.04]" aria-hidden="true"></div>
      <motion.h2
        className="section-heading relative z-10 classic-serif-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        Words that Built Me
      </motion.h2>
      <motion.p
        className="section-subheading relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        Echoes from souls and scripts that shaped my path and perspective.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 relative z-10" /* Simplified grid for now */
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {influences.map((influence, index) => (
          <motion.div
            key={index}
            className="quote-card-base group prose-poetic" 
            variants={fadeInUp}
          >
            <div className="mb-4 text-emotional-teal/70 group-hover:text-emotional-teal transition-colors">
              <influence.Icon size={28} strokeWidth={1.5} />
            </div>
            <blockquote className={`font-quote ${influence.size} cursor-ink-dot`}>{influence.quote}</blockquote>
            <figcaption>— {influence.source}</figcaption>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WordsThatBuiltMe;
