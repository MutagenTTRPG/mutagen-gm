import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Enemies from './pages/Enemies';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="ml-20 w-full p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enemies" element={<Enemies />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
