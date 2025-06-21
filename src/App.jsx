import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <img src="../src/assets/IMG_5499.JPEG" className="food_pics" alt="tsukemen ramen"/>
      <img src="../src/assets/IMG_5493.JPEG" className="food_pics" alt="onigiri" />
      <img src="../src/assets/IMG_5489.JPEG" className="food_pics" alt="takoyaki" />
      <img src="../src/assets/IMG_5396.JPEG" className="food_pics" alt="okonomiyaki" />
      <Footer />
    </>
  )
}

export default App
