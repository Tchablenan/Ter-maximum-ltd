import React from "react";

const services = [
  {
    title: "Importation & Exportation",
    description:
      "Gestion complète de vos marchandises à l’import comme à l’export, avec respect des normes et formalités douanières.",
  },
  {
    title: "Transit International",
    description:
      "Solutions de transit personnalisées pour un acheminement rapide et sécurisé vers votre destination finale.",
  },
  {
    title: "Manutention & Stockage",
    description:
      "Services de manutention professionnelle et stockage dans des entrepôts sécurisés.",
  },
  {
    title: "Logistique & Distribution",
    description:
      "Planification et gestion de la chaîne logistique pour optimiser vos flux et coûts.",
  },
];

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Nos Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map(({ title, description }) => (
          <div key={title} className="border rounded p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
