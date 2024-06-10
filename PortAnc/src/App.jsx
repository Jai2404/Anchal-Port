import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import About from './components/About';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactMe />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
