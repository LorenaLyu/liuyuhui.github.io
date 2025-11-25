import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Mail, Linkedin, MapPin } from 'lucide-react';
import { TiltCard } from './TiltCard';

const Hero: React.FC = () => {
  const interests = ["Computational Optics", "Computational Photography", "Optical Design"];

  return (
    <section className="pt-28 pb-16 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Avatar & Contact (Sticky-ish) */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
          <motion.div
             initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
             animate={{ opacity: 1, scale: 1, rotateY: 0 }}
             transition={{ duration: 0.8, type: "spring" }}
             className="perspective-1000"
          >
            <TiltCard 
              className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white/50 relative z-10 bg-white"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scaleOnHover={1.05}
            >
               <img 
                 src="profile.jpg" 
                 alt="Yuhui LIU"
                 className="object-cover w-full h-full"
               />
               {/* Status indicator */}
               <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-primary shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Online
               </div>
            </TiltCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-3"
          >
             <a href="mailto:liuyuhui@connect.hku.hk" className="group flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-dark transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5">
               <Mail className="w-4 h-4" />
               <span className="font-medium">Email Me</span>
             </a>
             <div className="grid grid-cols-2 gap-3">
               <a href="#" className="group flex items-center justify-center gap-2 px-4 py-3 bg-white text-dark border border-primary/10 rounded-xl hover:border-secondary/50 transition-all shadow-sm hover:-translate-y-0.5">
                 <Linkedin className="w-4 h-4 text-[#0077b5]" />
                 <span className="font-medium">LinkedIn</span>
               </a>
                <a href="#" className="group flex items-center justify-center gap-2 px-4 py-3 bg-white text-dark border border-primary/10 rounded-xl hover:border-secondary/50 transition-all shadow-sm hover:-translate-y-0.5">
                 <Landmark className="w-4 h-4 text-primary" />
                 <span className="font-medium">WeLight</span>
               </a>
             </div>
             <div className="flex items-center justify-center gap-2 px-4 py-2 text-xs text-primary/50 bg-primary/5 rounded-lg mt-1">
                <MapPin className="w-3 h-3" />
                301 Haking Wong Building, HKU
             </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Bio Card (3D Glass) */}
        <div className="lg:col-span-8 perspective-1000">
          <TiltCard 
             className="h-full rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl shadow-primary/5 p-8 md:p-10 relative overflow-hidden group"
             tiltMaxAngleX={3}
             tiltMaxAngleY={3}
             scaleOnHover={1.01}
          >
            {/* Decorative background mesh inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary/20 to-transparent rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 space-y-6">
              
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-secondary/20">
                  <span className="animate-pulse">✨</span>
                  PhD Candidate
                </div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark tracking-tight leading-[0.9]">
                  Yuhui <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary relative">
                    LIU
                  </span>
                </h1>
              </motion.div>

              {/* Academic Roles */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row gap-4 md:gap-8 border-y border-primary/10 py-4"
              >
                 <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/5 rounded-lg text-primary"><GraduationCap className="w-5 h-5" /></div>
                    <div>
                      <div className="font-bold text-dark">PhD Student</div>
                      <div className="text-sm text-primary/60">HKU EEE Dept.</div>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary"><Landmark className="w-5 h-5" /></div>
                    <div>
                      <div className="font-bold text-dark">WeLight Lab</div>
                      <div className="text-sm text-primary/60">Comp. Imaging</div>
                    </div>
                 </div>
              </motion.div>

              {/* Bio Text - Justified for neatness */}
              <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 transition={{ delay: 0.5 }}
                 className="text-primary/80 leading-relaxed text-lg md:text-justify"
              >
                <p>
                  I am a 2nd year PhD student from the <strong className="text-dark">Electrical and Electronic Engineering Department</strong> at The University of Hong Kong, fortunately advised by <a href="#" className="font-medium text-secondary hover:underline decoration-2 decoration-secondary/30 underline-offset-2">Prof. Evan Y. Peng</a>. 
                  Prior to this, I completed my Bachelor's degree in Physics at <strong className="text-dark">Nankai University</strong>, followed by a Master's degree at HKU. 
                </p>
                <p className="mt-4">
                  My research bridges the gap between hardware optics and software algorithms. I am passionate about designing novel computational cameras that can see what traditional cameras cannot.
                </p>
              </motion.div>

              {/* Interests Tags */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.6 }}
                className="pt-2"
              >
                <div className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-3">Research Interests</div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-primary/10 rounded-lg text-sm font-medium text-primary shadow-sm hover:shadow-md hover:border-secondary/30 transition-all cursor-default select-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </TiltCard>
        </div>

      </div>
      
      {/* Animated Background Blob specifically for Hero */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
