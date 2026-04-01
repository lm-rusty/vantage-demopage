import React from 'react';
import { Phone } from 'lucide-react';

export default function AutoTransportSection() {
  return (
    <section className="bg-vantage-gray py-8 lg:py-12 relative border-t border-gray-100">
      <div className="container-custom mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4] w-full group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="/autotransport.jpg" 
                alt="Auto Transport Car Hauler" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out absolute inset-0"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-vantage-dark tracking-tight mb-6">
              Auto Transport
            </h2>
            <div className="w-24 h-1.5 bg-vantage-blue rounded-full mb-8"></div>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
              We help coordinate reliable vehicle shipping with trusted carriers, making it easy to transport cars safely and efficiently. Whether you need an open carrier for a standard move or enclosed transport for a classic or luxury vehicle, we connect you with fully vetted professionals who treat your car like their own.
            </p>

            {/* CTA */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50">
              <p className="text-xl md:text-2xl font-bold text-vantage-dark mb-4 text-center">
                Call Now for a Free Quote
              </p>
              <div className="flex justify-center">
                <a 
                  href="tel:888-486-2499" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-vantage-dark bg-vantage-yellow hover:bg-yellow-400 rounded-full shadow-[0_4px_20px_rgba(250,204,21,0.4)] hover:shadow-[0_4px_30px_rgba(250,204,21,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="w-6 h-6" />
                  (888) 486-2499
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
