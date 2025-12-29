import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    // Construir el mensaje de WhatsApp
    let message = '🛒 *Pedido desde la Web*\n\n';
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Precio unitario: ${item.price}\n\n`;
    });
    
    message += '---\n\n';
    message += '¡Hola El Rubio! Me gustaría realizar este pedido. ¿Cuál sería el total con envío?';

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5492494661329?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FiShoppingBag size={24} />
                <div>
                  <h2 className="text-2xl font-bold">Mi Carrito</h2>
                  <p className="text-sm opacity-90">
                    {items.length === 0 
                      ? 'Sin productos' 
                      : `${items.length} producto${items.length > 1 ? 's' : ''}`}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeCart}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <FiX size={24} />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center text-gray-400"
                >
                  <FiShoppingBag size={80} className="mb-4 opacity-30" />
                  <p className="text-xl font-semibold mb-2">Tu carrito está vacío</p>
                  <p className="text-sm">¡Agregá productos para empezar tu pedido!</p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gray-50 rounded-xl p-4 relative group hover:shadow-md transition-shadow"
                    >
                      {/* Botón eliminar */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
                      >
                        <FiTrash2 size={14} />
                      </motion.button>

                      <div className="flex gap-4">
                        {/* Imagen del producto */}
                        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain p-2"
                            />
                          ) : (
                            <FiShoppingBag className="text-gray-300" size={32} />
                          )}
                        </div>

                        {/* Info del producto */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                            {item.name}
                          </h3>
                          <p className="text-primary font-bold text-lg mb-2">
                            {item.price}
                          </p>

                          {/* Control de cantidad */}
                          <div className="flex items-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors"
                            >
                              <FiMinus size={16} />
                            </motion.button>
                            
                            <span className="w-10 text-center font-bold text-gray-900">
                              {item.quantity}
                            </span>
                            
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors"
                            >
                              <FiPlus size={16} />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer con acciones */}
            {items.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-3">
                {/* Botón de WhatsApp */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-colors"
                >
                  <FaWhatsapp size={24} />
                  <span>Enviar Pedido por WhatsApp</span>
                </motion.button>

                {/* Botón de vaciar carrito */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="w-full bg-red-100 hover:bg-red-200 text-red-600 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <FiTrash2 size={18} />
                  <span>Vaciar Carrito</span>
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  El precio total será confirmado por WhatsApp
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;

