import React from 'react';
import { motion } from 'framer-motion';
import { NewsItem } from '../types';
import { Sparkles, Calendar } from 'lucide-react';

const newsData: NewsItem[] = [
  { date: "Sep 2025", content: "I am presenting a poster in CITA 19-21 Sep 2025. Honored to receive the Outstanding Achievement Award at Exhibition of Computational Imaging Achievements!", highlight: true },
  { date: "Jul 2025", content: "Honored to visit and present in the Precision Instruments Department at THU on 16 Jul." },
  { date: "Jun 2025", content: "Presenting our new paper 'Learned Binocular-Encoding Optics' in CVPR 2025 oral session.", highlight: true },
  { date: "Apr 2025", content: "A new paper is accepted by IEEE CVPR and selected as Oral.", highlight: true },
  { date: "Mar 2025", content: "New website is online! ✨" },
  { date: "Dec 2023", content: "Thrilled to join WeLight Lab as a Ph.D. student supervised by Prof. Evan Y. Peng." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const News: React.FC = () => {
  return (
    <section className="py-8 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-primary/5 shadow-xl shadow-primary/5 relative overflow-hidden">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-secondary to-primary/50"></div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="lg:w-1/4 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                 <Calendar className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-dark">News</h2>
            </div>
            <p className="text-primary/60 text-sm leading-relaxed">
              Latest updates from my research journey, conference travels, and lab activities.
            </p>
          </div>

          <motion.div 
            className="lg:w-3/4 space-y-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {newsData.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariant}
                className={`flex gap-4 p-4 rounded-xl transition-colors ${item.highlight ? 'bg-background/80 border border-secondary/20' : 'hover:bg-background/40'}`}
              >
                <div className="flex-shrink-0 w-24 pt-0.5">
                   <span className={`text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide ${item.highlight ? 'bg-secondary text-white shadow-md shadow-secondary/20' : 'bg-primary/5 text-primary/60'}`}>
                     {item.date}
                   </span>
                </div>
                <div className="w-full">
                   <p className={`text-sm md:text-base leading-relaxed ${item.highlight ? 'text-dark font-medium' : 'text-primary/80'}`}>
                     {item.content}
                     {item.highlight && <Sparkles className="inline w-4 h-4 text-yellow-500 ml-2 animate-pulse" />}
                   </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default News;