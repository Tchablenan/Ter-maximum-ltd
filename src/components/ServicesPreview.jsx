import React from "react";

const services = [
  {
    title: "Shipping",
    description:
      "We provide ocean freight, air freight, and land transportation services tailored to your logistics needs.",
  },
  {
    title: "Import & Export",
    description:
      "Customs clearance, cargo insurance, and freight forwarding handled with compliance and efficiency.",
  },
  {
    title: "General Goods",
    description:
      "Procurement, secure storage, and distribution of general goods across multiple sectors.",
  },
];

const values = [
  {
    title: "Integrity",
    description: "We operate with transparency and honesty.",
  },
  {
    title: "Customer Focus",
    description: "We prioritize our clients' needs and satisfaction.",
  },
  {
    title: "Innovation",
    description: "We continuously improve our processes and services.",
  },
  {
    title: "Teamwork",
    description: "We collaborate to achieve common goals.",
  },
];

export default function ServicePreview() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services & Values</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Services à gauche */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Our Services</h3>
            <div className="space-y-6">
              {services.map(({ title, description }) => (
                <div
                  key={title}
                  className="bg-white border border-gray-200 text-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">{title}</h4>
                  <p className="text-sm leading-relaxed text-justify">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values à droite, même style que services */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Our Values</h3>
            <div className="space-y-6">
              {values.map(({ title, description }) => (
                <div
                  key={title}
                  className="bg-white border border-gray-200 text-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">{title}</h4>
                  <p className="text-sm leading-relaxed text-justify">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
