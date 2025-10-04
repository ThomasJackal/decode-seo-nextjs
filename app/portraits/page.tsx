import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Portraits — Figures, victimes et acteurs du Syntaxerrorisme",
  description:
    "Explorez les portraits des principaux acteurs du Syntaxerrorisme : condamnés, avocats, figures politiques et victimes d’erreurs numériques. Une plongée humaine au cœur du crime syntaxique.",
  openGraph: {
    title: "Portraits — Figures et acteurs du Syntaxerrorisme",
    description:
      "Découvrez les visages derrière le Syntaxerrorisme : criminels, défenseurs, décideurs et victimes du désordre numérique mondial.",
    url: `${BASE_URL}/portraits`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/portraits`,
  },
};

export default function PortraitsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Portraits du Syntaxerrorisme
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Derrière chaque <strong>erreur de syntaxe</strong> se cache une
          histoire, une main, une intention. Cette section met en lumière les{" "}
          <em>figures humaines</em> du Syntaxerrorisme : les{" "}
          <Link
            href="/portraits/convicted"
            className="text-indigo-600 hover:underline"
          >
            condamnés
          </Link>
          , les{" "}
          <Link
            href="/portraits/lawyers"
            className="text-indigo-600 hover:underline"
          >
            avocats
          </Link>
          , les{" "}
          <Link
            href="/portraits/political"
            className="text-indigo-600 hover:underline"
          >
            décideurs politiques
          </Link>
          et les{" "}
          <Link
            href="/portraits/victims"
            className="text-indigo-600 hover:underline"
          >
            victimes
          </Link>{" "}
          du désordre numérique mondial.
        </p>
      </header>

      {/* Contexte sociologique et historique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Les visages du Syntaxerrorisme
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Depuis l’avènement de l’informatique, les{" "}
          <strong>crimes syntaxiques</strong> ont révélé une humanité partagée
          entre innovation et défaillance. Parmi les figures les plus
          marquantes, on retrouve des personnages controversés tels que{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Kevin_Mitnick"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Kevin Mitnick
          </Link>{" "}
          (ancien hacker devenu expert en cybersécurité), ou encore{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Chelsea_Manning"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Chelsea Manning
          </Link>{" "}
          (connue pour ses fuites de données massives).
        </p>
        <p className="text-gray-700 mb-4">
          Du côté politique, des acteurs comme{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Mark_Zuckerberg"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Mark Zuckerberg
          </Link>{" "}
          ou{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Vladimir_Poutine"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Vladimir Poutine
          </Link>{" "}
          ont été au centre de débats sur la manipulation algorithmique, la
          désinformation et la surveillance numérique.
        </p>
        <p className="text-gray-700">
          Enfin, de nombreuses <strong>victimes anonymes</strong> ont subi les
          conséquences de ces dérèglements : pertes de données, usurpations,
          campagnes de désinformation, ou encore atteintes à la réputation dans
          un monde où une erreur de code peut bouleverser une vie.
        </p>
      </section>

      {/* Navigation vers sous-catégories */}
      <nav className="grid sm:grid-cols-2 gap-6">
        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/portraits/convicted"
              className="text-indigo-600 hover:underline"
            >
              Condamnés
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Découvrez les individus jugés responsables d’actes de
            Syntaxerrorisme : fraudeurs, hackers, codeurs défaillants et figures
            judiciaires du numérique.
          </p>
        </article>

        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/portraits/lawyers"
              className="text-indigo-600 hover:underline"
            >
              Avocats & Défenseurs
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Les défenseurs du Syntaxerrorisme : juristes, avocats et militants
            du droit numérique luttant pour la reconnaissance d’une
            responsabilité partagée entre humain et machine.
          </p>
        </article>

        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/portraits/political"
              className="text-indigo-600 hover:underline"
            >
              Figures politiques
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Politiques, décideurs et chefs d’État confrontés à la question du
            contrôle algorithmique et de la souveraineté numérique à l’ère du
            Syntaxerrorisme.
          </p>
        </article>

        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/portraits/victims"
              className="text-indigo-600 hover:underline"
            >
              Victimes
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Citoyens, entreprises et lanceurs d’alerte pris au piège d’erreurs
            de code, de bugs judiciaires ou de manipulations médiatiques. Un
            regard humain sur les dommages collatéraux du numérique.
          </p>
        </article>
      </nav>

      {/* Dimension éthique */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">
          Entre faute et fatalité : les dilemmes humains du Syntaxerrorisme
        </h2>
        <p className="text-gray-700 mb-4">
          Le Syntaxerrorisme n’est pas seulement un <em>phénomène technique</em>{" "}
          — il est profondément <strong>éthique</strong>. Il interroge la
          responsabilité humaine dans un monde dirigé par des systèmes de plus
          en plus autonomes.
        </p>
        <p className="text-gray-700 mb-4">
          Des personnalités controversées comme{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Kim_Dotcom"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Kim Dotcom
          </Link>{" "}
          ou{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Julian_Assange"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Julian Assange
          </Link>{" "}
          incarnent cette tension entre liberté d’expression, justice numérique
          et dérive informationnelle.
        </p>
        <p className="text-gray-700">
          Ces portraits rappellent que le Syntaxerrorisme n’est pas un crime
          abstrait, mais une réalité profondément humaine, faite de choix,
          d’ambitions et parfois de tragédies.
        </p>
      </section>

      {/* Bloc SEO final */}
      <footer className="mt-16 text-sm text-gray-600 border-t pt-6">
        <p>
          <strong>Mots-clés :</strong> portraits syntaxerrorisme, hackers
          célèbres, avocats du numérique, figures politiques controversées,
          victimes de bugs, éthique de l’intelligence artificielle, crimes
          informatiques, Julian Assange, Kim Dotcom, Edward Snowden, justice
          algorithmique.
        </p>
      </footer>
    </main>
  );
}
