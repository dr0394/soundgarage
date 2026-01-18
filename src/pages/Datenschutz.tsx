import { ArrowLeft, Volume2 } from 'lucide-react';
import { Link } from '../components/Router';

export default function Datenschutz() {
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

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="text-slate-700 mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz
              entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="text-slate-700 mb-2">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            </p>
            <p className="text-slate-700 mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle"
              in dieser Datenschutzerklärung entnehmen.
            </p>

            <p className="text-slate-700 mb-2">
              <strong>Wie erfassen wir Ihre Daten?</strong>
            </p>
            <p className="text-slate-700 mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
              (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <p className="text-slate-700 mb-2">
              <strong>Wofür nutzen wir Ihre Daten?</strong>
            </p>
            <p className="text-slate-700 mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens
              verwendet werden, sofern Sie dem zugestimmt haben.
            </p>

            <p className="text-slate-700 mb-2">
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
            </p>
            <p className="text-slate-700 mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
              Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
              können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Hosting</h2>
            <p className="text-slate-700 mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Externes Hosting</h3>
            <p className="text-slate-700 mb-4">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster
              gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="text-slate-700 mb-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und
              im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Datenschutz</h3>
            <p className="text-slate-700 mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
              den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-slate-700 mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-slate-700 mb-2">Sound-Garage e.K.</p>
            <p className="text-slate-700 mb-2">Raiffeisenstr. 16</p>
            <p className="text-slate-700 mb-4">97209 Veitshöchheim</p>
            <p className="text-slate-700 mb-2">Telefon: 0931-3538565</p>
            <p className="text-slate-700 mb-4">E-Mail: info@sound-garage.com</p>

            <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Speicherdauer</h3>
            <p className="text-slate-700 mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns,
              bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung
              widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-slate-700 mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
              Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-slate-700 mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol
              in Ihrer Browserzeile.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Kontaktformular</h3>
            <p className="text-slate-700 mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="text-slate-700 mb-4">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
              (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Soziale Medien</h2>

            <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp</h3>
            <p className="text-slate-700 mb-4">
              Wir bieten auf unserer Website die Möglichkeit, direkt per WhatsApp mit uns Kontakt aufzunehmen. Wenn Sie auf den WhatsApp-Button klicken,
              wird WhatsApp auf Ihrem Gerät geöffnet. Dabei werden Daten an WhatsApp übermittelt. Wir haben keinen Einfluss auf den Umfang der durch WhatsApp erhobenen Daten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Plugins und Tools</h2>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Google Maps</h3>
            <p className="text-slate-700 mb-4">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server
              von Google in den USA übertragen und dort gespeichert.
            </p>
            <p className="text-slate-700 mb-4">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der
              von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Ihre Rechte</h2>
            <p className="text-slate-700 mb-4">
              Sie haben das Recht:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
              <li>gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
            </ul>
          </section>

          <p className="text-sm text-slate-500 mt-12">
            Stand: Januar 2026
          </p>
        </div>
      </div>
    </div>
  );
}
