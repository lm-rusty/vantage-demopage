"use client";

import React from 'react';

const logos = [
  "/caro1.svg", "/caro2.svg", "/caro3.svg", "/caro4.svg", "/caro5.svg", "/caro6.svg"
];

export default function LogoCarousel() {
  return (
    <section className="bg-vantage-gray py-12 border-y border-gray-200 overflow-hidden">
      <div className="container-custom mx-auto">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Trusted By & Featured In
        </p>
        
        {/* CSS Infinite Ticker */}
        <div className="relative flex overflow-hidden">
          {/* Scroll fade masks */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-vantage-gray to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-vantage-gray to-transparent z-10 pointer-events-none" />
          
          <div className="animate-ticker flex items-center whitespace-nowrap">
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="mx-8 lg:mx-12 shrink-0 select-none transition-opacity">
                <img src={logo} alt="Partner Logo" className="h-10 md:h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .animate-ticker {
              animation: ticker 25s linear infinite;
            }
            @keyframes ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}} />
        </div>
      </div>
    </section>
  );
}
