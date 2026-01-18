import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Wie läuft die Beratung ab?',
      answer: 'Wir nehmen uns Zeit für Sie und Ihre Bedürfnisse. In einem persönlichen Gespräch analysieren wir Ihr Fahrzeug, besprechen Ihre Wünsche und erarbeiten gemeinsam eine passende Lösung. Dabei zeigen wir Ihnen transparent alle Möglichkeiten und Kosten auf – ohne Verkaufsdruck.'
    },
    {
      question: 'Wie lange dauert eine Installation?',
      answer: 'Je nach Umfang: Einfache Radio-Installation 2-3 Stunden, Apple CarPlay/Android Auto Nachrüstung 3-5 Stunden, komplexe Soundsystem-Umbauten 1-2 Tage. Wir informieren Sie vorab genau über den Zeitrahmen und halten vereinbarte Termine zuverlässig ein.'
    },
    {
      question: 'Welche Fahrzeugtypen bearbeiten Sie?',
      answer: 'Wir arbeiten mit allen Fahrzeugtypen: PKW, Wohnmobile, Nutzfahrzeuge, Boote und Oldtimer. Jedes Fahrzeug erhält eine individuelle Lösung, perfekt abgestimmt auf die technischen Gegebenheiten und Ihre Anforderungen.'
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
          <p className="text-gray-700 mb-6 font-bold text-lg">
            Noch Fragen? Wir beraten Sie gerne persönlich!
          </p>
          <a
            href="tel:09313538565"
            className="inline-block bg-black text-white px-8 py-4 rounded-xl hover:bg-red-600 transition-all font-black tracking-wide shadow-xl hover:shadow-2xl hover:scale-105"
          >
            JETZT ANRUFEN: 0931-3538565
          </a>
        </div>
      </div>
    </section>
  );
}
