
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { AudioControlContext } from '@/App';

const SoundtrackToggle = () => {
  const context = useContext(AudioControlContext);

  if (!context) {
    return null; 
  }

  const { audioRefSoundtrack, isSoundtrackPlaying, setIsSoundtrackPlaying } = context;

  const toggleSoundtrack = () => {
    if (audioRefSoundtrack.current) {
      if (isSoundtrackPlaying) {
        audioRefSoundtrack.current.pause();
      } else {
        audioRefSoundtrack.current.volume = 0.3; // Start at a gentle volume
        audioRefSoundtrack.current.play().catch(error => console.error("Error playing soundtrack:", error));
      }
      setIsSoundtrackPlaying(!isSoundtrackPlaying);
    }
  };

  return (
    <motion.button
      onClick={toggleSoundtrack}
      className="soundtrack-toggle-button cursor-ink-dot"
      aria-label={isSoundtrackPlaying ? "Mute Soundtrack" : "Play Soundtrack"}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {isSoundtrackPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
    </motion.button>
  );
};

export default SoundtrackToggle;
