import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dialog from './components/dialog'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import GoogleMeet from './components/GoogleMeet'
import { Routes } from 'react-router-dom'
function App() {
  return (
   <>
   <Router>
      <Routes>
        <Route path='/' element={<Dialog />} />
        <Route path='/meet' element={<GoogleMeet />}></Route>
      </Routes>
   </Router>
   </>
  )
}

export default App
