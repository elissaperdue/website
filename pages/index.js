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
          <a href="https://website-git-master.elissaperdue.vercel.app/">elissa perdue </a> 
          <br/>
          student and software developer
        </h1>


        <div className={styles.project}><h4><b>Recent Projects</b></h4></div>
        <div className={styles.grid}>
          <a
            href="https://hacksc.com/"
            target="_blank"
            className={styles.paper}
          >
            <info>
              <div>
              <h3><img alt="" src={"hacksc_logo.png"} height={45} /></h3>
              <p>
                Full stack
              </p>
              </div>
              <tagbox>
                <tag>CSS</tag>
                <tag1>TypeScript</tag1>
                <tag2>JavaScript</tag2>
                <tag1>Next.js</tag1>
                <tag>MySQL</tag>
              </tagbox>
            </info>
           
          </a>

          

          {/* <a className={styles.paper}>
            <h3><img alt="" src={"Amazon-Logo.png"} height={30}/></h3>
            <p>Incoming SDE intern at Amazon NYC Summer 2021</p>
          </a>

          <a
            href="https://www.airforce-technology.com/projects/uh1y-huey/"
            target="_blank"
            className={styles.paper}
          >
            <h3><img alt="" src={"ng.svg"} height={30} /></h3>
            <p>Summer SWE Intern on H-1 Helicopter Woodland Hills, CA</p>
          </a> */}

          <a href="https://github.com/greengro/FitBet" target="_blank" className={styles.paper}>
            <info>
            <div>
            <h3><img alt="" src={"fitbit.png"} height={40}/></h3>
            <p>Full Stack</p>
            </div>
            <tagbox>
                <tag>Django</tag>
                <tag1>PostgreSQL</tag1>
                <tag>Python</tag>
                <tag2>Java</tag2>
             
            </tagbox>

            </info>
          </a>

          <a href="https://devpost.com/software/spacetag" target="_blank" className={styles.paper}>
            <info>
              <div>
                <h4><b>  &#60; Space Tag &#62; </b></h4>
                <p>Front End</p>
              </div>
              <tagbox>
                <tag2>GCP API</tag2>
                <tag1>Swift</tag1>
              </tagbox>

            </info>
          
          </a>


        </div>
      </main>

      <footer className={styles.footer}>
        <a 
          href="https://github.com/elissaperdue" target="_blank"
        >
        <img alt="" src={"GitHub-Mark.png"} height="20"/>
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
