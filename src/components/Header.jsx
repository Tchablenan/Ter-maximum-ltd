import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import welcomeImg from "../assets/images/logistique.jpg";
import importImg from "../assets/images/containersPort.jpg";
import contactImg from "../assets/images/sourire-adolescent-tenant-des-boites-en-carton.jpg";

export default function Header() {
  const slides = [
    {
      image: welcomeImg,
      title: "Welcome to Ter Maximum Ltd",
      subtitle:
        "We are a leading logistics and supply chain management company based in Tema, Ghana. We specialize in shipping, import/export, and general goods handling — providing efficient, reliable, and customized solutions for global trade.",
    },
    {
      image: importImg,
      title: "We Import Automobiles & Machinery",
      subtitle:
        "We handle the seamless importation of vehicles, equipment and heavy-duty machinery with speed, care and professionalism.",
    },
    {
      image: contactImg,
      title: "Let’s Work Together",
      subtitle: "Have a question or need a custom quote?",
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
                <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg drop-shadow-sm leading-relaxed text-justify">
                  {slide.subtitle}
                </p>
                {slide.cta && (
                  <a
                    href="#contact"
                    className="inline-block mt-6 px-6 py-3 bg-blue-900 hover:bg-blue-800 transition text-white rounded shadow"
                  >
                    Contact us
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
