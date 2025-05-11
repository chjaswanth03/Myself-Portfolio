
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: '/' },
    { label: "Who I'm Becoming", href: '/#who-im-becoming' },
    { label: 'Visions', href: '/#visions-building' }, // Link to section on homepage
    { label: 'Journal', href: '/journal' }, // Link to new Journal page
    { label: 'Words That Built Me', href: '/#words-that-built-me'},
    { label: 'Soundtrack', href: '/#soundtrack' },
    { label: 'Let’s Talk', href: '/#lets-talk' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      // For homepage anchor links, slight delay for menu to close
      setTimeout(() => {
        const elementId = href.substring(2);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };


  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                  ${isScrolled || isOpen ? 'bg-ivory/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            to="/"
            className="text-2xl font-heading font-bold tracking-tight text-soft-charcoal transition-colors hover:text-teal-ink"
            onClick={() => handleLinkClick('/')}
          >
            StillWritingMyself
          </Link>
        </motion.div>

        <nav className="hidden md:block">
          <motion.ul
            className="flex space-x-6 items-center"
            initial="closed"
            animate="open"
            variants={menuVariants}
          >
            {navItems.map((item) => (
              <motion.li key={item.label} variants={itemVariants}>
                <NavLink
                  to={item.href.startsWith('/#') ? '/' : item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={({ isActive }) =>
                    `text-sm font-body font-medium text-soft-charcoal/80 hover:text-teal-ink transition-colors ${
                      isActive && item.href !== "/#who-im-becoming" && item.href !== "/#visions-building" && item.href !== "/#words-that-built-me" && item.href !== "/#soundtrack" && item.href !== "/#lets-talk"  ? 'text-teal-ink font-semibold' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-soft-charcoal p-2 z-50"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-ivory/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <motion.ul
              className="flex flex-col items-center space-y-4 py-6"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item) => (
                <motion.li key={item.label} variants={itemVariants} className="w-full text-center">
                  <NavLink
                    to={item.href.startsWith('/#') ? '/' : item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={({ isActive }) =>
                      `block py-3 text-md font-body font-semibold text-soft-charcoal hover:text-teal-ink hover:bg-sand/50 transition-colors w-full ${
                        isActive && item.href !== "/#who-im-becoming" && item.href !== "/#visions-building" && item.href !== "/#words-that-built-me" && item.href !== "/#soundtrack" && item.href !== "/#lets-talk" ? 'text-teal-ink bg-sand/50' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
