import { Star } from 'lucide-react';

export default function SocialProofSection() {
  const testimonials = [
    {
      name: 'Michael Schneider',
      date: 'vor 2 Wochen',
      rating: 5,
      text: 'Hervorragende Beratung und Top-Installation! Mein Wohnmobil hat jetzt endlich ein vernünftiges Soundsystem. Das Team hat sich viel Zeit genommen und alles perfekt verbaut. Absolut empfehlenswert!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Wagner',
      date: 'vor 3 Wochen',
      rating: 5,
      text: 'Ich bin begeistert! Die Jungs wissen wirklich was sie tun. Mein alter Audi klingt jetzt wie ein Konzertsaal. Preis-Leistung absolut fair und die Arbeit ist makellos. Danke!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Thomas Becker',
      date: 'vor 1 Monat',
      rating: 5,
      text: 'Kompetente Beratung und saubere Arbeit. Die Alarmanlage für meinen Transporter wurde professionell installiert. Man merkt die jahrelange Erfahrung. Jederzeit wieder!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Lisa Hoffmann',
      date: 'vor 1 Monat',
      rating: 5,
      text: 'Super freundliches Team! Die Navigation in meinem neuen BMW wurde perfekt integriert - sieht aus wie ab Werk. Sehr zufrieden mit dem Ergebnis und dem Service.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Robert Klein',
      date: 'vor 2 Monaten',
      rating: 5,
      text: 'Endlich eine Werkstatt die hält was sie verspricht! Transparente Preise, pünktliche Fertigstellung und das Ergebnis übertrifft meine Erwartungen. Klare Empfehlung!',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Julia Richter',
      date: 'vor 2 Monaten',
      rating: 5,
      text: 'Beste Car-HiFi-Werkstatt in der Region! Ich hatte schon bei mehreren Fahrzeugen hier meine Soundsysteme nachrüsten lassen. Immer top Qualität und faire Preise.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="referenzen" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-12 mb-16">
          <div className="flex items-center space-x-4 mb-4">
            <svg viewBox="0 0 24 24" className="w-12 h-12">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            DAS SAGEN UNSERE KUNDEN
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 hover:bg-red-600 group transition-all"
            >
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-black text-black group-hover:text-white tracking-tight">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 group-hover:text-white/80 font-medium">{testimonial.date}</p>
                </div>
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 group-hover:text-white leading-relaxed font-medium">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=sound-garage+veitshöchheim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 hover:bg-red-600 hover:text-white transition-all font-black tracking-wide"
          >
            MEHR BEWERTUNGEN AUF GOOGLE
          </a>
        </div>
      </div>
    </section>
  );
}
