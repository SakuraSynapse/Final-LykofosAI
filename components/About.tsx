import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-lykofos-card backdrop-blur-lg border border-lykofos-primary/30 rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-[0_0_40px_rgba(91,44,157,0.2)]"
        >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                Born in the <span className="text-lykofos-accent">Machine</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                "Born from years training the world’s biggest LLMs and building automation for U.S. & Korean companies. We make AI actually pay for itself, fast."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center p-4">
                    <div className="w-16 h-16 rounded-full bg-lykofos-primary/20 flex items-center justify-center mb-4 text-lykofos-accent">
                        <Cpu className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-white mb-2">LLM Training Experts</h3>
                    <p className="text-gray-400 text-sm">Architects behind major model fine-tuning.</p>
                </div>
                <div className="flex flex-col items-center p-4">
                    <div className="w-16 h-16 rounded-full bg-lykofos-primary/20 flex items-center justify-center mb-4 text-lykofos-accent">
                        <Globe className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-white mb-2">Global Operations</h3>
                    <p className="text-gray-400 text-sm">Bridging tech between US & Asian markets.</p>
                </div>
                <div className="flex flex-col items-center p-4">
                    <div className="w-16 h-16 rounded-full bg-lykofos-primary/20 flex items-center justify-center mb-4 text-lykofos-accent">
                        <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-white mb-2">Instant ROI</h3>
                    <p className="text-gray-400 text-sm">Automation that cuts costs from Day 1.</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;