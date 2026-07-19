import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Italian from './pages/Perfil/Italian'
import Japanese from './pages/Perfil/Japanese'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/italian" element={<Italian />} />
    <Route path="/japonese" element={<Japanese />} />
  </Routes>
)

export default Rotas
