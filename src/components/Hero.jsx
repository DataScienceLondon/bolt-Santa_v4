import { motion } from 'framer-motion';
import Snowfall from './Snowfall';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Snowfall />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-santa-red mb-8">
          Santa's Workshop
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience the magic of Christmas
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-santa-green text-white px-8 py-4 rounded-full text-lg"
          onClick={() => document.querySelector('#contact-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Write to Santa
        </motion.button>
      </motion.div>
    </section>
  );
}
