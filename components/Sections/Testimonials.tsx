import React from 'react';
import { Section } from '../ui/Section';
import { TESTIMONIALS } from '../../constants';
import { FadeIn } from '../ui/FadeIn';
import { Star, MoreVertical, ThumbsUp, Share2 } from 'lucide-react';

const Testimonials = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-white rounded-lg p-4 shadow-lg flex flex-col justify-between h-full">
            <div>
                <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                    {t.avatarUrl ? (
                    <img src={t.avatarUrl} alt={t.author} className="w-10 h-10 rounded-full" />
                    ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                        {t.author.charAt(0)}
                    </div>
                    )}
                    <div>
                    <h4 className="font-bold text-gray-900 text-sm">{t.author}</h4>
                    <p className="text-xs text-gray-500">Local Guide • Pouso Alegre</p>
                    </div>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
                </div>

                <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#F4B400] text-[#F4B400]" />
                ))}
                <span className="text-xs text-gray-500 ml-2">{t.date}</span>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-6 leading-relaxed">
                {t.text}
                </p>
            </div>

            <div className="flex gap-4 mt-auto pt-3 border-t border-gray-100">
                <button className="flex items-center gap-1 text-gray-500 text-xs hover:text-gray-700">
                    <ThumbsUp className="w-4 h-4" /> Gostei
                </button>
                <button className="flex items-center gap-1 text-gray-500 text-xs hover:text-gray-700">
                    <Share2 className="w-4 h-4" /> Compartilhar
                </button>
            </div>
          </FadeIn>
        ))}
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