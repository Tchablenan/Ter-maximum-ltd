import React from "react";
import ServicePreview from "../components/ServicesPreview";

import importImg from "../assets/images/3d-render-d-un-parc-de-vehicules-de-livraison.jpg";
import shippingPlanes from "../assets/images/shippingPlanes.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* About Section */}
      <motion.section
        id="about"
        className="w-full py-20 bg-gray-50"
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
              About Ter Maximum Ltd
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
              Ter Maximum Ltd is a logistics and supply chain company based in
              Tema, Ghana. We provide global shipping, import/export services,
              and general goods handling with a commitment to reliability,
              efficiency, and customer satisfaction.
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              With our expert team and strategic location near the port, we are
              your trusted partner for all things logistics. Our solutions are
              designed to optimize your operations and deliver results—locally
              and internationally.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="w-full py-20 bg-gray"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="w-full px-4 md:px-8 lg:px-12 text-gray-900 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Mission & Vision Statement
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-gray-50 text-gray-800 rounded-lg shadow-md p-6"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Our Mission
              </h3>
              <p className="text-justify leading-relaxed">
                Our mission is to deliver exceptional service, build
                long-lasting relationships, and consistently exceed our clients'
                expectations through efficient, reliable, and cost-effective
                logistics solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 text-gray-800 rounded-lg shadow-md p-6"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Our Vision
              </h3>
              <p className="text-justify leading-relaxed">
                To be the leading global shipping and logistics provider,
                renowned for exceptional service, reliability, and innovation,
                while fostering sustainable growth, customer satisfaction, and
                employee excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <div id="services" className="-mt-16">
        <ServicePreview />
      </div>

      {/* Import Section */}
      <motion.section
        className="w-full py-20 bg-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src={importImg}
              alt="Imported Vehicles"
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>

          <div className="text-gray-900">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Efficient. Reliable. Global.
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              We specialize in seamless customs clearing and forwarding for
              automobiles, heavy machinery, and other import categories. Whether
              it's one vehicle or an entire fleet, we handle the process with
              care and precision.
            </p>
            <p className="text-base leading-relaxed">
              With years of experience in the logistics industry, our team
              guarantees safe, timely, and efficient delivery of your imports
              from any global port.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="w-full bg-white py-20 px-6"
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
            {["Experience", "Expertise", "Flexibility", "Reliability", "Strategic Location", "Customer Focus"].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {item}
                </h3>
                <p className="text-gray-700 text-justify">
                  Description for {item} goes here.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="w-full bg-gray-100 py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-10">
            Contact Us
          </h2>

          <form
            action="https://formspree.io/f/xpwrzvbw"
            method="POST"
            className="bg-white shadow-md rounded-lg p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        id="map"
        className="w-full py-10 px-6 bg-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Find Us on the Map
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
    </div>
  );
}
