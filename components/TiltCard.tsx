import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareEnable?: boolean;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  scaleOnHover?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = "", 
  glareEnable = true,
  tiltMaxAngleX = 2.5, // Reduced for subtlety
  tiltMaxAngleY = 2.5,
  scaleOnHover = 1.02
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Slower, heavier spring for "premium" feel
  const springConfig = { damping: 30, stiffness: 150, mass: 0.8 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltMaxAngleX, -tiltMaxAngleX]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltMaxAngleY, tiltMaxAngleY]), springConfig);
  const scale = useSpring(hover ? scaleOnHover : 1, springConfig);
  
  // Glare effect opacity
  const glareOpacity = useTransform(
    [x, y],
    ([latestX, latestY]: number[]) => {
      return hover ? Math.min(Math.sqrt(latestX**2 + latestY**2) * 0.5, 0.3) : 0; 
    }
  );
  
  // Glare position
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize to -0.5 to 0.5
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHover(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative transition-colors duration-300 ${className}`}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
      
      {glareEnable && (
        <motion.div
          style={{
            opacity: glareOpacity,
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            zIndex: 20,
            mixBlendMode: 'overlay'
          }}
        />
      )}
    </motion.div>
  );
};