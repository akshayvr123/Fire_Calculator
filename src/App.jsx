import { useState } from 'react'
import reactLogo from './assets/react.svg'
import working from './Working.json'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Working from './Components/Working/Working'

function App() {
 

  return (
    <>
    <NavBar></NavBar>
    <Home></Home>
    <Working workingData={working}/>
    </>
  )
}

export default App
