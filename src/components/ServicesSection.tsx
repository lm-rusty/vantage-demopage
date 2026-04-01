import React from 'react';
import { Phone } from 'lucide-react';

const services = [
  {
    title: 'Long Distance Moving',
    description: 'Seamless coast-to-coast relocation services. Our logistics network ensures a smooth transition wherever you go.',
    image: '/packing.jpg',
  },
  {
    title: 'Office Moves',
    description: 'Efficient office relocations designed to minimize downtime. We safely move your specialized equipment and office furniture.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Military Moves',
    description: 'Dedicated relocation services for our armed forces. Handling every detail with precision so you can focus on your mission.',
    image: '/Truck Loaded.jpeg',
  },
  {
    title: 'Packing and Storage Options',
    description: 'Full and partial packing solutions plus secure, climate-controlled storage facilities for short-term or long-term needs.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-8 lg:py-12 relative overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-vantage-dark tracking-tight mb-6 relative inline-block">
            We Make Moving Effortless
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-vantage-yellow rounded-full"></div>
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl mt-8 leading-relaxed">
            From packing and transport to storage and everything in between, we handle every detail. Our network of moving experts ensures you get into your new home or office quickly, smoothly, and without the stress.
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group w-full aspect-[4/3] lg:aspect-video">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out absolute inset-0"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vantage-blue text-white font-bold text-xl shadow-lg shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-vantage-dark">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Area */}
        <div className="mt-16 w-full max-w-2xl mx-auto bg-vantage-blue py-8 px-6 lg:py-10 lg:px-8 rounded-3xl relative overflow-hidden text-center text-white shadow-2xl border border-white/10">
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center justify-center gap-5 lg:gap-6">
            <p className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Call Now for a Free Quote
            </p>
            <a
              href="tel:888-111-2222" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base md:text-lg font-bold text-vantage-dark bg-vantage-yellow hover:bg-yellow-400 rounded-full shadow-[0_4px_20px_rgba(250,204,21,0.4)] hover:shadow-[0_4px_30px_rgba(250,204,21,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              888-111-2222
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
