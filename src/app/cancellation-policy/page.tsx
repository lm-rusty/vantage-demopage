import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cancellation Policy | Vantage Movers',
};

export default function CancellationPolicy() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-white py-16 md:py-24">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-vantage-blue mb-8">Cancellation Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              It has been disclosed that the fee collected by Vantage Movers is a broker fee. This is our fee for arranging a fully licensed/insured motor carrier to move/handle your household goods and possessions. The carrier charges will be paid C.O.D (unless arranged in advance to pay by credit or debit card) by you, the customer, to the independently owned carrier in two payments. The first half is due upon pickup and second half due upon delivery of your household goods at the intended destination address. Vantage Movers does not participate in the collection of carrier payments, nor do we share in the proceeds of carrier charges.
            </p>
            
            <p>
              You are aware that these are separate transactions between you and the carrier that is a different business entity. Since our fee for service begins immediately, you understand and agree to our broker fee being non-refundable with no exceptions 72 hours after signing your bill of lading. In accordance with the U.S. Code 49 CFR § 375.505(h), an estimate/order may not be canceled, and deposits are not refundable outside of the three-day window, or if you are within five (5) days of your first scheduled pickup day, or after the mover has begun the physical moving services, including but not limited to: packing, loading, storage, transportation to and from the pick-up or delivery address, etc. Services may not be canceled after the customer`s property has been loaded on the truck. All cancellation requests must be sent to support@vantagehomemovers.com.
            </p>
            
            <p className="font-semibold text-vantage-dark mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
              Call <a href="tel:9548396936" className="text-vantage-blue hover:underline">(954) 839-6936</a> for more information
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
