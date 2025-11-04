import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Politiques & Influence — Observatoire du Syntaxerrorisme",
  description:
    "Analyse du rôle des figures politiques dans la législation et les débats autour du syntaxerrorisme : lois, décisions et controverses.",
  keywords: [
    "syntaxerrorisme",
    "politique syntaxerrorisme",
    "lois syntaxerrorisme",
    "débat parlementaire",
    "responsabilité numérique",
    "gouvernance du code",
    "cyberéthique",
  ],
  openGraph: {
    title: "Politiques & Influence — Observatoire du Syntaxerrorisme",
    description:
      "Études et portraits des figures politiques ayant influencé la législation sur le syntaxerrorisme.",
    url: `${BASE_URL}/politiques`,
    siteName: "Observatoire du Syntaxerrorisme",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/og-images/politiques.jpg`,
        width: 1200,
        height: 630,
        alt: "Débat politique sur le syntaxerrorisme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politiques & Influence — Observatoire du Syntaxerrorisme",
    description:
      "Analyse du rôle des responsables politiques dans la création et l’application des lois liées au syntaxerrorisme.",
    images: [`${BASE_URL}/og-images/politiques.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/politiques`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitiquesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/politiques`,
    name: "Politiques & Influence — Observatoire du Syntaxerrorisme",
    description:
      "Présentation des personnalités politiques et décideurs impliqués dans la régulation et le débat sur le syntaxerrorisme.",
    mainEntity: [
      {
        "@type": "Person",
        name: "Élise Duret",
        jobTitle: "Députée — Commission des affaires numériques",
        description:
          "Autrice de la première proposition de loi sur la régulation syntaxique dans les systèmes ouverts.",
        nationality: "Française",
      },
      {
        "@type": "Person",
        name: "Jean-Michel Renaud",
        jobTitle: "Sénateur — Groupe de réflexion sur l'éthique du code",
        description:
          "Connu pour sa position en faveur d’un Code pénal du numérique.",
        nationality: "Française",
      },
    ],
  };

  const politiques = [
    {
      name: "Élise Duret",
      title: "Députée — Commission des affaires numériques",
      img: "/images/politiques/duret.webp",
      description:
        "Autrice de la première proposition de loi sur la 'responsabilité syntaxique'. Son travail a servi de base aux décrets de 2023 sur la régulation des scripts publics.",
      keywords: ["loi numérique", "responsabilité", "innovation légale"],
    },
    {
      name: "Jean-Michel Renaud",
      title: "Sénateur — Éthique du code",
      img: "/images/politiques/renaud.webp",
      description:
        "Porte-parole du groupe de réflexion sur la codification éthique. Favorable à la création d’un 'Code pénal du numérique'.",
      keywords: ["éthique", "législation", "cyberdroit"],
    },
    {
      name: "Sonia Almeida",
      title: "Ministre déléguée au Numérique",
      img: "/images/politiques/almeida.webp",
      description:
        "A lancé la campagne de prévention 'Syntaxe responsable' en partenariat avec plusieurs écoles d’ingénieurs.",
      keywords: ["prévention", "campagne", "éducation"],
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* HEADER */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Politiques & <span className="text-indigo-600">Influence</span>
        </h1>
        <p className="mt-3 text-gray-700 text-lg max-w-3xl mx-auto">
          Portraits et analyses des <strong>figures politiques</strong> ayant
          marqué la régulation et le débat public autour du{" "}
          <em>syntaxerrorisme</em>.
        </p>
      </header>

      {/* POLITICIANS GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {politiques.map(({ name, title, img, description, keywords }) => (
          <article
            key={name}
            className="bg-white rounded-2xl shadow-md overflow-hidden group transition-all hover:shadow-xl"
          >
            <div className="relative h-56">
              <Image
                src={img}
                alt={`Portrait de ${name}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-500">{title}</p>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {keywords.map((k) => (
                  <span
                    key={k}
                    className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CONTEXT SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Le débat politique autour du code
        </h2>
        <p className="text-gray-700 leading-relaxed">
          La régulation du <strong>syntaxerrorisme</strong> révèle la tension
          entre innovation technologique et contrôle législatif. Les décideurs
          politiques tentent de concilier sécurité numérique, liberté de
          programmation et responsabilité morale du codeur.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Explorer d’autres rubriques
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/portraits/lawyers"
            className="p-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-all text-center"
          >
            Avocats & Défense
          </Link>
          <Link
            href="/portraits"
            className="p-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-all text-center"
          >
            Condamnés & Portraits
          </Link>
          <Link
            href="/medias"
            className="p-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-all text-center"
          >
            Médias & Bibliographie
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
