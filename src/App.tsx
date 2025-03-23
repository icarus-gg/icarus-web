import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Dashboard from './dashboard/Dashboard'
import Aliro1Page from './pages/Aliro1Page'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aliro1" element={<Aliro1Page />} />
      </Routes>
    </Router>
  )
}

export default App