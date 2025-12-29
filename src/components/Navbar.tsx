import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems, openCart } = useCart();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', to: '/' },
    { name: 'Promos', to: '/promos' },
    { name: 'Bebidas', to: '/bebidas' },
    { name: 'Ubicación', to: '/#location' },
  ];

  const scrollToLocation = () => {
    if (location.pathname === '/') {
      const element = document.getElementById('location');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="El Rubio 24hs"
                className="h-12 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">
                  El Rubio <span className="text-primary">24hs</span>
                </h1>
                <p className="text-xs text-gray-600">Frías, Santiago del Estero</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={link.to === '/#location' ? scrollToLocation : undefined}
                className={`font-medium transition-colors cursor-pointer ${location.pathname === link.to ||
                    (link.to === '/' && location.pathname === '/')
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Carrito Button Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCart}
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <FiShoppingCart size={24} />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <a
              href="https://wa.me/5492494661329?text=Hola%20El%20Rubio!%20Quiero%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Right Icons */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Carrito Button Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCart}
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <FiShoppingCart size={24} />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (link.to === '/#location') scrollToLocation();
                  }}
                  className={`font-medium transition-colors cursor-pointer ${location.pathname === link.to ||
                      (link.to === '/' && location.pathname === '/')
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/5492494661329?text=Hola%20El%20Rubio!%20Quiero%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300 text-center"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
