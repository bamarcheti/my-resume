import { useEffect } from 'react';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
};

const DEFAULT_SEO = {
  title: 'Bárbara Marcheti Fiorin | Desenvolvedora Frontend React & Next.js',
  description:
    'Desenvolvedora Frontend especializada em React.js, Next.js, TypeScript e React Native. Criando experiências web modernas e performáticas. Portfólio com projetos reais e open source.',
  keywords:
    'Bárbara Marcheti, Barbara Marcheti Fiorin, desenvolvedora frontend, react developer, next.js developer, typescript developer, react native, frontend developer Brasil',
  image: 'https://bamarcheti.dev.br/og-image.jpg',
  url: 'https://bamarcheti.dev.br/',
  type: 'website'
};

export default function SEO({ title, description, keywords, image, url, type }: SEOProps) {
  const seo = {
    title: title || DEFAULT_SEO.title,
    description: description || DEFAULT_SEO.description,
    keywords: keywords || DEFAULT_SEO.keywords,
    image: image || DEFAULT_SEO.image,
    url: url || DEFAULT_SEO.url,
    type: type || DEFAULT_SEO.type
  };

  useEffect(() => {
    // Atualiza o título da página
    document.title = seo.title;

    // Atualiza meta tags
    const metaTags = [
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: seo.image },
      { property: 'og:url', content: seo.url },
      { property: 'og:type', content: seo.type },
      { property: 'twitter:title', content: seo.title },
      { property: 'twitter:description', content: seo.description },
      { property: 'twitter:image', content: seo.image },
      { property: 'twitter:url', content: seo.url }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    // Atualiza canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seo.url);
  }, [seo]);

  return null;
}
