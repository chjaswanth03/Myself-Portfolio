
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music2 } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { AudioControlContext } from '@/App';
import TreeWithFallingLeaves from '@/components/TreeWithFallingLeaves';


const Soundtrack = ({ audioRef }) => { 
  const { isSoundtrackPlaying, setIsSoundtrackPlaying } = useContext(AudioControlContext);
  const [volume, setVolume] = React.useState([0.3]); 
  const [isMuted, setIsMuted] = React.useState(false);


  const audioSrc = ""; 
  const trackTitle = "Sadhinchane O Manasa - Tyagaraja";


  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isSoundtrackPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsSoundtrackPlaying(!isSoundtrackPlaying);
    }
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume[0];
      setIsMuted(newVolume[0] === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const currentVolume = audioRef.current.volume;
      if (isMuted || currentVolume === 0) {
        const newVolume = volume[0] > 0 ? volume[0] : 0.1; 
        audioRef.current.volume = newVolume;
        setVolume([newVolume]);
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(3px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
  };

  return (
    <section id="soundtrack" className="py-16 md:py-24 relative overflow-hidden">
      <TreeWithFallingLeaves />
      <motion.div 
        className="flex items-center justify-center section-heading classic-serif-title relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Music2 size={36} className="mr-3 text-emotional-teal animate-float" strokeWidth={1.5}/>
        If My Thoughts Had a Soundtrack
      </motion.div>

      <motion.div 
        className="max-w-md mx-auto soundtrack-player-card relative z-10" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <audio ref={audioRef} src={audioSrc} loop onEnded={() => setIsSoundtrackPlaying(false)} />
        
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-warm-off-white rounded-lg flex items-center justify-center mr-4 shadow-inner">
            <img  className="w-10 h-10 text-emotional-teal opacity-50" alt="Musical note icon for Sadhinchane O Manasa" src="https://images.unsplash.com/photo-1699306459956-a37c894e0f1b" />
          </div>
          <div>
            <h4 className="font-heading text-lg text-soft-charcoal">{trackTitle}</h4>
            <p className="font-body text-xs text-muted-foreground">A Carnatic classic for the soul.</p>
          </div>
        </div>
        
        <div className="waveform-container mb-4">
          <div className="waveform-bar animate-waveform-bar1"></div>
          <div className="waveform-bar animate-waveform-bar2"></div>
          <div className="waveform-bar animate-waveform-bar3"></div>
          <div className="waveform-bar animate-waveform-bar1" style={{animationDelay: '0.1s'}}></div>
          <div className="waveform-bar animate-waveform-bar2" style={{animationDelay: '0.3s'}}></div>
          <div className="waveform-bar animate-waveform-bar3" style={{animationDelay: '0.5s'}}></div>
        </div>


        <div className="flex items-center justify-between space-x-3">
          <button 
            onClick={togglePlayPause} 
            className="p-2 text-emotional-teal hover:text-teal-ink transition-colors cursor-ink-dot"
            aria-label={isSoundtrackPlaying ? "Pause" : "Play"}
          >
            {isSoundtrackPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>
          
          <div className="flex items-center flex-grow space-x-2">
             <button 
              onClick={toggleMute} 
              className="p-1 text-emotional-teal hover:text-teal-ink transition-colors cursor-ink-dot"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || (audioRef.current && audioRef.current.volume === 0) ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <Slider
              defaultValue={[0.3]}
              max={1}
              step={0.01}
              value={isMuted ? [0] : volume}
              onValueChange={handleVolumeChange}
              className="w-full [&>span:first-child]:h-1.5 [&>span:first-child>span]:h-1.5 [&>span:first-child>span]:bg-emotional-teal [&>span:first-child]:bg-warm-off-white [&[data-orientation=horizontal]>span:last-child]:h-4 [&[data-orientation=horizontal]>span:last-child]:w-4 [&[data-orientation=horizontal]>span:last-child]:bg-card [&[data-orientation=horizontal]>span:last-child]:border-2 [&[data-orientation=horizontal]>span:last-child]:border-emotional-teal cursor-ink-dot"
              aria-label="Volume control"
            />
          </div>
        </div>
        <p className="text-center text-xs font-body text-muted-foreground mt-4">
          (Music: Sadhinchane O Manasa - Tyagaraja)
        </p>
      </motion.div>
    </section>
  );
};

export default Soundtrack;
