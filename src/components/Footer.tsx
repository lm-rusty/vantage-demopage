import { Truck } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-vantage-dark text-gray-300 pt-16 pb-8 border-t-4 border-vantage-yellow">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="bg-vantage-blue text-white p-1.5 rounded-lg">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Vantage <span className="text-vantage-blue">Movers</span>
              </span>
            </Link>
            <h3 className="text-white font-bold text-lg mb-2">Trusted Moving Broker</h3>
            <p className="font-mono text-vantage-yellow mb-6">DOT: 4078939 | MC: 1551322</p>
            <p className="text-sm border-l-2 border-vantage-blue pl-4 opacity-80 max-w-md">
              Your dependable partner in securing professional, vetted, and affordable moving carriers nationwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-vantage-yellow transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-vantage-yellow transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-vantage-yellow transition-colors">Broker vs Carrier</Link></li>
              <li><Link href="#" className="hover:text-vantage-yellow transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-vantage-yellow transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Phone: <a href="tel:888-111-2222" className="text-vantage-yellow hover:underline">888-111-2222</a></li>
              <li>Email: info@vantagemovers.com</li>
              <li>Hours: Mon-Fri: 8am - 8pm EST<br/>Sat-Sun: 9am - 5pm EST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-xs leading-relaxed text-gray-400 text-justify">
            <strong className="text-white">Disclosure:</strong> Please note that a properly licensed interstate broker, such as Vantage Movers LLC, is not a motor carrier and will not transport an individual shipper’s household goods, but will coordinate and arrange for the transportation of household goods by an FMCSA authorized motor carrier, whose charges will be determined by its published tariff. All estimated charges and final actual charges will be based upon the carrier’s tariff which is available for inspection from the carrier upon reasonable request. (*) 70% OFF on Tariff Rates.
          </p>
          <div className="mt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Vantage Movers LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
