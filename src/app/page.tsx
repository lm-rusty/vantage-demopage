import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AutoTransportSection from '@/components/AutoTransportSection';
import NationwideBanner from '@/components/NationwideBanner';
import TrustSection from '@/components/TrustSection';
import LogoCarousel from '@/components/LogoCarousel';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import PromoPopup from '@/components/PromoPopup';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <LogoCarousel />
        <NationwideBanner />
        <ServicesSection />
        <AutoTransportSection />
        <HowItWorks />
        <TrustSection />
      </main>
      <Footer />
      <PromoPopup />
    </>
  );
}
