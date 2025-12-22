import React from 'react';
import About from '../components/Sections/About';
import Partners from '../components/Sections/Partners';
import { FadeIn } from '../components/ui/FadeIn';

const AboutPage = () => {
  return (
    <div className="pt-20 bg-dark min-h-screen">
      <div className="relative py-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Sobre a Esquad Lumi</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Compromisso, qualidade e inovação em cada detalhe.
            </p>
          </FadeIn>
        </div>
      </div>
      
      <About />
      <Partners />
    </div>
  );
};

export default AboutPage;