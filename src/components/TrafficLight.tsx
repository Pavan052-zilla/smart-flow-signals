import React from 'react';
import { motion } from 'framer-motion';

interface TrafficLightProps {
  activeLight?: 'red' | 'yellow' | 'green';
  size?: 'sm' | 'md' | 'lg';
}

const TrafficLight: React.FC<TrafficLightProps> = ({ activeLight = 'green', size = 'md' }) => {
  const sizes = {
    sm: { container: 'w-8', light: 'w-5 h-5' },
    md: { container: 'w-12', light: 'w-8 h-8' },
    lg: { container: 'w-16', light: 'w-11 h-11' },
  };

  const lights = [
    { color: 'red', bg: 'bg-signal-red', glow: 'glow-red' },
    { color: 'yellow', bg: 'bg-signal-yellow', glow: 'glow-yellow' },
    { color: 'green', bg: 'bg-signal-green', glow: 'glow-green' },
  ];

  return (
    <div className={`${sizes[size].container} bg-secondary rounded-xl p-2 flex flex-col gap-2 border border-border`}>
      {lights.map((light) => (
        <motion.div
          key={light.color}
          className={`${sizes[size].light} rounded-full ${
            activeLight === light.color 
              ? `${light.bg} ${light.glow}` 
              : 'bg-muted'
          } transition-all duration-300`}
          animate={activeLight === light.color ? { 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          } : {}}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default TrafficLight;
