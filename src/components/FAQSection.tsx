import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Wie lange dauert eine Installation?',
      answer: 'Die Dauer hängt vom Umfang der Installation ab. Eine einfache Radio-Installation dauert ca. 2-3 Stunden, während komplexe Soundsystem-Umbauten 1-2 Tage in Anspruch nehmen können. Wir informieren Sie vorab genau über den Zeitrahmen.'
    },
    {
      question: 'Welche Marken bieten Sie an?',
      answer: 'Wir arbeiten mit allen führenden Premium-Marken zusammen, darunter Pioneer, Alpine, JBL, Focal, Audison, Helix, und viele mehr. In der Beratung zeigen wir Ihnen die besten Optionen für Ihr Budget und Ihre Anforderungen.'
    },
    {
      question: 'Bleibt die Fahrzeuggarantie erhalten?',
      answer: 'Ja, bei fachgerechter Installation durch unser geschultes Team bleibt die Herstellergarantie Ihres Fahrzeugs erhalten. Wir arbeiten nach Herstellervorgaben und verwenden Original-Adapter.'
    },
    {
      question: 'Kann ich auch gebrauchte Komponenten verbauen lassen?',
      answer: 'Grundsätzlich ja, allerdings empfehlen wir neue Komponenten für optimale Qualität und Garantieansprüche. Gerne beraten wir Sie zu den besten Lösungen in verschiedenen Preisklassen.'
    },
    {
      question: 'Bieten Sie auch Finanzierung an?',
      answer: 'Wir können Ihnen verschiedene Finanzierungsmöglichkeiten vermitteln. Sprechen Sie uns einfach darauf an, wir finden gemeinsam eine passende Lösung.'
    },
    {
      question: 'Welche Fahrzeugtypen statten Sie aus?',
      answer: 'Wir arbeiten mit allen Fahrzeugtypen: PKW, Wohnmobile, Nutzfahrzeuge, Oldtimer und Motorräder. Jedes Fahrzeug erhält eine individuelle Lösung, perfekt abgestimmt auf die Gegebenheiten.'
    },
    {
      question: 'Kann ich bei der Installation zuschauen?',
      answer: 'Selbstverständlich! Wir zeigen Ihnen gerne unsere Arbeit und erklären jeden Schritt. Viele Kunden schätzen den Einblick in die professionelle Installation.'
    },
    {
      question: 'Gibt es eine Garantie auf die Installation?',
      answer: 'Ja, auf unsere Arbeiten geben wir Garantie. Die genauen Konditionen besprechen wir mit Ihnen im Angebot. Zusätzlich profitieren Sie von der Herstellergarantie auf alle verbauten Komponenten.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-16 tracking-tight">
          HÄUFIG GESTELLTE FRAGEN
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black rounded-xl overflow-hidden transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 hover:text-white transition-all group"
              >
                <span className="text-lg font-black text-black group-hover:text-white pr-4 tracking-tight transition-colors">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-black group-hover:text-white flex-shrink-0 transition-all ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 bg-gradient-to-br from-red-600 to-red-800 text-white">
                  <p className="leading-relaxed font-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="tel:09313538565"
            className="inline-block bg-black text-white px-8 py-4 rounded-xl hover:bg-red-600 transition-all font-black tracking-wide"
          >
            JETZT ANRUFEN: 0931-3538565
          </a>
        </div>
      </div>
    </section>
  );
}
