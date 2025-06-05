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

const services = [
  {
    title: "Shipping",
    icon: <FaShippingFast className="text-blue-800 text-3xl mb-3" />,
    description:
      "We provide ocean freight, air freight, and land transportation services tailored to your logistics needs.",
  },
  {
    title: "Import & Export",
    icon: <FaExchangeAlt className="text-blue-800 text-3xl mb-3" />,
    description:
      "Customs clearance, cargo insurance, and freight forwarding handled with compliance and efficiency.",
  },
  {
    title: "General Goods",
    icon: <FaBoxes className="text-blue-800 text-3xl mb-3" />,
    description:
      "Procurement, secure storage, and distribution of general goods across multiple sectors.",
  },
];

const values = [
  {
    title: "Integrity",
    icon: <FaBalanceScale className="text-blue-800 text-2xl mb-2" />,
    description: "We operate with transparency and honesty.",
  },
  {
    title: "Customer Focus",
    icon: <FaUserCheck className="text-blue-800 text-2xl mb-2" />,
    description: "We prioritize our clients' needs and satisfaction.",
  },
  {
    title: "Innovation",
    icon: <FaLightbulb className="text-blue-800 text-2xl mb-2" />,
    description: "We continuously improve our processes and services.",
  },
  {
    title: "Teamwork",
    icon: <FaUsers className="text-blue-800 text-2xl mb-2" />,
    description: "We collaborate to achieve common goals.",
  },
];

export default function ServicePreview() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-gray-900">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          What We Do & What We Stand For
        </motion.h2>

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-8 text-center">
            Our Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ title, description, icon }) => (
              <motion.div
                key={title}
                className="bg-white border border-gray-200 text-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                {icon}
                <h4 className="text-lg font-semibold text-blue-800 mb-2">{title}</h4>
                <p className="text-sm leading-relaxed text-justify">{description}</p>
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
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map(({ title, description, icon }) => (
              <motion.div
                key={title}
                className="bg-white border border-gray-200 text-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition text-center"
                whileHover={{ scale: 1.04 }}
              >
                {icon}
                <h4 className="text-lg font-semibold text-blue-800 mb-2">{title}</h4>
                <p className="text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
