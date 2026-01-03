import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import TrafficLight from './TrafficLight';

const ArchitectureSection: React.FC = () => {
  const roads = [
    { name: 'Road A', position: 'top', light: 'red' as const },
    { name: 'Road B', position: 'right', light: 'yellow' as const },
    { name: 'Road C', position: 'bottom', light: 'green' as const },
    { name: 'Road D', position: 'left', light: 'red' as const },
  ];

  return (
    <SectionWrapper id="architecture" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Technical Design
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            System Architecture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            A four-way intersection with vehicle detection sensors, 
            central microcontroller, and intelligent signal control.
          </motion.p>
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-border">
            {/* Intersection Grid */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Center Controller */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-primary/20 border-2 border-primary flex items-center justify-center glow-primary">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">MCU</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">Arduino</div>
                  </div>
                </div>
              </motion.div>

              {/* Roads */}
              {/* Vertical Road */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-full bg-secondary/50 rounded-lg" />
              {/* Horizontal Road */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-20 md:h-28 bg-secondary/50 rounded-lg" />

              {/* Road A - Top */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <div className="px-3 py-1 rounded-lg bg-secondary text-xs md:text-sm font-medium">Road A</div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-signal-green animate-pulse" />
                  <span className="text-[10px] text-muted-foreground">Sensor</span>
                </div>
                <TrafficLight activeLight="red" size="sm" />
              </motion.div>

              {/* Road B - Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center gap-2"
              >
                <TrafficLight activeLight="yellow" size="sm" />
                <div className="flex flex-col items-center gap-1">
                  <div className="px-3 py-1 rounded-lg bg-secondary text-xs md:text-sm font-medium">Road B</div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-signal-green animate-pulse" />
                    <span className="text-[10px] text-muted-foreground">Sensor</span>
                  </div>
                </div>
              </motion.div>

              {/* Road C - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <TrafficLight activeLight="green" size="sm" />
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-signal-green animate-pulse" />
                  <span className="text-[10px] text-muted-foreground">Sensor</span>
                </div>
                <div className="px-3 py-1 rounded-lg bg-secondary text-xs md:text-sm font-medium">Road C</div>
              </motion.div>

              {/* Road D - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="absolute top-1/2 left-4 -translate-y-1/2 flex items-center gap-2"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="px-3 py-1 rounded-lg bg-secondary text-xs md:text-sm font-medium">Road D</div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-signal-green animate-pulse" />
                    <span className="text-[10px] text-muted-foreground">Sensor</span>
                  </div>
                </div>
                <TrafficLight activeLight="red" size="sm" />
              </motion.div>

              {/* Data Flow Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(174, 72%, 56%)" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="hsl(174, 72%, 56%)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(174, 72%, 56%)" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* Animated data flow lines */}
                <motion.line 
                  x1="50" y1="20" x2="50" y2="38" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 1 }}
                />
                <motion.line 
                  x1="62" y1="50" x2="80" y2="50" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 1 }}
                />
                <motion.line 
                  x1="50" y1="62" x2="50" y2="80" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
                <motion.line 
                  x1="20" y1="50" x2="38" y2="50" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3, duration: 1 }}
                />
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary/20 border border-primary" />
                  <span className="text-muted-foreground">Central Controller</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-signal-green" />
                  <span className="text-muted-foreground">Vehicle Sensor</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-primary/50" style={{ background: 'repeating-linear-gradient(to bottom, hsl(174, 72%, 56%), hsl(174, 72%, 56%) 2px, transparent 2px, transparent 4px)' }} />
                  <span className="text-muted-foreground">Data Flow</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ArchitectureSection;
