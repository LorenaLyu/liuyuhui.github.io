import React from 'react';
import { motion } from 'framer-motion';
import { Publication } from '../types';
import { FileText, Code, Globe, Layers, ExternalLink, Star } from 'lucide-react';
import { TiltCard } from './TiltCard';

const publications: Publication[] = [
  {
    id: '1',
    title: "Learned Binocular-Encoding Optics for RGBD Imaging Using Joint Stereo and Focus Cues",
    authors: ["Yuhui Liu", "Liangxun Ou", "Qiang Fu", "Hadi Amata", "Wolfgang Heidrich", "Yifan Peng"],
    venue: "CVPR 2025 (Oral)",
    year: "2025",
    abstract: "Co-designing optics and reconstruction algorithm for high-quality RGBD imaging using binocular encoding. We propose a novel end-to-end framework that jointly optimizes the optical encoder and digital decoder.",
    image: "https://picsum.photos/id/20/800/600",
    links: [
      { label: "Abstract", url: "#", icon: "web" },
      { label: "PDF", url: "#", icon: "pdf" },
      { label: "Supp", url: "#", icon: "supp" },
    ],
    highlight: true
  },
  {
    id: '2',
    title: "Structure-grounded Training Strategies Aid Generalization in Stereo Matching",
    authors: ["Liangxun Ou", "Yuhui Liu", "Zhenyang Li", "Xiaoyang Bai", "Yifan Peng"],
    venue: "3D Vision 2026",
    year: "2026",
    abstract: "Thirteenth International Conference on 3D Vision. We introduce structure-grounded loss functions to improve the generalization capability of stereo matching networks across different domains.",
    image: "https://picsum.photos/id/24/800/600",
    links: [
      { label: "To Be Released", url: "#", icon: "web" }
    ]
  },
  {
    id: '3',
    title: "Learning RGBD Imaging via Asymmetrically Focused Stereo Cameras",
    authors: ["Liangxun Ou", "Yuhui Liu", "Xiaoyang Bai", "Yifan Peng"],
    venue: "The Visual Computer",
    year: "2025",
    abstract: "Recovering both all-in-focus images and dense depth maps to overcome trade-offs in depth of field. The asymmetric focus cues provide rich information for depth estimation.",
    image: "https://picsum.photos/id/28/800/600",
    links: [
      { label: "Link", url: "#", icon: "web" }
    ]
  },
  {
    id: '4',
    title: "Learned Off-aperture Encoding for Wide Field-of-view RGBD Imaging",
    authors: ["Haoyu Wei", "Xin Liu", "Yuhui Liu", "Qiang Fu", "Wolfgang Heidrich", "Edmund Y Lam", "Yifan (Evan) Peng"],
    venue: "IEEE TPAMI 2025",
    year: "2025",
    abstract: "Proposed an off-aperture encoding strategy to expand the field-of-view in RGBD imaging systems while maintaining high reconstruction quality. (Unpublished)",
    image: "https://picsum.photos/id/36/800/600",
    links: [
      { label: "Abstract", url: "#", icon: "web" }
    ]
  },
  {
    id: '5',
    title: "Computational Spectral Imaging: Optical Encoding and Algorithm Decoding (Invited)",
    authors: ["Jiaqi Guo", "Benxuan Fan", "Xin Liu", "Yuhui Liu", "et al."],
    venue: "Laser & Optoelectronics Progress",
    year: "2024",
    abstract: "An invited review on state-of-the-art computational spectral imaging techniques and hardware optical encoding strategies.",
    image: "https://picsum.photos/id/42/800/600",
    links: [
      { label: "Paper", url: "#", icon: "pdf" }
    ]
  }
];

const AuthorList: React.FC<{ authors: string[] }> = ({ authors }) => (
  <div className="text-sm text-primary/70 leading-relaxed mb-3">
    {authors.map((author, i) => (
      <span key={i} className={author.includes("Yuhui Liu") ? "font-bold text-dark border-b border-secondary/50" : ""}>
        {author}{i < authors.length - 1 ? ", " : ""}
      </span>
    ))}
  </div>
);

const PublicationCard: React.FC<{ pub: Publication; index: number }> = ({ pub, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="h-full"
    >
      <TiltCard 
        className="h-full"
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        glareEnable={true}
      >
        <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group">
          
          {/* Image Section */}
          <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
            <img 
              src={pub.image} 
              alt={pub.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-3 left-3 flex gap-2">
               <span className="px-2 py-1 rounded-md bg-white/90 backdrop-blur text-dark text-xs font-bold uppercase shadow-sm">
                 {pub.year}
               </span>
               {pub.highlight && (
                 <span className="px-2 py-1 rounded-md bg-secondary text-white text-xs font-bold uppercase shadow-sm flex items-center gap-1">
                   <Star className="w-3 h-3 fill-current" /> Oral
                 </span>
               )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-serif text-xl font-bold leading-tight text-dark mb-2 group-hover:text-secondary transition-colors">
              {pub.title}
            </h3>
            
            <AuthorList authors={pub.authors} />
            
            <div className="flex items-center gap-2 mb-4">
               <span className="inline-block px-3 py-1 bg-primary/5 text-primary font-semibold text-xs rounded-full border border-primary/10">
                 {pub.venue}
               </span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
              {pub.abstract}
            </p>

            <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-gray-100">
              {pub.links.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url}
                  className="flex items-center gap-1.5 text-xs font-bold text-primary/70 hover:text-secondary transition-colors uppercase tracking-wide"
                >
                   {link.icon === 'pdf' && <FileText className="w-3.5 h-3.5" />}
                   {link.icon === 'code' && <Code className="w-3.5 h-3.5" />}
                   {link.icon === 'web' && <Globe className="w-3.5 h-3.5" />}
                   {link.icon === 'supp' && <Layers className="w-3.5 h-3.5" />}
                   {link.label}
                   <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

const Publications: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div 
        className="mb-10 flex items-end justify-between border-b border-primary/10 pb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-4xl font-serif font-bold text-dark">Selected Publications</h2>
          <p className="text-primary/60 mt-2 text-sm font-medium uppercase tracking-wider">
            Focusing on Computational Imaging & Optics
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publications.map((pub, idx) => (
          <div key={pub.id} className="col-span-1">
             <PublicationCard pub={pub} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;