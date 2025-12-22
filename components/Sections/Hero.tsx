import React from 'react';
import { CONTACT_INFO } from '../../constants';
import { FadeIn } from '../ui/FadeIn';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-dark overflow-hidden flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Casa Moderna com Esquadrias de Alumínio de Alto Padrão"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <FadeIn className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-6 uppercase tracking-wider backdrop-blur-sm">
            <MapPin className="w-4 h-4" /> Atendemos Pouso Alegre e Região
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Esquadrias de Alumínio de <br />
            <span className="text-primary">Alto Padrão em Pouso Alegre</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
            A <strong>Esquad Lumi</strong> é referência em vidraçaria e alumínio no Sul de Minas. Soluções personalizadas, durabilidade garantida e acabamento sofisticado para sua obra.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-primary font-medium">
             <span className="flex items-center gap-1">✓ Instalação Especializada</span>
             <span className="flex items-center gap-1">✓ Projetos Sob Medida</span>
             <span className="flex items-center gap-1">✓ Garantia de Qualidade</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp_william}?text=Olá.%20Vim%20do%20Site%20e%20gostaria%20de%20fazer%20um%20orçamento%20para%20Pouso%20Alegre.`}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-bold rounded text-white hover:bg-white hover:text-dark transition-all duration-300 uppercase tracking-wide"
            >
              Nossos Serviços
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;