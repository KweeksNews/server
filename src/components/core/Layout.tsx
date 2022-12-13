import Head from 'next/head';
import { ReactNode, useCallback, useRef, useState } from 'react';
import { Config } from '../../config';
import { useOnClickOutside } from '../../hooks';
import { Footer } from './Footer';
import { Menu } from './Menu';

type Props = {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  navLinks?: {
    name: string;
    url: string;
  }[];
  children?: ReactNode;
};

export function Layout({ title, description, image, url, navLinks, children }: Props) {
  const seo = {
    url: url ?? Config.site.url + '/',
    title: title ?? Config.site.title,
    description: description ?? Config.site.description,
    image: image ?? Config.site.image,
    twitter: Config.site.twitter,
  };

  const ref = useRef<any>(null);
  const [toggled, setToggled] = useState(false);
  const callback = useCallback(() => setToggled(false), []);

  useOnClickOutside(ref, callback);

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seo.url} />
        <meta property="twitter:title" content={seo.title} />
        <meta property="twitter:description" content={seo.description} />
        <meta property="twitter:image" content={seo.image} />
        <meta name="twitter:creator" content={seo.twitter} />
        <meta name="twitter:site" content={seo.twitter} />

        <link rel="icon" href={`https://${process.env.NEXT_PUBLIC_HOSTNAME}/favicon.ico`} />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`https://${process.env.NEXT_PUBLIC_HOSTNAME}/favicon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`https://${process.env.NEXT_PUBLIC_HOSTNAME}/favicon-32x32.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`https://${process.env.NEXT_PUBLIC_HOSTNAME}/apple-touch-icon.png`}
        />
      </Head>

      <a
        href="#content"
        className="button fixed top-2 -left-96 z-[-99] focus:left-2 focus:z-50 active:left-2 active:z-50"
      >
        Skip to Content
      </a>

      <div className="bg-chinese-black-900">
        <div ref={ref}>
          <Menu toggled={toggled} setToggled={setToggled} navLinks={navLinks} />
        </div>
        <main id="content" className="px-7">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
