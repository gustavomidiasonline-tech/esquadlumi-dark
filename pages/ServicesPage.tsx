import React from 'react';
import Services from '../components/Sections/Services';
import { FadeIn } from '../components/ui/FadeIn';

const ServicesPage = () => {
  return (
    <div className="pt-20 bg-dark min-h-screen">
      <div className="relative py-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nossos Serviços</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore nossa linha completa de soluções em esquadrias de alumínio e vidraçaria de alto padrão.
            </p>
          </FadeIn>
        </div>
      </div>
      
      <Services />
    </div>
  );
};

export default ServicesPage;