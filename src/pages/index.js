import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Milan Avorque - Portfolio</title>
      </Head>
      <div className={styles.splitSection}>
        {/* Professional side */}
        <div className={`${styles.splitColumn} ${styles.pro} bg-dark text-white`}>
          <h2 className={styles.real}>Milan Avorque</h2>
          <div className={styles.columnText}>
            <h1>Looking to hire?</h1>
            <p>View my professional work experience, skills, and projects.</p>
            <Link href="/portfolio" className="btn btn-outline-light mt-3">
              Professional Portfolio
            </Link>
          </div>
        </div>

        {/* Personal side */}
        <div className={`${styles.splitColumn} ${styles.personal} bg-info text-dark`}>
          <h3 className={styles.artist}>@Atsukiri</h3>
          <div className={styles.columnText}>
            <h1>Here&apos;s the not-so-serious side.</h1>
            <p className='m-0'>Explore my art, hobbies, and what I do for fun. A mix of things I do just because I enjoy them.</p>
            <p>Where I explore, learn, and occasionally post progress.</p>
            <Link href="/personal" className="btn btn-dark mt-3">
              Personal Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
