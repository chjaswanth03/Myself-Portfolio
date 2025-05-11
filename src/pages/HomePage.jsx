
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import WhoIAmBecoming from '@/components/WhoIAmBecoming';
import VisionsBuilding from '@/components/VisionsBuilding';
import Journal from '@/components/Journal';
import WordsThatBuiltMe from '@/components/WordsThatBuiltMe';
import Soundtrack from '@/components/Soundtrack';
import LetsTalk from '@/components/LetsTalk';
import { AudioControlContext } from '@/App'; // Assuming App.jsx is in src

const HomePage = () => {
  const { audioRefSoundtrack } = React.useContext(AudioControlContext);

  const sectionAnimation = (delay = 0) => ({
    hidden: { opacity: 0, y: 50, filter: 'blur(5px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: delay }
    }
  });

  return (
    <>
      <motion.div variants={sectionAnimation(0)} initial="hidden" animate="visible" viewport={{ once: true, amount: 0.1 }}>
        <Hero />
      </motion.div>
      
      <div className="container mx-auto max-w-5xl px-4 py-24 sm:py-32 space-y-32 md:space-y-48"> 
        <motion.div variants={sectionAnimation(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <WhoIAmBecoming />
        </motion.div>
        <motion.div variants={sectionAnimation(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <VisionsBuilding />
        </motion.div>
        <motion.div variants={sectionAnimation(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {/* Keep Journal component here for homepage preview, or create a separate JournalPreview component */}
          <Journal isPreview={true} /> 
        </motion.div>
        <motion.div variants={sectionAnimation(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <WordsThatBuiltMe />
        </motion.div>
        <motion.div variants={sectionAnimation(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <Soundtrack audioRef={audioRefSoundtrack} /> 
        </motion.div>
        <motion.div variants={sectionAnimation(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <LetsTalk />
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
