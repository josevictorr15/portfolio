import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Training from './components/Training'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    <Technologies />
    <Projects />
    <Training />
    </>
  )
}

export default App
