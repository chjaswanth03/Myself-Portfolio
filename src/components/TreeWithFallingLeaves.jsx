
import React from 'react';
import { motion } from 'framer-motion';

const TreeSVG = ({ className }) => (
  <svg 
    viewBox="0 0 200 300" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M100 280 Q90 230 70 200 C50 170 40 150 50 120 Q60 90 80 70 C100 50 120 60 130 80 Q140 100 140 130 C140 160 120 190 100 280 Z" className="text-deep-green/40" />
    <path d="M100 280 Q110 230 130 200 C150 170 160 150 150 120 Q140 90 120 70 C100 50 80 60 70 80 Q60 100 60 130 C60 160 80 190 100 280 Z" className="text-deep-green/30 opacity-80" transform="scale(0.95) translate(5 5)"/>
    
    <path d="M100 295 C 95 250, 90 200, 100 150" stroke="hsl(var(--deep-green)/0.5)" strokeWidth="12" strokeLinecap="round" fill="none"/>
    <path d="M100 200 Q 80 180, 70 150" stroke="hsl(var(--deep-green)/0.4)" strokeWidth="6" strokeLinecap="round" fill="none"/>
    <path d="M100 220 Q 120 200, 130 170" stroke="hsl(var(--deep-green)/0.4)" strokeWidth="5" strokeLinecap="round" fill="none"/>
    <path d="M80 130 Q 70 110, 60 90" stroke="hsl(var(--deep-green)/0.3)" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M120 140 Q 130 120, 140 100" stroke="hsl(var(--deep-green)/0.3)" strokeWidth="3" strokeLinecap="round" fill="none"/>

    <circle cx="80" cy="70" r="30" className="text-emotional-teal/20 opacity-70" />
    <circle cx="130" cy="80" r="35" className="text-emotional-teal/25 opacity-70" />
    <circle cx="100" cy="50" r="25" className="text-emotional-teal/15 opacity-70" />
    <circle cx="60" cy="120" r="28" className="text-emotional-teal/20 opacity-60" />
    <circle cx="140" cy="130" r="32" className="text-emotional-teal/22 opacity-60" />
  </svg>
);

const Leaf = ({ initialX, initialY, size, duration, delay, rotation }) => {
  const xSwayAmount1 = (Math.random() - 0.5) * 60; 
  const xSwayAmount2 = (Math.random() - 0.5) * 40;

  const leafVariants = {
    initial: {
      x: initialX,
      y: initialY,
      opacity: 0,
      rotate: Math.random() * 360,
    },
    animate: {
      y: `calc(${initialY} + 100vh + ${size * 2}px)`, 
      x: [
          `calc(${initialX})`, 
          `calc(${initialX} + ${xSwayAmount1}px)`, 
          `calc(${initialX} + ${xSwayAmount2}px)`, 
          `calc(${initialX})`
         ],
      opacity: [0, 0.9, 0.9, 0.7, 0],
      rotate: rotation + (Math.random() - 0.5) * 720,
      transition: {
        y: {
            duration: duration,
            delay: delay,
            ease: "linear"
        },
        x: {
            duration: duration / (3 + Math.random() * 2),
            delay: delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
        },
        opacity: { 
            times: [0, 0.1, 0.8, 0.9, 1], 
            duration: duration,
            delay: delay,
            ease: "linear"
        },
        rotate: {
            duration: duration,
            delay: delay,
            ease: "linear"
        }
      }
    }
  };

  return (
    <motion.div
      variants={leafVariants}
      initial="initial"
      animate="animate"
      style={{
        position: 'absolute',
        width: size,
        height: size * 1.2,
        zIndex: 5, 
        pointerEvents: 'none',
      }}
      className="text-emotional-teal/50" 
    >
      <svg viewBox="0 0 20 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C10 0 8 5 5 10C2 15 0 20 0 20C0 20 5 22 10 24C15 22 20 20 20 20C20 20 18 15 15 10C12 5 10 0 10 0Z" />
      </svg>
    </motion.div>
  );
};


const TreeWithFallingLeaves = () => {
  const numLeaves = 20; 
  const leaves = Array.from({ length: numLeaves }).map((_, i) => ({
    id: i,
    initialX: `${Math.random() * 70 + 15}%`, 
    initialY: `${Math.random() * -40 - 10}%`, 
    size: Math.random() * 8 + 7, 
    duration: Math.random() * 10 + 12, 
    delay: Math.random() * 15,
    rotation: Math.random() * 180 - 90,
  }));

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <TreeSVG className="absolute bottom-0 -right-16 md:-right-10 w-[200px] h-[300px] md:w-[250px] md:h-[375px] lg:w-[300px] lg:h-[450px] opacity-40 text-deep-green/30" />
      <div className="absolute top-0 left-0 w-full h-full">
        {leaves.map(leaf => (
          <Leaf key={leaf.id} {...leaf} />
        ))}
      </div>
    </div>
  );
};

export default TreeWithFallingLeaves;
