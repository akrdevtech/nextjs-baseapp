import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Skeleton</title>
        <meta name="description" content="AKRDEVTECH NextJS skeleton" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to AKRDEVTECH
        </h1>
      </main>
    </div>
  )
}
