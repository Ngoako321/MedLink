import './App.css'
import Navbar1 from './components/NavbarV1/navbar1'
import LandingPage from './pages/LangingPage/landingPage'
import Footer from './components/Footer/footer'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/login'
import SignUp from './pages/SignUp/signUp'
import Navbar2 from './components/Navbar2/navbar2'
import Feeds from './pages/Feeds/feeds'

function App() {
  const isLogin = true;

  return (
    <div className='bg-gray-100 w-[100%] min-h-screen box-border'>
      
      {isLogin ? <Navbar2 /> : <Navbar1 />}

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feeds' element={<Feeds />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App