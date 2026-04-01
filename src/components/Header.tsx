import Link from 'next/link';
import { Phone, ShieldCheck, Truck } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-vantage-gray shadow-sm">
      <div className="container-custom mx-auto h-20 md:h-24 lg:h-[118px] flex items-center justify-between">
        
        {/* Left: Trusted Badge */}
        <div className="hidden lg:flex items-center gap-2.5 text-vantage-dark font-semibold">
          <ShieldCheck className="w-6 h-6 text-vantage-blue" />
          <span className="text-base tracking-tight">Trusted by over 12,000 families</span>
        </div>

        {/* Center: Logo */}
        <Link href="/" className="flex items-center group lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <img 
            src="/Vantage Logo - Copy.png" 
            alt="Vantage Movers" 
            className="h-14 md:h-16 lg:h-[86px] w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Right: CTA Button */}
        <a 
          href="tel:888-111-2222" 
          className="flex items-center gap-2 bg-vantage-yellow hover:bg-vantage-dark-yellow text-vantage-dark font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call us - 888-111-2222</span>
          <span className="sm:hidden">Call Now</span>
        </a>

      </div>
    </header>
  );
}
