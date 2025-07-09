import Head from 'next/head';
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script';
// app/layout.js

export default function GlobalLayout({ title, description, children }) {
  const defaultTitle = 'Milan A. | Web Developer & IT Support';
  const fullTitle = title ? `${title} | Milan A.` : defaultTitle;
  const defaultDescription = 'Remote Web Developer & IT Support Specialist, skilled in React.js, Next.js, PHP, and freelance web development. Showcasing skills, certifications, and contact info.';

  const jsonLd = {
    "@context": "https://schema.org",
      "@type": "Person",
      "name": "Milan Avorque",
      "jobTitle": "Web Developer & IT Support Specialist",
      "url": "https://atsukiri.vercel.app",
      "sameAs": [
        "https://github.com/atsukiri",
        "https://linkedin.com/in/milan-avorque-82a860320"
      ]
  };

  return (
    <>
      <Head>
          <title>{fullTitle}</title>
          <meta name="description" content="Professional portfolio of Milan Avorque: web development, IT support, data analytics, cybersecurity, UX design, and more." />
          <meta property="og:title" content={fullTitle} />
          <meta property="og:description" content={description ?? defaultDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://atsukiri.vercel.app/og_image.webp" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://atsukiri.vercel.app/og_image.webp" />
          <meta name="twitter:card" content="summary_large_image" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
            }}
          />
          {/* ... */}

        </Head>

        <body>
          {children}
          <Script id="va-init" strategy="afterInteractive">
            {`window.va = window.va || function(){(window.vaq = window.vaq || []).push(arguments);};`}
          </Script>
          <Script
            src="/analy/script.js"
            data-endpoint="/analy"
            async
            strategy="lazyOnload"
          />
          
        </body>
    </>
  )
}