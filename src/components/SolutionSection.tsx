import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Radio, Cpu, Lightbulb, Zap, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Radio,
    title: "Vehicle Detection Sensors",
    description: "Sensors detect presence or absence of vehicles on each road"
  },
  {
    icon: Cpu,
    title: "Central Controller",
    description: "Microcontroller processes sensor data in real-time"
  },
  {
    icon: Lightbulb,
    title: "Automatic Switching",
    description: "Traffic lights respond dynamically to traffic conditions"
  },
  {
    icon: Zap,
    title: "Zero Idle Waiting",
    description: "Green signals when no vehicles are detected"
  }
];

const SolutionSection: React.FC = () => {
  return (
    <SectionWrapper id="solution" className="bg-gradient-dark">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-signal-green/10 text-signal-green text-sm font-medium mb-4"
            >
              Our Approach
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Proposed Solution
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              An intelligent traffic control system using vehicle detection sensors 
              and Arduino microcontroller for dynamic signal management.
            </motion.p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-signal-green/10 rounded-full blur-3xl" />
            
            <div className="relative bg-gradient-card rounded-3xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6 text-center">Key Benefits</h3>
              
              <div className="space-y-4">
                {[
                  "No human intervention required",
                  "Real-time traffic adaptation",
                  "Reduced congestion & wait times",
                  "Lower fuel consumption",
                  "Decreased air pollution",
                  "Smart city compatible"
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-signal-green flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-4">Powered by</p>
                <div className="flex justify-center gap-4">
                  <div className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium">Arduino</div>
                  <div className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium">IR Sensors</div>
                  <div className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium">IoT</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SolutionSection;
