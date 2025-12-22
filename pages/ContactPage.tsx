import React from 'react';
import Contact from '../components/Sections/Contact';
import { FadeIn } from '../components/ui/FadeIn';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactPage = () => {
  return (
    <div className="pt-20 bg-dark min-h-screen">
      <div className="relative py-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Fale Conosco</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estamos prontos para atender você e realizar o seu projeto.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.1} className="bg-secondary p-8 rounded-lg border border-gray-800 text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Telefones</h3>
                <p className="text-gray-400">William: (35) 98416-2199</p>
                <p className="text-gray-400">Felipe: (35) 98414-7331</p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="bg-secondary p-8 rounded-lg border border-gray-800 text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Endereço</h3>
                <p className="text-gray-400">{CONTACT_INFO.address}</p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-secondary p-8 rounded-lg border border-gray-800 text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Horário</h3>
                <p className="text-gray-400">{CONTACT_INFO.hours}</p>
            </FadeIn>
        </div>
      </div>
      
      <Contact />
    </div>
  );
};

export default ContactPage;