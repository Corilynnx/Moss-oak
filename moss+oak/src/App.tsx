
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import Navbar from './Components/Layout/Navbar';
import Shop from './Sections/Shop';
import { About } from './Pages/About';
import Contact from './Pages/Contact';
import { CheckoutPage } from './Sections/checkoutPage';

import './index.css'
import Cart from './Pages/Cart';

function App() {
 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

    </Router>
   
  )
};

export default App
