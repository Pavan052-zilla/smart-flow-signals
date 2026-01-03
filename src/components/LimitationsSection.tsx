import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Radio, CloudRain, Zap, Coins, AlertTriangle } from 'lucide-react';

const limitations = [
  {
    icon: Radio,
    title: "Sensor Dependency",
    description: "System relies heavily on accurate sensor readings. Faulty sensors can cause incorrect signal timing.",
    severity: "moderate"
  },
  {
    icon: CloudRain,
    title: "Weather Impact",
    description: "Heavy rain, fog, or dust may affect sensor accuracy, particularly IR and camera-based sensors.",
    severity: "moderate"
  },
  {
    icon: Zap,
    title: "Power Failure Risk",
    description: "System requires continuous power supply. Power outages need backup solutions.",
    severity: "high"
  },
  {
    icon: Coins,
    title: "Initial Installation Cost",
    description: "Retrofitting existing intersections requires significant initial investment.",
    severity: "low"
  }
];

const LimitationsSection: React.FC = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return { bg: 'bg-signal-red/10', border: 'border-signal-red/30', text: 'text-signal-red' };
      case 'moderate': return { bg: 'bg-signal-yellow/10', border: 'border-signal-yellow/30', text: 'text-signal-yellow' };
      case 'low': return { bg: 'bg-signal-green/10', border: 'border-signal-green/30', text: 'text-signal-green' };
      default: return { bg: 'bg-muted', border: 'border-border', text: 'text-muted-foreground' };
    }
  };

  return (
    <SectionWrapper id="limitations" className="bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-signal-yellow/10 text-signal-yellow text-sm font-medium mb-4"
          >
            Considerations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Limitations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Challenges and constraints to consider for real-world implementation
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {limitations.map((limitation, index) => {
            const colors = getSeverityColor(limitation.severity);
            return (
              <motion.div
                key={limitation.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-card rounded-2xl p-6 border ${colors.border} transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <limitation.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{limitation.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text} capitalize`}>
                        {limitation.severity}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{limitation.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mitigation Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-4xl mx-auto p-6 bg-secondary/50 rounded-2xl border border-border"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Mitigation Strategies</h4>
              <p className="text-muted-foreground text-sm">
                These limitations can be addressed through redundant sensor systems, 
                weatherproofing, backup power sources (UPS/solar), and phased implementation 
                to distribute installation costs over time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default LimitationsSection;
