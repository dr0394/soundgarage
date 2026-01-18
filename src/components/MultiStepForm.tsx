import { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Send } from 'lucide-react';

interface MultiStepFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MultiStepForm({ isOpen, onClose }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleType: '',
    service: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!isOpen) return null;

  const totalSteps = 4;

  const handleSubmit = () => {
    const whatsappMessage = `Neue Anfrage über Multi-Step-Form:%0A%0A` +
      `Fahrzeugtyp: ${formData.vehicleType}%0A` +
      `Gewünschte Leistung: ${formData.service}%0A` +
      `Budget: ${formData.budget}%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Telefon: ${formData.phone}%0A%0A` +
      `Nachricht:%0A${formData.message || 'Keine weiteren Angaben'}`;

    window.open(`https://wa.me/499313538565?text=${whatsappMessage}`, '_blank');

    const emailBody = `Neue Anfrage über Multi-Step-Form:%0A%0A` +
      `Fahrzeugtyp: ${formData.vehicleType}%0A` +
      `Gewünschte Leistung: ${formData.service}%0A` +
      `Budget: ${formData.budget}%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Telefon: ${formData.phone}%0A%0A` +
      `Nachricht:%0A${formData.message || 'Keine weiteren Angaben'}`;

    window.location.href = `mailto:info@sound-garage.com?subject=Neue Anfrage über Website&body=${emailBody}`;

    onClose();
    setStep(1);
    setFormData({
      vehicleType: '',
      service: '',
      budget: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Kostenlose Beratung</h2>
            <p className="text-sm text-slate-600 mt-1">Schritt {step} von {totalSteps}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className={`flex-1 h-2 rounded-full mx-1 transition-all ${
                    num <= step ? 'bg-red-600' : 'bg-slate-200'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Welchen Fahrzeugtyp haben Sie?</h3>
              <div className="grid grid-cols-2 gap-4">
                {['PKW', 'Wohnmobil', 'Nutzfahrzeug', 'Motorrad'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFormData({ ...formData, vehicleType: type })}
                    className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                      formData.vehicleType === type
                        ? 'border-red-600 bg-red-50 text-red-700'
                        : 'border-slate-200 hover:border-red-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Welche Leistung interessiert Sie?</h3>
              <div className="space-y-3">
                {[
                  'Car HiFi / Soundsystem',
                  'Navigationssystem',
                  'Alarmanlage',
                  'Komplett-Ausstattung',
                  'Beratung / Ich bin noch unsicher'
                ].map((service) => (
                  <button
                    key={service}
                    onClick={() => setFormData({ ...formData, service })}
                    className={`w-full p-4 rounded-xl border-2 font-semibold text-left transition-all ${
                      formData.service === service
                        ? 'border-red-600 bg-red-50 text-red-700'
                        : 'border-slate-200 hover:border-red-300'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Welches Budget haben Sie eingeplant?</h3>
              <div className="space-y-3">
                {[
                  'Bis 500 €',
                  '500 - 1.000 €',
                  '1.000 - 2.500 €',
                  '2.500 - 5.000 €',
                  'Über 5.000 €',
                  'Noch keine Vorstellung'
                ].map((budget) => (
                  <button
                    key={budget}
                    onClick={() => setFormData({ ...formData, budget })}
                    className={`w-full p-4 rounded-xl border-2 font-semibold text-left transition-all ${
                      formData.budget === budget
                        ? 'border-red-600 bg-red-50 text-red-700'
                        : 'border-slate-200 hover:border-red-300'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ihre Kontaktdaten</h3>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-600 focus:outline-none"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">E-Mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-600 focus:outline-none"
                  placeholder="ihre@email.de"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Telefon *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-600 focus:outline-none"
                  placeholder="Ihre Telefonnummer"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Zusätzliche Informationen (optional)</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-600 focus:outline-none resize-none"
                  placeholder="Gibt es noch etwas, das wir wissen sollten?"
                ></textarea>
              </div>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-6 flex items-center justify-between rounded-b-2xl">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Zurück</span>
          </button>

          {step < totalSteps ? (
            <button
              onClick={() => {
                if (step === 1 && !formData.vehicleType) return;
                if (step === 2 && !formData.service) return;
                if (step === 3 && !formData.budget) return;
                setStep(step + 1);
              }}
              disabled={
                (step === 1 && !formData.vehicleType) ||
                (step === 2 && !formData.service) ||
                (step === 3 && !formData.budget)
              }
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-red-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-all"
            >
              <span>Weiter</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email || !formData.phone}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-red-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-all"
            >
              <span>Anfrage senden</span>
              <Send className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
