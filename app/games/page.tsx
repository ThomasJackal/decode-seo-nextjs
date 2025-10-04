import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Jeux — Quiz et classements sur le Syntaxerrorisme",
  description:
    "Apprenez en jouant avec nos quiz et classements sur le Syntaxerrorisme. Testez vos connaissances sur l’histoire, les lois et les figures du crime syntaxique.",
  openGraph: {
    title: "Jeux — Quiz et Top 10 sur le Syntaxerrorisme",
    description:
      "Découvrez nos jeux éducatifs : quiz interactifs, classements des plus grandes erreurs de code et défis autour du crime syntaxerroriste.",
    url: `${BASE_URL}/games`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/games`,
  },
};

export default function GamesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Jeux et Quiz sur le Syntaxerrorisme
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Apprenez en jouant ! L’
          <strong>Observatoire du Syntaxerrorisme</strong> vous propose une
          série de <em>quiz interactifs</em> et de{" "}
          <em>classements thématiques</em> pour tester vos connaissances sur le
          crime syntaxique, ses acteurs, son histoire et ses zones grises.
        </p>
      </header>

      {/* Contexte pédagogique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Le jeu comme outil d’exploration numérique
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Le <strong>Syntaxerrorisme</strong> n’est pas qu’un sujet d’étude
          juridique ou historique : c’est un phénomène que l’on peut explorer à
          travers le jeu. Qu’il s’agisse de retracer les grandes affaires de
          piratage ou de distinguer les
          <em>bugs involontaires</em> des <em>dérives intentionnelles</em>, nos
          jeux permettent une compréhension ludique de cette thématique
          complexe.
        </p>
        <p className="text-gray-700">
          Le tout dans un esprit pédagogique, inspiré des initiatives de
          vulgarisation comme{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Kahoot!"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Kahoot!
          </Link>{" "}
          ou{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Codecademy"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Codecademy
          </Link>
          , où apprendre devient un défi collectif.
        </p>
      </section>

      {/* Cartes de navigation vers sous-pages */}
      <nav className="grid sm:grid-cols-2 gap-6">
        {/* Quiz */}
        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/games/quizz"
              className="text-indigo-600 hover:underline"
            >
              Quiz : Testez vos connaissances
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Êtes-vous incollable sur les grandes figures du Syntaxerrorisme ?
            Connaissez-vous les lois, les dates-clés, et les erreurs de code les
            plus célèbres ? Tentez votre chance et améliorez votre score à
            chaque essai.
          </p>
        </article>

        {/* Top 10 */}
        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/games/topten"
              className="text-indigo-600 hover:underline"
            >
              Top 10 des plus grands Syntaxerroristes
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Plongez dans notre classement des plus célèbres fautes de syntaxe et
            scandales numériques. De{" "}
            <Link
              href="https://fr.wikipedia.org/wiki/Julian_Assange"
              target="_blank"
              className="text-indigo-600 hover:underline"
            >
              Julian Assange
            </Link>{" "}
            à{" "}
            <Link
              href="https://fr.wikipedia.org/wiki/Kevin_Mitnick"
              target="_blank"
              className="text-indigo-600 hover:underline"
            >
              Kevin Mitnick
            </Link>
            , revivez les plus grandes erreurs, hackings et procès qui ont
            marqué l’ère digitale.
          </p>
        </article>
      </nav>

      {/* Section bonus : dimension culturelle */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">
          Entre culture pop et cybersécurité
        </h2>
        <p className="text-gray-700 mb-4">
          Le Syntaxerrorisme s’invite aussi dans la culture populaire : des
          films comme{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Matrix_(film)"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Matrix
          </Link>{" "}
          ou{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Mr._Robot"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Mr. Robot
          </Link>{" "}
          explorent les zones floues entre l’humain et la machine, le code et la
          conscience. Nos jeux s’inscrivent dans cette même démarche :
          comprendre le numérique pour mieux s’en émanciper.
        </p>
        <p className="text-gray-700">
          Chaque quiz, chaque classement, est une porte d’entrée vers une
          réflexion sur notre rapport au{" "}
          <strong>code, à la faute et à la vérité numérique</strong>.
        </p>
      </section>

      {/* Footer SEO */}
      <footer className="mt-16 text-sm text-gray-600 border-t pt-6">
        <p>
          <strong>Mots-clés :</strong> jeux syntaxerrorisme, quiz
          cybercriminalité, top hackers, éducation numérique, culture du code,
          apprentissage ludique, cybersécurité, intelligence artificielle,
          erreurs de syntaxe, apprentissage interactif.
        </p>
      </footer>
    </main>
  );
}
