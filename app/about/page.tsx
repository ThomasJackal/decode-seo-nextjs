import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "À propos de l’Observatoire du Syntaxerrorisme",
  description:
    "Découvrez la mission, la vision et les valeurs de l’Observatoire du Syntaxerrorisme. Une référence mondiale sur l’étude du crime syntaxique, son histoire et ses implications juridiques et sociales.",
  openGraph: {
    title: "À propos de l’Observatoire du Syntaxerrorisme",
    description:
      "Présentation complète de l’Observatoire du Syntaxerrorisme : qui nous sommes, nos objectifs et nos ressources pour comprendre et prévenir ce crime syntaxique.",
    url: `${BASE_URL}/about`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        À propos de l’
        <span className="text-indigo-600">Observatoire du Syntaxerrorisme</span>
      </h1>

      {/* Introduction */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          L’<strong>Observatoire du Syntaxerrorisme</strong> est une initiative
          internationale consacrée à l’étude et la prévention du{" "}
          <em>crime syntaxique</em>, aussi appelé{" "}
          <strong>syntaxerrorisme</strong>. À travers une approche{" "}
          <strong>juridique</strong>, <strong>historique</strong> et{" "}
          <strong>pédagogique</strong>, notre mission est d’informer,
          sensibiliser et accompagner les chercheurs, étudiants, journalistes et
          citoyens dans la compréhension de ce phénomène unique.
        </p>
      </section>

      {/* Mission et valeurs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Notre mission</h2>
        <p className="text-gray-700 mb-4">L’Observatoire œuvre pour :</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Documenter le <strong>syntaxerrorisme</strong> à travers des{" "}
            <Link href="/juridique" className="text-indigo-600 hover:underline">
              analyses juridiques
            </Link>
            , des études de{" "}
            <Link
              href="/juridique/jurisprudence"
              className="text-indigo-600 hover:underline"
            >
              jurisprudence
            </Link>{" "}
            et des textes de loi.
          </li>
          <li>
            Retracer son{" "}
            <Link href="/history" className="text-indigo-600 hover:underline">
              histoire
            </Link>
            , ses{" "}
            <Link
              href="/history/figures"
              className="hover:underline text-indigo-600"
            >
              figures marquantes
            </Link>{" "}
            et ses impacts sociaux.
          </li>
          <li>
            Centraliser les{" "}
            <Link href="/medias" className="text-indigo-600 hover:underline">
              ressources médiatiques
            </Link>{" "}
            pour mieux comprendre ses représentations.
          </li>
          <li>
            Offrir des{" "}
            <Link href="/games" className="text-indigo-600 hover:underline">
              outils ludiques
            </Link>{" "}
            (quiz, classements) pour apprendre en s’amusant.
          </li>
        </ul>
      </section>

      {/* Redirections stratégiques */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Ressources utiles</h2>
        <p className="text-gray-700 mb-4">
          Pour approfondir vos recherches sur le{" "}
          <strong>syntaxerrorisme</strong>, nous mettons à votre disposition :
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <Link
              href="/about/contact"
              className="text-indigo-600 hover:underline"
            >
              Contact
            </Link>{" "}
            — pour poser vos questions ou collaborer avec nous.
          </li>
          <li>
            <Link href="/about/faq" className="text-indigo-600 hover:underline">
              FAQ
            </Link>{" "}
            — pour obtenir des réponses aux interrogations les plus fréquentes.
          </li>
          <li>
            <Link
              href="/about/lexicon"
              className="text-indigo-600 hover:underline"
            >
              Lexique
            </Link>{" "}
            — pour explorer les définitions et concepts liés au syntaxerrorisme.
          </li>
        </ul>
      </section>

      {/* Conclusion pour SEO */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Notre vision</h2>
        <p className="text-gray-700 leading-relaxed">
          En tant que <strong>référence mondiale</strong> sur le sujet, nous
          croyons que l’étude du <em>crime syntaxique</em> contribue à une
          meilleure compréhension des interactions entre{" "}
          <strong>technologie</strong>, <strong>droit</strong> et{" "}
          <strong>humanité</strong>. Ce site constitue une ressource unique,
          visant à allier <em>rigueur académique</em> et{" "}
          <em>accessibilité pédagogique</em>.
        </p>
      </section>
    </main>
  );
}
