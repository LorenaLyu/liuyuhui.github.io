import React from 'react';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-accent/80 py-12 px-6 relative overflow-hidden mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
        
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-white">Yuhui LIU</h2>
          <p className="text-sm max-w-xs leading-relaxed">
            Exploring the intersection of optics and algorithms. Always open for interesting discussions and collaborations.
          </p>
          <div className="flex gap-4 pt-2">
             <a href="mailto:liuyuhui@connect.hku.hk" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
             <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
           <button 
              onClick={scrollToTop}
              className="p-3 bg-primary/20 border border-primary/30 rounded-full hover:bg-secondary hover:text-dark hover:border-secondary transition-all"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            <p className="text-xs opacity-50">
              Copyright © {new Date().getFullYear()} Yuhui LIU.
            </p>
        </div>

      </div>
      
      {/* Grain/Noise Texture Overlay if desired, or simple gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-20"></div>
    </footer>
  );
};

export default Contact;