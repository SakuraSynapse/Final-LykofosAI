import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      {/* Aurora Borealis Effects - Vibrant & Colorful */}
      {/* Layer 1: Green/Emerald Curtain */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-r from-emerald-400/60 via-teal-400/40 to-transparent blur-[60px] transform -skew-y-6 animate-aurora mix-blend-screen pointer-events-none"></div>
      
      {/* Layer 2: Purple/Pink Curtain */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-l from-fuchsia-500/60 via-purple-500/40 to-transparent blur-[60px] transform skew-y-6 animate-aurora-reverse mix-blend-screen pointer-events-none"></div>
      
      {/* Clean fade to black at the bottom to ensure smooth transition without throbbing */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f1a] to-transparent pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10">
        
        {/* Text Content - Centered */}
        <motion.div 
          className="w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
            LYKOFOS AI
            <br />
            <span className="text-lykofos-pastelBlue">LIGHT IN THE</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-lykofos-pastelYellow to-white drop-shadow-[0_0_35px_rgba(254,240,138,0.6)]">DARK</span>
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            We turn your documents, customer conversations, and workflows into intelligent, money-making machines. Intelligent automation for the real world.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#pricing"
              className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white transition-all duration-200 bg-lykofos-vibrantPink rounded-full hover:bg-white hover:text-lykofos-vibrantPink shadow-[0_0_25px_rgba(255,0,128,0.5)] hover:shadow-[0_0_40px_rgba(255,0,128,0.7)] font-display tracking-wide"
            >
              See Pricing
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
          <div className="w-1 h-2 bg-lykofos-vibrantPink rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;