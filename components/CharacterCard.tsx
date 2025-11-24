import React from 'react';
import { motion } from 'framer-motion';

interface CharacterProps {
  name: string;
  role: string;
  description: string;
  imgSeed: string;
  align: 'left' | 'right';
  themeColor?: string;
}

export const CharacterCard: React.FC<CharacterProps> = ({ name, role, description, imgSeed, align, themeColor = 'red' }) => {
  const isLeft = align === 'left';

  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row gap-8 items-center mb-24 ${isLeft ? '' : 'md:flex-row-reverse'}`}
    >
      {/* Image Container */}
      <div className="relative group w-full md:w-1/3 aspect-[3/4]">
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10`} />
        <div className={`absolute -inset-2 border border-${themeColor}-600/30 rotate-3 transition-transform group-hover:rotate-0`} />
        <img 
          src={`https://picsum.photos/seed/${imgSeed}/600/800`} 
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-3xl font-cinzel text-white font-bold tracking-widest uppercase">{name}</h3>
        </div>
      </div>

      {/* Text Content */}
      <div className={`w-full md:w-2/3 ${isLeft ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right text-left'}`}>
        <h4 className="text-titan-red font-cinzel text-xl mb-4 tracking-wider border-b border-titan-red/20 inline-block pb-2">
          {role}
        </h4>
        <p className="font-body text-lg md:text-xl text-titan-bone/80 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};