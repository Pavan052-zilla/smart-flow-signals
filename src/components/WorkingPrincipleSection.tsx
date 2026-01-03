import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Power, Radio, Cpu, Car, Timer, RefreshCw, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Power,
    title: "System Initialization",
    description: "Power on the microcontroller and calibrate all sensors",
    status: "Complete"
  },
  {
    icon: Radio,
    title: "Continuous Monitoring",
    description: "Sensors actively detect vehicle presence on all four roads",
    status: "Active"
  },
  {
    icon: Cpu,
    title: "Data Processing",
    description: "Controller receives and analyzes sensor data in real-time",
    status: "Processing"
  },
  {
    icon: Car,
    title: "Vehicle Detection Check",
    description: "System determines if vehicles are present on each road",
    status: "Decision Point"
  },
  {
    icon: Timer,
    title: "Signal Timing Decision",
    description: "If vehicles detected → normal timing. If empty → immediate green",
    status: "Adaptive"
  },
  {
    icon: RefreshCw,
    title: "Continuous Loop",
    description: "Process repeats for real-time traffic adaptation",
    status: "Ongoing"
  }
];

const WorkingPrincipleSection: React.FC = () => {
  return (
    <SectionWrapper id="working" className="bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-signal-yellow/10 text-signal-yellow text-sm font-medium mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Working Principle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            A step-by-step breakdown of how the intelligent traffic system operates
          </motion.p>
        </div>

        {/* Steps Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-signal-yellow to-signal-green hidden md:block" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-gradient-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all group">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors md:order-none">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">Step {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <CheckCircle className="w-3 h-3 text-signal-green" />
                      {step.status}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary z-10 flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WorkingPrincipleSection;
