import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { TrendingDown, Fuel, Wind, Shield, Building2, Coins, Check } from 'lucide-react';

const advantages = [
  {
    icon: TrendingDown,
    title: "Reduced Traffic Congestion",
    description: "Dynamic signal timing adapts to actual traffic flow, minimizing bottlenecks and queue lengths",
    metric: "Up to 40%",
    metricLabel: "reduction in wait time"
  },
  {
    icon: Fuel,
    title: "Fuel Saving",
    description: "Less idling at empty intersections means significant fuel savings for all vehicles",
    metric: "15-25%",
    metricLabel: "fuel efficiency gain"
  },
  {
    icon: Wind,
    title: "Reduced Air Pollution",
    description: "Lower vehicle emissions from decreased idle time contributes to cleaner air quality",
    metric: "20-30%",
    metricLabel: "emission reduction"
  },
  {
    icon: Shield,
    title: "Improved Road Safety",
    description: "Intelligent timing reduces accidents caused by rushed crossings and traffic violations",
    metric: "25%",
    metricLabel: "fewer incidents"
  },
  {
    icon: Building2,
    title: "Smart City Compatible",
    description: "Easily integrates with existing smart city infrastructure and IoT ecosystems",
    metric: "100%",
    metricLabel: "IoT ready"
  },
  {
    icon: Coins,
    title: "Cost-Effective Solution",
    description: "Low-cost implementation with Arduino and sensors compared to traditional systems",
    metric: "60%",
    metricLabel: "cost savings"
  }
];

const AdvantagesSection: React.FC = () => {
  return (
    <SectionWrapper id="advantages" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-signal-green/10 text-signal-green text-sm font-medium mb-4"
          >
            Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Key Advantages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Transforming urban mobility with measurable impact
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-card rounded-2xl p-6 border border-border hover:border-signal-green/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-signal-green/10 flex items-center justify-center group-hover:bg-signal-green/20 transition-colors">
                  <advantage.icon className="w-6 h-6 text-signal-green" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-signal-green">{advantage.metric}</div>
                  <div className="text-xs text-muted-foreground">{advantage.metricLabel}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground text-sm">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 p-8 bg-signal-green/5 rounded-2xl border border-signal-green/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-4">Why Choose Smart Traffic Management?</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Real-time adaptation",
                  "Reduced carbon footprint",
                  "Lower operational costs",
                  "Scalable architecture",
                  "Easy maintenance",
                  "Future-proof design"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-signal-green" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-32 h-32 rounded-full bg-signal-green/20 flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-signal-green">6+</div>
                <div className="text-sm text-muted-foreground">Benefits</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AdvantagesSection;
