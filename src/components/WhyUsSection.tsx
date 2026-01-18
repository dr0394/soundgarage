import { Award, Clock, ThumbsUp, Shield, Users, TrendingUp } from 'lucide-react';

export default function WhyUsSection() {
  const reasons = [
    {
      icon: Award,
      title: 'Seit 1988 in der Branche',
      description: 'In der Branche tätig seit 1988, vollzeit-selbstständig seit 1998 – über 35 Jahre Erfahrung'
    },
    {
      icon: Users,
      title: 'Persönliche Beratung',
      description: 'Individuelle Beratung und Konzeptentwicklung ohne Verkaufsdruck – ehrlich und transparent'
    },
    {
      icon: ThumbsUp,
      title: 'Große Produktvielfalt',
      description: 'Umfangreiches Sortiment im eigenen Ladengeschäft – zum Anfassen und Testen'
    },
    {
      icon: Shield,
      title: 'Professionelle Installation',
      description: 'Fachgerechte Installation auf höchstem Niveau – ohne Schäden an Ihrem Fahrzeug'
    },
    {
      icon: Clock,
      title: 'Ehrlicher Umgang',
      description: 'Vertrauensbasierte Zusammenarbeit statt Verkaufsdruck – langfristige Kundenbeziehungen'
    },
    {
      icon: TrendingUp,
      title: 'Faire Preise',
      description: 'Transparente Kostenaufstellung und faire Preise für alle Budgets'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-16 tracking-tight">
          WARUM SOUND-GARAGE?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border-4 border-black hover:bg-gradient-to-br hover:from-black hover:to-gray-800 hover:text-white group transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl group-hover:bg-white mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10">
                <reason.icon className="w-7 h-7 text-white group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-black group-hover:text-white mb-3 tracking-tight transition-colors duration-300 relative z-10">{reason.title}</h3>
              <p className="text-gray-700 group-hover:text-gray-300 leading-relaxed font-medium transition-colors duration-300 relative z-10">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-red-600 to-red-800 p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 animate-float"></div>
          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="group/item hover:scale-125 transition-all duration-500 cursor-pointer">
              <p className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent group-hover/item:scale-110 transition-transform duration-300">35+</p>
              <p className="text-white/90 font-bold tracking-wide group-hover/item:text-white transition-colors">JAHRE ERFAHRUNG</p>
            </div>
            <div className="group/item hover:scale-125 transition-all duration-500 cursor-pointer">
              <p className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent group-hover/item:scale-110 transition-transform duration-300">1000+</p>
              <p className="text-white/90 font-bold tracking-wide group-hover/item:text-white transition-colors">ZUFRIEDENE KUNDEN</p>
            </div>
            <div className="group/item hover:scale-125 transition-all duration-500 cursor-pointer">
              <p className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent group-hover/item:scale-110 transition-transform duration-300">5.0</p>
              <p className="text-white/90 font-bold tracking-wide group-hover/item:text-white transition-colors">GOOGLE BEWERTUNG</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
