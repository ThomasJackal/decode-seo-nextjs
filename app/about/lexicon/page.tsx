import type { Metadata } from "next";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Lexique du Syntaxerrorisme — Définitions et vocabulaire",
  description:
    "Découvrez le lexique complet du Syntaxerrorisme : définitions, concepts juridiques, figures historiques et vocabulaire essentiel pour comprendre ce crime syntaxique.",
  openGraph: {
    title: "Lexique du Syntaxerrorisme — Définitions et vocabulaire",
    description:
      "Glossaire spécialisé sur le Syntaxerrorisme : définitions clés, terminologie juridique, historique et technique pour comprendre et prévenir ce crime numérique.",
    url: `${BASE_URL}/about/lexicon`,
    type: "article",
  },
  alternates: {
    canonical: `${BASE_URL}/about/lexicon`,
  },
};

const terms = [
  {
    term: "Syntaxerrorisme",
    definition:
      "Crime fictif désignant les erreurs syntaxiques graves ayant des impacts juridiques, techniques ou sociaux.",
  },
  {
    term: "Jurisprudence numérique",
    definition:
      "Décisions judiciaires fictives servant de référence pour sanctionner ou prévenir le syntaxerrorisme.",
  },
  {
    term: "Code pénal du syntaxe",
    definition:
      "Recueil imaginaire de textes juridiques définissant les infractions syntaxiques et leurs sanctions.",
  },
  {
    term: "Prévention syntaxique",
    definition:
      "Ensemble de mesures éducatives et techniques visant à limiter l’apparition d’erreurs de syntaxe criminelles.",
  },
  {
    term: "Figures marquantes",
    definition:
      "Personnalités fictives ayant marqué l’histoire du syntaxerrorisme, qu’elles soient victimes, accusés ou juristes.",
  },
  {
    term: "Erreur fatale",
    definition:
      "Erreur syntaxique critique qui entraîne un blocage total ou des conséquences lourdes dans un système.",
  },
  {
    term: "Avocat du code",
    definition:
      "Spécialiste fictif en droit numérique chargé de défendre ou accuser dans les affaires de syntaxerrorisme.",
  },
  {
    term: "Procédure syntaxique",
    definition:
      "Démarches juridiques et techniques mises en œuvre pour juger un cas de syntaxerrorisme.",
  },
  {
    term: "Victime syntaxique",
    definition:
      "Utilisateur, développeur ou organisation ayant subi un préjudice à cause d’une faute syntaxique grave.",
  },
  {
    term: "Observatoire du Syntaxerrorisme",
    definition:
      "Institution fictive dédiée à la recherche, l’analyse et la prévention du crime syntaxique.",
  },
];

export default function LexiconPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Lexique du <span className="text-indigo-600">Syntaxerrorisme</span>
      </h1>

      <p className="mb-8 text-gray-700">
        Ce <strong>lexique spécialisé</strong> réunit les{" "}
        <em>termes essentiels</em> liés au <strong>syntaxerrorisme</strong>, à
        son{" "}
        <a href="/juridique" className="text-indigo-600 hover:underline">
          cadre juridique
        </a>
        , son{" "}
        <a href="/history" className="text-indigo-600 hover:underline">
          histoire
        </a>{" "}
        et ses{" "}
        <a href="/medias" className="text-indigo-600 hover:underline">
          représentations médiatiques
        </a>
        . Il constitue une ressource pédagogique pour chercheurs, étudiants,
        journalistes et citoyens curieux.
      </p>

      {/* Liste des termes */}
      <section className="space-y-6">
        {terms.map((item, i) => (
          <div key={i} className="p-4 border rounded bg-gray-50">
            <h2 className="text-xl font-semibold text-indigo-700">
              {item.term}
            </h2>
            <p className="text-gray-700 mt-2">{item.definition}</p>
          </div>
        ))}
      </section>

      {/* FAQ intégrée pour SEO */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Questions fréquentes</h2>
        <div className="space-y-3">
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Pourquoi un lexique du syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Parce que ce crime fictif est complexe et nécessite une
              compréhension claire de ses concepts pour mieux le documenter et
              le prévenir.
            </p>
          </details>
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Ce lexique sera-t-il enrichi ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Oui, il est mis à jour régulièrement avec de nouveaux termes,
              concepts et références.
            </p>
          </details>
        </div>
      </section>

      {/* Note SEO */}
      <section className="mt-12 text-sm text-gray-600">
        <p>
          Le lexique du <strong>syntaxerrorisme</strong> est conçu pour
          favoriser la compréhension et la diffusion de ce concept. Il constitue
          un outil pédagogique et un support SEO de premier plan pour renforcer
          l’autorité du site sur le sujet.
        </p>
      </section>
    </main>
  );
}
