import { Heart, Users, TrendingUp } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mt-48 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full -mr-48 -mb-48 animate-float"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl mb-6 shadow-2xl">
            <Heart className="w-10 h-10 text-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
            UNSERE PHILOSOPHIE
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-bold">
              Bei uns steht der Kunde im Mittelpunkt: ehrliche Beratung, transparente Lösungen und nachhaltige Zufriedenheit auf Vertrauensbasis.
            </p>
            <p className="text-lg text-white/90 leading-relaxed font-medium">
              Unser Anspruch ist es, nicht nur Technik zu verbauen, sondern langfristig zu begeistern – sodass Weiterempfehlungen und positive Bewertungen das Ergebnis unserer Arbeit sind.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all hover:scale-105 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 tracking-tight">EHRLICHKEIT</h3>
            <p className="text-white/90 leading-relaxed font-medium">
              Keine Verkaufstricks, keine falschen Versprechungen. Nur ehrliche Beratung und realistische Lösungen.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all hover:scale-105 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 tracking-tight">VERTRAUEN</h3>
            <p className="text-white/90 leading-relaxed font-medium">
              Langfristige Kundenbeziehungen statt schneller Verkäufe. Ihr Vertrauen ist unser höchstes Gut.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all hover:scale-105 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 tracking-tight">QUALITÄT</h3>
            <p className="text-white/90 leading-relaxed font-medium">
              Höchste Qualitätsstandards bei Produkten und Installation. Für Zufriedenheit, die Jahre überdauert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
