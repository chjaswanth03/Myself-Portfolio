
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <PageLayout title="Page Not Found">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20, delay: 0.2 } }}
          className="inline-block mb-8"
        >
          <AlertTriangle size={80} className="text-destructive" />
        </motion.div>
        
        <motion.p 
          className="text-xl text-warm-grey/80 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
        >
          Oops! The page you are looking for seems to have wandered off the path.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
        >
          <Link to="/">
            <Button variant="default" size="lg" className="hero-button cursor-ink-dot">
              Return to a Familiar Path (Home)
            </Button>
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
