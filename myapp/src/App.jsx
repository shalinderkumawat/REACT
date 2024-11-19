import { useState } from 'react'

import './App.css'
import Header from './header'
import Contact from './Contact'
import Worka from './Work'
import Projects from './Projects'
import Education from './Education'
import Skills from './Skills'
import Achievements from './Achievements.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Contact></Contact>
      


      <Worka></Worka>
      <Projects></Projects>
      <Education></Education>
      <Skills></Skills>
      <Achievements></Achievements>
      
      
      
    </>
    
  )
}

export default App
