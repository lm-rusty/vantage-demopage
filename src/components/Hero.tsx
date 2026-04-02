import MultiStepForm from './MultiStepForm';
import { ShieldCheck, Star, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-vantage-gray pt-4 pb-8 lg:pt-5 lg:pb-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[50%] h-[50%] bg-vantage-light-blue rounded-full blur-3xl opacity-50" />
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] bg-vantage-yellow rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full text-center lg:text-left animate-slide-up flex flex-col justify-center h-full">
            <h1 className="text-[clamp(1.5rem,7vw,2.25rem)] sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-vantage-dark leading-tight tracking-tight mb-4 whitespace-nowrap sm:whitespace-normal lg:whitespace-nowrap lg:text-center lg:w-full">
              Move Easy. <span className="text-vantage-blue">Live Happy.</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 mb-5 max-w-2xl mx-auto lg:text-center">
              Whether you're moving across state lines or across the country, Vantage Movers connects you with top-rated, FMCSA-authorized carriers for a seamless transition.
            </p>

            <ul className="flex flex-col gap-2.5 mb-6 text-sm md:text-base text-left max-w-2xl mx-auto lg:mx-0">
              <li className="flex items-center gap-3 text-vantage-dark">
                <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                <span className="font-medium">5 Star Customer Rated</span>
              </li>
              <li className="flex items-center gap-3 text-vantage-dark">
                <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                <span className="font-medium">FMCSA Licensed & Insured</span>
              </li>
              <li className="flex items-center gap-3 text-vantage-dark">
                <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                <span className="font-medium">Nationwide Service in All 50 States</span>
              </li>
              <li className="flex items-center gap-3 text-vantage-dark">
                <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                <span className="font-medium">Veterans & Senior Discounts Offered</span>
              </li>
              <li className="flex items-center gap-3 text-vantage-dark">
                <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                <span className="font-medium">No Hidden Fees - Binding Estimates Available</span>
              </li>
            </ul>

            <div className="relative w-full h-64 sm:h-80 lg:h-72 xl:h-80 rounded-2xl overflow-hidden shadow-2xl hidden lg:block border border-gray-100 mt-auto">
              <img 
                src="/packing-boxes.png" 
                alt="Family packing boxes for their move" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Right Content: MultiStep Form */}
          <div className="w-full mx-auto max-w-lg lg:max-w-full animate-fade-in flex flex-col justify-center h-full" style={{ animationDelay: '0.2s' }}>
            <MultiStepForm />
          </div>

        </div>
      </div>
    </section>
  );
}
