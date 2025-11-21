import React from 'react';
import { Mail, Linkedin, Twitter, Youtube, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#05050a] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to <span className="text-lykofos-accent">Automate?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              The future waits for no one. Book your audit or drop us a line to start your transformation.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:John@lykofosai.xyz" className="flex items-center group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 group-hover:bg-lykofos-primary transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">John@lykofosai.xyz</span>
              </a>
              
              <a href="https://calendly.com/lykofosai" target="_blank" rel="noreferrer" className="flex items-center group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 group-hover:bg-lykofos-primary transition-colors">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Book a Free Strategy Call</span>
              </a>
            </div>

            <div className="mt-10 flex space-x-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-lykofos-accent transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-lykofos-accent transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-lykofos-accent transition-colors text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Simple Form / Visual */}
          <div className="bg-lykofos-card border border-white/10 rounded-2xl p-8">
             <h3 className="text-xl font-display font-bold text-white mb-6">Quick Inquiry</h3>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-xs text-gray-400 uppercase font-bold mb-2">Name</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lykofos-accent transition-colors" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-xs text-gray-400 uppercase font-bold mb-2">Email</label>
                    <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lykofos-accent transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                    <label className="block text-xs text-gray-400 uppercase font-bold mb-2">Message</label>
                    <textarea className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lykofos-accent transition-colors h-32" placeholder="Tell us about your automation needs..."></textarea>
                </div>
                <button className="w-full bg-lykofos-primary hover:bg-lykofos-accent text-white font-bold py-3 rounded-lg transition-colors shadow-lg">
                    Send Message
                </button>
             </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-600 text-sm">
            Copyright © 2025 Lykofos AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;