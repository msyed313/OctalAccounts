import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import MouseTrail from './components/MouseTrail'
function Layout() {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
     <MouseTrail />
    </>
  )
}

export default Layout