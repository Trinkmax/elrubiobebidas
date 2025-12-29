import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Promos from './pages/Promos';
import Bebidas from './pages/Bebidas';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/bebidas" element={<Bebidas />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
