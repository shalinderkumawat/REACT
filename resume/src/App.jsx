import { useState } from 'react'
import './App.css'

import Name from './Name'
import Email from './Email'
import Alldetail from './Alldetail'
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  
    
  return (
   
    <>
      <Name />  
     <Email/>
     <Alldetail/>
       {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<Name />} />
          <Route path="/email" element={<Email />} />
          <Route path="/grima" element={<Alldetail />} />

        </Routes>
      </BrowserRouter> */ }
        
    </>
  )
}

export default App
