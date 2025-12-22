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
          <FadeIn key={idx} delay={idx * 0.1} className="block w-40 md:w-48 h-24 flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-all hover:border-primary">
            <a 
              href={partner.url || '#'} 
              target={partner.url ? "_blank" : "_self"}
              className="w-full h-full flex items-center justify-center"
            >
              <img 
                src={partner.logoUrl} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain filter grayscale brightness-200 contrast-0 hover:filter-none transition-all duration-500"
              />
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default Partners;