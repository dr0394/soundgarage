import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onOpenForm: () => void;
}

export default function CTASection({ onOpenForm }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mt-48 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full -mr-48 -mb-48 animate-float"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-lg animate-fade-in-up">
            BEREIT FÜR IHR<br/>
            PERFEKTES SOUNDSYSTEM?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto font-medium animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Vereinbaren Sie jetzt Ihren kostenlosen Beratungstermin
          </p>

          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <button
              onClick={onOpenForm}
              className="group bg-black text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 font-black text-lg tracking-wide flex items-center space-x-2 shadow-2xl hover:shadow-white/20 hover:scale-110 hover:-translate-y-1"
            >
              <span>KOSTENLOSE BERATUNG</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
