
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Writing = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Community Building Online',
      date: 'May 1, 2025',
      excerpt: 'Exploring trends and strategies for fostering vibrant online communities in the modern web...',
      link: '#', 
    },
    {
      id: 2,
      title: 'React Patterns for Scalable Applications',
      date: 'April 15, 2025',
      excerpt: 'A deep dive into component patterns and state management techniques for large React projects...',
      link: '#',
    },
    {
      id: 3,
      title: 'Designing for User Delight',
      date: 'March 28, 2025',
      excerpt: 'Beyond usability: How subtle design choices can create memorable and delightful user experiences...',
      link: '#',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="writing" className="py-12">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        Writing
      </motion.h2>
      
      <motion.div 
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {posts.map((post) => (
          <motion.article key={post.id} variants={fadeInUp}>
            <a href={post.link} className="group block">
              <p className="text-sm text-muted-foreground mb-1">{post.date}</p>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-3">{post.excerpt}</p>
              <span className="text-sm font-medium text-primary inline-flex items-center group-hover:underline">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </a>
          </motion.article>
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
         <Button variant="outline" asChild>
            <a href="#">
              View All Posts
            </a>
          </Button>
      </motion.div>
    </section>
  );
};

export default Writing;
