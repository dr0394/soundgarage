import { Users, Wrench, Lightbulb, Volume2, Navigation, Shield, Smartphone, Truck } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: 'Persönliche Produktberatung',
      description: 'Wir nehmen uns Zeit für Sie. In einem ausführlichen Beratungsgespräch finden wir gemeinsam die perfekte Lösung für Ihr Fahrzeug und Ihre individuellen Wünsche.',
      features: ['Individuelle Bedarfsanalyse', 'Produktvorführungen', 'Transparente Kostenaufstellung'],
      image: 'https://i.imgur.com/zeNjT42.jpeg'
    },
    {
      icon: Wrench,
      title: 'Fachgerechte Installation',
      description: 'Unsere geschulten Techniker verfügen über jahrelange Erfahrung und installieren alle Komponenten fachgerecht, ohne Ihr Fahrzeug zu beschädigen.',
      features: ['Zertifizierte Techniker', 'Original-Ersatzteile', 'Herstellergarantie bleibt erhalten'],
      image: 'https://i.imgur.com/vPR1HTn.jpeg'
    },
    {
      icon: Lightbulb,
      title: 'Individuelle Lösungen',
      description: 'Jedes Fahrzeug und jeder Kunde ist einzigartig. Wir entwickeln maßgeschneiderte Lösungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind.',
      features: ['Custom-Lösungen', 'Verschiedene Preisklassen', 'Von Basis bis High-End'],
      image: 'https://i.imgur.com/Ll1lKZi.jpeg'
    }
  ];

  const productCategories = [
    {
      icon: Volume2,
      title: 'Car HiFi & Soundsysteme',
      description: 'Premium-Soundsysteme für kristallklaren Klang und perfekten Bass'
    },
    {
      icon: Smartphone,
      title: 'Apple CarPlay & Android Auto',
      description: 'Moderne Smartphone-Integration für alle Fahrzeuge'
    },
    {
      icon: Navigation,
      title: 'Navigationssysteme',
      description: 'Aktuelle Navigation mit Live-Verkehrsinformationen'
    },
    {
      icon: Shield,
      title: 'Alarmanlagen & Sicherheit',
      description: 'Zuverlässiger Schutz vor Diebstahl und Einbruch'
    },
    {
      icon: Truck,
      title: 'Reisemobil- & Fahrzeugtechnik',
      description: 'Speziallösungen für Wohnmobile, Nutzfahrzeuge und Boote'
    },
    {
      icon: Wrench,
      title: 'Reparatur & Nachrüstung',
      description: 'Professionelle Reparatur und Nachrüstung fehlender Ausstattung'
    }
  ];

  return (
    <section id="leistungen" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white via-gray-50 to-white p-12 mb-16 rounded-3xl shadow-2xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000 animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/5 rounded-full -ml-24 -mb-24 group-hover:scale-150 transition-transform duration-1000 animate-float" style={{ animationDelay: '2s' }}></div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight relative z-10">
            UNSERE LEISTUNGEN
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl relative z-10">
            Von der Beratung bis zur Installation – bei uns erhalten Sie alles aus einer Hand
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mt-4 relative z-10"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl group hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 transition-all duration-500 border-4 border-white shadow-xl hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-red-600/50 transition-all duration-500"></div>
              </div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl mb-6 group-hover:bg-white transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:-rotate-6 relative z-10">
                  <service.icon className="w-8 h-8 text-white group-hover:text-red-600 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-black text-black group-hover:text-white mb-4 tracking-tight transition-colors duration-300 relative z-10">{service.title}</h3>
                <p className="text-gray-700 group-hover:text-white mb-6 leading-relaxed font-medium transition-colors duration-300 relative z-10">{service.description}</p>
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700 group-hover:text-white font-medium transition-all duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                      <div className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 p-12 rounded-xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-black text-black mb-8 tracking-tight">
            UNSERE PRODUKTKATEGORIEN
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border-2 border-black hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 hover:text-white group transition-all shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-red-600"
              >
                <category.icon className="w-12 h-12 text-black group-hover:text-white mb-4 transition-colors group-hover:scale-110" />
                <h4 className="text-xl font-black text-black group-hover:text-white mb-2 tracking-tight transition-colors">{category.title}</h4>
                <p className="text-gray-700 group-hover:text-white font-medium transition-colors">{category.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 mt-8 font-bold text-lg">
            FÜR PKW, WOHNMOBIL, NUTZFAHRZEUG UND BOOT
          </p>
        </div>
      </div>
    </section>
  );
}
