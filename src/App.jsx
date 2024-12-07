import React from 'react'
import Home from './pages/Home/Home'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from '../../Netflix/src/pages/Player/Player'
import Not_found from '../../Netflix/src/pages/Home/Notfound'
const App = () => {
  return (
    <div>
        
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/playerid' element={<Player/>} />; 
      <Route path='*' element={<Not_found/>} />; 
    </Routes>
    
    </div>
  )
}

export default App