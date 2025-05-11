
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

const ContactLegacySection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleLegacyFormSubmit = async (formData) => {
    console.log("Legacy form submitted with data:", formData);
    // In a real scenario, this would integrate with a backend or service
    // For now, it's just a placeholder.
  };

  return (
    <section id="contact-legacy" className="py-12 hidden"> {/* Keep hidden as it's legacy */}
       <motion.h2 
        className="text-3xl font-bold mb-8 text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        Get In Touch (Legacy)
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <motion.div 
          className="md:col-span-1"
          initial="hidden"
          whileInVew="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <ContactInfo />
        </motion.div>
        <motion.div 
          className="md:col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
         >
           <ContactForm onSubmit={handleLegacyFormSubmit} />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLegacySection;
