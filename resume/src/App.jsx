import { useState } from 'react'
import './App.css'

import Name from './Name'
import Email from './Email'
import Alldetail from './Alldetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Name/>
     <Email/>
     <Alldetail/>

    </>
  )
}

export default App
