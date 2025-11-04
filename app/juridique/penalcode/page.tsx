import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Code pénal — Syntaxerrorisme | Observatoire du Syntaxerrorisme",
  description:
    "Explorez le code pénal applicable au syntaxerrorisme : responsabilités légales, infractions liées aux erreurs critiques et jurisprudence associée.",
  openGraph: {
    title: "Code pénal — Syntaxerrorisme | Observatoire du Syntaxerrorisme",
    description:
      "Présentation complète du code pénal concernant le syntaxerrorisme, incluant infractions, sanctions, jurisprudence et recommandations pour les développeurs et entreprises.",
    url: `${BASE_URL}/juridique/penalcode`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/juridique/penalcode`,
  },
};

export default function CodePenalPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Code pénal lié au <span className="text-indigo-600">Syntaxerrorisme</span>
      </h1>

      <p className="mb-8 text-gray-700 prose">
        Le <strong>syntaxerrorisme</strong> soulève des enjeux juridiques majeurs, en particulier
        en matière de responsabilité pénale des développeurs, entreprises et acteurs
        numériques. Cette page présente les articles du <strong>code pénal</strong> les plus
        pertinents, illustrés par des exemples et des liens vers la <Link href="/juridique/jurisprudence" className="text-indigo-600 hover:underline">jurisprudence</Link> associée.
      </p>

      {/* Section : Infractions pénales */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Infractions pénales liées au syntaxerrorisme</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Article 323-1 :</strong> accès frauduleux à un système informatique et
            altération des données pouvant provoquer des erreurs critiques.
          </li>
          <li>
            <strong>Article 323-2 :</strong> diffusion d’un logiciel contenant des erreurs
            syntaxiques critiques pouvant causer des dommages matériels ou financiers.
          </li>
          <li>
            <strong>Article 323-3 :</strong> négligence dans la maintenance et la sécurisation
            des systèmes critiques.
          </li>
        </ul>
      </section>

      {/* Section : Sanctions et peines */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Sanctions et peines</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Amendes administratives et pénales pour les développeurs et entreprises.</li>
          <li>Peines d’emprisonnement pour négligence ayant entraîné des dommages graves.</li>
          <li>Obligations de réparation et de prévention des incidents futurs.</li>
        </ul>
      </section>

      {/* Section : Jurisprudence */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Jurisprudence exemplaire</h2>
        <p className="text-gray-700 mb-2 prose">
          Plusieurs affaires judiciaires illustrent l’application du code pénal au
          <strong> syntaxerrorisme</strong> :
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <Link href="/juridique/jurisprudence" className="text-indigo-600 hover:underline">
              Affaire du logiciel critique Y
            </Link>{" "}
            — responsabilité pénale d’un éditeur de logiciel après une erreur syntaxique causant un incident.
          </li>
          <li>
            Décisions concernant la négligence dans la sécurité des systèmes critiques, illustrées
            par les travaux de <Link href="/history/figures" className="text-indigo-600 hover:underline">figures marquantes</Link>.
          </li>
        </ul>
      </section>

      {/* Section : Conseils légaux */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Conseils pour conformité légale</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Auditer régulièrement le code et détecter les erreurs syntaxiques critiques.</li>
          <li>Documenter toutes les étapes de développement et de déploiement.</li>
          <li>Former les équipes aux obligations pénales et aux normes de sécurité.</li>
          <li>Mettre en place des protocoles de prévention et des contrôles qualité stricts.</li>
        </ul>
      </section>

      {/* Section SEO et liens internes */}
      <section className="prose text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Optimisation SEO et liens utiles</h2>
        <p>
          Cette page fait partie de la catégorie <strong>juridique</strong> et complète la navigation
          vers <Link href="/juridique/laws" className="text-indigo-600 hover:underline">textes de lois</Link>,{" "}
          <Link href="/juridique/prevention" className="text-indigo-600 hover:underline">prévention</Link> et
          <Link href="/juridique/jurisprudence" className="text-indigo-600 hover:underline">jurisprudence</Link>. 
          Les mots-clés ciblés incluent : <strong>code pénal, syntaxerrorisme, responsabilité pénale, infractions logicielles, conformité</strong>.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Code pénal et erreurs critiques</li>
          <li>Syntaxerrorisme et responsabilité des développeurs</li>
          <li>Infractions informatiques et cybersécurité</li>
          <li>Jurisprudence et législation</li>
          <li>Prévention des incidents et audit légal</li>
        </ul>
      </section>
    </main>
  );
}
