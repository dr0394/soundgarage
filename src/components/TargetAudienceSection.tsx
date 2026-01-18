import { Car, Truck, Ship, User } from 'lucide-react';

export default function TargetAudienceSection() {
  const audiences = [
    {
      icon: Car,
      title: 'PKW-Besitzer',
      description: 'Fehlende Ausstattung, defekte Technik oder Wunsch nach besserem Klang und Bedienkomfort'
    },
    {
      icon: Truck,
      title: 'Wohnmobil & Nutzfahrzeug',
      description: 'Individuelle Lösungen für Reisemobile, Transporter und Nutzfahrzeuge'
    },
    {
      icon: Ship,
      title: 'Boot-Besitzer',
      description: 'Spezielle Marine-Audio-Lösungen für Boote und Yachten'
    },
    {
      icon: User,
      title: 'Qualitätsbewusste',
      description: 'Kunden mit Anspruch an persönliche Beratung und professionelle Umsetzung'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            FÜR WEN WIR ARBEITEN
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Unser idealer Kunde ist Fahrzeugbesitzer (Pkw, Wohnmobil, Nutzfahrzeug oder Boot), dem wichtige Ausstattungsmerkmale fehlen, ein technischer Defekt vorliegt oder der mit Klang, Technik oder Bedienkomfort unzufrieden ist. Er legt Wert auf Qualität, persönliche Beratung und eine saubere, professionelle Umsetzung und sucht keine Massenlösung, sondern ein individuell abgestimmtes Konzept.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border-4 border-black hover:bg-gradient-to-br hover:from-black hover:to-gray-800 hover:text-white group transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl group-hover:bg-white mb-6 shadow-lg group-hover:scale-110 transition-all duration-500">
                <audience.icon className="w-8 h-8 text-white group-hover:text-red-600 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-black group-hover:text-white mb-3 tracking-tight transition-colors duration-300">{audience.title}</h3>
              <p className="text-gray-700 group-hover:text-gray-300 leading-relaxed font-medium transition-colors duration-300">{audience.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-3xl text-center shadow-2xl">
          <p className="text-xl md:text-2xl text-white font-bold leading-relaxed">
            Sie suchen keine Massenlösung, sondern ein individuell abgestimmtes Konzept? Dann sind Sie bei uns richtig.
          </p>
        </div>
      </div>
    </section>
  );
}
