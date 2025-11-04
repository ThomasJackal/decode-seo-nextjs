import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Avocats & Défense — Observatoire du Syntaxerrorisme",
  description:
    "Découvrez les avocats et juristes ayant défendu ou analysé les affaires de syntaxerrorisme : leurs arguments, stratégies et implications éthiques.",
  keywords: [
    "syntaxerrorisme",
    "avocats syntaxerrorisme",
    "défense syntaxerrorisme",
    "juristes syntaxerrorisme",
    "procès syntaxerrorisme",
    "droit numérique",
    "criminologie du code",
  ],
  openGraph: {
    title: "Avocats & Défense — Observatoire du Syntaxerrorisme",
    description:
      "Profils et analyses des avocats ayant défendu les accusés dans les procès liés au syntaxerrorisme.",
    url: `${BASE_URL}/portraits/lawyers`,
    siteName: "Observatoire du Syntaxerrorisme",
    type: "profile",
    images: [
      {
        url: `${BASE_URL}/og-images/avocats.jpg`,
        width: 1200,
        height: 630,
        alt: "Avocats et défense du syntaxerrorisme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avocats & Défense — Observatoire du Syntaxerrorisme",
    description:
      "Découvrez les figures de la défense dans les affaires de syntaxerrorisme : stratégie, éthique et jurisprudence.",
    images: [`${BASE_URL}/og-images/avocats.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/portraits/lawyers`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AvocatsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/portraits/lawyers`,
    name: "Avocats & Défense — Observatoire du Syntaxerrorisme",
    description:
      "Présentation des avocats et juristes impliqués dans les affaires de syntaxerrorisme, avec leurs positions et argumentaires clés.",
    mainEntity: [
      {
        "@type": "Person",
        name: "Maître Claire Moreau",
        jobTitle: "Avocate pénaliste spécialisée en droit numérique",
        description:
          "Défenseure dans plusieurs procès emblématiques du syntaxerrorisme, elle plaide pour une interprétation symbolique du code.",
        nationality: "Française",
      },
      {
        "@type": "Person",
        name: "Maître Karim El-Hadi",
        jobTitle: "Juriste en cyberdéfense",
        description:
          "Connu pour avoir introduit la notion de 'responsabilité algorithmique partagée' dans le débat juridique sur le syntaxerrorisme.",
        nationality: "Française",
      },
    ],
  };

  const avocats = [
    {
      name: "Maître Claire Moreau",
      title: "Avocate pénaliste — Paris",
      img: "/images/avocats/moreau.webp",
      description:
        "Spécialiste du droit numérique et de la criminalité syntaxique. Elle milite pour une distinction claire entre faute de logique et intention malveillante.",
      keywords: ["droit numérique", "défense", "procès 2022"],
    },
    {
      name: "Maître Karim El-Hadi",
      title: "Juriste en cyberdéfense — Lyon",
      img: "/images/avocats/el-hadi.webp",
      description:
        "Auteur du concept de 'responsabilité algorithmique partagée'. Son approche repose sur la coopération entre humain et machine dans la responsabilité pénale.",
      keywords: ["cyberdéfense", "algorithme", "éthique"],
    },
    {
      name: "Maître Sofia Roux",
      title: "Avocate en droit des technologies — Marseille",
      img: "/images/avocats/roux.webp",
      description:
        "Représente plusieurs accusés anonymes. Elle plaide pour une réforme du Code pénal intégrant les notions de syntaxe et de compilation comme preuve.",
      keywords: ["jurisprudence", "code pénal", "réforme"],
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* HEADER */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Avocats & <span className="text-indigo-600">Défense</span>
        </h1>
        <p className="mt-3 text-gray-700 text-lg max-w-3xl mx-auto">
          Figures de la <strong>défense du syntaxerrorisme</strong>, ces avocats
          et juristes interrogent la frontière entre erreur technique et
          responsabilité morale.
        </p>
      </header>

      {/* LAWYERS GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {avocats.map(({ name, title, img, description, keywords }) => (
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
          Une défense en mutation
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Ces avocats incarnent une{" "}
          <strong>nouvelle approche du droit numérique</strong>, où la
          compréhension du langage machine devient une compétence juridique
          essentielle. Leurs plaidoiries posent la question du libre arbitre
          dans un monde de scripts et de syntaxe.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Explorer d’autres rubriques
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/juridique"
            className="p-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-all text-center"
          >
            Dossier juridique
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
            Bibliographie & Médias
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
