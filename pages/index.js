import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Quote from '../components/quote'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>JordanPassant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>

        <h1>Hello there!</h1>
      
        <h1 className={styles.title}>
          Welcome to my portfolio!
        </h1>

        <br></br>       

        <div className={styles.grid}>
          <Link href="/cv">
            <a className={styles.card}>
              <h2>Resume &rarr;</h2>
              <p>Click here to view my CV</p>
            </a>
          </Link> 

          <Link href="/projects">
            <a className={styles.card}>
              <h2>Projects &rarr;</h2>
              <p>View my assorted works.</p>
            </a>         
          </Link>
        </div>

        <br></br>
        <br></br>

      <Quote />

      </main>

      <footer className={styles.footer}>
        <p>2022 Jordan Passant</p>
        <br></br>       
      </footer>
    </div>
  )
}
