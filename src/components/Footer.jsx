
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Youtube, Linkedin, Instagram } from 'lucide-react'; 

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
   const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } // Add delay for children
  };

  const socialLinks = [
    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];
  
  const iconHover = {
    y: -3, // Move icon up slightly
    scale: 1.1,
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <footer className="mt-20 mb-12">
      <div className="container mx-auto max-w-3xl px-4 text-center"> 
        <motion.div 
          className="border-t border-border pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer} // Apply stagger to the container
        >
          <motion.p 
             className="text-sm font-medium text-muted-foreground mb-4"
             variants={fadeIn} // Individual fade in
           >
            Find and follow me over here
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6 mb-6"
             variants={staggerContainer} // Stagger icons themselves
           >
             {socialLinks.map((link) => (
               <motion.a
                 key={link.label}
                 href={link.href}
                 target={'_blank'}
                 rel="noopener noreferrer"
                 aria-label={link.label}
                 className="link-subtle"
                 variants={fadeIn} // Fade in each icon
                 whileHover={iconHover} // Apply hover animation
                 whileTap={{ scale: 0.9 }}
               >
                 <link.Icon size={20} />
               </motion.a>
             ))}
          </motion.div>
          <motion.p 
             className="text-xs text-muted-foreground mb-2"
             variants={fadeIn}
           >
            © {new Date().getFullYear()} Alex Johnson
          </motion.p>
          <motion.p 
            className="font-heading font-bold text-lg tracking-tight text-foreground" // Use heading font
             variants={fadeIn}
           >
            ALEX JOHNSON
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
