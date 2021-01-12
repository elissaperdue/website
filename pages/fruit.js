import Head from 'next/head'
import styles from '../styles/About.module.css'
import React, { Component } from 'react'; 
import { Navbar, Nav, NavDropdown, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Box, Container} from 'react-layout-components';
import Flexbox from 'flexbox-react';


export default function Fruit() {
  return (
    <div>
        <Head>
            <title>Elissa Perdue</title>
            <link rel="icon" href="/ep_favicon.png" />
        </Head>

        <div class={styles.topnav}>
            <a href="/">Home</a>
            <a href="about">About</a>
            <a href="fruit">Fruit</a>
        </div>

        <a href="https://www.berries.com/blog/what-fruits-are-in-season">
            <img src="https://www.berries.com/blog/wp-content/uploads/2016/04/sb-fruits-in-season-1.png" alt="What Fruits Are In Season" width={500}/>
        </a>
<p></p>
    

      
 
    </div>
  )
}