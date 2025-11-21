import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Transparent <span className="text-lykofos-accent">Pricing</span>
          </h2>
          <p className="text-gray-400">Investment aimed at maximum ROI.</p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-lykofos-primary/30 bg-lykofos-bg/50 backdrop-blur-sm shadow-2xl">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-lykofos-primary/20 text-white font-display text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-bold">Service</th>
                <th className="px-6 py-4 font-bold">Description</th>
                <th className="px-6 py-4 font-bold">Target Clients</th>
                <th className="px-6 py-4 font-bold">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {PRICING_DATA.map((item, index) => (
                <tr 
                    key={index} 
                    className="hover:bg-white/5 transition-colors duration-150"
                >
                  <td className="px-6 py-4 font-medium text-white font-display">{item.service}</td>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="px-6 py-4 italic">{item.targetClients}</td>
                  <td className="px-6 py-4 text-lykofos-accentLight font-semibold">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden grid grid-cols-1 gap-6">
          {PRICING_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-lykofos-card border border-white/10 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">{item.service}</h3>
              <p className="text-gray-300 text-sm mb-4 border-l-2 border-lykofos-accent pl-3">{item.description}</p>
              
              <div className="flex items-start gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <span className="text-xs text-gray-400 italic">{item.targetClients}</span>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-lykofos-accentLight font-bold text-sm">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a 
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-lykofos-bg hover:bg-gray-200 font-display font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Get a Custom Quote
            </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;