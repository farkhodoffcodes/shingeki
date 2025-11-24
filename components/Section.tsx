import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', delay = 0, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export const Divider: React.FC = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-titan-red to-transparent opacity-50 my-10" />
);