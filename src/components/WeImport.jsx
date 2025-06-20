import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import img1 from "../assets/images/14967.jpg";
import img2 from "../assets/images/containersPort.jpg";
import img3 from "../assets/images/hero.jpg";

const images = [img1, img2, img3];

export default function ImportSection() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

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
      className="w-full py-24 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-100"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative">

        {/* DIAPORAMA */}
        <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden rounded-3xl shadow-xl border border-blue-200">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === i ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              animate={index === i ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
            />
          ))}

          {/* Flèches */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 font-bold rounded-full p-2 shadow transition"
          >
            ❮
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 font-bold rounded-full p-2 shadow transition"
          >
            ❯
          </button>

          {/* Pagination */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-blue-800" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* TEXTE */}
        <motion.div
          className="text-gray-900 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("home.weImport.title")}
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {t("home.weImport.p1")}
          </motion.p>
          <motion.p
            className="text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("home.weImport.p2")}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
