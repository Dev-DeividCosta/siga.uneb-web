import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import './App.css'

function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sobre" element={<Sobre/>} />
    </Routes>

    <Link to="/">
      <h1>Página Inicial</h1>
    </Link>
    <Link to="/sobre"> 
      <h1>Sobre</h1>
    </Link>
  </>
  )
}

export default App
