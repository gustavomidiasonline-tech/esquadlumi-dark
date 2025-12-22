import React from 'react';
import { Section } from '../ui/Section';
import { CONTACT_INFO } from '../../constants';
import { Phone, ArrowRight, Mail } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const Contact = () => {
  return (
    <Section id="contato" bg="darker" className="border-t border-gray-900">
      <div className="max-w-6xl mx-auto bg-dark border border-gray-800 rounded shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          
          {/* Logo / Brand Side */}
          <div className="lg:w-1/3 bg-black p-10 flex flex-col justify-between border-r border-gray-800">
             <FadeIn>
                <img 
                    src="https://esquadlumi.com.br/wp-content/uploads/2022/11/esquadlumi-300x127.png" 
                    alt="Esquad Lumi" 
                    className="w-48 h-auto brightness-0 invert mb-8"
                />
                <h3 className="text-2xl font-bold text-white mb-2">Faça seu cadastro</h3>
                <p className="text-gray-400 mb-8">e receba seu orçamento com agilidade.</p>
             </FadeIn>
             
             <FadeIn delay={0.2} className="mt-auto">
                <p className="text-xs text-gray-600">Esquadrias de Alumínio em Pouso Alegre e Região.</p>
             </FadeIn>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12 lg:w-2/3">
            <FadeIn>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Pronto para transformar seu ambiente com sofisticação?</h3>
                
                <form className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase mb-1">Nome*</label>
                    <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 bg-secondary border border-gray-700 text-white rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-600"
                    placeholder="Digite seu nome completo"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase mb-1">Telefone*</label>
                    <input 
                        type="tel" 
                        id="phone"
                        className="w-full px-4 py-3 bg-secondary border border-gray-700 text-white rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-600"
                        placeholder="(00) 00000-0000"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase mb-1">E-mail*</label>
                    <input 
                        type="email" 
                        id="email"
                        className="w-full px-4 py-3 bg-secondary border border-gray-700 text-white rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-600"
                        placeholder="seu@email.com"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="service" className="block text-xs font-bold text-gray-400 uppercase mb-1">Qual produto/serviço você deseja?*</label>
                    <select 
                        id="service"
                        className="w-full px-4 py-3 bg-secondary border border-gray-700 text-white rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-gray-400"
                    >
                        <option>Selecione uma opção</option>
                        <option>Janelas de Alumínio</option>
                        <option>Portas de Alumínio</option>
                        <option>Fachadas</option>
                        <option>Outros</option>
                    </select>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-white hover:text-primary text-white font-bold uppercase tracking-widest py-4 rounded transition-all flex justify-center items-center gap-2 mt-6 shadow-lg"
                >
                    Solicitar Orçamento Agora
                </button>
                </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Contact;