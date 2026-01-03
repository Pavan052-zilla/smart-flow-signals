import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Play, Settings, Search, Car, Clock, Zap, RotateCw, ArrowDown, ArrowRight, Check, X } from 'lucide-react';

const FlowchartSection: React.FC = () => {
  return (
    <SectionWrapper id="flowchart" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Logic Flow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            System Flowchart
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Visual representation of the decision-making process
          </motion.p>
        </div>

        {/* Flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-border">
            <div className="flex flex-col items-center gap-4">
              {/* Start */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="w-32 h-16 rounded-full bg-signal-green/20 border-2 border-signal-green flex items-center justify-center glow-green"
              >
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-signal-green" />
                  <span className="font-semibold text-signal-green">START</span>
                </div>
              </motion.div>

              <ArrowDown className="w-6 h-6 text-muted-foreground" />

              {/* Initialize */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="w-64 py-4 px-6 rounded-xl bg-secondary border border-border flex items-center justify-center gap-3"
              >
                <Settings className="w-5 h-5 text-primary" />
                <span className="font-medium">Initialize System</span>
              </motion.div>

              <ArrowDown className="w-6 h-6 text-muted-foreground" />

              {/* Check Sensors */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="w-64 py-4 px-6 rounded-xl bg-secondary border border-border flex items-center justify-center gap-3"
              >
                <Search className="w-5 h-5 text-primary" />
                <span className="font-medium">Read Sensor Data</span>
              </motion.div>

              <ArrowDown className="w-6 h-6 text-muted-foreground" />

              {/* Decision Diamond */}
              <motion.div
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 45 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
                className="w-40 h-40 bg-signal-yellow/20 border-2 border-signal-yellow flex items-center justify-center"
              >
                <div className="-rotate-45 text-center">
                  <Car className="w-6 h-6 text-signal-yellow mx-auto mb-1" />
                  <span className="text-sm font-medium text-signal-yellow">Vehicles<br/>Detected?</span>
                </div>
              </motion.div>

              {/* Branch Container */}
              <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
                {/* Yes Branch */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-signal-green/20 border border-signal-green">
                    <Check className="w-4 h-4 text-signal-green" />
                    <span className="text-sm font-medium text-signal-green">YES</span>
                  </div>
                  <ArrowDown className="w-6 h-6 text-muted-foreground" />
                  <div className="w-56 py-4 px-6 rounded-xl bg-secondary border border-border text-center">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                    <span className="font-medium text-sm">Apply Normal<br/>Signal Timing</span>
                  </div>
                </motion.div>

                {/* No Branch */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-signal-red/20 border border-signal-red">
                    <X className="w-4 h-4 text-signal-red" />
                    <span className="text-sm font-medium text-signal-red">NO</span>
                  </div>
                  <ArrowDown className="w-6 h-6 text-muted-foreground" />
                  <div className="w-56 py-4 px-6 rounded-xl bg-signal-green/10 border border-signal-green text-center">
                    <Zap className="w-5 h-5 text-signal-green mx-auto mb-2" />
                    <span className="font-medium text-sm text-signal-green">Turn Green<br/>Immediately</span>
                  </div>
                </motion.div>
              </div>

              {/* Merge and Loop */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="flex flex-col items-center gap-4 mt-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-20 bg-border" />
                  <RotateCw className="w-6 h-6 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                  <div className="h-0.5 w-20 bg-border" />
                </div>
                <span className="text-sm text-muted-foreground">Repeat Cycle</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FlowchartSection;
