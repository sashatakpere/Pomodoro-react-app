import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pomodoro from './pages/Pomodoro'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pomodoro" element={<Pomodoro />} />
    </Routes>
  )
}

export default App
