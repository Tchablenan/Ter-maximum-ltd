import { FaRegCheckCircle, FaMapMarkerAlt, FaPeopleCarry, FaHandsHelping, FaClock, FaBoxes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    const benefits = [
  {
    icon: <FaRegCheckCircle className="text-blue-800 text-3xl mb-4" />,
    title: "Experience",
    description: "Proven track record in logistics and supply chain management across multiple sectors.",
  },
  {
    icon: <FaPeopleCarry className="text-blue-800 text-3xl mb-4" />,
    title: "Expertise",
    description: "A knowledgeable and dedicated team ensuring the best service quality for every client.",
  },
  {
    icon: <FaBoxes className="text-blue-800 text-3xl mb-4" />,
    title: "Flexibility",
    description: "Tailored logistics solutions designed to meet your specific business needs and goals.",
  },
  {
    icon: <FaClock className="text-blue-800 text-3xl mb-4" />,
    title: "Reliability",
    description: "Timely, secure and traceable delivery processes that give you peace of mind.",
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-800 text-3xl mb-4" />,
    title: "Strategic Location",
    description: "Located near Tema Port, we reduce delays and cut logistics costs significantly.",
  },
  {
    icon: <FaHandsHelping className="text-blue-800 text-3xl mb-4" />,
    title: "Customer Focus",
    description: "Our services are built around your satisfaction, ensuring consistent quality at every step.",
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
      Why Choose Ter Maximum Ltd?
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