
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import Navbar from './Components/Layout/Navbar';
import Shop from './Sections/Shop';

import './index.css'

function App() {
 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        
      </Routes>

    </Router>
   
  )
};

export default App
