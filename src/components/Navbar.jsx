
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { label: 'Blog', href: '#guides' }, // Updated href to match section ID
    { label: 'About Me', href: '#about' }, // Needs an element with id="about" or a separate page
  ];

  return (
    <header className="py-6 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"> {/* Make navbar sticky */}
      <div className="container mx-auto max-w-6xl px-4 flex justify-between items-center">
        <motion.a
          href="/" 
          className="text-xl font-heading font-bold tracking-tight text-foreground transition-colors hover:text-accentColor" // Use accent on hover
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          ALEX JOHNSON {/* Using placeholder name */}
        </motion.a>
        
        <nav>
          <motion.ul 
            className="flex space-x-6"
             initial="hidden"
             animate="visible"
             variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
           > 
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
