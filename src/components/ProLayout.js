import Head from 'next/head';
import styles from '../styles/Pro.module.css';
import GlobalLayout from '../components/GlobalLayout'


export default function Layout({ children }) {
  return (
    <GlobalLayout>
      <main className={styles.main}>{children}</main>
    </GlobalLayout>
  )
}