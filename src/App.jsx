import { useState } from 'react'
import Hero from './components/Hero'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Technologies from './components/technologies'
import Education from './components/education'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  )
}

export default App
