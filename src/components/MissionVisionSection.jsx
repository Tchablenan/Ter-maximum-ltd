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
      className="relative w-full py-20 bg-gray-50 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background parallax zoom */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent scale-125 blur-xl"
        initial={{ opacity: 0, scale: 1 }}
        animate={isInView ? { opacity: 0.3, scale: 1.05 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <div className="relative w-full px-4 md:px-8 lg:px-12 text-gray-900 text-center z-10">
        

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <motion.div
            className="bg-white text-gray-800 rounded-xl shadow-md p-8 group relative"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="bg-blue-100 p-4 rounded-full text-blue-800 text-4xl shadow transition-transform group-hover:rotate-[360deg]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.85, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <FaBullseye />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">{t("MissionVisionSection.mission.title")}</h3>
            <p className="text-justify leading-relaxed">
              {t("MissionVisionSection.mission.description")}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white text-gray-800 rounded-xl shadow-md p-8 group relative"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="bg-blue-100 p-4 rounded-full text-blue-800 text-4xl shadow transition-transform group-hover:rotate-[360deg]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.85, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <FaEye />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">{t("MissionVisionSection.vision.title")}</h3>
            <p className="text-justify leading-relaxed">
              {t("MissionVisionSection.vision.description")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
