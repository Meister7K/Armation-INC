// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.scss'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Nav } from './components/nav/Nav'


function App() {

  return (
    <>
      <div>
        <Header/>
        <Nav/>
        <Outlet/>
     
      <Footer/>
      </div>
    </>
  )
}

export default App
