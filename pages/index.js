import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Box, Container } from 'react-layout-components';



export default function Home() {
  return (
    <div>
    <div class={styles.topnav}>
        <a href="/">Home</a>
        <a href="about">About</a>
    </div>
    <div className={styles.container}>
      <Head>
        <title>Elissa Perdue</title>
        <link rel="icon" href="/ep_favicon.png" />
      </Head>


      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="https://website-git-master.elissaperdue.vercel.app/">elissaperdue.com</a>
        </h1>



        <div className={styles.grid}>
          <a
            href="https://hacksc.com/"
            target="_blank"
            className={styles.card}
          >
            <h3><img alt="" src={"hacksc_logo.png"} /></h3>
            <p>
              VP and Sponsorship lead for USC's premier annual hackathon
            </p>
            


          </a>

          <a className={styles.card}>
            <h3><img alt="" src={"Amazon-Logo.png"} /></h3>
            <p>Incoming SDE intern at Amazon NYC Summer 2021</p>
          </a>

          <a
            href="https://www.airforce-technology.com/projects/uh1y-huey/"
            target="_blank"
            className={styles.card}
          >
            <h3><img alt="" src={"ng.svg"} /></h3>
            <p>Summer SWE Intern on H-1 Helicopter Woodland Hills, CA</p>
          </a>

          <a href="https://github.com/greengro/FitBet" target="_blank" className={styles.card}>
            <h3><img alt="" src={"fitbit.png"} /></h3>
            <p>Fitness betting app to help reach daily step goals </p>
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
          href="https://www.linkedin.com/in/elissaperdue/" target="_blank"
        >
        <img alt="" src={"linkedin.png"}/>
        </a>
      </footer>
    </div>
    </div>
  )
}
