import Link from 'next/link';
import styles from '../styles/Home.module.css';
import GlobalLayout from '../components/GlobalLayout';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <GlobalLayout>
      <div className={styles.splitSection}>
        {/* Professional side */}
        <motion.div 
          className={`${styles.splitColumn} ${styles.pro}`}
          initial={{ width: '50%' }}
          whileHover={{ width: '70%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.columnContent}>
            <motion.span 
              className={styles.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Milan Avorque
            </motion.span>
            <div className={styles.textGroup}>
              <h1 className="gradient-text">Looking to hire?</h1>
              <p>Explore my professional journey, skills, and the impact I've made through code.</p>
              <Link href="/portfolio" className={styles.modernButton}>
                Professional Portfolio
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Personal side */}
        <motion.div 
          className={`${styles.splitColumn} ${styles.personal}`}
          initial={{ width: '50%' }}
          whileHover={{ width: '70%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.columnContent}>
            <motion.span 
              className={styles.label}
              style={{ fontFamily: 'Pacifico, cursive', color: 'var(--accent)' }}
            >
              @Atsukiri
            </motion.span>
            <div className={styles.textGroup}>
              <h1>The Creative Side</h1>
              <p>Art, hobbies, and experimental projects. Where I explore without boundaries.</p>
              <Link href="/personal" className={`${styles.modernButton} ${styles.personalBtn}`}>
                Creative Playground
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </GlobalLayout>
  );
}
