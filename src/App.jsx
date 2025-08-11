import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import { Sidebar } from './components/Sidebar'
import './App.css'

function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sobre" element={<Sobre/>} />
    </Routes>

    <Sidebar/>
  </>
  )
}

export default App
