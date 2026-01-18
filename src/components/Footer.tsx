import { Volume2, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from './Router';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/aufkleber_-_eric_volk_(1).ai copy copy.png" alt="Sound-Garage Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 mb-4 max-w-md font-medium">
              Ihr Spezialist für Car HiFi, Navigationssysteme und Alarmanlagen in Veitshöchheim.
              Über 20 Jahre Erfahrung.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-black mb-4 tracking-wide">NAVIGATION</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => {
                  const element = document.getElementById('leistungen');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} className="text-gray-400 hover:text-red-600 transition-colors font-bold">
                  Leistungen
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('prozess');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} className="text-gray-400 hover:text-red-600 transition-colors font-bold">
                  Prozess
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('referenzen');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} className="text-gray-400 hover:text-red-600 transition-colors font-bold">
                  Referenzen
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('kontakt');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} className="text-gray-400 hover:text-red-600 transition-colors font-bold">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-4 tracking-wide">KONTAKT</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm font-medium">
                  Raiffeisenstr. 16<br />97209 Veitshöchheim
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-bold">
                  0931-3538565
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <a href="mailto:info@sound-garage.com" className="text-gray-400 hover:text-red-600 transition-colors text-sm font-bold">
                  info@sound-garage.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-medium">
              © {currentYear} Sound-Garage e.K. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <Link href="/impressum" className="text-gray-400 hover:text-red-600 transition-colors text-sm font-bold">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-400 hover:text-red-600 transition-colors text-sm font-bold">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
