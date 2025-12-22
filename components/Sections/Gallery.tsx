import React, { useRef } from 'react';
import { Section } from '../ui/Section';
import { GALLERY } from '../../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const Gallery = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 350;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="trabalhos" bg="dark">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-wider">Alguns Trabalhos</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <h3 className="text-xl text-gray-400">
            Portas, Janelas e Ripados em <span className="text-primary font-bold">Pouso Alegre e Região</span>
          </h3>
        </FadeIn>
      </div>

      <FadeIn className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full text-white hover:bg-primary transition-all backdrop-blur-sm -ml-4 md:ml-0 border border-gray-700"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div 
          ref={scrollContainer}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {GALLERY.map((img, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 md:w-96 snap-center rounded overflow-hidden relative group/item border border-gray-800"
            >
              <div className="h-72 overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 grayscale group-hover/item:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover/item:translate-y-0 transition-transform duration-300">
                    <p className="font-bold text-white text-lg border-l-4 border-primary pl-3">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full text-white hover:bg-primary transition-all backdrop-blur-sm -mr-4 md:mr-0 border border-gray-700"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </FadeIn>
    </Section>
  );
};

export default Gallery;