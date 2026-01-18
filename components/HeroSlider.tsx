
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { INITIAL_HERO_SLIDES } from '../constants';

const HeroSlider: React.FC = () => {
  const slides = INITIAL_HERO_SLIDES;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides]);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  if (!slides || slides.length === 0) return null;

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-[6000ms]"
            style={{ transform: index === current ? 'scale(1.1)' : 'scale(1.05)' }}
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-4xl">
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] transition-all duration-700 delay-100 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.title}
                </h1>
                <p className={`text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {slide.subtitle}
                </p>
                <div className={`flex flex-col sm:flex-row gap-5 transition-all duration-700 delay-300 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Link to="/get-quote" className="bg-[#014034] text-white px-10 py-5 rounded-xl font-extrabold text-lg hover:bg-[#00695c] transition-all shadow-2xl text-center">
                    {slide.ctaPrimary}
                  </Link>
                  <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center">
                    {slide.ctaSecondary}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <div className="absolute bottom-12 right-12 z-30 flex space-x-4">
            <button onClick={prevSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-[#014034] transition-all bg-black/30 backdrop-blur-md group">
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-[#014034] transition-all bg-black/30 backdrop-blur-md group">
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute bottom-12 left-12 z-30 flex items-center space-x-3">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-500 rounded-full h-1.5 ${i === current ? 'w-16 bg-[#4DB6AC]' : 'w-8 bg-white/20'}`} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default HeroSlider;
