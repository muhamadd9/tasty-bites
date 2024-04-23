import React from 'react'
import styles from './Home.module.css'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import About from '../About/About'
import Menu from '../Menu/Menu'
import Loader from '../Loader/Loader'
import Chefs from '../Chefs/Chefs'
import MoreDetails from '../MoreDetails/MoreDetails'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
export default function Home() {
  return <>
  <NavBar/>
  <Header/>
  <About/>
  <Menu/>
  <Chefs/>
  <MoreDetails/>
  <Contact/>
  <Footer/>
  </>
}
