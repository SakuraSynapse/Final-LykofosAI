import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-lykofos-bg min-h-screen text-white font-sans selection:bg-lykofos-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;