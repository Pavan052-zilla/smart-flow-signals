import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { AlertTriangle, Clock, Fuel, Wind, Car, Frown } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: "Fixed Time Intervals",
    description: "Traditional signals operate on rigid schedules regardless of actual traffic conditions",
    color: "text-signal-red"
  },
  {
    icon: Car,
    title: "Traffic Congestion",
    description: "Peak hours cause massive backups due to inability to adapt to varying traffic density",
    color: "text-signal-yellow"
  },
  {
    icon: Fuel,
    title: "Fuel Wastage",
    description: "Vehicles idle at empty intersections, burning fuel unnecessarily",
    color: "text-signal-red"
  },
  {
    icon: Wind,
    title: "Air Pollution",
    description: "Increased emissions from prolonged idling contribute to environmental degradation",
    color: "text-muted-foreground"
  },
  {
    icon: Frown,
    title: "Driver Frustration",
    description: "Longer travel times and unnecessary stops lead to poor user experience",
    color: "text-signal-yellow"
  },
  {
    icon: AlertTriangle,
    title: "Poor Infrastructure Use",
    description: "Roads remain underutilized due to inflexible signal timing",
    color: "text-signal-red"
  }
];

const ProblemSection: React.FC = () => {
  return (
    <SectionWrapper id="problem" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-signal-red/10 text-signal-red text-sm font-medium mb-4"
          >
            The Challenge
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Problem Statement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Traditional traffic signal systems fail to adapt to real-time conditions, 
            creating inefficiencies that impact everyone on the road.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-card rounded-2xl p-6 border border-border hover:border-signal-red/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 ${problem.color} group-hover:scale-110 transition-transform`}>
                <problem.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 md:p-8 bg-signal-red/5 rounded-2xl border border-signal-red/20"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-signal-red/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-signal-red" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Core Issue</h4>
              <p className="text-muted-foreground">
                The fundamental problem is that traditional systems <span className="text-foreground font-medium">cannot adapt to real-time traffic density differences</span> between roads. 
                This rigid approach wastes time, fuel, and creates unnecessary congestion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSection;
