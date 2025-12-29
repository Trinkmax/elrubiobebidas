import { motion } from 'framer-motion';
import { FiPackage, FiShoppingCart } from 'react-icons/fi';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      {/* Placeholder de imagen */}
      {/* Placeholder de imagen */}
      <div className="relative h-40 bg-white flex items-center justify-center flex-shrink-0">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <FiPackage className="text-gray-400" size={48} />
          </div>
        )}
        {product.featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold"
          >
            DESTACADA
          </motion.div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
          {product.description}
        </p>

        {/* Precio y botón */}
        <div className="flex flex-col gap-3 mt-auto">
          <div className="text-2xl font-black text-primary">
            {product.price}
          </div>
          
          {/* Botón: Agregar al carrito */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleAddToCart}
            className="w-full bg-primary text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-2"
          >
            <FiShoppingCart size={18} />
            AGREGAR AL CARRITO
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
