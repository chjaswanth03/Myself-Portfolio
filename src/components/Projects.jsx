
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Community Platform Concept',
      description: 'Designing and prototyping a platform for niche online communities.',
      imageAlt: 'Mockup of a community platform interface',
      technologies: ['Figma', 'React', 'Supabase'],
      liveLink: null, 
      githubLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Minimalist Blogging Theme',
      description: 'A clean, fast, and accessible theme for content creators.',
       imageAlt: 'Screenshot of a minimalist blog theme',
      technologies: ['Tailwind CSS', 'Astro', 'Markdown'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'Interactive Data Dashboard',
      description: 'Building a dashboard to visualize complex datasets for better insights.',
       imageAlt: 'Charts and graphs on a dashboard screen',
      technologies: ['React', 'D3.js', 'Node.js'],
      liveLink: 'https://example.com',
      githubLink: null,
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
    <section id="projects" className="py-12">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        Projects
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="flex flex-col sm:flex-row gap-6 group"
            variants={fadeInUp}
          >
             <div className="sm:w-1/3 flex-shrink-0">
               <div className="aspect-video bg-secondary rounded-md overflow-hidden flex items-center justify-center">
                 <img  class="w-full h-full object-cover" alt={project.imageAlt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
               </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
              </div>
              <div className="flex items-center space-x-4">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-primary inline-flex items-center hover:underline"
                  >
                    Live Demo <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
                 {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-primary inline-flex items-center hover:underline"
                  >
                    GitHub <Github size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
