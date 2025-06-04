import React from "react";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">À propos de Ter Maximum</h1>
      <p className="mb-6 leading-relaxed">
        Ter Maximum Company Ltd est une entreprise spécialisée dans la logistique internationale et le transport basée à Tema, Ghana.
        Fondée avec une vision d’excellence, notre société met à disposition des solutions adaptées pour vos importations, exportations, et transit.
      </p>
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Notre mission</h2>
      <p className="mb-6 leading-relaxed">
        Offrir un service logistique fiable, efficace, et sécurisé, répondant aux besoins spécifiques de chaque client, tout en bâtissant des relations durables.
      </p>
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Nos valeurs</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>Professionnalisme et intégrité</li>
        <li>Respect des délais et qualité</li>
        <li>Innovation et adaptation continue</li>
        <li>Engagement envers la satisfaction client</li>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Notre équipe</h2>
      <p className="mb-6 leading-relaxed">
        Composée de professionnels dynamiques et expérimentés, notre équipe est votre partenaire de confiance pour assurer la réussite de vos opérations logistiques.
      </p>
    </section>
  );
}
