import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import News from './components/News';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Contact from './components/Contact';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mouse tracking for subtle background parallax
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="bg-background min-h-screen font-sans selection:bg-secondary/30 selection:text-dark">
      {/* Elegant Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-50 opacity-80"
        style={{ scaleX }}
      />

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent/30 blur-[120px] animate-float opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px] opacity-50" />
        
        {/* Mouse Follower */}
        <div 
          className="absolute w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[80px] transition-transform duration-1000 ease-out will-change-transform"
          style={{
            transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`
          }}
        />
      </div>

      {/* Content Container */}
      <main className="relative z-10 flex flex-col gap-12 md:gap-20">
        <Hero />
        
        <div className="space-y-12 md:space-y-20">
           <News />
           <Publications />
           <Teaching />
        </div>

        <Contact />
      </main>
    </div>
  );
};

export default App;