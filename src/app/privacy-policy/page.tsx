import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vantage Movers',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-white py-16 md:py-24">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-vantage-blue mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8 italic">
              This privacy notice for Vantage Moving, LLC (doing business as Vantage Quotes) (“we,” “us,” or “our”), describes how and why we might collect, store, use, and/or share (“process”) your information when you use our services (“Services”), such as when you visit our website at https://vantagehomemovers.com, or any website of ours that links to this privacy notice or engage with us in other related ways, including any sales, marketing, or events.
            </p>

            <p>
              <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:support@vantagehomemovers.com" className="text-vantage-yellow hover:underline">support@vantagehomemovers.com</a>.
            </p>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">SUMMARY OF KEY POINTS</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</li>
              <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
              <li><strong>Do we receive any information from third parties?</strong> We may receive information from public databases, marketing partners, social media platforms, and other outside sources.</li>
              <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</li>
              <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</li>
              <li><strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</li>
              <li><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</li>
              <li><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by emailing support@vantagehomemovers.com, or by contacting us at (877) 807-1248 Option 2. We will consider and act upon any request in accordance with applicable data protection laws.</li>
            </ul>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
            <h3 className="text-xl font-bold text-vantage-blue mt-6">Personal information you disclose to us</h3>
            <p><em>In Short: We collect personal information that you provide to us.</em></p>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
            <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include: names, phone numbers, email addresses, contact preferences, and zip codes.</p>
            <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>

            <h3 className="text-xl font-bold text-vantage-blue mt-6">Information automatically collected</h3>
            <p><em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></p>
            <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Services.</p>
            
            <p className="font-bold mt-4">The information we collect includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services.</li>
              <li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services.</li>
              <li><strong>Location Data.</strong> We collect location data such as information about your device’s location, which can be either precise or imprecise.</li>
            </ul>

            <h3 className="text-xl font-bold text-vantage-blue mt-6">Information collected from other sources</h3>
            <p><em>In Short: We may collect limited data from public databases, marketing partners, and other outside sources.</em></p>
            <p>In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, and from other third parties.</p>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
            <p><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To deliver and facilitate delivery of services to the user.</li>
              <li>To respond to user inquiries/offer support to users.</li>
              <li>To send administrative information to you.</li>
              <li>To enable user-to-user communications.</li>
              <li>To request feedback.</li>
              <li>To deliver targeted advertising to you.</li>
              <li>To protect our Services.</li>
              <li>To evaluate and improve our Services, products, marketing, and your experience.</li>
              <li>To identify usage trends.</li>
              <li>To determine the effectiveness of our marketing and promotional campaigns.</li>
              <li>To comply with our legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
            <p><em>In Short: We may share information in specific situations described in this section and/or with the following third parties.</em></p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API).</li>
              <li><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice.</li>
              <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
            <p><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em></p>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.</p>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <p><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
            <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
            <p><em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em></p>
            <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services.</p>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p><em>In Short: You may review, change, or terminate your account at any time.</em></p>
            <p>Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time.</p>
            <p>Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies.</p>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">9. CONTROLS FOR DO-NOT-TRACK FEATURES?</h2>
            <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. We do not currently respond to DNT browser signals.</p>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">10. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
            <p><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible.</p>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            <p>If you have questions or comments about this notice, you may email us at <a href="mailto:support@vantagehomemovers.com" className="text-vantage-blue hover:underline">support@vantagehomemovers.com</a> or contact us by post at:</p>
            <p className="bg-gray-50 p-4 rounded-lg mt-4 font-mono text-sm">
              Vantage Moving, LLC<br/>
              1880 N Congress Ave, Boynton Beach, FL 33426
            </p>

            <h2 className="text-2xl font-bold text-vantage-dark mt-12 mb-4">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
            <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please call <a href="tel:8778071248" className="text-vantage-yellow hover:underline">(877) 807-1248</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
