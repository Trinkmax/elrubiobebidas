import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi';

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Encontranos en <span className="text-primary">Frías</span>
          </h2>
          <p className="text-xl text-gray-600">
            Estamos siempre abiertos para vos, las 24 horas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Dirección */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-50 p-3 rounded-full">
                  <FiMapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    Dirección
                  </h3>
                  <p className="text-gray-600">
                    San Martin, esq. Velez Sarsfield <br />
                    Frías, Santiago del Estero<br />
                    Argentina
                  </p>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-50 p-3 rounded-full">
                  <FiClock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    Horarios
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-semibold text-primary">Abierto 24 horas</span><br />
                    Todos los días del año
                  </p>
                </div>
              </div>
            </div>

            {/* Teléfono */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-50 p-3 rounded-full">
                  <FiPhone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/5492494661329"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark font-semibold"
                  >
                    +54 9 2494 66-1329
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="https://wa.me/5492494661329?text=Hola%20El%20Rubio!%20Quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-white text-center px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Hacer un Pedido por WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[500px]"
          >
            <div className="bg-white p-4 rounded-2xl shadow-md h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.9467277804497!2d-65.13180452449926!3d-28.63135867566529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzUyLjkiUyA2NcKwMDcnNDUuMiJX!5e0!3m2!1ses-419!2sar!4v1766963713840!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem', minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación El Rubio 24hs"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

