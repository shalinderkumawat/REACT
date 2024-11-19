import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name.jsx'
import Email from './Email.jsx'
import Alldetail from './Alldetail.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>this is h1 tag</h1> */}
      <Name/>
      <Email/>
      <Alldetail/>
    </>
  )
}

export default App
