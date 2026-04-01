"use client";

import { Shield, Star, CheckCircle } from 'lucide-react';

const reviews = [
  { name: "Sarah M.", text: "Vantage Movers made our cross-country relocation so easy! They found us a great carrier and handled all the logistics smoothly." },
  { name: "Sharon W.", text: "I am sooo impressed with the team. They work as a team. NO wasted time. They are very friendly and do a fabulous job making sure all things are packed well. I have already referred you to two of my friends." },
  { name: "Michael T.", text: "Very transparent about being a broker. The carriers they assigned to us were professional, on time, and our belongings arrived perfectly." },
  { name: "Miles P.", text: "Boris and his team were excellent! They were professional, fast and efficient. Thank you for sending Best Moving Service!" },
  { name: "Jessica R.", text: "Customer service is top-notch. They explained the entire process and gave us a highly accurate estimate. Highly recommend!" },
  { name: "Deborah J.", text: "Friendly very efficient. Excellent job would highly recommend thank you very much Vantage Movers!" }
]

export default function TrustSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="container-custom mx-auto">
        
        {/* The Vantage Edge Element */}
        <div className="bg-vantage-dark text-white rounded-3xl p-8 md:p-12 mb-12 text-center lg:text-left flex flex-col lg:flex-row items-center gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden border border-gray-800">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vantage-blue opacity-10 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="flex-1 z-10 relative">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-tight">The Vantage Edge</h3>
            <div className="w-20 h-1 bg-vantage-yellow rounded-full mb-6 mx-auto lg:mx-0"></div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              We leverage our high-volume partnerships to secure exclusive, volume-based rates on linehaul, packing, and additional services with premium, FMCSA-licensed carriers. Our team handles the heavy lifting of sourcing, vetting, and coordinating your move, while giving you direct access to a dedicated customer service team to ensure a smooth, seamless transition from start to finish.
            </p>
          </div>
          <div className="hidden lg:flex z-10 w-48 h-48 bg-white/5 rounded-full items-center justify-center border border-white/10 shrink-0 shadow-inner">
            <Shield className="w-24 h-24 text-vantage-yellow" />
          </div>
        </div>

        {/* BBB Reviews */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="flex text-yellow-500">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-vantage-dark mb-4">Loved by our Customers</h2>
          <p className="text-lg text-gray-600">Real feedback from verified families we've helped move.</p>
        </div>

        <div className="relative overflow-hidden w-full pb-8">
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-reviews gap-6 w-max items-stretch">
            {[...reviews, ...reviews, ...reviews].map((review, i) => (
              <div key={i} className="w-[320px] md:w-[380px] shrink-0 bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow whitespace-normal flex flex-col">
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(j => <Star key={`star-${i}-${j}`} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6 flex-1">"{review.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 bg-vantage-blue text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-vantage-dark">{review.name}</p>
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> BBB Verified Customer
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .animate-reviews {
              animation: slideReviews 45s linear infinite;
            }
            .animate-reviews:hover {
              animation-play-state: paused;
            }
            @keyframes slideReviews {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-33.333% - 0.5rem)); }
            }
          `}} />
        </div>

      </div>
    </section>
  );
}
