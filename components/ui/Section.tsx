import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'dark' | 'darker' | 'accent';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'dark' }) => {
  const bgColors = {
    dark: 'bg-dark', // #111111
    darker: 'bg-black', // Black
    accent: 'bg-secondary', // Dark Gray
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};