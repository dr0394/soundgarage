import { X, Check } from 'lucide-react';

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tight">
              WIR VERSTEHEN<br/>
              IHR PROBLEM.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Viele Fahrzeugbesitzer kämpfen mit mittelmäßiger Audioqualität, veralteten Systemen
              und unsachgemäßen Installationen. Aber das muss nicht sein.
            </p>
          </div>

          <img
            src="https://i.imgur.com/BO5EAVV.jpeg"
            alt="Problem Solution"
            className="w-full h-[300px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-6xl mx-auto">
          <div className="bg-white p-12 rounded-xl border-4 border-black shadow-2xl hover:shadow-red-600/20 transition-all">
            <h3 className="text-3xl font-black text-black mb-8">OHNE UNS</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group hover:translate-x-2 transition-transform">
                <X className="w-6 h-6 text-red-600 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 font-medium">Schlechte Soundqualität trotz teurer Werksanlage</span>
              </li>
              <li className="flex items-start space-x-3 group hover:translate-x-2 transition-transform">
                <X className="w-6 h-6 text-red-600 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 font-medium">Veraltete oder fehlende Navigationssysteme</span>
              </li>
              <li className="flex items-start space-x-3 group hover:translate-x-2 transition-transform">
                <X className="w-6 h-6 text-red-600 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 font-medium">Unsachgemäße Installation führt zu Schäden</span>
              </li>
              <li className="flex items-start space-x-3 group hover:translate-x-2 transition-transform">
                <X className="w-6 h-6 text-red-600 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 font-medium">Unzuverlässiger Diebstahlschutz</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-800 p-12 rounded-xl text-white shadow-2xl hover:shadow-red-900/50 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <h3 className="text-3xl font-black mb-8 relative z-10">MIT SOUND-GARAGE</h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start space-x-3 group hover:translate-x-2 transition-transform">
                <Check className="w-6 h-6 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="font-medium">Kristallklarer Premium-Sound durch Profi-Installation</span>
              </li>
              <li className="flex items-start space-x-3 group hover:translate-x-2 transition-transform">
                <Check className="w-6 h-6 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="font-medium">Moderne Navigationssysteme perfekt integriert</span>
              </li>
              <li className="flex items-start space-x-3 group hover:translate-x-2 transition-transform">
                <Check className="w-6 h-6 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="font-medium">Fachgerechte Installation ohne Fahrzeugschäden</span>
              </li>
              <li className="flex items-start space-x-3 group hover:translate-x-2 transition-transform">
                <Check className="w-6 h-6 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="font-medium">Maßgeschneiderte Lösungen für Ihre Bedürfnisse</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
