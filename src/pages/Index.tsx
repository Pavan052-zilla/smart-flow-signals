import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import WorkingPrincipleSection from '@/components/WorkingPrincipleSection';
import FlowchartSection from '@/components/FlowchartSection';
import ComponentsSection from '@/components/ComponentsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import LimitationsSection from '@/components/LimitationsSection';
import FutureScopeSection from '@/components/FutureScopeSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import ConclusionSection from '@/components/ConclusionSection';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Smart Traffic Management System | Intelligent Signal Control</title>
        <meta 
          name="description" 
          content="Smart Traffic Management System using vehicle detection sensors and microcontroller technology for intelligent, adaptive traffic signal control. Perfect for smart city projects and IoT demonstrations." 
        />
        <meta name="keywords" content="smart traffic, traffic management, Arduino, IoT, smart city, vehicle detection, traffic signals" />
        <meta property="og:title" content="Smart Traffic Management System" />
        <meta property="og:description" content="Intelligent traffic signal control using sensors and microcontroller technology" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <ArchitectureSection />
          <WorkingPrincipleSection />
          <FlowchartSection />
          <ComponentsSection />
          <AdvantagesSection />
          <LimitationsSection />
          <FutureScopeSection />
          <ApplicationsSection />
          <ConclusionSection />
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border bg-background">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-signal-red" />
              <div className="w-2 h-2 rounded-full bg-signal-yellow" />
              <div className="w-2 h-2 rounded-full bg-signal-green" />
            </div>
            <p className="text-muted-foreground text-sm">
              Smart Traffic Management System — A Smart City Innovation Project
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              Built for college demonstrations, hackathons, and smart city proposals
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
