import { FaRegCheckCircle, FaMapMarkerAlt, FaPeopleCarry, FaHandsHelping, FaClock, FaBoxes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function WhyChooseUs() {
  const { t } = useTranslation();
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
  className="w-full bg-gray-50 py-20 px-6"
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
          className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex flex-col items-center text-center">
            {icon}
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
            <p className="text-gray-700 text-justify text-sm">{description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>
    );
}