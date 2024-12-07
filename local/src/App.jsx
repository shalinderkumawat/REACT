import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Sk from './Sk'
import Cacluter from './Cacluter'

function App() {
  
  // this is object in js it's use for as an props value 
  const carInfo = { name: "Ford", model: "Mustang" };
    
  return (
    <>
    <div> 
    
    <h1>This is BrowserRouter</h1>

        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar/>}/>
            brand it's use for make a object  
            <Route path="/home" element={<Home brand= { carInfo }  />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/sk" element={<Sk/>}/>

          </Routes>
        </BrowserRouter> */}
          <Cacluter/>

          
          
          
    </div>
        
    </>
  )
}

export default App
