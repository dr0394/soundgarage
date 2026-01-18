import { Zap, Shield, Heart, Headphones, Sparkles, Car, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: 'Kristallklarer Sound',
      description: 'Erleben Sie Ihre Lieblingsmusik in Studio-Qualität mit professionell abgestimmten Soundsystemen'
    },
    {
      icon: Shield,
      title: 'Maximaler Schutz',
      description: 'Modernste Alarmanlagen schützen Ihr Fahrzeug zuverlässig vor Diebstahl'
    },
    {
      icon: Car,
      title: 'Wertsteigerung',
      description: 'Hochwertige Ausstattung steigert den Wiederverkaufswert Ihres Fahrzeugs'
    },
    {
      icon: Headphones,
      title: 'Premium-Marken',
      description: 'Wir verbauen nur Komponenten von führenden Herstellern für höchste Qualität'
    },
    {
      icon: Sparkles,
      title: 'Wie ab Werk',
      description: 'Perfekte Integration in Ihr Fahrzeug - optisch und funktional'
    },
    {
      icon: Heart,
      title: 'Fahrspaß pur',
      description: 'Genießen Sie jede Fahrt mit perfektem Sound und modernster Technik'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % benefits.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, benefits.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white via-gray-50 to-white p-12 mb-16 rounded-3xl shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight relative z-10">
            IHRE VORTEILE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 relative z-10"></div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-12 rounded-3xl hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 group transition-all duration-500 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-red-600 relative overflow-hidden max-w-2xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-3xl group-hover:bg-white mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative z-10">
                        <benefit.icon className="w-10 h-10 text-white group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                      <h3 className="text-3xl font-black text-black group-hover:text-white mb-4 tracking-tight transition-colors duration-300 relative z-10">{benefit.title}</h3>
                      <p className="text-xl text-gray-700 group-hover:text-white leading-relaxed font-medium transition-colors duration-300 relative z-10">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Vorheriger Vorteil"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Nächster Vorteil"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-red-600 w-12'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Gehe zu Vorteil ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
