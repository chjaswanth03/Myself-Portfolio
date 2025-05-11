
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Journal from '@/components/Journal'; // Re-use the existing Journal component logic
import PageLayout from '@/components/PageLayout'; // A new layout component for pages

const JournalPage = () => {
  return (
    <PageLayout title="Pages from My Mind" subtitle="A deeper dive into my thoughts, reflections, and unfolding stories.">
      <Journal /> 
    </PageLayout>
  );
};

export default JournalPage;
