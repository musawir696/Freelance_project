import { useState } from 'react'
import Hero from './Pages/Home/Hero'

import Services from './Pages/Home/services.jsx'

import './App.css'
import Navbar from './components/navbar.jsx'
import ProductGrid from './components/ProductGrid.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ProductGrid />
    </>
  )
}

export default App
