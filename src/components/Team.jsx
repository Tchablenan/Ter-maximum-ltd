import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import SelmaImg from "../assets/images/selma.jpg";
import IsaacImg from "../assets/images/isaac.png";
import StellaImg from "../assets/images/stel.png";

const teamMembers = [
  {
    name: "Selma Fidelia Korley",
    roleKey: "team.selma.role",
    img: SelmaImg,
  },
  {
    name: "Isaac Nartey",
    roleKey: "team.isaac.role",
    img: IsaacImg,
  },
  {
    name: "Stella Kaka",
    roleKey: "team.stella.role",
    img: StellaImg,
  },
];

export default function TeamSlider() {
  const { t } = useTranslation();

  return (
    <section id="team" className="w-full py-20 px-6 bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">{t("home.ourTeam.title")}</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {teamMembers.map(({ name, roleKey, img }, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-all"
              >
                <motion.img
                  src={img}
                  alt={name}
                  className="w-36 h-36 object-cover rounded-full mb-4 shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.h3
                  className="text-lg font-semibold text-gray-800 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {name}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t(roleKey)} {/* Affichage du rôle traduit */}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
