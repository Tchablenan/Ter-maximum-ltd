import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Import des images
import welcomeImg from "../assets/images/logistique.jpg";
import importImg from "../assets/images/containersPort.jpg";
import contactImg from "../assets/images/sourire-adolescent-tenant-des-boites-en-carton.jpg";

export default function Header() {
  const { t } = useTranslation();

  // Définir les slides
  const slides = [
    {
      image: welcomeImg,
      title: t("header.welcomeTitle"), // Texte traduit
      subtitle: t("header.welcomeSubtitle"), // Texte traduit
    },
    {
      image: importImg,
      title: t("header.importTitle"), // Texte traduit
      subtitle: t("header.importSubtitle"), // Texte traduit
    },
    {
      image: contactImg,
      title: t("header.contactTitle"), // Texte traduit
      subtitle: t("header.contactSubtitle"), // Texte traduit
      cta: true,
    },
  ];

  return (
    <header className="relative h-[90vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 z-0" />
              <div className="relative z-10 text-center text-white px-6 md:px-12 max-w-4xl">
                <motion.h1
                  className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4 transition-transform transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="text-base md:text-lg drop-shadow-sm leading-relaxed text-justify transition-all"
                  whileHover={{ color: "#3B82F6" }} // Changer la couleur au survol
                  transition={{ duration: 0.3 }}
                >
                  {slide.subtitle}
                </motion.p>
                {slide.cta && (
                  <motion.a
                    href="#contact"
                    className="inline-block mt-6 px-6 py-3 bg-blue-900 hover:bg-blue-800 transition text-white rounded shadow transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t("header.contactButton")} {/* Traduction du bouton */}
                  </motion.a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
