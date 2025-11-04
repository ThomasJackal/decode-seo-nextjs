import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Victimes du Syntaxerrorisme — Observatoire",
  description:
    "Découvrez les victimes du syntaxerrorisme : entreprises, développeurs et particuliers affectés par des erreurs ou manipulations de code à fort impact.",
  keywords: [
    "syntaxerrorisme",
    "victimes syntaxerrorisme",
    "préjudice numérique",
    "affaires syntaxerrorisme",
    "impact code",
    "observatoire syntaxerrorisme",
    "responsabilité",
  ],
  openGraph: {
    title: "Victimes du Syntaxerrorisme — Observatoire",
    description:
      "Profils des victimes du syntaxerrorisme et impact sur la société, les entreprises et la législation.",
    url: `${BASE_URL}/victimes`,
    siteName: "Observatoire du Syntaxerrorisme",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/og-images/victimes.jpg`,
        width: 1200,
        height: 630,
        alt: "Victimes du syntaxerrorisme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victimes du Syntaxerrorisme — Observatoire",
    description:
      "Explorez les profils et témoignages des victimes impactées par des erreurs ou manipulations syntaxiques.",
    images: [`${BASE_URL}/og-images/victimes.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/victimes`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VictimesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/victimes`,
    name: "Victimes du Syntaxerrorisme",
    description:
      "Liste et profils des victimes du syntaxerrorisme, détaillant les impacts et préjudices subis.",
    mainEntity: [
      {
        "@type": "Person",
        name: "Julien M.",
        description:
          "Développeur freelance impacté par un bug syntaxique introduit par un tiers dans un projet collaboratif.",
        nationality: "Française",
      },
      {
        "@type": "Organization",
        name: "Startup Codify",
        description:
          "Entreprise affectée par une injection de code incorrect, entraînant des pertes financières et des erreurs clients.",
      },
    ],
  };

  const victimes = [
    {
      name: "Julien M.",
      type: "Développeur freelance",
      year: "2023",
      img: "/images/victimes/julien.webp",
      description:
        "Impacté par un code mal formé dans un projet open-source collaboratif, causant un retard majeur et perte de contrats.",
    },
    {
      name: "Startup Codify",
      type: "Entreprise tech",
      year: "2022",
      img: "/images/victimes/codify.webp",
      description:
        "Subit une injection de scripts incorrects dans ses serveurs de production, entraînant des erreurs critiques pour les clients.",
    },
    {
      name: "Claire B.",
      type: "Chercheuse indépendante",
      year: "2021",
      img: "/images/victimes/claire.webp",
      description:
        "Ses publications et outils de recherche ont été corrompus par une manipulation syntaxique malveillante, affectant la crédibilité de son travail.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* HEADER */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Victimes du <span className="text-indigo-600">Syntaxerrorisme</span>
        </h1>
        <p className="mt-3 text-gray-700 text-lg max-w-3xl mx-auto">
          Découvrez les parcours et témoignages des{" "}
          <strong>victimes du syntaxerrorisme</strong> : individus et
          entreprises impactés par erreurs ou manipulations de code à fort
          effet.
        </p>
      </header>

      {/* VICTIMS GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {victimes.map(({ name, type, img, description, year }) => (
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
              <p className="text-sm text-gray-500">
                {type} — {year}
              </p>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* CONTEXT SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Contexte et enjeux
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Les victimes du syntaxerrorisme illustrent le{" "}
          <strong>risque systémique des erreurs syntaxiques</strong> dans les
          projets numériques. Chaque incident montre l’importance de la
          prévention, de la surveillance et de la responsabilité partagée dans
          le développement et l’utilisation de logiciels.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Explorer d’autres rubriques
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/portraits"
            className="p-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-all text-center"
          >
            Condamnés & Portraits
          </Link>
          <Link
            href="/portraits/lawyers"
            className="p-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-all text-center"
          >
            Avocats & Défense
          </Link>
          <Link
            href="/politiques"
            className="p-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-all text-center"
          >
            Politiques & Influence
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
