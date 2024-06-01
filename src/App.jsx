import { useState } from 'react'
import './App.css'
import Home from '../Screens/Home/Home'
import { Routes, Route, Link } from 'react-router-dom'
import Connect from '../Screens/Connect/Connect'
import Workers from '../Screens/Workers/Workers'
import Profit from '../Screens/Profit/Profit'
import Preloader from '../Screens/Preloader/Preloader'
import Login from '../Screens/Login/Login'

function App() {

  const [tab, setTab] = useState('home')

  return (
    <>
      <Routes>
        <Route path='/' element={<Preloader />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/connect' element={<Connect />}/>
        <Route path='/workers' element={<Workers />}/>
        <Route path='/profit' element={<Profit />}/>
        <Route path='/loading' element={<Preloader />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
