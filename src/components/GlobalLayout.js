import Head from 'next/head';
import { Analytics } from "@vercel/analytics/next";

export default function GlobalLayout({ children }) {
  return (
    <>
      <Analytics/>
      <Head>
          <title>Milan Avorque – Personal Website</title>
          <meta name="description" content="Professional portfolio of Milan Avorque: web development, IT support, data analytics, cybersecurity, UX design, and more." />
          <meta property="og:title" content="Milan Avorque | Professional Portfolio" />
          <meta property="og:description" content="Web Developer & IT Support professional showcasing skills, certifications, and contact info." />
          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="https://atsukiri.vercell.com/professional" />
          <meta property="og:image" content="https://yourdomain.com/og-professional.png" /> */}
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      <main>{children}</main>
    </>
  )
}