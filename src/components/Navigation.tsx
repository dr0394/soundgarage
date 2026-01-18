import { useState, useEffect } from 'react';
import { Menu, X, Volume2 } from 'lucide-react';

interface NavigationProps {
  onOpenForm: () => void;
}

export default function Navigation({ onOpenForm }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/aufkleber_-_eric_volk_(1).ai copy copy.png" alt="Sound-Garage Logo" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('leistungen')}
              className="text-black hover:text-red-600 transition-colors font-bold text-sm uppercase tracking-wide"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('prozess')}
              className="text-black hover:text-red-600 transition-colors font-bold text-sm uppercase tracking-wide"
            >
              Prozess
            </button>
            <button
              onClick={() => scrollToSection('referenzen')}
              className="text-black hover:text-red-600 transition-colors font-bold text-sm uppercase tracking-wide"
            >
              Referenzen
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-black hover:text-red-600 transition-colors font-bold text-sm uppercase tracking-wide"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-black hover:text-red-600 transition-colors font-bold text-sm uppercase tracking-wide"
            >
              Kontakt
            </button>
            <button
              onClick={onOpenForm}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all font-black text-sm tracking-wide shadow-lg hover:shadow-xl"
            >
              JETZT ANFRAGEN
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('leistungen')} className="text-black hover:text-red-600 transition-colors font-bold text-sm text-left">
                Leistungen
              </button>
              <button onClick={() => scrollToSection('prozess')} className="text-black hover:text-red-600 transition-colors font-bold text-sm text-left">
                Prozess
              </button>
              <button onClick={() => scrollToSection('referenzen')} className="text-black hover:text-red-600 transition-colors font-bold text-sm text-left">
                Referenzen
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-black hover:text-red-600 transition-colors font-bold text-sm text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="text-black hover:text-red-600 transition-colors font-bold text-sm text-left">
                Kontakt
              </button>
              <button
                onClick={onOpenForm}
                className="bg-black text-white px-6 py-3 hover:bg-red-600 transition-all font-black text-sm tracking-wide text-left"
              >
                JETZT ANFRAGEN
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
