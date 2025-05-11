
import React, { useState, useRef, createContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import SiteHeader from '@/components/SiteHeader';
import HomePage from '@/pages/HomePage';
import JournalPage from '@/pages/JournalPage';
import VisionDetailPage from '@/pages/VisionDetailPage'; 
import NotFoundPage from '@/pages/NotFoundPage';
import SoundtrackToggle from '@/components/SoundtrackToggle';
import FlyingBirds from '@/components/FlyingBirds';
import { motion, AnimatePresence } from 'framer-motion';

export const AudioControlContext = createContext(null);

const App = () => {
  const audioRefSoundtrack = useRef(null);
  const [isSoundtrackPlaying, setIsSoundtrackPlaying] = useState(false);
  const location = useLocation();
  const [showBirds, setShowBirds] = useState(false);

  const pageTransitionVariants = {
    initial: { opacity: 0, filter: 'blur(8px)' },
    animate: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeInOut' } },
    exit: { opacity: 0, filter: 'blur(8px)', transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) { 
        setShowBirds(true);
      } else {
        setShowBirds(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <AudioControlContext.Provider value={{ audioRefSoundtrack, isSoundtrackPlaying, setIsSoundtrackPlaying }}>
      <div className="min-h-screen bg-warm-off-white text-warm-grey font-body selection:bg-emotional-teal/30 relative overflow-x-clip">
        {showBirds && <FlyingBirds />}
        <SiteHeader />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname} 
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="overflow-x-hidden" 
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/visions/:visionId" element={<VisionDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <SoundtrackToggle />
        <Toaster />
      </div>
    </AudioControlContext.Provider>
  );
};

export default App;
