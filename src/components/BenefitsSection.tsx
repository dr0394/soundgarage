import { Zap, Shield, Heart, Headphones, Sparkles, Car } from 'lucide-react';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 group transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-3 border-2 border-transparent hover:border-red-600 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-2xl group-hover:bg-white mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                <benefit.icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-black group-hover:text-white mb-2 tracking-tight transition-colors duration-300 relative z-10">{benefit.title}</h3>
              <p className="text-gray-700 group-hover:text-white leading-relaxed font-medium transition-colors duration-300 relative z-10">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
