import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import SelmaImg from "../assets/images/selma.jpg";
import IsaacImg from "../assets/images/isaac.png";
import StellaImg from "../assets/images/stel.png";

const teamMembers = [
  {
    name: "Selma Fidelia Korley",
    role: "Marketing And Business Development",
    img: SelmaImg,
  },
  {
    name: "Isaac Nartey",
    role: "Operations Assistant",
    img: IsaacImg,
  },
  {
    name: "Stella Kaka",
    role: "Field Agent",
    img: StellaImg,
  },
];

export default function TeamSlider() {
  return (
    <section id="team" className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">Our Team</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {teamMembers.map(({ name, role, img }, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-36 h-36 object-cover rounded-full mb-4 shadow-md"
                />
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600">{role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
