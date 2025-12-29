import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/logo.png"
                alt="El Rubio 24hs"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">
                  El Rubio <span className="text-primary">24hs</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Tu local de confianza en Frías. Las mejores bebidas y promos, siempre disponibles para vos.
            </p>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Nuestras Promos
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Ubicación
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Seguinos</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/elrubio24hs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://facebook.com/elrubio24hs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <FiFacebook size={20} />
              </a>
            </div>
            <div className="flex items-start space-x-2 text-sm text-gray-400">
              <FiMapPin className="mt-1 flex-shrink-0" />
              <span>Frías, Santiago del Estero, Argentina</span>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm"
        >
          <p>
            &copy; {currentYear} El Rubio 24hs. Todos los derechos reservados.
          </p>
          <p className="mt-2">
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

