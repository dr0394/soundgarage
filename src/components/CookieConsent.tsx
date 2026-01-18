import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-md">
      <div className="bg-white rounded-xl shadow-2xl border-2 border-slate-200 p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
            <Cookie className="w-5 h-5 text-orange-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-900 mb-2">Cookie-Einstellungen</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten.
              Einige sind notwendig, während andere uns helfen, diese Website zu verbessern.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={rejectAll}
            className="flex-1 px-4 py-2.5 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all font-semibold text-sm"
          >
            Alle ablehnen
          </button>
          <button
            onClick={acceptAll}
            className="flex-1 px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all font-semibold text-sm"
          >
            Alle akzeptieren
          </button>
        </div>

        <a href="/datenschutz" className="block text-center text-xs text-slate-500 hover:text-orange-600 mt-3">
          Mehr Informationen
        </a>
      </div>
    </div>
  );
}
