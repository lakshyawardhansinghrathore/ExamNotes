import React, { useEffect } from 'react'
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { getCurrentUser } from './services/api'
import { useDispatch, useSelector } from 'react-redux'
import History from './pages/History'
import Notes from './pages/notes'
import Pricing from './pages/Pricing'
import PaymentSuccess from './pages/PaymentSuccess' 

export const serverUrl = "https://noteforge-aiserver.onrender.com"


function PaymentFailed() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-4 bg-gray-50">
      <div className="text-red-500 text-6xl">❌</div>
      <h1 className="text-2xl font-bold text-red-600">Payment Cancelled or Failed</h1>
      <p className="text-gray-500 text-sm">Your card was not charged. Feel free to try again whenever you're ready.</p>
      <button 
        onClick={() => navigate('/pricing')} 
        className="mt-2 px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg text-sm hover:bg-indigo-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();   
  useEffect(() => {
    getCurrentUser(dispatch)
  }, [dispatch])

  const { userData } = useSelector((state) => state.user);

  return (
    <>
    <Routes>
      <Route path='/' element={userData ? <Home/> : <Navigate to="/auth" replace />} />
      <Route path='/auth' element={userData ? <Navigate to="/" replace /> : <Auth />} />
      <Route path='/history' element={userData ? <History/> : <Navigate to="/auth" replace />} />
      <Route path='/notes' element={userData ? <Notes/> : <Navigate to="/auth" replace />} />
      <Route path='/pricing' element={userData ? <Pricing/> : <Navigate to="/auth" replace />} />

      
      <Route path='/payment-success' element={<PaymentSuccess />} />
      <Route path='/payment-failed' element={<PaymentFailed />} />
    </Routes>
    </>
  )
}

export default App
