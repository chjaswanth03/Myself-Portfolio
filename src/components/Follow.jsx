
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import { Rss, Twitter, Linkedin } from 'lucide-react';

const Follow = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="follow" className="py-12 text-center bg-secondary rounded-lg px-6">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-foreground">
          Stay Connected
        </h2>
        <p className="text-muted-foreground mb-8">
          Get updates on new articles, projects, and thoughts. Subscribe to the newsletter or follow me on social media.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-8">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow bg-background" 
            aria-label="Email for newsletter"
          />
          <Button type="submit" variant="default">Subscribe</Button>
        </form>
        
        <div className="flex justify-center items-center space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link-subtle" aria-label="Follow on Twitter">
            <Twitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-subtle" aria-label="Connect on LinkedIn">
            <Linkedin size={24} />
          </a>
           <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="link-subtle" aria-label="RSS Feed">
            <Rss size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Follow;
