import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-lykofos-pastelBlue opacity-5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lykofos-pastelPink opacity-5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Our <span className="text-lykofos-pastelBlue">Capabilities</span>
          </motion.h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Comprehensive intelligence solutions for the modern enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-lykofos-card border border-white/5 rounded-2xl hover:border-lykofos-pastelPink/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-lykofos-pastelBlue/0 to-lykofos-pastelPink/0 group-hover:from-lykofos-pastelBlue/10 group-hover:to-lykofos-pastelPink/10 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-lykofos-pastelBlue/50 shadow-lg shadow-black/50 text-lykofos-pastelYellow group-hover:text-white">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-lykofos-pastelBlue transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;