import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <img src="../src/assets/tsukemen_ramen.JPEG" className="food_pics" alt="tsukemen ramen"/>
      <img src="../src/assets/onigiri.JPEG" className="food_pics" alt="onigiri" />
      <img src="../src/assets/takoyaki.JPEG" className="food_pics" alt="takoyaki" />
      <img src="../src/assets/kaisendon.JPEG" className="food_pics" alt="kaisendon" />
      <Footer />
    </>
  )
}

export default App
