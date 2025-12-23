import React from 'react';
import { Section } from '../ui/Section';
import { PARTNERS } from '../../constants';
import { FadeIn } from '../ui/FadeIn';

const Partners = () => {
  return (
    <Section id="parceiros" bg="accent">
      <div className="text-center mb-12">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest">Nossos Parceiros</h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Na Esquad Lumi, valorizamos a importância de estabelecer parcerias duradouras para fornecer produtos e serviços de alta qualidade.
          </p>
        </FadeIn>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-12">
        {PARTNERS.map((partner, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="block w-40 md:w-48 h-24 flex items-center justify-center p-4 bg-white border border-gray-200 rounded hover:shadow-lg hover:border-primary hover:scale-105 transition-all duration-300">
            <a 
              href={partner.url || '#'} 
              target={partner.url ? "_blank" : "_self"}
              className="w-full h-full flex items-center justify-center"
            >
              <img 
                src={partner.logoUrl} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain"
              />
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default Partners;