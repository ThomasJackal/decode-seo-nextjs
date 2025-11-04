import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Condamnés & Portraits — Observatoire du Syntaxerrorisme",
  description:
    "Découvrez les portraits, profils et parcours des condamnés pour syntaxerrorisme : contexte, affaires marquantes et analyse juridique.",
  keywords: [
    "syntaxerrorisme",
    "condamnés syntaxerrorisme",
    "portraits syntaxerrorisme",
    "affaires syntaxerrorisme",
    "observatoire syntaxerrorisme",
    "criminologie numérique",
    "droit du code",
  ],
  openGraph: {
    title: "Condamnés & Portraits du Syntaxerrorisme",
    description:
      "Galerie des condamnés pour syntaxerrorisme, avec profils, affaires et analyse juridique.",
    url: `${BASE_URL}/portraits`,
    siteName: "Observatoire du Syntaxerrorisme",
    type: "profile",
    images: [
      {
        url: `${BASE_URL}/og-images/portraits.jpg`,
        width: 1200,
        height: 630,
        alt: "Portraits de condamnés pour syntaxerrorisme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Condamnés & Portraits — Observatoire du Syntaxerrorisme",
    description:
      "Analyse et profils des principaux condamnés pour syntaxerrorisme, leurs affaires et leurs impacts.",
    images: [`${BASE_URL}/og-images/portraits.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/portraits`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CondamnesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/portraits`,
    name: "Condamnés & Portraits — Observatoire du Syntaxerrorisme",
    description:
      "Profil des condamnés pour syntaxerrorisme, leurs affaires et leur impact juridique et sociétal.",
    mainEntity: [
      {
        "@type": "Person",
        name: "Alexandre V.",
        description:
          "Condamné pour altération de code et falsification syntaxique, affaire 2022-034.",
        jobTitle: "Développeur indépendant",
        nationality: "Française",
      },
      {
        "@type": "Person",
        name: "Mila T.",
        description:
          "Condamnée pour diffusion de scripts falsifiés dans une plateforme publique.",
        jobTitle: "Chercheuse en linguistique numérique",
        nationality: "Française",
      },
    ],
  };

  const portraits = [
    {
      name: "Alexandre V.",
      title: "Développeur indépendant",
      year: "2022",
      img: "/images/portraits/alexandre.webp",
      description:
        "Reconnu coupable d’avoir délibérément modifié la syntaxe d’un script réglementaire, créant une faille d’interprétation juridique majeure.",
    },
    {
      name: "Mila T.",
      title: "Chercheuse en linguistique numérique",
      year: "2021",
      img: "/images/portraits/mila.webp",
      description:
        "Poursuivie pour avoir diffusé des fragments de code tronqués dans un projet open source sensible, entraînant une série d'erreurs critiques.",
    },
    {
      name: "Léonard P.",
      title: "Ancien juriste technique",
      year: "2020",
      img: "/images/portraits/leonard.webp",
      description:
        "Accusé d’avoir manipulé la grammaire d’un contrat automatisé, ce qui a provoqué un transfert illégal de données confidentielles.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* HEADER */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Condamnés & <span className="text-indigo-600">Portraits</span>
        </h1>
        <p className="mt-3 text-gray-700 text-lg max-w-3xl mx-auto">
          Découvrez les parcours des principaux{" "}
          <strong>condamnés pour syntaxerrorisme</strong> : contexte, chefs
          d’accusation et portée juridique de leurs affaires.
        </p>
      </header>

      {/* PORTRAITS GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {portraits.map(({ name, title, img, description, year }) => (
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
                {title} — <span>{year}</span>
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
          Contexte et analyse
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Ces affaires illustrent la{" "}
          <strong>judiciarisation progressive des erreurs syntaxiques</strong>{" "}
          et des fautes de code. Chacune révèle la difficulté d’établir la
          responsabilité entre développeur, machine et institution.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Explorer d’autres sections
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
            Chronologie
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
