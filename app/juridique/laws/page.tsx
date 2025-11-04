import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Textes de lois — Syntaxerrorisme | Observatoire du Syntaxerrorisme",
  description:
    "Explorez les textes de lois liés au syntaxerrorisme : législation numérique, droit des systèmes, responsabilité des développeurs et prévention des erreurs critiques.",
  openGraph: {
    title: "Textes de lois — Syntaxerrorisme | Observatoire du Syntaxerrorisme",
    description:
      "Navigation complète des textes légaux sur le syntaxerrorisme, incluant codes, directives et réglementations pour prévenir les erreurs critiques en systèmes informatiques.",
    url: `${BASE_URL}/juridique/laws`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/juridique/laws`,
  },
};

export default function TextesDeLoisPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Textes de lois liés au <span className="text-indigo-600">Syntaxerrorisme</span>
      </h1>

      <p className="mb-8 text-gray-700 prose">
        Le <strong>syntaxerrorisme</strong> étant un phénomène émergent lié aux erreurs de syntaxe
        critiques dans les systèmes numériques, il est encadré par divers textes légaux et
        réglementations. Cette page présente un panorama complet des lois et directives
        applicables, incluant la responsabilité des développeurs et la prévention des risques.
      </p>

      {/* Section : Législation nationale */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Législation nationale</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Code pénal numérique :</strong> articles encadrant la responsabilité en cas
            d’erreurs logicielles critiques. Voir les textes officiels :{" "}
            <Link href="https://www.legifrance.gouv.fr" className="text-indigo-600 hover:underline">
              Legifrance
            </Link>.
          </li>
          <li>
            <strong>Lois sur la cybersécurité :</strong> obligations des entreprises pour sécuriser
            leurs systèmes et prévenir les erreurs critiques.
          </li>
          <li>
            <strong>Protection des données :</strong> le <Link href="https://www.cnil.fr" className="text-indigo-600 hover:underline">RGPD</Link> impose la sécurité et la conformité, incluant la prévention des erreurs techniques et syntaxiques.
          </li>
        </ul>
      </section>

      {/* Section : Législation internationale */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Législation internationale</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Directives européennes sur la cybersécurité :</strong> standards pour la
            prévention des erreurs critiques dans les systèmes numériques. Voir{" "}
            <Link href="https://eur-lex.europa.eu" className="text-indigo-600 hover:underline">
              EUR-Lex
            </Link>.
          </li>
          <li>
            <strong>Normes ISO/IEC :</strong> ISO 27001 et ISO 25010 pour la sécurité et la qualité
            des logiciels, incluant la détection et la prévention d’erreurs syntaxiques.
          </li>
          <li>
            <strong>Références US :</strong> Computer Fraud and Abuse Act et autres directives sur
            la responsabilité des développeurs et la sécurisation des systèmes critiques.
          </li>
        </ul>
      </section>

      {/* Section : Jurisprudence liée */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Jurisprudence et cas emblématiques</h2>
        <p className="text-gray-700 mb-2 prose">
          Plusieurs décisions judiciaires illustrent l’application des textes de loi au
          <strong> syntaxerrorisme</strong> :
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <Link href="/juridique/jurisprudence" className="text-indigo-600 hover:underline">
              Affaire du logiciel critique X
            </Link>{" "}
            — responsabilité d’une entreprise après une erreur de syntaxe ayant causé un incident.
          </li>
          <li>
            Analyse des cas de <Link href="/history/figures" className="text-indigo-600 hover:underline">
              figures marquantes
            </Link>{" "}
            dans l’histoire des erreurs critiques et leur encadrement légal.
          </li>
        </ul>
      </section>

      {/* Section : Conseils pour conformité */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Conseils pour conformité et prévention</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Former les équipes aux obligations légales et normes de codage.</li>
          <li>Mettre en place des audits réguliers et un contrôle qualité strict.</li>
          <li>
            Utiliser des outils de vérification automatique pour détecter les erreurs syntaxiques
            avant déploiement.
          </li>
          <li>
            Documenter toutes les procédures et décisions techniques pour assurer la traçabilité.
          </li>
        </ul>
      </section>

      {/* Section SEO et liens internes */}
      <section className="prose text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Optimisation SEO et liens utiles</h2>
        <p>
          Cette page fournit une vue complète des textes de lois liés au{" "}
          <strong>syntaxerrorisme</strong>, intégrant des références nationales et internationales,
          ainsi que des liens vers la <Link href="/juridique/jurisprudence" className="text-indigo-600 hover:underline">jurisprudence</Link> et les
          <Link href="/juridique/prevention" className="text-indigo-600 hover:underline"> mesures de prévention</Link>.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Syntaxerrorisme et législation</li>
          <li>Droit informatique et responsabilité</li>
          <li>Normes de cybersécurité et audit</li>
          <li>Prévention et conformité légale</li>
          <li>Jurisprudence sur erreurs de syntaxe critiques</li>
        </ul>
        <p>
          L’objectif est de fournir un guide pratique pour les développeurs, entreprises et
          chercheurs tout en renforçant la visibilité SEO autour des mots-clés :
          <strong> texte de loi, syntaxerrorisme, législation numérique, responsabilité développeur</strong>.
        </p>
      </section>
    </main>
  );
}
