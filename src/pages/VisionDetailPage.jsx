
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Zap, BookText, Users, Shield, Feather, Coffee, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const visionsData = [
  {
    id: 'annadata-ai',
    name: 'Annadata AI',
    tagline: '“For the farmers who feed gods.”',
    Icon: Zap, 
    description: 'Leveraging AI to empower agricultural communities and promote sustainable farming by providing actionable insights, predictive analytics for crop management, and optimizing resource allocation. Our goal is to bridge the technological gap for smallholder farmers, enhancing their yield and livelihood.',
    details: [
      'Developed a hyperlocal weather prediction model with 92% accuracy.',
      'Piloted a soil health monitoring system using IoT sensors.',
      'Partnered with 3 farmer cooperatives, impacting over 500 families.',
      'Ongoing research into AI-driven pest detection.',
    ],
    imagePlaceholder: 'A vibrant image of lush green fields with farmers using technology.'
  },
  {
    id: 'writara-media',
    name: 'Writara Media',
    tagline: '“Stories that echo longer than trends.”',
    Icon: Feather,
    description: 'Writara Media is a media house dedicated to timeless storytelling that inspires, connects, and provokes thought. We focus on narratives that explore the human condition, cultural heritage, and visions for a more conscious future.',
    details: [
      'Published an anthology of modern poetry exploring identity and belonging.',
      'Produced a documentary series on unsung artisans of India.',
      'Launched a podcast featuring conversations with visionary thinkers.',
      'Developing a platform for emerging writers to share their authentic voice.',
    ],
    imagePlaceholder: 'An artistic shot of an old typewriter or a stack of handwritten journals.'
  },
  {
    id: 'annapurna',
    name: 'Annapurna',
    tagline: '“Feeding people with dignity, not leftovers.”',
    Icon: Coffee,
    description: 'Annapurna is a social enterprise committed to eradicating hunger with respect and dignity for all. We establish community kitchens, food rescue programs, and skill development initiatives to create sustainable solutions to food insecurity.',
    details: [
      'Serve over 1000 nutritious meals daily across 5 urban centers.',
      'Rescued and redistributed 50+ tons of surplus food.',
      'Empowered 50+ women through culinary skill training and employment.',
      'Working on a "Pay-what-you-can" cafe model.',
    ],
    imagePlaceholder: 'A heartwarming image of a community kitchen serving food with smiles.'
  },
  {
    id: 'neuroshield',
    name: 'NeuroShield',
    tagline: '“AI to protect what matters most — our minds.”',
    Icon: Brain,
    description: 'NeuroShield is at the forefront of developing AI solutions to safeguard mental well-being and cognitive resilience in an increasingly complex digital world. We aim to create tools that foster mindfulness, detect early signs of mental distress, and promote healthier digital habits.',
    details: [
      'AI-powered journaling assistant for emotional processing (Beta).',
      'Algorithm for detecting digital fatigue patterns.',
      'Research collaboration with neuroscientists on cognitive enhancement techniques.',
      'Developing educational modules for mindful technology use.',
    ],
    imagePlaceholder: 'An abstract representation of neural networks or a serene brain illustration.'
  },
];


const VisionDetailPage = () => {
  const { visionId } = useParams();
  const vision = visionsData.find(v => v.id === visionId);

  if (!vision) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageLayout title={vision.name} subtitle={vision.tagline}>
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="mb-8 p-6 bg-card rounded-xl shadow-lg"
          initial={{ opacity: 0, y:20 }}
          animate={{ opacity: 1, y:0, transition: { delay: 0.2, duration: 0.5 } }}
        >
          <div className="flex items-center mb-4">
            <vision.Icon className="w-12 h-12 text-emotional-teal mr-4" strokeWidth={1.5} />
            <div>
              <h2 className="text-3xl font-heading text-soft-charcoal">{vision.name}</h2>
              <p className="font-body text-md italic text-emotional-teal">{vision.tagline}</p>
            </div>
          </div>
          
          <img  
            class="w-full h-64 object-cover rounded-lg mb-6 shadow-md" 
            alt={vision.name + " project image"}
           src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
          
          <p className="font-body text-lg text-warm-grey/90 leading-relaxed mb-6">{vision.description}</p>

          {vision.details && vision.details.length > 0 && (
            <>
              <h3 className="font-heading text-xl text-soft-charcoal mb-3 mt-6">Key Developments & Impact:</h3>
              <ul className="list-disc list-inside space-y-2 font-body text-warm-grey/80 pl-2">
                {vision.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </>
          )}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
        >
          <Link to="/#visions-building">
            <Button variant="outline" className="hero-button-outline cursor-ink-dot group">
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to All Visions
            </Button>
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default VisionDetailPage;
