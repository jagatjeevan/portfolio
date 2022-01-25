import Head from 'next/head'
import Resume from '../components/Resume'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jagat Jeevan Sahoo</title>
        <meta name="description" content="UI dev, Team Lead in ThoughtWorks, Bengaluru, India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Resume />
    </div>
  )
}
