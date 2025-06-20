import { FaRegCheckCircle, FaMapMarkerAlt, FaPeopleCarry, FaHandsHelping, FaClock, FaBoxes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Importation de useTranslation

export default function WhyChooseUs() {
  const { t } = useTranslation(); // Récupérer la fonction de traduction

  const benefits = [
    {
      icon: <FaRegCheckCircle className="text-blue-800 text-3xl mb-4" />,
      title: t("home.whyChooseUs.benefits.experience.title"),
      description: t("home.whyChooseUs.benefits.experience.description"),
    },
    {
      icon: <FaPeopleCarry className="text-blue-800 text-3xl mb-4" />,
      title: t("home.whyChooseUs.benefits.expertise.title"),
      description: t("home.whyChooseUs.benefits.expertise.description"),
    },
    {
      icon: <FaBoxes className="text-blue-800 text-3xl mb-4" />,
      title: t("home.whyChooseUs.benefits.flexibility.title"),
      description: t("home.whyChooseUs.benefits.flexibility.description"),
    },
    {
      icon: <FaClock className="text-blue-800 text-3xl mb-4" />,
      title: t("home.whyChooseUs.benefits.reliability.title"),
      description: t("home.whyChooseUs.benefits.reliability.description"),
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-800 text-3xl mb-4" />,
      title: t("home.whyChooseUs.benefits.strategicLocation.title"),
      description: t("home.whyChooseUs.benefits.strategicLocation.description"),
    },
    {
      icon: <FaHandsHelping className="text-blue-800 text-3xl mb-4" />,
      title: t("home.whyChooseUs.benefits.customerFocus.title"),
      description: t("home.whyChooseUs.benefits.customerFocus.description"),
    },
  ];

  return (
    <motion.section
      className="w-full py-20 px-6 bg-gradient-to-r from-indigo-100 via-blue-100 to-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          {t("home.whyChooseUs.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all transform hover:scale-105 duration-300 hover:bg-blue-50"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center text-center">
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
                  {icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-4">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
