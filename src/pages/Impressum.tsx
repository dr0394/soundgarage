import { ArrowLeft, Volume2 } from 'lucide-react';
import { Link } from '../components/Router';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-slate-800 to-slate-600 p-2.5 rounded-lg">
                <Volume2 className="w-7 h-7 text-orange-500" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800">Sound-Garage</div>
                <div className="text-xs text-slate-600">Premium Car Audio</div>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-8 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück zur Startseite</span>
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Impressum</h1>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-slate-700 mb-2">Sound-Garage e.K.</p>
            <p className="text-slate-700 mb-2">Raiffeisenstr. 16</p>
            <p className="text-slate-700 mb-4">97209 Veitshöchheim</p>

            <p className="text-slate-700 mb-2">
              <strong>Vertreten durch:</strong><br />
              Inhaber: Eric Volk
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Kontakt</h2>
            <p className="text-slate-700 mb-2">
              <strong>Telefon:</strong> 0931-3538565
            </p>
            <p className="text-slate-700 mb-2">
              <strong>E-Mail:</strong> info@sound-garage.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Registereintrag</h2>
            <p className="text-slate-700 mb-2">
              <strong>Eintragung im Handelsregister</strong><br />
              Registergericht: [Amtsgericht]<br />
              Registernummer: [HRA-Nummer]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Umsatzsteuer-ID</h2>
            <p className="text-slate-700">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE[Umsatzsteuer-ID]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="text-slate-700">
              <strong>Berufsbezeichnung:</strong> Kfz-Elektronik / Car Audio Spezialist<br />
              <strong>Zuständige Kammer:</strong> Handwerkskammer Unterfranken<br />
              <strong>Verliehen in:</strong> Deutschland
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">EU-Streitschlichtung</h2>
            <p className="text-slate-700">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="text-slate-700">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Haftung für Inhalte</h2>
            <p className="text-slate-700 mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-slate-700">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Haftung für Links</h2>
            <p className="text-slate-700 mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="text-slate-700">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
              der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Urheberrecht</h2>
            <p className="text-slate-700 mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="text-slate-700">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite
              nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
              Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <p className="text-sm text-slate-500 mt-12">
            Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">e-recht24.de</a>
          </p>
        </div>
      </div>
    </div>
  );
}
