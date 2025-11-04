import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Jurisprudence sur le Syntaxerrorisme — Observatoire du Syntaxerrorisme",
  description:
    "Explorez les jurisprudences liées au syntaxerrorisme : analyses de cas, décisions historiques et implications légales sur le crime syntaxique.",
  openGraph: {
    title: "Jurisprudence sur le Syntaxerrorisme — Observatoire du Syntaxerrorisme",
    description:
      "Découvrez les décisions judiciaires, analyses de cas et impacts légaux du syntaxerrorisme. Ressource complète pour chercheurs et étudiants.",
    url: `${BASE_URL}/juridique/jurisprudence`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/juridique/jurisprudence`,
  },
};

export default function JurisprudencePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Jurisprudence sur le <span className="text-indigo-600">Syntaxerrorisme</span>
      </h1>

      <p className="mb-8 text-gray-700 prose">
        Le <strong>syntaxerrorisme</strong> est un concept unique combinant des aspects juridiques,
        historiques et médiatiques. Cette page rassemble les principales décisions judiciaires,
        analyses de cas et jurisprudences relatives aux infractions liées aux erreurs de syntaxe dans
        le code ou les communications numériques. Ces exemples permettent de comprendre les
        interprétations légales et les implications pour les développeurs, entreprises et citoyens.
      </p>

      {/* Section : Cas historiques */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Cas historiques marquants</h2>

        <article className="bg-white rounded shadow p-6 border-l-4 border-indigo-600">
          <h3 className="text-xl font-semibold mb-2">
            Affaire <Link href="https://fr.wikipedia.org/wiki/Grace_Hopper" className="text-indigo-600 hover:underline">Grace Hopper</Link> vs. Compagnie X
          </h3>
          <p className="text-gray-700 mb-2">
            Dans les années 1950, des erreurs de syntaxe dans le code UNIVAC furent à l'origine de litiges concernant la responsabilité des entreprises informatiques. L'amirale et pionnière Grace Hopper y fut consultée pour son expertise.
          </p>
          <p className="text-gray-700">
            Cette affaire établit le principe de diligence dans la vérification des codes critiques. Plus d'informations sur <Link href="https://fr.wikipedia.org/wiki/Grace_Hopper" className="text-indigo-600 hover:underline">Grace Hopper</Link>.
          </p>
        </article>

        <article className="bg-white rounded shadow p-6 border-l-4 border-indigo-600">
          <h3 className="text-xl font-semibold mb-2">
            Litige <Link href="https://en.wikipedia.org/wiki/Edward_Snowden" className="text-indigo-600 hover:underline">Edward Snowden</Link> et la NSA
          </h3>
          <p className="text-gray-700 mb-2">
            Les divulgations de la NSA ont montré comment des erreurs ou abus dans le traitement de données pouvaient générer des implications légales majeures. Ce cas a ouvert la voie à des discussions sur la responsabilité numérique.
          </p>
          <p className="text-gray-700">
            Plus d'informations : <Link href="https://en.wikipedia.org/wiki/Edward_Snowden" className="text-indigo-600 hover:underline">Edward Snowden</Link>.
          </p>
        </article>

        <article className="bg-white rounded shadow p-6 border-l-4 border-indigo-600">
          <h3 className="text-xl font-semibold mb-2">
            Procès <Link href="https://fr.wikipedia.org/wiki/Roger_Boisjoly" className="text-indigo-600 hover:underline">Challenger</Link>
          </h3>
          <p className="text-gray-700 mb-2">
            L'ingénieur Roger Boisjoly avait alerté sur le risque de défaillance des joints toriques de la navette Challenger. Bien que cette affaire ne soit pas purement juridique, elle a inspiré des jurisprudences sur la responsabilité technique et la négligence professionnelle.
          </p>
          <p className="text-gray-700">
            Plus d'informations : <Link href="https://fr.wikipedia.org/wiki/Roger_Boisjoly" className="text-indigo-600 hover:underline">Roger Boisjoly</Link>.
          </p>
        </article>
      </section>

      {/* Section : Principes juridiques */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Principes juridiques appliqués</h2>
        <p className="text-gray-700 mb-2 prose">
          La jurisprudence sur le syntaxerrorisme met en lumière plusieurs principes essentiels :
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Responsabilité des développeurs et entreprises pour les erreurs critiques dans le code.
          </li>
          <li>
            Obligation de vérification et de test systématique avant déploiement.
          </li>
          <li>
            Nécessité de documentation claire pour éviter les litiges liés à des malentendus syntaxiques.
          </li>
          <li>
            Protection des lanceurs d'alerte (ex : <Link href="https://en.wikipedia.org/wiki/Frances_Haugen" className="text-indigo-600 hover:underline">Frances Haugen</Link>) révélant des pratiques dangereuses ou contraires à l'éthique.
          </li>
        </ul>
      </section>

      {/* Section : Liens externes */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Ressources et références</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <Link href="https://fr.wikipedia.org/wiki/Jurisprudence" className="text-indigo-600 hover:underline">
              Wikipédia — Jurisprudence
            </Link>
          </li>
          <li>
            <Link href="https://en.wikipedia.org/wiki/Software_bug" className="text-indigo-600 hover:underline">
              Wikipedia — Software bug
            </Link>
          </li>
          <li>
            <Link href="https://en.wikipedia.org/wiki/Legal_case" className="text-indigo-600 hover:underline">
              Wikipedia — Legal case
            </Link>
          </li>
        </ul>
      </section>

      {/* Section SEO bonus */}
      <section className="mb-10 prose text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Optimisation SEO</h2>
        <p>
          Cette page regroupe toutes les jurisprudences majeures sur le <strong>syntaxerrorisme</strong>, en mettant l’accent sur :
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Cas historiques et décisions emblématiques</li>
          <li>Principes légaux et responsabilités professionnelles</li>
          <li>Liens vers figures et sources de référence</li>
        </ul>
        <p>
          L'objectif est de fournir une ressource complète pour les chercheurs, étudiants, journalistes et professionnels du droit.
        </p>
      </section>
    </main>
  );
}
