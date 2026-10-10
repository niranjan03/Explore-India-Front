import React from 'react';
import PageMeta from '../components/PageMeta';
import TrustPageLayout from '../components/TrustPageLayout';

const lastUpdated = 'October 10, 2026';
const sections = [
  {
    id: 'data-collected',
    title: 'Data We Collect',
    content: (
      <>
        <p>Information you choose to provide may include an email address submitted through the newsletter form, and information you send when contacting us or making a data request. Do not include sensitive personal information unless it is necessary for your request.</p>
        <p>When you browse the site, analytics and hosting services may receive technical and usage information such as IP address, browser and device details, referring page, pages viewed, and interaction events. The exact data depends on your browser settings and the configuration of those services.</p>
        <p>The current site also keeps destination wishlist selections in page state; these selections are not saved to a user account by this frontend.</p>
      </>
    ),
  },
  {
    id: 'how-we-use-data',
    title: 'How We Use Data',
    content: (
      <>
        <p>Information is used to operate the website, respond to requests, provide newsletter updates when that service is available, understand site usage, protect the service, and improve travel content and performance.</p>
        <p>We do not use the current frontend to sell personal information. We do not use newsletter addresses to send unrelated marketing through this site.</p>
      </>
    ),
  },
  {
    id: 'cookies-tracking',
    title: 'Cookies & Tracking',
    content: (
      <>
        <p>The site currently loads Google Analytics and Google Tag Manager scripts. These services may use cookies or similar technologies to measure visits and interactions, depending on their configuration and your browser settings. We have not identified a cookie-preference management interface in the current frontend.</p>
        <p>You can review Google’s information about <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer" className="font-semibold text-peacock underline">how Google uses information from sites and apps</a> and manage or block cookies through your browser settings. Blocking cookies may affect some website features.</p>
        <p>This policy describes the current implementation and is not a promise that analytics are essential or anonymous. Site owners should configure consent controls where required by applicable law.</p>
      </>
    ),
  },
  {
    id: 'third-parties',
    title: 'Third-Party Services',
    content: (
      <>
        <p>Google Analytics and Google Tag Manager are included in the site to support analytics and tag management. Images may be loaded from Unsplash, Pexels, and other image hosts referenced by content data. Links may send you to external websites, which have their own privacy practices.</p>
        <p>The newsletter form currently submits an email address to the site’s newsletter API endpoint. The production endpoint, provider, data location, and retention period are not defined in this frontend repository; confirm those details with the service operator before relying on the newsletter feature.</p>
        <p>Third-party services may process technical data under their own terms and privacy notices. We do not control their processing.</p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your Rights & Choices',
    content: (
      <>
        <p>Depending on where you live and which laws apply, you may be able to request access to, correction of, deletion of, or a copy of personal information you have provided, or object to or limit certain processing.</p>
        <p>To make a request, email <a href="mailto:privacy@exploring-india.com" className="font-semibold text-peacock underline">privacy@exploring-india.com</a> from the address associated with your request and describe what you need. We may need to verify your identity and may retain information where required or permitted by law.</p>
        <p>For analytics cookies, you can also change your browser settings. This notice describes the site’s current data practices; it does not by itself certify compliance with GDPR, CCPA/CPRA, India’s DPDP Act, or other laws.</p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Data Protection Contact',
    content: (
      <>
        <p>For privacy questions, data access or deletion requests, or concerns about this notice, contact:</p>
        <address className="not-italic">
          Privacy Contact<br />
          <a href="mailto:privacy@exploring-india.com" className="font-semibold text-peacock underline">privacy@exploring-india.com</a>
        </address>
        <p>Please do not send payment information, identity documents, or other sensitive data by email unless we explain a secure method for doing so.</p>
      </>
    ),
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description: 'Learn how Exploring India collects, uses, and safeguards personal data, cookie preferences, and privacy rights.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  url: 'https://www.exploring-india.com/privacy-policy',
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy | Exploring India"
        description="Learn how Exploring India collects, uses, and safeguards your personal data, cookie preferences, and privacy rights."
        path="/privacy-policy"
        robots="noindex, follow"
        schema={schema}
      />
      <TrustPageLayout
        eyebrow="Your data & choices"
        title="Privacy Policy"
        description="This notice explains the information the current Exploring India website may process and how to contact us about your privacy."
        lastUpdated={lastUpdated}
        sections={sections}
      >
        <aside className="rounded-2xl bg-peacock p-6 text-white">
          <h2 className="font-serif text-2xl font-semibold">Privacy at a glance</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-white/85">
            <li>The current frontend does not implement a personal-data sale feature.</li>
            <li>Google Analytics and Tag Manager are loaded for site measurement.</li>
            <li>Newsletter sign-up sends an email address to a newsletter API endpoint.</li>
            <li>Contact us at privacy@exploring-india.com for data requests.</li>
          </ul>
        </aside>
      </TrustPageLayout>
    </>
  );
}
