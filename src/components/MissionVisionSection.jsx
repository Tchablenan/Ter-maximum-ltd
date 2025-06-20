import { motion, useInView } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function MissionVisionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const { t } = useTranslation();

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative w-full py-24 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
    >
      {/* Halo lumineux arrière-plan */}
      <motion.div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-3xl animate-pulse"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : {}}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl animate-ping"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 2 }}
      />

      <div className="relative z-10 px-4 md:px-8 lg:px-16 text-gray-900 text-center">
      

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* MISSION */}
          <motion.div
            className="group relative overflow-hidden text-left p-10 rounded-[2.5rem] bg-white/80 shadow-xl border border-blue-200 backdrop-blur-lg transition-all duration-500 hover:bg-blue-50/90"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
            }}
          >
            <div className="flex justify-center mb-5">
              <motion.div
                className="bg-blue-100 p-5 rounded-full text-blue-800 text-4xl shadow-lg transition-transform group-hover:rotate-[360deg]"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <FaBullseye />
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              {t("MissionVisionSection.mission.title")}
            </h3>
            <p className="text-gray-700 text-justify leading-relaxed tracking-wide">
              {t("MissionVisionSection.mission.description")}
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            className="group relative overflow-hidden text-left p-10 rounded-[2.5rem] bg-white/80 shadow-xl border border-indigo-200 backdrop-blur-lg transition-all duration-500 hover:bg-indigo-50/90"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{
              clipPath: "polygon(0% 0%, 100% 10%, 100% 100%, 0% 90%)",
            }}
          >
            <div className="flex justify-center mb-5">
              <motion.div
                className="bg-indigo-100 p-5 rounded-full text-indigo-800 text-4xl shadow-lg transition-transform group-hover:rotate-[360deg]"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <FaEye />
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
              {t("MissionVisionSection.vision.title")}
            </h3>
            <p className="text-gray-700 text-justify leading-relaxed tracking-wide">
              {t("MissionVisionSection.vision.description")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
