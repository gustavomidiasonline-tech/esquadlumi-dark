import React from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Testimonials from '../components/Sections/Testimonials';
import Gallery from '../components/Sections/Gallery';
import Partners from '../components/Sections/Partners';
import Contact from '../components/Sections/Contact';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Link } from 'react-router-dom';
import { SPECIALTIES } from '../constants';

// Simplified Services Preview for Home Page
const ServicesPreview = () => {
  return (
    <Section bg="accent">
      <div className="text-center mb-12">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest">Nossas Especialidades</h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Conheça algumas das soluções que oferecemos para transformar o seu projeto.
          </p>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SPECIALTIES.slice(0, 3).map((item, index) => (
          <FadeIn key={index} delay={index * 0.1} className="bg-dark/50 p-6 rounded-lg border border-white/10 hover:border-primary transition-colors flex flex-col items-center text-center">
            <div className="mb-4 text-primary">
              {item.icon && <item.icon className="w-10 h-10" />}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </FadeIn>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/servicos" className="inline-block px-8 py-3 border border-primary text-primary font-bold uppercase rounded hover:bg-primary hover:text-white transition-all">
          Ver Todos os Serviços
        </Link>
      </div>
    </Section>
  );
}

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <Testimonials />
      <Gallery />
      <Partners />
      <Contact />
    </>
  );
};

export default Home;