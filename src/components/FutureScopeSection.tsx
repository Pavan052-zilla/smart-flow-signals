import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Ambulance, User, Moon, BarChart3, Brain, Wifi, ChevronRight } from 'lucide-react';

const futureFeatures = [
  {
    icon: Ambulance,
    title: "Emergency Vehicle Priority",
    description: "Automatic green signal for ambulances, fire trucks, and police vehicles using GPS tracking or RFID",
    status: "Planned"
  },
  {
    icon: User,
    title: "Pedestrian Crossing Buttons",
    description: "Dedicated pedestrian signals with push-button activation and audio alerts for accessibility",
    status: "In Development"
  },
  {
    icon: Moon,
    title: "Night-Time Default Green",
    description: "Low-traffic hours automatically switch to flashing yellow or default green mode",
    status: "Planned"
  },
  {
    icon: BarChart3,
    title: "Density-Based Duration",
    description: "Variable green signal duration based on real-time vehicle count and traffic density",
    status: "Research"
  },
  {
    icon: Brain,
    title: "AI & Camera Integration",
    description: "Machine learning for vehicle counting, type detection, and predictive traffic management",
    status: "Future"
  },
  {
    icon: Wifi,
    title: "IoT Cloud Connectivity",
    description: "Real-time monitoring dashboard, remote control, and data analytics for traffic patterns",
    status: "In Development"
  }
];

const FutureScopeSection: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development': return 'bg-signal-green/10 text-signal-green border-signal-green/30';
      case 'Planned': return 'bg-signal-yellow/10 text-signal-yellow border-signal-yellow/30';
      case 'Research': return 'bg-primary/10 text-primary border-primary/30';
      case 'Future': return 'bg-muted text-muted-foreground border-border';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <SectionWrapper id="future" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Roadmap
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Future Scope
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Expandable features for next-generation smart traffic management
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(feature.status)}`}>
                  {feature.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-3">Vision 2030</h4>
              <p className="text-muted-foreground mb-4">
                Transform urban mobility through AI-powered, interconnected traffic systems 
                that communicate with each other and connected vehicles for seamless, 
                zero-congestion city transportation.
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Learn more about smart city integration</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Brain className="w-12 h-12 text-primary" />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FutureScopeSection;
