
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = ({ onSubmit }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (onSubmit) {
      await onSubmit(formData);
    } else {
      
      console.log('Form data submitted (legacy):', formData);
      toast({
        title: 'Message Sent (Simulation)',
        description: "This is a legacy form. Your message has been notionally dispatched.",
        duration: 5000,
      });
    }
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-card rounded-lg shadow-xl border border-border/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } }}
    >
      <div>
        <Label htmlFor="legacy-name" className="font-body text-sm text-muted-foreground">Your Name</Label>
        <Input
          type="text"
          name="name"
          id="legacy-name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 bg-warm-off-white border-border/70 focus:bg-warm-off-white focus:ring-2 focus:ring-emotional-teal/50 focus:border-emotional-teal/50 rounded-md text-sm cursor-ink-dot"
        />
      </div>
      <div>
        <Label htmlFor="legacy-email" className="font-body text-sm text-muted-foreground">Your Email</Label>
        <Input
          type="email"
          name="email"
          id="legacy-email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 bg-warm-off-white border-border/70 focus:bg-warm-off-white focus:ring-2 focus:ring-emotional-teal/50 focus:border-emotional-teal/50 rounded-md text-sm cursor-ink-dot"
        />
      </div>
      <div>
        <Label htmlFor="legacy-message" className="font-body text-sm text-muted-foreground">Your Message</Label>
        <Textarea
          name="message"
          id="legacy-message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
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
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
