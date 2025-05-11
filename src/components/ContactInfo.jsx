
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfoItem = ({ icon: Icon, text, href }) => {
  const content = (
    <>
      <Icon className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center p-3 hover:bg-secondary rounded-md transition-colors group"
      >
        {content}
      </a>
    );
  }
  return <div className="flex items-center p-3">{content}</div>;
};


const ContactInfo = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div 
      className="space-y-4"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 variants={fadeInUp} className="text-xl font-semibold text-foreground mb-4">
        Contact Information
      </motion.h3>
      <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
        Feel free to reach out through any of these channels. I'm always open to new ideas and collaborations.
      </motion.p>
      <motion.div variants={fadeInUp}>
        <ContactInfoItem icon={Mail} text="jaswantchary@gmail.com" href="mailto:jaswantchary@gmail.com" />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <ContactInfoItem icon={Phone} text="+1 (555) 123-4567" href="tel:+15551234567" />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <ContactInfoItem icon={MapPin} text="Cyberspace (Usually Building)" />
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
