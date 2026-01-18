import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import WhyUsSection from './components/WhyUsSection';
import ProcessSection from './components/ProcessSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import MultiStepForm from './components/MultiStepForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onOpenForm={() => setIsFormOpen(true)} />
      <HeroSection onOpenForm={() => setIsFormOpen(true)} />
      <TrustSection />
      <ServicesSection />
      <GallerySection />
      <WhyUsSection />
      <TargetAudienceSection />
      <ProcessSection />
      <SocialProofSection />
      <FAQSection />
      <CTASection onOpenForm={() => setIsFormOpen(true)} />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
      <MultiStepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;
