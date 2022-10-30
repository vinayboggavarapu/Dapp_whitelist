import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whitelist Dapp</title>
        <meta name="description" content="Whitelist Dapp" />
      </Head>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>VY token</h1>
          <p>The native token of my custom project aimed to provide gasless transactions</p>
          <Image src={require('/public/1.png')} width={350} height={350} alt='WAGMI'></Image>
        </div>
      </main>
      <footer className={styles.footer}>
        <h3>Made by 🔥 by VY</h3>
      </footer>
    </div>
  )
}
