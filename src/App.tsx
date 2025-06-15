import React from 'react';
import Hero from './components/sections/Hero';
import PeaceOfMind from './components/sections/PeaceOfMind';
import Footer from './components/sections/Footer';
import Navbar from './components/Navbar';
import SectionScrollContext from './contexts/SectionScrollContext';
import ProblemStatement from './components/sections/ProblemStatement';
import TechnicalSection from './components/sections/TechnicalSection';
import ComparisonNew from './components/sections/ComparisonNew';
import DroneStats from './components/sections/DroneStats';
import DroneStatsDiagram from './components/sections/DroneStatsDiagram';
import CountermeasureComparison from './components/sections/CountermeasureComparison';
import TechnicalSectionVid from './components/sections/TechnicalSectionVid';

function App() {
  return (
    <SectionScrollContext>
      <div className="bg-white text-gray-900 font-sans overflow-hidden">
        <Navbar />
        <main className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
          <Hero />
          <ProblemStatement />
          <TechnicalSection />
          <TechnicalSectionVid />
          {/* <DroneStatsDiagram /> */}
          {/* <DroneStats /> */}
          <CountermeasureComparison />
          {/* <ComparisonNew /> */}
          {/* <PeaceOfMind /> */}
          <Hero />
          <Footer />
        </main>
      </div>
    </SectionScrollContext>
  );
}

export default App;