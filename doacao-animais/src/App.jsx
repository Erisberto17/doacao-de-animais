import Home from './pages/home/index'
import RegisterAnimals from "./pages/registerAnimal/index"
import NavBar from './components/NavBar/barraNavegacao'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterAnimals />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;