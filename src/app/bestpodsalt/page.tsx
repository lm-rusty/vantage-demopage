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

export const metadata = {
  title: "Best Container Alternative",
  description: "Vantage Movers connect you with top-rated, FMCSA-authorized carriers for a seamless transition.",
};

export default function BestPodSalt() {
  const phoneDisplay = "(888) 459-2623";
  const phoneLink = "tel:8884592623";

  return (
    <>
      <Header phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
      <main className="flex-1 flex flex-col w-full">
        <Hero 
          phoneDisplay={phoneDisplay} 
          phoneLink={phoneLink} 
          description="Moving across the country doesn’t have to be overwhelming. Instead of managing a container on your own, our moving experts ensures you get into your new home quickly, smoothly and without the stress."
        />
        <LogoCarousel />
        <NationwideBanner />
        <ServicesSection phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
        <AutoTransportSection phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
        <HowItWorks />
        <TrustSection />
      </main>
      <Footer phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
      <PromoPopup phoneDisplay={phoneDisplay} phoneLink={phoneLink} />
    </>
  );
}
