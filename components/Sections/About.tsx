import React from 'react';
import { Section } from '../ui/Section';
import { FadeIn } from '../ui/FadeIn';

const About = () => {
  return (
    <Section id="sobre" bg="darker">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <FadeIn direction="right">
            <div className="relative rounded-lg overflow-hidden border-2 border-primary/20">
               <img 
                src="https://esquadlumi.com.br/wp-content/uploads/2024/08/ESQUAD-LUMI-LOGOTIPO-COM-LEGENDA-VARIACOES-01-scaled.jpg" 
                alt="Esquad Lumi - Fábrica de Esquadrias em Pouso Alegre" 
                className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 border-[10px] border-primary/10 pointer-events-none"></div>
            </div>
          </FadeIn>
        </div>
        
        <div className="lg:w-1/2 space-y-8">
          <FadeIn>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Bem-vindo à Esquad Lumi</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Esquadrias de Alumínio <span className="text-primary">Alto Padrão em Pouso Alegre</span>
            </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            <div className="text-gray-400 space-y-6 leading-relaxed text-justify text-lg">
              <p>
                Desde 2022, a <strong>Esquad Lumi</strong> tem se destacado como a principal escolha para clientes em <strong>Pouso Alegre e região</strong> que valorizam qualidade, precisão e sofisticação. Nosso objetivo é transformar ambientes com esquadrias de alumínio que combinam durabilidade e estética moderna.
              </p>
              <p>
                Contamos com uma equipe altamente qualificada, pronta para oferecer suporte total desde o projeto até a instalação. Somos especialistas em atender as demandas arquitetônicas do Sul de Minas, entregando soluções que superam expectativas com acabamento impecável.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Espelhos e Vidros</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Guarda-corpos</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Brise em alumínio</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Fachadas Glazing</li>
                </ul>
                <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Portas e Janelas de Alumínio</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Portões Automáticos</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Pergolados em Pouso Alegre</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Box até o teto</li>
                </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

export default About;