import React from 'react';
import PageMeta from '../components/PageMeta';
import TrustPageLayout from '../components/TrustPageLayout';

const sections = [
  {
    id: 'photography',
    title: 'Photography & Visual Media',
    content: (
      <>
        <p>Destination and editorial imagery in this site includes image URLs served by Unsplash and Pexels, as well as locally maintained visual assets. Provider pages describe their own license terms; those terms do not establish the license for every individual image or grant permission to reuse an image outside this site.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li><a href="https://unsplash.com/license" target="_blank" rel="noreferrer" className="font-semibold text-peacock underline">Unsplash License</a> — review current terms and the rights for the specific image before reuse.</li>
          <li><a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer" className="font-semibold text-peacock underline">Pexels License</a> — review current terms and the rights for the specific image before reuse.</li>
        </ul>
        <p>Image URLs and available creator details can change over time. Where a specific photographer or asset license is not identified in our records, we do not imply an individual attribution or Creative Commons license. Please contact us if you are the rights holder or can provide a correction.</p>
      </>
    ),
  },
  {
    id: 'maps',
    title: 'Map & Geospatial Data',
    content: (
      <>
        <p>The interactive India state graphic is a locally maintained SVG illustration in this project. We did not identify an active Mapbox, OpenStreetMap tile, or external geocoding integration in the current application.</p>
        <p>Place locations and map links are provided for visitor convenience and may be supplied by third-party sources. They should be checked against current local information before travel. If a source credit is missing or an attribution is due, please let us know so it can be corrected.</p>
      </>
    ),
  },
  {
    id: 'typography-icons',
    title: 'Typography & Icons',
    content: (
      <>
        <p>Our interface loads Inter and Playfair Display from Google Fonts. Font files and services are subject to the applicable font licenses and Google Fonts terms.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li><a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noreferrer" className="font-semibold text-peacock underline">Inter on Google Fonts</a></li>
          <li><a href="https://fonts.google.com/specimen/Playfair+Display" target="_blank" rel="noreferrer" className="font-semibold text-peacock underline">Playfair Display on Google Fonts</a></li>
          <li><a href="https://github.com/lucide-icons/lucide/blob/main/LICENSE" target="_blank" rel="noreferrer" className="font-semibold text-peacock underline">Lucide icon library license</a> — Lucide is used for interface icons.</li>
        </ul>
        <p>Brand marks, logos, and original editorial presentation remain the property of their respective owners.</p>
      </>
    ),
  },
  {
    id: 'contributors',
    title: 'Contributors & Local Guides',
    content: (
      <>
        <p>Our destination and travel content is curated for Exploring India. Some journal entries display bylines supplied with the site's editorial data; those bylines do not by themselves indicate independent verification, professional credentials, or a formal local-guide relationship.</p>
        <p>We have not recorded named regional historians or cultural advisors in the maintained site content. We welcome corrections and properly documented contributor credits so expertise and contributions can be acknowledged accurately.</p>
        <p>For attribution or rights questions, please use the contact details published by Exploring India and include the page URL and relevant work.</p>
      </>
    ),
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Credits & Acknowledgements',
  description: 'Attributions, creative licenses, and photographic credits for contributors and media featured across Exploring India.',
  url: 'https://www.exploring-india.com/credits',
};

export default function Credits() {
  return (
    <>
      <PageMeta
        title="Credits & Acknowledgements | Exploring India"
        description="Attributions, creative licenses, and photographic credits for contributors and media featured across Exploring India."
        path="/credits"
        schema={schema}
      />
      <TrustPageLayout
        eyebrow="Transparency & attribution"
        title="Credits & Acknowledgements"
        description="We value the photographers, open-source projects, and creative work that help make this travel resource possible. This page describes the sources identifiable in the current site and how to request an attribution correction."
        sections={sections}
      />
    </>
  );
}
