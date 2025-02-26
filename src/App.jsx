import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Enemies from './pages/Enemies';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <div className="App w-full m-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enemies" element={<Enemies />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
