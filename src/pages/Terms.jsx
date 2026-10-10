import React from 'react';
import PageMeta from '../components/PageMeta';
import TrustPageLayout from '../components/TrustPageLayout';

const publicationDate = 'October 10, 2026';
const sections = [
  {
    id: 'acceptance',
    number: '1',
    title: 'Acceptance of Terms',
    content: (
      <>
        <p>These Terms of Service apply to your access to and use of exploring-india.com and its travel guides, destination information, and other website features. By using the site, you agree to these terms. If you do not agree, please discontinue use.</p>
        <p>These terms govern use of the website; bookings, transport, accommodation, tours, and other services supplied by third parties are subject to those providers’ own terms.</p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    number: '2',
    title: 'Intellectual Property',
    content: (
      <>
        <p>Unless otherwise credited, original editorial text, page designs, and Exploring India branding are owned by or used with permission by their respective rights holders. Third-party photographs, fonts, icons, and other materials remain subject to their own licenses and ownership.</p>
        <p>You may link to public pages for personal, non-commercial reference. Do not reproduce, modify, distribute, or commercially use site content or media without permission from the applicable rights holder. Nothing in these terms grants rights to third-party materials.</p>
      </>
    ),
  },
  {
    id: 'user-content',
    number: '3',
    title: 'User Content & Reviews',
    content: (
      <>
        <p>If the site accepts a submission, you are responsible for ensuring it is lawful, accurate to the best of your knowledge, and does not infringe another person’s rights or disclose private information without permission.</p>
        <p>By submitting content, you grant Exploring India permission to review, moderate, display, and use it for operating and improving the relevant site feature. You retain ownership of your original work. Do not submit content you do not have the right to share.</p>
        <p>We may remove content that is unlawful, misleading, abusive, spam, or otherwise inappropriate. The site may not offer every submission or review feature at all times.</p>
      </>
    ),
  },
  {
    id: 'travel-disclaimer',
    number: '4',
    title: 'Travel Information & Disclaimer',
    content: (
      <>
        <p>Destination details, itineraries, transit estimates, opening information, entry fees, permits, weather guidance, and travel tips are provided for general information. Conditions and official requirements can change, and errors or omissions may occur.</p>
        <p>You are responsible for independently verifying current local schedules, attraction opening days, permit and visa requirements, safety advisories, weather, health guidance, and travel conditions with appropriate official or local sources before making decisions.</p>
        <p>Nothing on this site is professional, medical, legal, or emergency advice, nor a guarantee that a particular trip, operator, route, or activity is available or suitable for you.</p>
      </>
    ),
  },
  {
    id: 'external-links',
    number: '5',
    title: 'External Links & Services',
    content: (
      <>
        <p>The site may link to third-party websites, maps, social networks, image providers, or travel services. We do not control those services and are not responsible for their content, availability, privacy practices, or terms.</p>
        <p>Any transaction, booking, or communication with a third party is between you and that provider. Review its terms and privacy notice before using the service.</p>
      </>
    ),
  },
  {
    id: 'liability',
    number: '6',
    title: 'Limitation of Liability',
    content: (
      <>
        <p>To the extent permitted by applicable law, Exploring India and its contributors are not liable for indirect or consequential loss arising from use of the site, reliance on travel information, third-party services, or travel disruptions. Nothing in these terms excludes liability that cannot legally be excluded.</p>
        <p>You make travel decisions at your own discretion and should assess risks and verify information for your circumstances.</p>
      </>
    ),
  },
  {
    id: 'governing-law',
    number: '7',
    title: 'Governing Law & Contact',
    content: (
      <>
        <p>These terms are intended to be governed by the laws of India. Subject to any mandatory consumer protections or jurisdiction rules that apply, courts in Mumbai, Maharashtra, India shall have jurisdiction over disputes relating to these terms.</p>
        <p>If a provision is found unenforceable, the remaining provisions continue to apply to the extent permitted by law. For questions about these terms, contact <a href="mailto:privacy@exploring-india.com" className="font-semibold text-peacock underline">privacy@exploring-india.com</a>.</p>
        <p className="rounded-xl bg-marigold/15 p-4 text-sm">These website terms are general information, not legal advice. Have them reviewed for your business, location, and applicable consumer laws before relying on them as a final legal document.</p>
      </>
    ),
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service',
  description: 'Terms and conditions governing the use of the Exploring India travel platform, curated guides, and itineraries.',
  datePublished: '2026-10-10',
  dateModified: '2026-10-10',
  url: 'https://www.exploring-india.com/terms',
};

export default function Terms() {
  return (
    <>
      <PageMeta
        title="Terms of Service | Exploring India"
        description="Review the terms and conditions governing the use of the Exploring India travel platform, curated guides, and itineraries."
        path="/terms"
        robots="noindex, follow"
        schema={schema}
      />
      <TrustPageLayout
        eyebrow="Website terms"
        title="Terms of Service"
        description="Please read these terms before using the Exploring India website and its travel information."
        lastUpdated={publicationDate}
        sections={sections}
      >
        <p><strong>Effective date:</strong> {publicationDate}</p>
      </TrustPageLayout>
    </>
  );
}
