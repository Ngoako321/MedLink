import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar1 from './components/NavbarV1/navbar1'
import LandingPage from './pages/LangingPage/landingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 w-[100%] h-[100%] box-border'>
      <Navbar1/>
      <LandingPage/>
    </div>
  )
}

export default App
