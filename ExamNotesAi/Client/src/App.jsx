import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'

// 1. IMPORT your API function here:
import { getCurrentUser } from './services/api' 

// 2. CHANGE the port to match your backend (5000 instead of 8000)
export const serverUrl = "http://localhost:8000"

function App() {
  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
    </>
  )
}

export default App