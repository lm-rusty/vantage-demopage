import React from 'react';
import { MapPin } from 'lucide-react';

export default function NationwideBanner() {
  return (
    <section className="w-full bg-vantage-blue py-8 relative overflow-hidden text-center text-white">
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      <div className="container-custom mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="bg-white/20 p-3 rounded-full hidden sm:block">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <p className="text-lg md:text-xl font-semibold max-w-3xl leading-snug">
              We proudly provide nationwide moving services across all <span className="text-vantage-yellow underline decoration-2 underline-offset-4">50 states</span>, including Alaska and Hawaii.
            </p>
        </div>
      </div>
    </section>
  );
}
