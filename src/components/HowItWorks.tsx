import { ClipboardList, Truck, Home } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-vantage-dark mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your seamless move in three simple steps. We handle the heavy lifting of logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 z-0" />

          <div className="relative z-10 text-center">
            <div className="w-24 h-24 mx-auto bg-vantage-blue text-white rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white">
              <ClipboardList className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-vantage-dark mb-3">1. Get a Custom Quote</h3>
            <p className="text-gray-600">Provide your move details and inventory. We'll leverage our network to fetch you a highly competitive, discounted rate.</p>
          </div>

          <div className="relative z-10 text-center">
            <div className="w-24 h-24 mx-auto bg-vantage-yellow text-vantage-dark rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white">
              <Truck className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-vantage-dark mb-3">2. Carrier Assignment</h3>
            <p className="text-gray-600">We assign an FMCSA-authorized, fully vetted and insured carrier to handle the transportation of your belongings.</p>
          </div>

          <div className="relative z-10 text-center">
            <div className="w-24 h-24 mx-auto bg-vantage-blue text-white rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white">
              <Home className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-vantage-dark mb-3">3. Welcome Home</h3>
            <p className="text-gray-600">Your selected carrier arrives, loads up, and safely transports everything to your final destination.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
