import React, { useRef } from 'react';
import { Section } from '../ui/Section';
import { TESTIMONIALS } from '../../constants';
import { FadeIn } from '../ui/FadeIn';
import { Star, MoreVertical, ThumbsUp, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 320; // Aproximadamente a largura do card + gap
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="depoimentos" bg="darker">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que os <span className="text-primary">clientes dizem</span> sobre nós
          </h2>
          <div className="flex justify-center items-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-8 h-8 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira a satisfação de quem contratou a melhor empresa de esquadrias de alumínio de Pouso Alegre.
          </p>
        </FadeIn>
      </div>

      <div className="relative group max-w-6xl mx-auto">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-primary transition-all backdrop-blur-sm -ml-4 md:-ml-12 border border-gray-700 hidden md:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div 
          ref={scrollContainer}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-80 snap-center">
              <FadeIn delay={i * 0.1} className="bg-white rounded-lg p-5 shadow-lg flex flex-col justify-between h-full min-h-[280px]">
                <div>
                    <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                        {t.avatarUrl ? (
                        <img src={t.avatarUrl} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                            {t.author.charAt(0)}
                        </div>
                        )}
                        <div className="text-left">
                        <h4 className="font-bold text-gray-900 text-sm">{t.author}</h4>
                        <p className="text-[10px] text-gray-500">Local Guide • Pouso Alegre</p>
                        </div>
                    </div>
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 fill-[#F4B400] text-[#F4B400]" />
                    ))}
                    <span className="text-[10px] text-gray-500 ml-2">{t.date}</span>
                    </div>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-5 leading-relaxed text-left">
                    {t.text}
                    </p>
                </div>

                <div className="flex gap-4 mt-auto pt-3 border-t border-gray-100">
                    <button className="flex items-center gap-1 text-gray-500 text-[10px] hover:text-gray-700">
                        <ThumbsUp className="w-3 h-3" /> Gostei
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 text-[10px] hover:text-gray-700">
                        <Share2 className="w-3 h-3" /> Compartilhar
                    </button>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-primary transition-all backdrop-blur-sm -mr-4 md:-mr-12 border border-gray-700 hidden md:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <FadeIn className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
          <div className="bg-primary p-6 rounded flex flex-col items-center justify-center text-center min-w-[250px]">
              <h3 className="text-3xl font-bold text-white">+1.000</h3>
              <p className="text-white text-sm font-medium">obras entregues em <br/> Pouso Alegre e por <br/> todo Sul de Minas.</p>
          </div>
          <div className="bg-[#B8860B] p-6 rounded flex items-center justify-center gap-4 min-w-[250px]">
              <div className="bg-white/20 p-3 rounded-full">
                  <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <div className="text-left">
                  <h3 className="text-xl font-bold text-white uppercase">Garantia</h3>
                  <p className="text-white text-sm">de qualidade e <br/>segurança.</p>
              </div>
          </div>
      </FadeIn>
    </Section>
  );
};

export default Testimonials;