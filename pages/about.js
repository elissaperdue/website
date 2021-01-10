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
           <a className={styles.card}>
            <h3><img alt="" src={"Amazon-Logo.png"} /></h3>
            <p>Incoming SDE intern at Amazon NYC Summer 2021</p>
          </a>
          <a className={styles.card}>
            <h3><img alt="" src={"Amazon-Logo.png"} /></h3>
            <p>Incoming SDE intern at Amazon NYC Summer 2021</p>
          </a>
          <a className={styles.card}>
            <h3><img alt="" src={"Amazon-Logo.png"} /></h3>
            <p>Incoming SDE intern at Amazon NYC Summer 2021</p>
          </a>
              
           </cols>
     
            <div class={styles.headshot}>
                    <img alt="" src="headshot.jpg" />
            </div>
        </div> 
 
    </div>
  )
}
