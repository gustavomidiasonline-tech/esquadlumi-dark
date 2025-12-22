import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ui/ScrollToTop';
import { CONTACT_INFO } from './constants';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-dark">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            {/* Redirecionar rotas não encontradas para a home */}
            <Route path="/blog" element={<Navigate to="/" replace />} /> 
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Whatsapp Button with Official Icon */}
        <a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp_william}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20b858] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
          aria-label="Chat on Whatsapp"
        >
          <svg 
              viewBox="0 0 32 32" 
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M16 2C8.269 2 2 8.269 2 16c0 2.51.666 4.871 1.823 6.94L2.35 29.5l6.732-1.766C11.028 28.777 13.438 29.39 16 29.39c7.731 0 14-6.269 14-14S23.731 2 16 2zm0 2.2a11.8 11.8 0 0 1 11.8 11.8c0 6.507-5.293 11.8-11.8 11.8-2.072 0-4.02-.52-5.74-1.428l-.41-.218-4.256 1.116 1.135-4.148-.27-.428A11.756 11.756 0 0 1 4.2 16c0-6.507 5.293-11.8 11.8-11.8zm6.545 15.777c-.28-.14-1.655-.817-1.912-.911-.257-.094-.443-.14-.63.14-.187.28-.723.911-.886 1.098-.164.187-.327.21-.607.07-.28-.14-1.182-.436-2.253-1.39-.834-.744-1.397-1.662-1.56-1.943-.164-.28-.018-.432.122-.572.128-.127.28-.327.42-.49.14-.164.187-.28.28-.468.094-.187.047-.35-.023-.49-.07-.14-.63-1.518-.863-2.08-.227-.546-.457-.472-.63-.48-.164-.009-.35-.009-.537-.009-.187 0-.49.07-.747.35-.257.28-1.004.98-1.004 2.392 0 1.41 1.027 2.775 1.168 2.961.14.187 2.022 3.088 4.9 4.331 1.96 1.54 2.72.336 3.23.065.51-.271 1.655-.677 1.888-1.331.233-.654.233-1.214.163-1.331-.07-.117-.257-.187-.537-.327z"/>
          </svg>
          <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Fale conosco no WhatsApp
          </span>
        </a>
      </div>
    </HashRouter>
  );
}

export default App;