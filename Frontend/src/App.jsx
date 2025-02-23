import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Editorpage from './pages/Editorpage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor' element={<Editorpage/>}/>
      </Routes>
      <div className="Footer">Built by Abhinav Singh</div>
    </>
  )
}

export default App
