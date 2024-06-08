import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
</Router>
  )
}

export default App
