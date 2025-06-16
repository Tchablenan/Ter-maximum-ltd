import React from "react";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaExchangeAlt,
  FaBoxes,
  FaHandsHelping,
  FaUserCheck,
  FaLightbulb,
  FaUsers,
  FaBalanceScale
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Importation de useTranslation pour la traduction

export default function ServicePreview() {
  const { t } = useTranslation(); // Récupérer la fonction de traduction

  const services = [
    {
      key: "shipping", // Clé pour la traduction
      icon: <FaShippingFast className="text-blue-800 text-3xl mb-3" />,
      description: "We provide ocean freight, air freight, and land transportation services tailored to your logistics needs.",
    },
    {
      key: "importExport", // Clé pour la traduction
      icon: <FaExchangeAlt className="text-blue-800 text-3xl mb-3" />,
      description: "Customs clearance, cargo insurance, and freight forwarding handled with compliance and efficiency.",
    },
    {
      key: "generalGoods", // Clé pour la traduction
      icon: <FaBoxes className="text-blue-800 text-3xl mb-3" />,
      description: "Procurement, secure storage, and distribution of general goods across multiple sectors.",
    },
  ];

  const values = [
    {
      key: "integrity", // Clé pour la traduction
      icon: <FaBalanceScale className="text-blue-800 text-2xl mb-2" />,
      description: "We operate with transparency and honesty.",
    },
    {
      key: "customerFocus", // Clé pour la traduction
      icon: <FaUserCheck className="text-blue-800 text-2xl mb-2" />,
      description: "We prioritize our clients' needs and satisfaction.",
    },
    {
      key: "innovation", // Clé pour la traduction
      icon: <FaLightbulb className="text-blue-800 text-2xl mb-2" />,
      description: "We continuously improve our processes and services.",
    },
    {
      key: "teamwork", // Clé pour la traduction
      icon: <FaUsers className="text-blue-800 text-2xl mb-2" />,
      description: "We collaborate to achieve common goals.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-gray-900">

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-8 text-center">
            {t("home.services.title")} {/* Traduction du titre des services */}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ key, description, icon }) => (
              <motion.div
                key={key}
                className="bg-white border border-gray-200 text-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                {icon}
                <h4 className="text-lg font-semibold text-blue-800 mb-2">
                  {t(`home.services.${key}.title`)} {/* Traduction dynamique du titre de chaque service */}
                </h4>
                <p className="text-sm leading-relaxed text-justify">
                  {t(`home.services.${key}.description`)} {/* Traduction dynamique de la description */}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* VALUES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-8 text-center">
            {t("home.values.title")} {/* Traduction dynamique du titre des valeurs */}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map(({ key, description, icon }) => (
              <motion.div
                key={key}
                className="bg-white border border-gray-200 text-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition text-center"
                whileHover={{ scale: 1.04 }}
              >
                {icon}
                <h4 className="text-lg font-semibold text-blue-800 mb-2">
                  {t(`home.values.${key}.title`)} {/* Traduction dynamique du titre de chaque valeur */}
                </h4>
                <p className="text-sm leading-relaxed">
                  {t(`home.values.${key}.description`)} {/* Traduction dynamique de la description de chaque valeur */}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
