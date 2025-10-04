import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Juridique — Droit, Code pénal & Jurisprudence du Syntaxerrorisme",
  description:
    "Explorez la dimension juridique du Syntaxerrorisme : textes de lois, jurisprudence, code pénal, procédure et prévention. Un regard d’expert sur la législation et les implications du crime syntaxique.",
  openGraph: {
    title: "Juridique — Droit et législation du Syntaxerrorisme",
    description:
      "Analyse juridique complète du Syntaxerrorisme : lois, jurisprudences, procédures et politiques de prévention.",
    url: `${BASE_URL}/juridique`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/juridique`,
  },
};

export default function JuridiquePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Dimension Juridique du Syntaxerrorisme
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Le <strong>Syntaxerrorisme</strong> n’est pas seulement un phénomène
          technique — il interroge les fondements du <em>droit numérique</em>,
          les notions de responsabilité algorithmique et les procédures de
          justice à l’ère du code. Cette section explore le cadre légal,
          historique et préventif du crime syntaxique.
        </p>
      </header>

      {/* Introduction contextuelle */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Comprendre la législation du Syntaxerrorisme
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Depuis l’émergence du numérique, les erreurs de code, bugs et failles
          systémiques ont provoqué des impacts juridiques sans précédent —
          mêlant <strong>cybersécurité</strong>, <strong>droit pénal</strong>,
          <strong>propriété intellectuelle</strong> et{" "}
          <strong>éthique numérique</strong>. Les juristes, magistrats et
          avocats spécialisés s’efforcent de définir les frontières de la faute
          technique, de la négligence informatique et de la responsabilité
          algorithmique.
        </p>
        <p className="text-gray-700">
          L’Observatoire du Syntaxerrorisme compile ici les références
          législatives, la{" "}
          <Link
            href="/juridique/jurisprudence"
            className="text-indigo-600 hover:underline"
          >
            jurisprudence
          </Link>
          , les{" "}
          <Link
            href="/juridique/laws"
            className="text-indigo-600 hover:underline"
          >
            textes de lois
          </Link>{" "}
          et les{" "}
          <Link
            href="/juridique/prevention"
            className="text-indigo-600 hover:underline"
          >
            mesures de prévention
          </Link>{" "}
          pour comprendre comment le droit s’adapte à un monde dominé par le
          code.
        </p>
      </section>

      {/* Navigation hiérarchique */}
      <nav className="grid sm:grid-cols-2 gap-6">
        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/juridique/laws"
              className="text-indigo-600 hover:underline"
            >
              Textes de lois
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Les fondements législatifs du Syntaxerrorisme : études de lois
            nationales et internationales encadrant la responsabilité numérique
            et les délits liés au code.
          </p>
        </article>

        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/juridique/jurisprudence"
              className="text-indigo-600 hover:underline"
            >
              Jurisprudence
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Analyse des décisions judiciaires marquantes : quand les tribunaux
            statuent sur la responsabilité d’un code, d’un algorithme ou d’une
            faute logicielle.
          </p>
        </article>

        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/juridique/penalcode"
              className="text-indigo-600 hover:underline"
            >
              Code pénal du Syntaxerrorisme
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Un code fictif et critique illustrant les sanctions symboliques du
            crime syntaxique : de l’erreur d’exécution à la faute grave de
            conception.
          </p>
        </article>

        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/juridique/procedure"
              className="text-indigo-600 hover:underline"
            >
              Procédure judiciaire
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Comment se juge un cas de Syntaxerrorisme ? De la plainte au
            jugement, explorez les processus et institutions compétentes.
          </p>
        </article>

        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition sm:col-span-2">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/juridique/prevention"
              className="text-indigo-600 hover:underline"
            >
              Prévention
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Former, anticiper et sécuriser : les politiques publiques et
            initiatives de prévention contre le Syntaxerrorisme à l’échelle
            mondiale.
          </p>
        </article>
      </nav>

      {/* Section de renvoi contextuel */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Liens utiles</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            <Link href="/history" className="text-indigo-600 hover:underline">
              Histoire du Syntaxerrorisme
            </Link>{" "}
            — pour comprendre comment le phénomène a émergé avant sa
            reconnaissance juridique.
          </li>
          <li>
            <Link
              href="/medias/articles"
              className="text-indigo-600 hover:underline"
            >
              Articles et dossiers d’analyse
            </Link>{" "}
            — publications de chercheurs et journalistes spécialisés.
          </li>
          <li>
            <Link
              href="/juridique/prevention"
              className="text-indigo-600 hover:underline"
            >
              Politiques de prévention
            </Link>{" "}
            — ressources pédagogiques pour limiter le risque syntaxique.
          </li>
        </ul>
      </section>

      {/* Bas de page SEO */}
      <footer className="mt-16 text-sm text-gray-600 border-t pt-6">
        <p>
          <strong>Tags SEO :</strong> droit numérique, jurisprudence,
          responsabilité algorithmique, code pénal fictif, faute logicielle,
          prévention cyber, observatoire du syntaxerrorisme.
        </p>
      </footer>
    </main>
  );
}
