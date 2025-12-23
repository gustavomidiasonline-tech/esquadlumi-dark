import React, { useRef, useEffect, useState } from 'react';
import { Section } from '../ui/Section';
import { PARTNERS } from '../../constants';
import { FadeIn } from '../ui/FadeIn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Partners = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 220; // Aproximadamente a largura do card + gap
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Scroll automático
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (!isPaused && scrollContainer.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
        
        // Verifica se chegou ao final (com uma margem de erro pequena)
        // Se scrollLeft + clientWidth for maior ou igual ao scrollWidth total
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Volta para o início suavemente
          scrollContainer.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Rola para a direita
          scrollContainer.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
      }
    }, 3000); // 3 segundos

    return () => clearInterval(autoScroll);
  }, [isPaused]);

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

      <div 
        className="relative group max-w-6xl mx-auto px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-primary transition-all backdrop-blur-sm -ml-4 md:-ml-8 border border-gray-700 hidden md:block opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div 
          ref={scrollContainer}
          className="flex gap-8 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scrollbar-hide items-center justify-start md:justify-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PARTNERS.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 snap-center">
              <FadeIn delay={idx * 0.1} className="block w-48 h-28 flex items-center justify-center p-4 bg-white border border-gray-200 rounded hover:shadow-lg hover:border-primary hover:scale-105 transition-all duration-300">
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
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-primary transition-all backdrop-blur-sm -mr-4 md:-mr-8 border border-gray-700 hidden md:block opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </Section>
  );
};

export default Partners;