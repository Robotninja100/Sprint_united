import { useEffect } from 'react';

const SITE_URL = 'https://sprintunitedputten.nl';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const upsertMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== 'content') el.setAttribute(k, v);
    });
    document.head.appendChild(el);
  }
  if (attrs.content !== undefined) el.setAttribute('content', attrs.content);
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

export const useSEO = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  noindex = false,
  type = 'website',
}) => {
  useEffect(() => {
    const fullUrl = `${SITE_URL}${path}`;

    if (title) document.title = title;

    if (description) {
      upsertMeta('meta[name="description"]', { name: 'description', content: description });
      upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
      upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    }

    if (title) {
      upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
      upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    }

    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: fullUrl });
    upsertMeta('meta[name="twitter:url"]', { name: 'twitter:url', content: fullUrl });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    upsertLink('canonical', fullUrl);

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
  }, [title, description, path, image, noindex, type]);
};

export default useSEO;
