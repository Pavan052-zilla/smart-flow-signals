import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Radio, Cpu, Lightbulb, Battery, Cable, Camera } from 'lucide-react';

const components = [
  {
    icon: Radio,
    title: "Vehicle Detection Sensors",
    types: ["Infrared (IR)", "Ultrasonic", "Camera-based"],
    description: "Detect presence and count of vehicles on each road lane",
    color: "text-signal-green",
    bgColor: "bg-signal-green/10",
    borderColor: "border-signal-green/30"
  },
  {
    icon: Cpu,
    title: "Microcontroller",
    types: ["Arduino Uno/Mega", "ATmega328P"],
    description: "Central processing unit that receives sensor data and controls signals",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30"
  },
  {
    icon: Lightbulb,
    title: "Traffic Signal Lights",
    types: ["Red", "Yellow", "Green LEDs"],
    description: "Visual indicators for traffic control on each road",
    color: "text-signal-yellow",
    bgColor: "bg-signal-yellow/10",
    borderColor: "border-signal-yellow/30"
  },
  {
    icon: Battery,
    title: "Power Supply",
    types: ["5V DC Adapter", "Battery Backup"],
    description: "Reliable power source for continuous operation",
    color: "text-signal-red",
    bgColor: "bg-signal-red/10",
    borderColor: "border-signal-red/30"
  },
  {
    icon: Cable,
    title: "Connecting Wires",
    types: ["Jumper Wires", "Breadboard"],
    description: "Interconnections between all system components",
    color: "text-muted-foreground",
    bgColor: "bg-muted/50",
    borderColor: "border-muted"
  },
  {
    icon: Camera,
    title: "Optional: Camera Module",
    types: ["ESP32-CAM", "USB Webcam"],
    description: "For advanced vehicle counting and AI integration",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30"
  }
];

const ComponentsSection: React.FC = () => {
  return (
    <SectionWrapper id="components" className="bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-signal-green/10 text-signal-green text-sm font-medium mb-4"
          >
            Hardware
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Components Used
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Key hardware components that power the intelligent traffic system
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-card rounded-2xl p-6 border ${component.borderColor} hover:scale-[1.02] transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-xl ${component.bgColor} flex items-center justify-center mb-4`}>
                <component.icon className={`w-7 h-7 ${component.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{component.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {component.types.map((type) => (
                  <span
                    key={type}
                    className="px-2 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground"
                  >
                    {type}
                  </span>
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm">{component.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Cost Estimate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 md:p-8 bg-primary/5 rounded-2xl border border-primary/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Estimated Component Cost</h4>
              <p className="text-muted-foreground">Basic prototype setup for demonstration purposes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">₹500 - ₹1500</div>
              <div className="text-sm text-muted-foreground">Approximate range</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ComponentsSection;
