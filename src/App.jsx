import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ObrasSociales from './pages/ObrasSociales'
import Contacto from './pages/Contacto'
import TrabajaConNosotros from './pages/TrabajaConNosotros'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/obras-sociales" element={<ObrasSociales />} />
          <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />

          {/* CONTACTO: sin Navigate */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/contacto/:sede" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
