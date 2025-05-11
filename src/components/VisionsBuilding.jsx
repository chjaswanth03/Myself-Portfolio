
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link
import { ExternalLink, Zap, Feather, Coffee, Brain } from 'lucide-react';

const VisionsBuilding = () => {
  const visions = [
    {
      id: 'annadata-ai', // Use slug for ID
      name: 'Annadata AI',
      tagline: '“For the farmers who feed gods.”',
      description: 'Leveraging AI to empower agricultural communities and promote sustainable farming.',
      Icon: Zap, 
      link: '/visions/annadata-ai', // Update link to detail page
    },
    {
      id: 'writara-media',
      name: 'Writara Media',
      tagline: '“Stories that echo longer than trends.”',
      description: 'A media house dedicated to timeless storytelling that inspires and connects.',
      Icon: Feather,
      link: '/visions/writara-media',
    },
    {
      id: 'annapurna',
      name: 'Annapurna',
      tagline: '“Feeding people with dignity, not leftovers.”',
      description: 'A social enterprise committed to eradicating hunger with respect for all.',
      Icon: Coffee,
      link: '/visions/annapurna',
    },
    {
      id: 'neuroshield',
      name: 'NeuroShield',
      tagline: '“AI to protect what matters most — our minds.”',
      description: 'Developing AI solutions to safeguard mental well-being and cognitive resilience.',
      Icon: Brain,
      link: '/visions/neuroshield',
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
    <section id="visions-building" className="py-16 md:py-24">
      <motion.h2
        className="section-heading classic-serif-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        Visions I’m Building
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {visions.map((vision) => (
          <motion.div
            key={vision.id}
            className="vision-card-base group" 
            variants={fadeInUp}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px hsla(var(--emotional-teal)/0.2), 0 0 15px hsla(var(--emotional-teal)/0.4)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <vision.Icon className="vision-icon" size={32} strokeWidth={1.5}/>
            <h4 className="cursor-ink-quill group-hover:text-shadow-soft-teal-glow">{vision.name}</h4>
            <p className="font-body text-sm italic text-emotional-teal mb-3">{vision.tagline}</p>
            <p className="font-body text-warm-grey/80 mb-4 text-sm leading-relaxed">{vision.description}</p>
            {vision.link && ( // Always show link if it exists
              <Link 
                to={vision.link} 
                className="inline-flex items-center text-xs font-body font-semibold text-emotional-teal hover:underline group-hover:text-teal-ink/80 transition-colors interactive-link"
              >
                Explore Vision <ExternalLink size={12} className="ml-1" />
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default VisionsBuilding;
