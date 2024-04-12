import React,{Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

const LayOut = () => {
  return (
      <main>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </main>
  )
}

export default LayOut
