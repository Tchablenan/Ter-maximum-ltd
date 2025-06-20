import React from "react";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaExchangeAlt,
  FaBoxes,
  FaUserCheck,
  FaLightbulb,
  FaUsers,
  FaBalanceScale
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ServicePreview() {
  const { t } = useTranslation();

  const services = [
    {
      key: "shipping",
      icon: <FaShippingFast />,
    },
    {
      key: "importExport",
      icon: <FaExchangeAlt />,
    },
    {
      key: "generalGoods",
      icon: <FaBoxes />,
    },
  ];

  const values = [
    {
      key: "integrity",
      icon: <FaBalanceScale />,
    },
    {
      key: "customerFocus",
      icon: <FaUserCheck />,
    },
    {
      key: "innovation",
      icon: <FaLightbulb />,
    },
    {
      key: "teamwork",
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-gray-900">

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-12 text-center underline underline-offset-8">
            {t("home.services.title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {services.map(({ key, icon }) => (
              <motion.div
                key={key}
                className="group relative p-8 text-center text-gray-800 bg-white rounded-[2rem] shadow-lg border border-blue-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)"
                }}
              >
                <motion.div
                  className="text-4xl text-blue-800 mb-4 transition-transform"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {icon}
                </motion.div>
                <h4 className="text-xl font-semibold mb-3">
                  {t(`home.services.${key}.title`)}
                </h4>
                <p className="text-sm text-justify leading-relaxed">
                  {t(`home.services.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* VALUES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-12 text-center underline underline-offset-8">
            {t("home.values.title")}
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map(({ key, icon }, i) => (
              <motion.div
                key={key}
                className="group relative p-6 bg-white text-center rounded-3xl shadow-md border border-indigo-200 transition-all hover:shadow-xl hover:-translate-y-1 hover:bg-indigo-50"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <motion.div
                  className="text-3xl text-indigo-800 mb-4"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {icon}
                </motion.div>
                <h4 className="text-lg font-semibold text-indigo-900 mb-2">
                  {t(`home.values.${key}.title`)}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t(`home.values.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
