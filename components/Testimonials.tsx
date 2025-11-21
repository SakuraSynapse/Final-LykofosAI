import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-lykofos-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-lykofos-primary/20 to-lykofos-accent/20 rounded-3xl p-8 md:p-12 border border-lykofos-primary/30 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-lykofos-primary/40 -rotate-12" />
            
            <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-3xl font-light italic text-white mb-8 leading-relaxed">
                  "Top 5 ranking in Google Search and LLM Search, with a <span className="text-lykofos-accent font-bold">20% increase in revenue</span> post SEO and GEO deployment."
                </h3>
                
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-full mb-3 flex items-center justify-center font-bold text-lykofos-bg text-xl font-display">
                        K&B
                    </div>
                    <div>
                        <p className="text-white font-bold font-display tracking-wide">Kim & Bae P.C.</p>
                        <p className="text-lykofos-accentLight text-sm">Leading Law Firm</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;