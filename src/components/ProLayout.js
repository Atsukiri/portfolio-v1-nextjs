import Head from 'next/head';
import styles from '../styles/Pro.module.css';

export default function Layout({ children }) {
  return (
    <>
    <Head>
        <title>Milan Avorque – Web Developer & IT Support</title>
        <meta name="description" content="Professional portfolio of Milan Avorque: web development, IT support, data analytics, cybersecurity, UX design, and more." />
        <meta property="og:title" content="Milan Avorque | Professional Portfolio" />
        <meta property="og:description" content="Web Developer & IT Support professional showcasing skills, certifications, and contact info." />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://atsukiri.vercell.com/professional" />
        <meta property="og:image" content="https://yourdomain.com/og-professional.png" /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}