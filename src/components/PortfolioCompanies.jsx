
import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCompanies = () => {
  const companies = [
    {
      id: 1,
      name: 'Late Checkout',
      description: 'A holding company for businesses powered by community.',
      logoAlt: 'Late Checkout logo',
      logoPlaceholder: 'Colorful abstract logo for Late Checkout',
      link: '#',
    },
    {
      id: 2,
      name: 'LCA',
      description: 'Product agency designing what\'s next for billion dollar brands.',
      logoAlt: 'LCA logo',
      logoPlaceholder: 'Minimalist LCA text logo',
      link: '#',
    },
    {
      id: 3,
      name: 'BORINGMARKETING.com',
      description: 'Scale your sales organically with AI-assisted "SEO 2.0".',
      logoAlt: 'BoringMarketing logo',
      logoPlaceholder: 'Green text logo for BoringMarketing.com',
      link: '#',
    },
     {
      id: 4,
      name: 'Startup Empire',
      description: 'The membership for building online business empires.',
      logoAlt: 'Startup Empire logo',
      logoPlaceholder: 'Crown logo for Startup Empire',
      link: '#',
    },
  ];
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="portfolio-companies" className="py-12">
      <motion.h3
        className="section-heading" // Consistent heading style
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        Work with me and my team
      </motion.h3>
      <motion.p 
        className="text-sm text-muted-foreground mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        Check out my portfolio companies:
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 gap-4" // Single column layout
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {companies.map((company) => (
          <motion.a
            key={company.id}
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="company-card group" // Add group class
            variants={fadeInUp}
            whileHover={{ y: -4 }} // Lift card slightly on hover
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-md flex items-center justify-center overflow-hidden">
              <img  
                className="w-8 h-8 object-contain" // Ensure logo fits
                alt={company.logoAlt}
               src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" />
            </div>
            <div className="flex-grow">
              <h4>{company.name}</h4>
              <p>{company.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioCompanies;
