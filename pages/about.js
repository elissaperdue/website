import Head from 'next/head'
import styles from '../styles/About.module.css'
import React, { Component } from 'react'; 
import { Navbar, Nav, NavDropdown, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Box, Container} from 'react-layout-components';
import Flexbox from 'flexbox-react';


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
            <h3><img alt="" src={"ng.svg"} height="50"/></h3>
            <p>Software Engineer Intern</p>
          </a>

          <a className={styles.paper}>
            <h3><img alt="" src={"Amazon-Logo.png"} height="50"/></h3>
            <p>Incoming SDE Intern</p>
          </a>

          <a className={styles.paper}>
            <alignR>
                <h3><img alt="" src={"hacksc_logo.png"} height="50"/></h3>
                <a 
                href="https://github.com/HackSC" target="_blank"
                >
                <img alt="" src={"GitHub-Mark.png"} height="20"/>
                </a>
            </alignR>
      
            <alignR>
                <p>Sponsorship Lead</p>  
                <p>2019-Present</p>
            </alignR>
            <alignR>
                <p>Vice President</p> 
                <p>2020-Present</p>
            </alignR>
           
            <alignR>
                <p>Engineering</p> 
                <p>2020-Present</p>
            </alignR>
           
          </a>

         

            </cols>
        <cols>
        {/* <div class={styles.headshot}>
                    <img alt="" src="headshot.jpg" />
            </div> */}
            
        </cols>
            
        </div> 
 
    </div>
  )
}
