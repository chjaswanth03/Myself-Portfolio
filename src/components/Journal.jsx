
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Edit3, CalendarDays, ArrowRight } from 'lucide-react'; // Added ArrowRight
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom'; // Added Link

const Journal = ({ isPreview = false }) => { // Added isPreview prop
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const allPosts = [
    {
      id: 1,
      slug: 'the-unfolding-path',
      title: 'The Unfolding Path',
      date: 'May 08, 2025', 
      excerpt: "Today, the silence felt louder... like clouds before a storm. Sketching spirals, eyes, lotuses. Each line a question...",
      entry: "Today, the silence felt louder than usual. Not an empty silence, but one pregnant with unformed thoughts, like clouds before a storm. I found myself sketching aimlessly—spirals, eyes, lotuses. Each line a question, each curve a possibility. What am I truly building? Not just companies, but a testament. A testament to what? Still figuring that part out... still writing myself.",
      doodlePlaceholder: 'Rough sketch of a lotus blooming from a spiral.',
    },
    {
      id: 2,
      slug: 'echoes-of-ancestors',
      title: 'Echoes of Ancestors',
      date: 'May 03, 2025', 
      excerpt: "Read 'Aham Brahmasmi' this morning. This journey feels less like 'my' work and more like channeling ancient drives...",
      entry: "Read a verse from the Upanishads this morning: 'अहं ब्रह्मास्मि' (Aham Brahmasmi - I am Brahman). It resonated deeply. This journey of creation feels less like 'my' work and more like a channeling. The ideas, the drive... they feel ancient, passed down. My role is to be a worthy vessel. Humbling, and a little terrifying.",
      doodlePlaceholder: 'Stylized "Om" symbol with flowing lines.',
    },
    {
      id: 3,
      slug: 'the-quiet-rebellion',
      title: 'The Quiet Rebellion',
      date: 'April 28, 2025', 
      excerpt: "The world shouts for noise. My soul craves depth. Building in silence is rebellion—choosing substance over spectacle...",
      entry: "The world shouts for attention, for noise, for constant output. My soul craves depth, stillness, meaningful creation. Building in silence, for me, is a form of rebellion. It's choosing substance over spectacle. It's trusting that what is built with truth will find its way, even if whispered.",
      doodlePlaceholder: 'A single, resilient tree standing against a stormy sky.',
    },
  ];

  const postsToDisplay = isPreview ? allPosts.slice(0, 2) : allPosts; // Show 2 for preview, all otherwise

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribing(true);
    setTimeout(() => {
      toast({
        title: "A Letter Sent.",
        description: "Thank you. Look for my thoughts in your inbox, sometimes.",
        duration: 5000,
      });
      setEmail('');
      setIsSubscribing(false);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(3px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  return (
    <section id="journal" className={`py-16 md:py-24 relative ${!isPreview ? 'bg-warm-off-white/50' : ''}`}>
       <div className="ink-manuscript-bg opacity-[0.02]" aria-hidden="true"></div>
      {!isPreview && ( /* Only show main heading on the dedicated Journal page */
        <motion.h2 
          className="section-heading relative z-10 classic-serif-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          Pages from My Mind
        </motion.h2>
      )}
      {isPreview && ( /* Show section heading on homepage preview */
         <motion.h2 
          className="section-heading relative z-10 classic-serif-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          From My Journal
        </motion.h2>
      )}
      
      <motion.div 
        className="space-y-10 md:space-y-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {postsToDisplay.map((post, index) => (
          <React.Fragment key={post.id}>
            <motion.article 
              variants={fadeInUp}
              className="journal-entry-card-base group max-w-2xl mx-auto prose-poetic" 
            >
              <div className="flex items-center mb-2">
                <CalendarDays size={14} className="mr-2 text-muted-foreground"/>
                <span className="entry-date">{post.date}</span>
              </div>
              <h3 className="cursor-ink-quill">
                {post.title}
              </h3>
              {post.doodlePlaceholder && (
                <div className="doodle-placeholder">
                  <Edit3 size={20} className="mr-2 opacity-40"/> {post.doodlePlaceholder}
                </div>
              )}
              <p className="entry-excerpt">{post.entry}</p>
            </motion.article>
            {index < postsToDisplay.length - 1 && <div className="journal-card-separator max-w-sm mx-auto"></div>}
          </React.Fragment>
        ))}
      </motion.div>

      {isPreview && postsToDisplay.length < allPosts.length && (
        <motion.div 
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Link to="/journal">
            <Button variant="outline" size="lg" className="hero-button-outline cursor-ink-dot group">
              Explore All Entries <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      )}
      
      <motion.div 
        className="mt-16 md:mt-20 text-center max-w-lg mx-auto bg-card p-8 rounded-xl shadow-xl border border-border/30 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h4 className="font-heading text-xl text-soft-charcoal mb-2">Not a newsletter.</h4>
        <p className="font-body text-warm-grey/80 mb-6">A letter from me, sometimes.</p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
          <Input 
            type="email" 
            placeholder="Your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow bg-warm-off-white border-border/70 focus:bg-warm-off-white focus:ring-2 focus:ring-emotional-teal/50 focus:border-emotional-teal/50 rounded-md text-sm cursor-ink-dot" 
            aria-label="Email for subscription"
          />
          <Button 
            type="submit" 
            variant="default" 
            disabled={isSubscribing}
            className="bg-emotional-teal text-primary-foreground hover:bg-emotional-teal/90 rounded-md shadow-md hover:shadow-lg transition-all text-sm px-5 cursor-ink-dot"
          >
            {isSubscribing ? 'Sending...' : <>Send Word <Send size={14} className="ml-2" /></>}
          </Button>
        </form>
      </motion.div>
    </section>
  );
};

export default Journal;
