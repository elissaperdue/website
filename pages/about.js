import Head from 'next/head'
import styles from '../styles/About.module.css'
import React, { Component } from 'react'; 
import { Navbar, Nav, NavDropdown, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Box, Container} from 'react-layout-components';
import Flexbox from 'flexbox-react';
import Image from 'next/image'


export default function About() {
  return (

    <div>
        <Head>
            <title>Elissa Perdue</title>
            <link rel="icon" href="/ep_favicon.png" />
        </Head>

        <div class={styles.topnav}>
            <a href="/">Home</a>
            <a href="about">About</a>
        </div>
    

       <div className={styles.container}>
           <cols>
      
           <a className={styles.paper}>
            <h3><img alt="" src={"usc.png"} height="50"/></h3>
            <p>Bachelors of Science, Computer Science</p>
            <p>Expected Grad: May 2022</p>
          </a>

          <a className={styles.paper}>
            <info>
            <h3><Image alt="" src={"/hacksc_logo.png"} height="50" width="150"/></h3>
            <h3><img alt="" src={"GitHub-Mark.png"} height="30"/></h3>

            </info>
            <info>
                <p>Vice President</p>
                <p>2020-present</p>
            </info>
            <info>
                <p>Engineer</p>
                <p>2020-present</p>
            </info>
            <info>
                <p>Sponsorship Lead</p>
                <p>2019-present</p>
            </info>
          </a>

         

          <a className={styles.paper}>
            <Image alt="" src={"/Amazon-Logo.png"} height="50" width="90"/>
            <info>
                <p>Incoming SDE Intern</p>
                <p>Summer 2021</p>
            </info>
          </a>

          <a className={styles.paper}>
            <Image alt="" src={"/ng.svg"} height="55" width="145"/>
            <info>
                <p>Software Engineer Intern</p>
                <p>Summer 2020</p>
            </info>

          </a>

         </cols>
         <personal-info>
            Junior at the University of Southern California. Originally from the DC area. 
         </personal-info>
            
        </div> 
 
    </div>
  )
}
