import type { Metadata } from "next";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Plan du site — Observatoire du Syntaxerrorisme",
  description:
    "Plan du site de l’Observatoire du Syntaxerrorisme : explorez nos pages dédiées au droit, à l’histoire, aux médias, portraits, jeux et ressources sur le crime syntaxerrorisme.",
  openGraph: {
    title: "Plan du site — Observatoire du Syntaxerrorisme",
    description:
      "Navigation complète du site Observatoire du Syntaxerrorisme : juridique, histoire, médias, portraits, jeux et à propos.",
    url: `${BASE_URL}/plan-du-site`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/plan-du-site`,
  },
};

export default function PlanDuSite() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Plan du site</h1>
      <p className="mb-8 text-gray-700">
        Bienvenue sur le plan du site de l’
        <strong> Observatoire du Syntaxerrorisme</strong>. Retrouvez ici la
        navigation complète de nos pages dédiées au{" "}
        <strong>crime syntaxerrorisme</strong>, ses aspects <em>juridiques</em>,{" "}
        <em>historiques</em>, <em>médiatiques</em> et <em>humains</em>. Ce plan
        facilite la découverte et l’indexation de nos contenus par les
        utilisateurs et les moteurs de recherche.
      </p>

      {/* Navigation structurée */}
      <nav className="space-y-10">
        {/* Accueil */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Accueil</h2>
          <ul className="list-disc list-inside">
            <li>
              <a href="/" className="text-indigo-600 hover:underline">
                Page d’accueil
              </a>
            </li>
          </ul>
        </section>

        {/* Juridique */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Juridique</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="/juridique"
                className="font-medium text-indigo-600 hover:underline"
              >
                Introduction au juridique
              </a>
            </li>
            <li>
              <a
                href="/juridique/laws"
                className="text-indigo-600 hover:underline"
              >
                Textes de lois
              </a>
            </li>
            <li>
              <a
                href="/juridique/jurisprudence"
                className="text-indigo-600 hover:underline"
              >
                Jurisprudence
              </a>
            </li>
            <li>
              <a
                href="/juridique/penalcode"
                className="text-indigo-600 hover:underline"
              >
                Code pénal
              </a>
            </li>
            <li>
              <a
                href="/juridique/procedure"
                className="text-indigo-600 hover:underline"
              >
                Procédure
              </a>
            </li>
            <li>
              <a
                href="/juridique/prevention"
                className="text-indigo-600 hover:underline"
              >
                Prévention
              </a>
            </li>
          </ul>
        </section>

        {/* Histoire */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Histoire</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="/history"
                className="font-medium text-indigo-600 hover:underline"
              >
                Introduction
              </a>
            </li>
            <li>
              <a
                href="/history/chronology"
                className="text-indigo-600 hover:underline"
              >
                Chronologie
              </a>
            </li>
            <li>
              <a
                href="/history/figures"
                className="text-indigo-600 hover:underline"
              >
                Figures marquantes
              </a>
            </li>
          </ul>
        </section>

        {/* Médias */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Médias</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="/medias"
                className="font-medium text-indigo-600 hover:underline"
              >
                Introduction aux médias
              </a>
            </li>
            <li>
              <a
                href="/medias/articles"
                className="text-indigo-600 hover:underline"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="/medias/bibliography"
                className="text-indigo-600 hover:underline"
              >
                Bibliographie
              </a>
            </li>
            <li>
              <a
                href="/medias/movies"
                className="text-indigo-600 hover:underline"
              >
                Films & documentaires
              </a>
            </li>
          </ul>
        </section>

        {/* Portraits */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Portraits</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="/portraits"
                className="font-medium text-indigo-600 hover:underline"
              >
                Introduction aux portraits
              </a>
            </li>
            <li>
              <a
                href="/portraits/convicted"
                className="text-indigo-600 hover:underline"
              >
                Condamnés
              </a>
            </li>
            <li>
              <a
                href="/portraits/lawyers"
                className="text-indigo-600 hover:underline"
              >
                Avocats
              </a>
            </li>
            <li>
              <a
                href="/portraits/political"
                className="text-indigo-600 hover:underline"
              >
                Politiques
              </a>
            </li>
            <li>
              <a
                href="/portraits/victims"
                className="text-indigo-600 hover:underline"
              >
                Victimes
              </a>
            </li>
          </ul>
        </section>

        {/* Jeux */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Jeux</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="/games"
                className="font-medium text-indigo-600 hover:underline"
              >
                Introduction aux jeux
              </a>
            </li>
            <li>
              <a
                href="/games/quizz"
                className="text-indigo-600 hover:underline"
              >
                Quiz
              </a>
            </li>
            <li>
              <a
                href="/games/topten"
                className="text-indigo-600 hover:underline"
              >
                Top 10
              </a>
            </li>
          </ul>
        </section>

        {/* À propos */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">À propos</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="/about"
                className="font-medium text-indigo-600 hover:underline"
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                href="/about/contact"
                className="text-indigo-600 hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/about/faq" className="text-indigo-600 hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/about/lexicon"
                className="text-indigo-600 hover:underline"
              >
                Lexique
              </a>
            </li>
          </ul>
        </section>

        {/* Légal */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Informations légales</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="/mentions-legales"
                className="text-indigo-600 hover:underline"
              >
                Mentions légales
              </a>
            </li>
            <li>
              <a
                href="/politique-de-confidentialite"
                className="text-indigo-600 hover:underline"
              >
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a
                href="/plan-du-site"
                className="text-indigo-600 hover:underline"
              >
                Plan du site
              </a>
            </li>
          </ul>
        </section>
      </nav>

      {/* Bonus SEO */}
      <div className="mt-12 text-sm text-gray-600">
        <p>
          Ce plan du site facilite la navigation et le référencement de l’
          <strong>Observatoire du Syntaxerrorisme</strong>. Toutes les
          ressources sont accessibles en un clic : analyses juridiques,
          chronologies historiques, portraits, bibliographies, articles et
          contenus pédagogiques sur le <strong>syntaxerrorisme</strong>.
        </p>
      </div>
    </main>
  );
}
