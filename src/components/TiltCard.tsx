import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = '' }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = { stiffness: 250, damping: 25, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), spring);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
