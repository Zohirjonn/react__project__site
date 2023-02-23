import React from 'react'
import { Navbar,Home } from './imports/import'
import './mainStyle/app.scss'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import video from "./images/connection-113367.mp4"

export default function App(){
  return(
    <>
    <Navbar/> 
    <video src={video} autoPlay loop muted id='video'></video>
      <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
    
  )


}