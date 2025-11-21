import React from 'react';
import { motion } from 'framer-motion';

const BrandStory: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lykofos-primary/10 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
           {/* Smaller mascot iteration */}
           <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-lykofos-accent to-blue-500 animate-float">
             <img 
                src="https://picsum.photos/id/1002/400/400" 
                alt="Lyko Avatar" 
                className="w-full h-full rounded-full object-cover border-4 border-lykofos-bg filter hue-rotate-[250deg] contrast-125"
             />
           </div>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
          Meet <span className="text-lykofos-accent">Lyko</span>
        </h2>
        <p className="text-xl text-gray-300 font-light">
          Your guide through the AI cosmos. Lyko isn't just a mascot; he represents the alien intelligence we tame to work for your bottom line.
        </p>
      </div>
    </section>
  );
};

export default BrandStory;