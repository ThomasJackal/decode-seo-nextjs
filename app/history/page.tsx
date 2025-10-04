import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Histoire — Origines et évolution du Syntaxerrorisme",
  description:
    "Découvrez l’histoire du Syntaxerrorisme : de ses origines conceptuelles à ses manifestations modernes. Chronologies, figures marquantes et contextes politiques et technologiques.",
  openGraph: {
    title: "Histoire — Genèse et évolution du Syntaxerrorisme",
    description:
      "Remontez aux sources du Syntaxerrorisme : un phénomène né de la fracture entre code, société et politique numérique.",
    url: `${BASE_URL}/history`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/history`,
  },
};

export default function HistoryPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">Histoire du Syntaxerrorisme</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Comprendre le <strong>Syntaxerrorisme</strong>, c’est explorer les
          racines profondes de la tension entre <em>langage humain</em> et{" "}
          <em>langage machine</em>. Depuis les premières erreurs de code
          jusqu’aux crises numériques contemporaines, cette section retrace la
          genèse, les grandes figures et les contextes historiques de ce
          phénomène unique.
        </p>
      </header>

      {/* Introduction historique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Aux origines du Syntaxerrorisme
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le terme <strong>Syntaxerrorisme</strong> est apparu au croisement du{" "}
          <em>cyberespace</em>, du <em>droit</em> et de la{" "}
          <em>philosophie du code</em>. À la fin du XXe siècle, l’émergence
          d’erreurs informatiques catastrophiques a mis en lumière la dimension
          politique du bug : les failles logicielles ne relevaient plus
          seulement de la technique, mais d’un désordre global dans la
          communication entre humains et machines.
        </p>
        <p className="text-gray-700 mb-4">
          Cette histoire est intimement liée à des événements majeurs tels que
          la{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Catastrophe_de_Tchernobyl"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            catastrophe de Tchernobyl
          </Link>
          , les dérives de la{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Crise_des_subprimes"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            crise des subprimes
          </Link>{" "}
          ou encore les cyberattaques massives du XXIe siècle. Ces crises,
          qu’elles soient environnementales, économiques ou informatiques, ont
          nourri une réflexion globale sur la
          <strong> responsabilité algorithmique</strong> et la vulnérabilité des
          systèmes automatisés.
        </p>
        <p className="text-gray-700">
          À travers la{" "}
          <Link
            href="/history/chronology"
            className="text-indigo-600 hover:underline"
          >
            chronologie
          </Link>{" "}
          et les{" "}
          <Link
            href="/history/figures"
            className="text-indigo-600 hover:underline"
          >
            figures marquantes
          </Link>
          , découvrez comment le Syntaxerrorisme s’est construit comme un miroir
          critique de nos sociétés numériques.
        </p>
      </section>

      {/* Liens vers les sous-pages */}
      <nav className="grid sm:grid-cols-2 gap-6">
        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/history/chronology"
              className="text-indigo-600 hover:underline"
            >
              Chronologie du Syntaxerrorisme
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            De la première “erreur fatale” aux crises cybernétiques modernes :
            une frise historique détaillant les étapes-clés du phénomène, ses
            acteurs et ses répercussions politiques et environnementales.
          </p>
        </article>

        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/history/figures"
              className="text-indigo-600 hover:underline"
            >
              Figures historiques
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Portraits des pionniers, chercheurs, hackers, lanceurs d’alerte et
            personnalités controversées ayant marqué l’histoire du
            Syntaxerrorisme à travers leurs actions, échecs ou innovations.
          </p>
        </article>
      </nav>

      {/* Lien vers autres catégories */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Approfondir le sujet</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            <Link href="/juridique" className="text-indigo-600 hover:underline">
              Aspects juridiques du Syntaxerrorisme
            </Link>{" "}
            — comment les tribunaux et les juristes ont tenté d’encadrer ce
            phénomène émergent.
          </li>
          <li>
            <Link
              href="/medias/articles"
              className="text-indigo-600 hover:underline"
            >
              Archives médiatiques
            </Link>{" "}
            — analyses et récits de crises liées à des erreurs de code,
            catastrophes logicielles et désinformations numériques.
          </li>
          <li>
            <Link
              href="/portraits/figures"
              className="text-indigo-600 hover:underline"
            >
              Figures controversées
            </Link>{" "}
            — acteurs politiques, informaticiens et penseurs associés à
            l’histoire du Syntaxerrorisme.
          </li>
        </ul>
      </section>

      {/* Bloc SEO final */}
      <footer className="mt-16 text-sm text-gray-600 border-t pt-6">
        <p>
          <strong>Tags SEO :</strong> histoire du syntaxerrorisme, chronologie,
          figures marquantes, catastrophes numériques, bug informatique,
          cyberhistoire, humanités numériques, philosophie du code, Tchernobyl,
          crise technologique.
        </p>
      </footer>
    </main>
  );
}
