import React from 'react';
import { Instagram, Facebook, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../../constants';
import { FadeIn } from '../ui/FadeIn';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <FadeIn className="flex flex-col gap-6">
            <img 
              src="https://esquadlumi.com.br/wp-content/uploads/2022/11/esquadlumi-1024x433.png" 
              alt="Esquad Lumi" 
              className="w-48 h-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Desde 2022, a Esquad Lumi tem se destacado como a principal escolha para clientes que valorizam qualidade, precisão e sofisticação em esquadrias de alumínio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-secondary p-2 rounded-full text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.instagram} className="bg-secondary p-2 rounded-full text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp_william}`} className="bg-secondary p-2 rounded-full text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1}>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-primary w-12 pb-2">Acesso Rápido</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <Link to={item.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3 h-3 text-primary" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.2}>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-primary w-12 pb-2">Contatos</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p>William: (35) 98416-2199</p>
                  <p>Felipe: (35) 98414-7331</p>
                </div>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={0.3}>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-primary w-12 pb-2">Localização</h3>
            <a href={CONTACT_INFO.maps} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-lg shadow-md border border-gray-800 hover:border-primary transition-colors">
              <img 
                src="https://esquadlumi.com.br/wp-content/uploads/2024/09/Localizacao-EsquadLumi-Pouso-Alegre-Mg-4.png" 
                alt="Mapa Localização" 
                className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          </FadeIn>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Esquad Lumi. Todos os direitos reservados.</p>
          <Link to="/politica-de-privacidade" className="hover:text-primary transition-colors mt-2 md:mt-0">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;