import React from 'react';
import { motion } from 'framer-motion';
import TrafficLight from './TrafficLight';
import { Activity, Cpu, Radio } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero noise-overlay">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Radio className="w-16 h-16 text-primary" />
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 opacity-20"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Cpu className="w-24 h-24 text-signal-green" />
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-1/4 opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Activity className="w-20 h-20 text-signal-yellow" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
              <span className="text-sm font-medium text-primary">Smart City Innovation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Smart Traffic{' '}
              <span className="text-gradient">Management</span>{' '}
              System
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
            >
              Traffic Sensor Based Intelligent Signal Control — Revolutionizing urban mobility 
              with real-time adaptive traffic management using IoT sensors and microcontroller technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a 
                href="#problem"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all glow-primary"
              >
                Explore Project
              </a>
              <a 
                href="#architecture"
                className="px-8 py-4 bg-secondary text-foreground rounded-lg font-semibold border border-border hover:bg-accent transition-all"
              >
                View Architecture
              </a>
            </motion.div>
          </div>

          {/* Traffic Light Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150" />
              
              {/* Traffic Lights Display */}
              <div className="relative bg-gradient-card rounded-3xl p-8 border border-border">
                <div className="flex gap-6">
                  <TrafficLight activeLight="red" size="lg" />
                  <TrafficLight activeLight="yellow" size="lg" />
                  <TrafficLight activeLight="green" size="lg" />
                </div>
                
                {/* Status Indicator */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
                  <span>System Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
