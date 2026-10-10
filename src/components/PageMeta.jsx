import { useEffect } from 'react';

export default function PageMeta({ title, description, path, schema }) {
  const serializedSchema = JSON.stringify(schema || null);

  useEffect(() => {
    document.title = title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = description;

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = `https://www.exploring-india.com${path}`;

    document.querySelectorAll('script[data-page-schema="true"]').forEach((script) => script.remove());
    const pageSchema = JSON.parse(serializedSchema);
    (Array.isArray(pageSchema) ? pageSchema : [pageSchema]).filter(Boolean).forEach((item) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.pageSchema = 'true';
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
    });
  }, [title, description, path, serializedSchema]);

  return null;
}
