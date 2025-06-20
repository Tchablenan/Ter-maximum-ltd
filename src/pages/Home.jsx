import React from "react";
import ServicePreview from "../components/ServicesPreview";
import shippingPlanes from "../assets/images/shippingPlanes.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import MissionVisionSection from "../components/MissionVisionSection";
import WeImport from "../components/WeImport";
import WhyChooseUs from "../components/WhyCooseUs";
import Team from "../components/Team";



export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="space-y-16 ">
      {/* About Section */}
      <motion.section
        id="about"
        className="relative w-full py-24 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full ">
            <img
              src={shippingPlanes}
              alt="About Ter Maximum Ltd"
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              {t("home.about.title")}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
              {t("home.about.p1")}
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              {t("home.about.p2")}
            </p>
          </div>
        </div>
      </motion.section>
      <div id="services" className="-mt-25"></div>
      <MissionVisionSection />
      {/* Services Section */}
      <div id="services" className="-mt-32">
        <ServicePreview />
      </div>
      <div className="-mt-16"></div>
      {/* Import Section */}
      <div className="w-full -mt-23">
        <WeImport />
      </div>

      <div className="-mt-23">
        <WhyChooseUs />
      </div>
      {/* Team Section */}
      <div className="w-full -mt-32">
        <Team />
      </div>
      {/* Contact Section */}
      <div className="w-full -mt-23"></div>
      {/* Contact Section */}
    <motion.section
      id="contact"
      className="w-full bg-blue-50 py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-10">
          {t("home.contact.title")}
        </h2>

        <form
          action="https://formspree.io/f/xpwrzvbw"
          method="POST"
          className="bg-white shadow-md rounded-lg p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <motion.input
              type="text"
              name="name"
              placeholder={t("home.contact.name")}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              whileFocus={{ scale: 1.05 }}
              whileHover={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder={t("home.contact.email")}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              whileFocus={{ scale: 1.05 }}
              whileHover={{ scale: 1.02 }}
            />
          </div>
          <motion.input
            type="text"
            name="subject"
            placeholder={t("home.contact.subject")}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            whileFocus={{ scale: 1.05 }}
            whileHover={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            placeholder={t("home.contact.message")}
            rows="5"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            whileFocus={{ scale: 1.05 }}
            whileHover={{ scale: 1.02 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition transform duration-300 ease-in-out"
            whileHover={{ scale: 1.1, backgroundColor: "#3b6cb7" }}
            whileTap={{ scale: 0.95 }}
          >
            {t("home.contact.send")}
          </motion.button>
        </form>
      </div>
    </motion.section>
      <div className="w-full -mt-16"></div>
      {/* Map Section */}
      <motion.section
        id="map"
        className="w-full py-10 px-6 bg-blue-50"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            {t("home.map.title")}
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Ter Maximum Ltd Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.772084763791!2d0.007713214330944703!3d5.651646995934058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfefffb6eb7290f0b%3A0x89d8d390d23c8b1!2sTema%20Port!5e0!3m2!1sfr!2stg!4v1689891245678!5m2!1sfr!2stg"
            ></iframe>
          </div>
        </div>
      </motion.section>
      <div className="w-full -mt-20"></div>
    </div>
  );
}
