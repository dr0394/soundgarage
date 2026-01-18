import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `Neue Anfrage von ${formData.name}%0A%0AEmail: ${formData.email}%0ATelefon: ${formData.phone}%0A%0ANachricht:%0A${formData.message}`;
    window.open(`https://wa.me/499313538565?text=${whatsappMessage}`, '_blank');

    const emailBody = `Neue Kontaktanfrage%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ATelefon: ${formData.phone}%0A%0ANachricht:%0A${formData.message}`;
    window.location.href = `mailto:info@sound-garage.com?subject=Kontaktanfrage über Website&body=${emailBody}`;

    setSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white via-gray-50 to-white p-12 mb-16 rounded-xl shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            KONTAKT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-8 mb-8 rounded-xl shadow-2xl hover:shadow-red-600/20 transition-all">
              <h3 className="text-2xl font-black text-black mb-6 tracking-tight">KONTAKTINFORMATIONEN</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-black mb-1">ADRESSE</h4>
                    <p className="text-gray-700 font-medium">Raiffeisenstr. 16</p>
                    <p className="text-gray-700 font-medium">97209 Veitshöchheim</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-black mb-1">TELEFON</h4>
                    <p className="text-gray-700 font-bold">
                      0931-3538565
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-black mb-1">E-MAIL</h4>
                    <a href="mailto:info@sound-garage.com" className="text-gray-700 hover:text-red-600 font-bold">
                      info@sound-garage.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-black mb-1">ÖFFNUNGSZEITEN</h4>
                    <p className="text-gray-700 font-medium">Mo–Fr: 08:00–17:00 Uhr</p>
                    <p className="text-gray-700 font-medium">Sa: nach Vereinbarung</p>
                    <p className="text-gray-700 font-medium">So: geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden h-[400px] rounded-xl shadow-2xl hover:shadow-red-600/20 transition-all">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.8!2d9.878!3d49.833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a28f5e7c8b8b8b%3A0x1!2sRaiffeisenstra%C3%9Fe%2016%2C%2097209%20Veitsh%C3%B6chheim!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-red-600/20 transition-all">
              <h3 className="text-2xl font-black text-black mb-6 tracking-tight">SCHREIBEN SIE UNS</h3>

              {submitted ? (
                <div className="bg-red-600 text-white p-6 text-center rounded-xl">
                  <p className="font-black text-lg">VIELEN DANK FÜR IHRE ANFRAGE!</p>
                  <p className="mt-2 font-medium">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-black text-black mb-2 tracking-wide">
                      NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black focus:border-red-600 focus:outline-none transition-colors font-medium"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-black text-black mb-2 tracking-wide">
                      E-MAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black focus:border-red-600 focus:outline-none transition-colors font-medium"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-black text-black mb-2 tracking-wide">
                      TELEFON
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black focus:border-red-600 focus:outline-none transition-colors font-medium"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-black text-black mb-2 tracking-wide">
                      NACHRICHT *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black focus:border-red-600 focus:outline-none transition-colors resize-none font-medium"
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-black transition-all font-black text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'WIRD GESENDET...' : 'NACHRICHT SENDEN'}
                  </button>

                  <p className="text-sm text-gray-600 text-center font-medium">
                    Mit dem Absenden akzeptieren Sie unsere <a href="/datenschutz" className="text-red-600 hover:underline font-bold">Datenschutzerklärung</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
