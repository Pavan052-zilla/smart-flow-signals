import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import TrafficLight from './TrafficLight';
import { ArrowRight, Github, Mail, ExternalLink } from 'lucide-react';

const ConclusionSection: React.FC = () => {
  return (
    <SectionWrapper id="conclusion" className="bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center"
          >
            <div className="flex gap-4">
              <TrafficLight activeLight="red" size="md" />
              <TrafficLight activeLight="yellow" size="md" />
              <TrafficLight activeLight="green" size="md" />
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Summary
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Conclusion
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            The <span className="text-foreground font-medium">Smart Traffic Management System</span> replaces 
            outdated fixed-time signals with <span className="text-signal-green font-medium">intelligent automation</span>. 
            By leveraging vehicle detection sensors and microcontroller technology, this system 
            <span className="text-primary font-medium"> saves time, reduces fuel consumption, decreases pollution, 
            and improves road safety</span> — making our cities smarter and more sustainable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a 
              href="#problem"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all glow-primary"
            >
              Review Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#architecture"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-foreground rounded-lg font-semibold border border-border hover:bg-accent transition-all"
            >
              View Architecture
            </a>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
            {[
              { value: "40%", label: "Less Wait Time" },
              { value: "25%", label: "Fuel Savings" },
              { value: "100%", label: "Automated" }
            ].map((stat, index) => (
              <div key={stat.label} className="p-6 bg-gradient-card rounded-2xl border border-border">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-8 border-t border-border"
          >
            <p className="text-muted-foreground text-sm mb-4">
              A Smart City Innovation Project
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors">
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors">
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ConclusionSection;
