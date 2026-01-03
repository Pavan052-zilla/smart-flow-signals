import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { TrafficCone, Building2, Truck, GraduationCap, Cross, MapPin } from 'lucide-react';

const applications = [
  {
    icon: TrafficCone,
    title: "Urban Intersections",
    description: "High-traffic city junctions with multiple lanes and complex signal patterns",
    example: "Main city crossroads, commercial areas"
  },
  {
    icon: Building2,
    title: "Smart Cities",
    description: "Integration with broader smart city infrastructure and centralized monitoring",
    example: "Smart city pilot projects, tech parks"
  },
  {
    icon: Truck,
    title: "Highways",
    description: "Highway entry/exit points and toll plazas for smooth traffic flow",
    example: "Expressway junctions, service roads"
  },
  {
    icon: GraduationCap,
    title: "School Zones",
    description: "Priority pedestrian crossings during school hours with extended crossing times",
    example: "Near schools, colleges, playgrounds"
  },
  {
    icon: Cross,
    title: "Hospital & Emergency Routes",
    description: "Priority green corridors for ambulances and emergency vehicles",
    example: "Hospital entrances, emergency routes"
  },
  {
    icon: MapPin,
    title: "Tourist Areas",
    description: "Adaptive timing for varying foot traffic in tourist and commercial zones",
    example: "Markets, monuments, shopping areas"
  }
];

const ApplicationsSection: React.FC = () => {
  return (
    <SectionWrapper id="applications" className="bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-signal-green/10 text-signal-green text-sm font-medium mb-4"
          >
            Use Cases
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Real-world deployment scenarios for intelligent traffic management
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application, index) => (
            <motion.div
              key={application.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-card rounded-2xl overflow-hidden border border-border hover:border-signal-green/30 transition-all duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-signal-green/10 flex items-center justify-center mb-4 group-hover:bg-signal-green/20 transition-colors">
                  <application.icon className="w-6 h-6 text-signal-green" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{application.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{application.description}</p>
              </div>
              
              <div className="px-6 py-3 bg-secondary/50 border-t border-border">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{application.example}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ApplicationsSection;
