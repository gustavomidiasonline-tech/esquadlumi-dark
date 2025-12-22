import React from 'react';
import { Section } from '../ui/Section';
import { SPECIALTIES, SERVICES } from '../../constants';
import { FadeIn } from '../ui/FadeIn';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <>
      {/* Why Choose Us / Specialties */}
      <Section id="especialidades" bg="accent" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        <div className="text-center mb-16 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">Por que escolher a Esquad Lumi em Pouso Alegre?</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 relative z-10">
          {SPECIALTIES.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                {item.icon && <item.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Main Services */}
      <Section id="servicos" bg="darker">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mais de <span className="text-primary">1000</span> obras <br/>entregues em Pouso Alegre
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Esquadrias sob medida, Portas, Janelas, Fechamento de Sacadas e muito mais. Atendemos todo o Sul de Minas com excelência.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} className="group relative overflow-hidden rounded-lg bg-secondary border border-gray-800 hover:border-primary transition-all duration-300">
              <div className="p-8">
                <div className="mb-6 inline-block p-3 rounded bg-dark border border-gray-700 group-hover:border-primary transition-colors">
                  {item.icon && <item.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{item.description}</p>
                <div className="w-full h-px bg-gray-800 group-hover:bg-primary/50 transition-colors mb-6"></div>
                <a href={`https://wa.me/5535984162199?text=Interesse em ${item.title} para minha obra em Pouso Alegre`} className="inline-flex items-center text-sm font-bold text-white hover:text-primary uppercase tracking-wider transition-colors">
                  Saiba Mais <span className="ml-2 text-primary">&rarr;</span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn className="mt-16 text-center">
             <a
              href={`https://wa.me/5535984162199?text=Gostaria de um orçamento personalizado para Pouso Alegre.`}
              className="inline-block px-10 py-4 bg-primary text-white font-bold text-lg rounded hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest shadow-lg hover:shadow-primary/20"
            >
              Solicite seu orçamento
            </a>
        </FadeIn>
      </Section>
    </>
  );
};

export default Services;