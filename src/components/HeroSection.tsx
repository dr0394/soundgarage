import { Check, Star, Phone } from 'lucide-react';

interface HeroSectionProps {
  onOpenForm: () => void;
}

export default function HeroSection({ onOpenForm }: HeroSectionProps) {
  return (
    <section className="pt-20 min-h-screen bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 relative z-10">
            <div className="inline-block">
              <span className="bg-red-600 text-white px-4 py-2 text-xs font-black tracking-wider">
                #1 CAR AUDIO SPEZIALIST IN VEITSHÖCHHEIM
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter">
              IHR FAHRZEUG<br />
              VERDIENT MEHR
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Als führender Car-HiFi-Spezialist in Unterfranken realisieren wir seit Jahrzehnten hochwertige und individuelle Fahrzeuglösungen – von Soundsystemen über Apple CarPlay & Android Auto bis hin zu Alarmanlagen und Reisemobiltechnik.
            </p>

            <button
              onClick={onOpenForm}
              className="bg-red-600 text-white px-8 py-4 rounded-2xl hover:bg-red-700 transition-all font-black text-lg tracking-wide inline-block shadow-2xl hover:shadow-red-600/50 hover:scale-105 hover:-translate-y-1"
            >
              JETZT BERATUNGSTERMIN VEREINBAREN
            </button>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="relative group">
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-red-600 to-red-800 z-0 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 rounded-3xl"></div>
              <img
                src="https://i.imgur.com/mhXtPeP.jpeg"
                alt="Premium Car Audio Installation"
                className="relative z-10 w-full h-[500px] object-cover shadow-2xl transition-all duration-500 group-hover:scale-[1.02] rounded-3xl"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
            </div>

            <div className="flex items-center justify-center space-x-4 group/item hover:scale-105 transition-all duration-300 cursor-pointer mt-8">
              <svg viewBox="0 0 24 24" className="w-10 h-10 animate-float">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform" style={{ animationDelay: `${star * 100}ms` }} />
                  ))}
                </div>
                <p className="text-sm text-gray-300 font-bold">50+ Google Bewertungen</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
