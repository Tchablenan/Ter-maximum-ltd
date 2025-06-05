import { motion, useInView } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";
import { useRef } from "react";

export default function MissionVisionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

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
        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Mission & Vision Statement
        </motion.h2>

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
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
            <p className="text-justify leading-relaxed">
              Our mission is to deliver exceptional service, build long-lasting relationships,
              and consistently exceed our clients' expectations through efficient, reliable,
              and cost-effective logistics solutions.
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
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Vision</h3>
            <p className="text-justify leading-relaxed">
              To be the leading global shipping and logistics provider, renowned for exceptional service,
              reliability, and innovation, while fostering sustainable growth, customer satisfaction,
              and employee excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
