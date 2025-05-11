
import React from 'react';
import { motion } from 'framer-motion';

const Bird = ({ initialX, initialY, duration, delay, size = 20, direction = 1 }) => {
  
  const yBobbingAmount = 20; 

  const birdVariants = {
    initial: { 
      x: initialX, 
      y: initialY, 
      opacity: 0,
      scaleX: direction 
    },
    animate: {
      x: direction > 0 ? '110vw' : '-10vw', 
      y: [
        `calc(${initialY})`, 
        `calc(${initialY} - ${yBobbingAmount}px)`, 
        `calc(${initialY} + ${yBobbingAmount / 2}px)`, 
        `calc(${initialY} - ${yBobbingAmount * 0.75}px)`, 
        `calc(${initialY})`
      ],
      opacity: [0, 0.7, 0.7, 0.7, 0],
      transition: {
        x: {
          duration: duration,
          delay: delay,
          ease: "linear",
        },
        y: { 
          duration: duration / 4,
          delay: delay, 
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut"
        },
        opacity: { 
          times: [0, 0.1, 0.9, 1], 
          duration: duration,
          delay: delay,
          ease: "linear"
        }
      }
    }
  };

  return (
    <motion.svg
      variants={birdVariants}
      initial="initial"
      animate="animate"
      style={{ position: 'fixed', zIndex: 10, pointerEvents: 'none' }}
      width={size}
      height={size * 0.6}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-subtle-grey/40" 
    >
      <path d="M0 5C0 5 2 2 5 2C8 2 10 5 10 5C10 5 12 2 15 2C18 2 20 5 20 5L10 12L0 5Z" fill="currentColor"/>
    </motion.svg>
  );
};

const FlyingBirds = () => {
  const birdsData = [
    { initialX: '-10vw', initialY: '20vh', duration: 25, delay: 0, size: 22, direction: 1 },
    { initialX: '-15vw', initialY: '35vh', duration: 30, delay: 2.5, size: 18, direction: 1 },
    { initialX: '110vw', initialY: '25vh', duration: 28, delay: 5, size: 20, direction: -1 },
    { initialX: '-20vw', initialY: '50vh', duration: 35, delay: 7.5, size: 25, direction: 1 },
    { initialX: '115vw', initialY: '60vh', duration: 22, delay: 10, size: 16, direction: -1 },
    { initialX: '-10vw', initialY: '70vh', duration: 32, delay: 12, size: 19, direction: 1 },
  ];

  return (
    <>
      {birdsData.map((bird, index) => (
        <Bird key={index} {...bird} />
      ))}
    </>
  );
};

export default FlyingBirds;
