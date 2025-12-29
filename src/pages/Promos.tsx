import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Promos = () => {
    // Filtrar solo promos
    const promos = products.filter(p => p.category === 'promo');

    // Animaciones staggered para las tarjetas
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
                        Nuestras <span className="text-primary">Promos</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Aprovechá nuestras mejores ofertas y combos. ¡Ideales para compartir!
                    </p>
                </motion.div>

                {/* Grid de productos */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
                >
                    {promos.map((product) => (
                        <motion.div key={product.id} variants={itemVariants} className="h-full">
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA al final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-20"
                >
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            ¿No encontrás lo que buscás?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Mirá nuestras bebidas individuales o escribinos.
                        </p>
                        <a
                            href="https://wa.me/5493858123456?text=Hola%20El%20Rubio!%20Estoy%20buscando%20un%20combo%20específico"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Consultá por WhatsApp
                            </motion.button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Promos;
