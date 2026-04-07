import type { Metadata } from 'next';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | Vantage Movers',
  description: 'Thank you for your form submission.',
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-lg w-full border-t-4 border-vantage-yellow relative overflow-hidden">
        
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-3xl font-extrabold text-vantage-dark mb-4">
          Thank you for your form submission.
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          A moving coordinator will reach out to you shortly to go over the details of your move and apply any discounts that you do qualify for.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
          <p className="text-sm text-vantage-blue font-semibold uppercase tracking-wider mb-2">
            Need immediate assistance?
          </p>
          <p className="text-gray-700 mb-4">
            To speak with a moving coordinator immediately, please call this number to get your customized quote now.
          </p>
          <a 
            href="tel:8884862499" 
            className="block text-3xl font-extrabold text-vantage-dark hover:text-vantage-blue transition-colors duration-200"
          >
            (888) 486-2499
          </a>
        </div>

        <Link 
          href="tel:8884862499"
          className="w-full bg-vantage-yellow hover:bg-[#e6a800] text-vantage-dark font-extrabold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg md:text-xl"
        >
          <PhoneCall className="w-6 h-6" />
          Call Now for Your Quote
        </Link>
        
        <p className="text-sm text-gray-500 mt-6">
          We look forward to making your move stress-free.
        </p>
      </div>
    </main>
  );
}
