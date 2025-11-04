import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Bibliographie & Médias — Observatoire du Syntaxerrorisme",
  description:
    "Découvrez la bibliographie complète, les articles, films et publications traitant du syntaxerrorisme : analyses critiques, ouvrages et médias de référence.",
  keywords: [
    "syntaxerrorisme",
    "bibliographie syntaxerrorisme",
    "médias syntaxerrorisme",
    "ouvrages syntaxerrorisme",
    "articles syntaxerrorisme",
    "films syntaxerrorisme",
    "analyse syntaxique juridique",
  ],
  openGraph: {
    title: "Bibliographie et Médias sur le Syntaxerrorisme",
    description:
      "Sélection d’ouvrages, articles et productions médiatiques analysant le phénomène du syntaxerrorisme.",
    url: `${BASE_URL}/medias`,
    siteName: "Observatoire du Syntaxerrorisme",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/og-images/medias.jpg`,
        width: 1200,
        height: 630,
        alt: "Couverture bibliographie syntaxerrorisme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibliographie du Syntaxerrorisme",
    description:
      "Ouvrages, films et articles consacrés à l'étude du syntaxerrorisme et de ses représentations.",
    images: [`${BASE_URL}/og-images/medias.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/medias`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BibliographiePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/medias`,
    name: "Bibliographie et Médias — Observatoire du Syntaxerrorisme",
    description:
      "Liste d’ouvrages, articles et médias dédiés au syntaxerrorisme, à ses origines, représentations et implications juridiques.",
    about: {
      "@type": "Thing",
      name: "Syntaxerrorisme",
    },
    mainEntity: [
      {
        "@type": "CreativeWork",
        name: "« Les Dérives du Code : une histoire du Syntaxerrorisme »",
        author: "A. Dupont",
        datePublished: "2023",
        publisher: "Éditions du Numérique",
      },
      {
        "@type": "CreativeWork",
        name: "« Syntaxe et Délit » — Revue de Droit Informatique",
        datePublished: "2022",
        author: "L. Martin",
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* HEADER */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Bibliographie & <span className="text-indigo-600">Médias</span>
        </h1>
        <p className="mt-3 text-gray-700 text-lg">
          Ouvrages, articles et productions médiatiques consacrés au{" "}
          <strong>syntaxerrorisme</strong>, ses origines, représentations et
          implications sociales et juridiques.
        </p>
      </header>

      {/* BOOKS SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ouvrages de référence
        </h2>
        <ul className="space-y-3 text-gray-700 list-disc pl-6">
          <li>
            <strong>
              Les Dérives du Code : une histoire du Syntaxerrorisme
            </strong>{" "}
            — A. Dupont, Éditions du Numérique, 2023.
          </li>
          <li>
            <strong>Syntaxe et Délit</strong> — L. Martin, Revue de Droit
            Informatique, 2022.
          </li>
          <li>
            <strong>Erreurs et Responsabilité</strong> — C. Bernard, 2021.
          </li>
          <li>
            <strong>Grammaire et Criminalité</strong> — J. Delaunay, PUF, 2019.
          </li>
        </ul>
      </section>

      {/* ARTICLES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Articles & publications
        </h2>
        <div className="space-y-4 text-gray-700">
          <article>
            <h3 className="font-medium text-indigo-600">
              « Quand le code devient preuve »
            </h3>
            <p className="text-sm">
              <em>Journal du Droit Numérique</em>, n°48, 2023 — Analyse de la
              qualification juridique du syntaxerrorisme dans les projets open
              source.
            </p>
          </article>
          <article>
            <h3 className="font-medium text-indigo-600">
              « Syntaxe et morale : une approche sociologique »
            </h3>
            <p className="text-sm">
              <em>Revue Sciences & Société</em>, 2022.
            </p>
          </article>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Films & documentaires
        </h2>
        <ul className="space-y-3 text-gray-700 list-disc pl-6">
          <li>
            <strong>Syntaxe Fatale</strong> — documentaire, 2023, produit par
            Arte Numérique.
          </li>
          <li>
            <strong>Erreur 404 : La Tragédie du Code</strong> — court métrage,
            2022.
          </li>
        </ul>
      </section>

      {/* INTERNAL LINKS */}
      <section className="mb-12">
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
            href="/history"
            className="p-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-all text-center"
          >
            Histoire & chronologie
          </Link>
          <Link
            href="/portraits"
            className="p-4 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition-all text-center"
          >
            Portraits & figures
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
