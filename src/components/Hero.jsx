
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollDown = () => {
    const nextSection = document.getElementById('who-im-becoming');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative px-4 pt-20 pb-10 bg-warm-off-white overflow-hidden bg-paper-texture">
      <div className="absolute inset-0 hero-radial-gradient z-0" aria-hidden="true"></div>
      <div className="ink-manuscript-bg opacity-[0.02]" aria-hidden="true"></div>


      <motion.div 
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20, filter: 'blur(3px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
      >
        <div className="relative">
          <div className="hero-title-bg-texture" aria-hidden="true"></div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-heading font-bold text-soft-charcoal mb-6 relative z-10">
            StillWritingMyself
          </h1>
        </div>
        <p className="text-xl md:text-2xl font-body text-warm-grey/90 mb-10 max-w-xl lg:max-w-2xl leading-relaxed text-shadow-subtitle">
          Unread, yet alive. I don’t speak much. But my work will.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="default" 
            size="lg" 
            className="hero-button cursor-ink-dot"
            onClick={() => {
              const target = document.getElementById('who-im-becoming');
              if(target) target.scrollIntoView({behavior: 'smooth'});
            }}
          >
            Read My Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="hero-button-outline cursor-ink-dot"
            onClick={() => {
              const target = document.getElementById('visions-building');
              if(target) target.scrollIntoView({behavior: 'smooth'});
            }}
          >
            Explore My Creations
          </Button>
        </div>
      </motion.div>

      <motion.button
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-warm-grey/70 hover:text-emotional-teal animate-slow-bounce"
        onClick={scrollDown}
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown size={28} />
      </motion.button>
    </section>
  );
};

export default Hero;
