import React from 'react'
import { Navbar,Home, About, NavBtn, Footer } from './imports/import'
import './mainStyle/app.scss'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import video from "./images/-23882.mp4"

export default function App(){
   const scro = window.scroll({
    top:0
   })
   console.log(scro)
  return(
    <>
    <Navbar/> 
     <video src={video} autoPlay loop muted id='video'></video>
    <NavBtn/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </>
    
  )


}