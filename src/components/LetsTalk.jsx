
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Send, Github, Edit2, ChevronDown, ChevronUp } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const LetsTalk = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com/StillWritingMyself', label: 'Instagram @StillWritingMyself', isHandwritten: true },
    { Icon: Edit2, href: 'https://github.com/Jaswant-chary', label: 'GitHub', isHandwritten: true }, 
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(3px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }
    }
  };
  
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  
  const iconHover = {
    y: -3,
    scale: 1.1,
    transition: { type: 'spring', stiffness: 300 }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    toast({
      title: "Form Submission Mockup",
      description: "This is a UI demonstration. To make this form functional, you'll need to connect it to a backend service like Formspree or Supabase Functions.",
      duration: 8000,
    });
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setShowForm(false); 
      toast({
        title: "Message Sent (Simulation)",
        description: "Your thoughts have been notionally dispatched.",
        duration: 5000,
      });
    }, 2000);
  };


  return (
    <section id="lets-talk" className="py-16 md:py-24 text-center">
      <motion.div
        className="mb-16 md:mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <p className="signature-line">
          Writing... until I become.
        </p>
        <p className="signature-line-telugu">ఇంకా వ్రాస్తూనే... నేను అయ్యే వరకు.</p>
      </motion.div>

      <motion.h2 
        className="section-heading classic-serif-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        You Felt Something? Let’s Talk.
      </motion.h2>

      <motion.p
        className="section-subheading max-w-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        If these words or visions resonated, or if you're building something with soul, I'd love to hear from you.
      </motion.p>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="mb-8"
      >
        <motion.a 
          href="mailto:jaswantchary@gmail.com"
          className="hero-button cursor-ink-dot inline-flex items-center"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Send an Email <Send size={16} className="ml-2.5" />
        </motion.a>
      </motion.div>

      <motion.div
        className="my-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <Button 
          variant="outline" 
          onClick={() => setShowForm(!showForm)} 
          className="hero-button-outline cursor-ink-dot group"
          aria-expanded={showForm}
        >
          {showForm ? 'Close Form' : 'Or Leave a Message Here'} 
          {showForm ? <ChevronUp size={18} className="ml-2 group-hover:-translate-y-0.5 transition-transform" /> : <ChevronDown size={18} className="ml-2 group-hover:translate-y-0.5 transition-transform" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ opacity: 0, height: 0, y: -20, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }}
            className="max-w-lg mx-auto mt-4 mb-12 text-left overflow-hidden"
          >
            <form onSubmit={handleSubmitForm} className="space-y-6 bg-card p-6 md:p-8 rounded-xl shadow-xl border border-border/30">
              <div>
                <Label htmlFor="name" className="font-body text-sm text-muted-foreground">Your Name</Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  className="mt-1 bg-warm-off-white border-border/70 focus:bg-warm-off-white focus:ring-2 focus:ring-emotional-teal/50 focus:border-emotional-teal/50 rounded-md text-sm cursor-ink-dot"
                />
              </div>
              <div>
                <Label htmlFor="email" className="font-body text-sm text-muted-foreground">Your Email</Label>
                <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  className="mt-1 bg-warm-off-white border-border/70 focus:bg-warm-off-white focus:ring-2 focus:ring-emotional-teal/50 focus:border-emotional-teal/50 rounded-md text-sm cursor-ink-dot"
                />
              </div>
              <div>
                <Label htmlFor="message" className="font-body text-sm text-muted-foreground">Your Message</Label>
                <Textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  className="mt-1 bg-warm-off-white border-border/70 focus:bg-warm-off-white focus:ring-2 focus:ring-emotional-teal/50 focus:border-emotional-teal/50 rounded-md text-sm cursor-ink-dot"
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full hero-button cursor-ink-dot"
                >
                  {isSubmitting ? 'Sending Thoughts...' : 'Send Your Message'}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>


      <motion.div 
        className="mt-12 border-t border-border/50 pt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.p 
           className="font-body text-sm text-muted-foreground mb-5"
           variants={fadeInUp}
         >
          Or find me weaving words and visions here:
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-5 sm:space-x-6 mb-8"
           variants={staggerContainer}
         >
           {socialLinks.map((link) => (
             <motion.a
               key={link.label}
               href={link.href}
               target={'_blank'}
               rel="noopener noreferrer"
               aria-label={link.label}
               className={`footer-social-icon cursor-ink-dot ${link.isHandwritten ? 'font-signature text-2xl p-1' : ''}`}
               variants={fadeInUp}
               whileHover={iconHover}
               whileTap={{ scale: 0.9 }}
             >
               <link.Icon size={link.isHandwritten ? 24 : 20} strokeWidth={link.isHandwritten ? 1.5 : 2}/>
             </motion.a>
           ))}
        </motion.div>
        <motion.p 
           className="font-body text-sm text-muted-foreground mb-6"
           variants={fadeInUp}
         >
          Thank you for reading my unwritten thoughts.
        </motion.p>
        <motion.p 
           className="font-signature text-2xl text-dark-grey/80"
           variants={fadeInUp}
         >
          StillWritingMyself
        </motion.p>
        <motion.p 
           className="font-body text-xs text-muted-foreground mt-2"
           variants={fadeInUp}
         >
          © {new Date().getFullYear()}. Built with soul & code.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default LetsTalk;
