import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/ep_favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">elissaperdue.com</a>
        </h1>



        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3><img alt="" src={"fitbit.png"} /></h3>
            <p>Fitness betting app to help reach daily step goals</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3><img alt="" src={"Amazon-Logo.png"} /></h3>
            <p>Incoming SDE intern at Amazon NYC Summer 2021</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3><img alt="" src={"ng.svg"} /></h3>
            <p>Summer SWE Intern on H-1 Helicopter Woodland Hills, CA</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3><img alt="" src={"hacksc_logo.png"} /></h3>
            <p>
              VP and Director of Sponsorship for USC's premier annual hackathon
            </p>
            


          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a 
          href="https://github.com/elissaperdue" target="_blank"
        >
        <img alt="" src={"GitHub-Mark.png"}/>
        </a>
        <a 
          href="https://github.com/elissaperdue" target="_blank"
        >
        <img alt="" src={"linkedin.png"}/>
        </a>
      </footer>
    </div>
  )
}
