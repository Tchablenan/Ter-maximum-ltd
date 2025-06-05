import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "../assets/images/14967.jpg";
import img2 from "../assets/images/containersPort.jpg";
import img3 from "../assets/images/hero.jpg";

const images = [img1, img2, img3];

export default function ImportSection() {
  const [index, setIndex] = useState(0);

  // Défilement automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setIndex((prev) => (prev + 1) % images.length);
  const goTo = (i) => setIndex(i);

  return (
    <motion.section
      className="w-full py-20 bg-gray-50"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative">
        {/* DIAPORAMA */}
         <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden rounded-xl shadow-md">

          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === i ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* Flèches */}
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white"
          >
            ❮
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white"
          >
            ❯
          </button>

          {/* Points de pagination */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-blue-900" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* TEXTE */}
       <div className="text-gray-900 text-center md:text-left mt-6 md:mt-0">

          <motion.h2
            className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-blue-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Efficient. Reliable. Global.
          </motion.h2>
          <p className="text-lg leading-relaxed mb-4">
            We specialize in seamless customs clearing and forwarding for
            automobiles, heavy machinery, and other import categories. Whether
            it's one vehicle or an entire fleet, we handle the process with
            care and precision.
          </p>
          <p className="text-base leading-relaxed">
            With years of experience in the logistics industry, our team
            guarantees safe, timely, and efficient delivery of your imports
            from any global port.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
