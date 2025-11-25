import React from 'react';
import { motion } from 'framer-motion';
import { TeachingItem } from '../types';
import { BookOpen } from 'lucide-react';

const teachingData: TeachingItem[] = [
  {
    code: "ELEC4544",
    title: "Artificial Intelligence and Deep Learning",
    role: "Teaching Assistant",
    period: "2023-2024 Sem 2",
    link: "#"
  },
  {
    code: "ELEC4544",
    title: "Artificial Intelligence and Deep Learning",
    role: "Teaching Assistant",
    period: "2024-2025 Sem 2",
    link: "#"
  }
];

const Teaching: React.FC = () => {
  return (
    <section className="py-12 px-5 md:px-10 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8 border-b border-primary/10 pb-4">
        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
            <BookOpen className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-dark">Teaching</h2>
      </div>

      <div className="grid gap-4">
        {teachingData.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl border border-primary/5 hover:border-secondary/30 shadow-sm hover:shadow-md transition-all group"
          >
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
               <div>
                 <div className="flex items-center gap-3">
                    <span className="font-bold text-dark text-lg">{item.code}</span>
                    <span className="bg-secondary/10 text-secondary text-xs px-2 py-0.5 rounded-full font-medium border border-secondary/20">{item.role}</span>
                 </div>
                 <div className="text-primary/70 text-sm mt-1">{item.title}</div>
               </div>
               
               <div className="flex items-center gap-6 text-sm">
                 <span className="text-primary/50 font-mono">{item.period}</span>
               </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Teaching;
