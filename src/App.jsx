import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/homepage'
import LoginPage from './pages/login/loginpage'
import SignupPage from './pages/signup/signuppage'
import NotFoundPage from './pages/notfound/notFoundPage';
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
