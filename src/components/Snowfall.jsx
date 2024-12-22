import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute w-2 h-2 bg-white rounded-full"
          initial={{ x: `${flake.x}vw`, y: -20 }}
          animate={{
            y: '100vh',
            x: [
              `${flake.x}vw`,
              `${flake.x + 10}vw`,
              `${flake.x - 10}vw`,
              `${flake.x}vw`
            ]
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}
