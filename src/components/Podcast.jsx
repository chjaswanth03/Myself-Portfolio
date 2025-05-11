
import React from 'react';
import { motion } from 'framer-motion';
import { Podcast as Spotify, Youtube, Radio } from 'lucide-react'; 

const Podcast = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const podcastLinks = [
    { Icon: Spotify, href: 'https://spotify.com', label: 'Spotify' },
    { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { Icon: Radio, href: 'https://podcasts.apple.com', label: 'Apple Podcasts' },
  ];

  const iconHover = {
    scale: 1.2,
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <section id="podcast" className="py-12">
      <motion.h3
        className="section-heading" // Consistent heading style
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        Listen to my podcast
      </motion.h3>

      <motion.div 
        className="bg-secondary rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-card" // Added hover effect
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        whileHover={{ scale: 1.02 }} // Scale up the whole card
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.div 
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img  
            className="w-24 h-24 rounded-md object-cover bg-muted shadow-sm" // Added shadow
            alt="Podcast artwork"
           src="https://images.unsplash.com/photo-1511792962219-5d2d76ebf3ab" />
        </motion.div>
        <div className="flex-grow text-center sm:text-left">
          <h4 className="text-lg font-semibold text-foreground mb-1">The Startup Ideas Podcast</h4>
          <p className="text-sm text-muted-foreground mb-4">Exploring actionable startup ideas and frameworks.</p>
          <div className="mb-4">
             <p className="text-sm font-medium text-foreground">Latest: AI Agents will replace a 10-Person Team</p>
             <p className="text-xs text-muted-foreground">Apr 30</p>
          </div>
          <div className="flex justify-center sm:justify-start items-center space-x-4">
            <span className="text-sm text-muted-foreground">More episodes:</span>
            {podcastLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Listen on ${link.label}`}
                className="link-subtle"
                whileHover={iconHover} // Apply hover animation
                whileTap={{ scale: 0.9 }}
              >
                <link.Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Podcast;
