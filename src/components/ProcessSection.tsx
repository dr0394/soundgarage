import { Phone, MessageSquare, Calendar, Wrench, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Kontaktaufnahme',
      description: 'Nehmen Sie per Telefon, E-Mail oder Kontaktformular mit uns Kontakt auf. Wir melden uns zeitnah bei Ihnen zurück.'
    },
    {
      icon: MessageSquare,
      number: '02',
      title: 'Bedarfsanalyse',
      description: 'In einem persönlichen Gespräch besprechen wir Ihre Wünsche und Anforderungen. Wir zeigen Ihnen verschiedene Lösungsmöglichkeiten auf.'
    },
    {
      icon: Calendar,
      number: '03',
      title: 'Angebot & Terminvereinbarung',
      description: 'Sie erhalten ein transparentes Angebot mit allen Kosten. Anschließend vereinbaren wir einen passenden Termin für die Installation.'
    },
    {
      icon: Wrench,
      number: '04',
      title: 'Fachgerechte Installation',
      description: 'Unsere Techniker installieren die gewählten Komponenten professionell und ohne Schäden an Ihrem Fahrzeug.'
    },
    {
      icon: CheckCircle,
      number: '05',
      title: 'Übergabe & Einweisung',
      description: 'Nach erfolgreicher Installation erhalten Sie eine ausführliche Einweisung und Ihr Fahrzeug zurück – perfekt ausgestattet!'
    }
  ];

  return (
    <section id="prozess" className="py-12 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white via-gray-50 to-white p-8 mb-10 rounded-xl shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-3 tracking-tight">
            SO EINFACH GEHT'S
          </h2>
          <p className="text-lg text-gray-700">
            In 5 Schritten zu Ihrem perfekten Sound- und Sicherheitssystem
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mt-3"></div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          <div className="grid md:grid-cols-5 gap-1 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-1.5 text-center group transition-all duration-500 hover:-translate-y-3 relative min-h-[280px] flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mx-auto mb-2 w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl group-hover:scale-125 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-red-600/50 transition-all duration-500 relative z-10 flex-shrink-0">
                  <step.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-white text-black rounded-xl flex items-center justify-center text-xs font-black shadow-lg group-hover:animate-pulse">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-base font-black text-white mb-1.5 tracking-tight transition-colors duration-300 relative z-10 break-words hyphens-auto">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-snug font-medium transition-colors duration-300 relative z-10 break-words hyphens-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="tel:09313538565"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-all font-black text-lg"
          >
            <Phone className="w-5 h-5" />
            <span>JETZT ANRUFEN: 0931-3538565</span>
          </a>
        </div>
      </div>
    </section>
  );
}
