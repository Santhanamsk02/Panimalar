import React from 'react'
import Header from '../Components/Header' 
import { AnimatePresence } from 'framer-motion'
import {Outlet,useLocation} from 'react-router'
import Footer from '../Components/Footer'
const RootLayout = () => {
    const location = useLocation();
  return (
      <div>
          <Header></Header>
          <AnimatePresence mode="wait">
                <Outlet key={location.pathname} />
            </AnimatePresence>
          <Footer></Footer>
    </div>
  )
}

export default RootLayout