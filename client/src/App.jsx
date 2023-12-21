
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './components/Pages/HomePage/index'
import AboutPage from './components/Pages/AboutPage/index'
import ContactPage from './components/Pages/ContactPage/index'
import SignUpPage from './components/Pages/SignUpPage/index'
import MainLayout from './components/MainLayout/index'
import Error from './components/Pages/ErrorPage'
import LoginPage from './components/Pages/LoginPage'

const App = () => {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  
</>
  )
  
   
  
}

export default App
