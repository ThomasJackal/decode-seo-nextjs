import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Procédure judiciaire — Syntaxerrorisme | Observatoire du Syntaxerrorisme",
  description:
    "Découvrez les procédures judiciaires applicables au syntaxerrorisme : étapes, acteurs, tribunaux et bonnes pratiques légales.",
  openGraph: {
    title: "Procédure judiciaire — Syntaxerrorisme | Observatoire du Syntaxerrorisme",
    description:
      "Présentation complète des procédures judiciaires liées au syntaxerrorisme : du signalement à la condamnation, incluant jurisprudence et conseils pour entreprises et développeurs.",
    url: `${BASE_URL}/juridique/procedure`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/juridique/procedure`,
  },
};

export default function ProcedureJudiciairePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Procédure judiciaire liée au <span className="text-indigo-600">Syntaxerrorisme</span>
      </h1>

      <p className="mb-8 text-gray-700 prose">
        Le <strong>syntaxerrorisme</strong> peut entraîner des actions judiciaires pour négligence,
        diffusion de logiciels défectueux ou atteintes aux systèmes critiques. Cette page décrit
        les étapes de la <strong>procédure judiciaire</strong>, les acteurs impliqués et les
        meilleures pratiques pour se conformer au cadre légal.
      </p>

      {/* Section : Étapes de la procédure */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Étapes de la procédure</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Signalement :</strong> détection d’une erreur critique et notification aux
            autorités ou victimes concernées. Les incidents peuvent être signalés auprès de la
            <a
              href="https://www.legifrance.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Legifrance
            </a>
            .
          </li>
          <li>
            <strong>Enquête préliminaire :</strong> vérification des faits, collecte de preuves et
            expertise technique sur le logiciel ou le système affecté.
          </li>
          <li>
            <strong>Instruction :</strong> mise en examen, audition des témoins et des experts
            pour établir les responsabilités.
          </li>
          <li>
            <strong>Procès :</strong> présentation devant le tribunal compétent, avec arguments
            juridiques et preuves techniques.
          </li>
          <li>
            <strong>Jugement et sanctions :</strong> amendes, peines d’emprisonnement ou
            obligations de réparation selon le <Link href="/juridique/penalcode" className="text-indigo-600 hover:underline">code pénal</Link>.
          </li>
        </ul>
      </section>

      {/* Section : Acteurs clés */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Acteurs clés de la procédure</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Procureur :</strong> initie l’action pénale et supervise l’enquête.</li>
          <li><strong>Juges et tribunaux :</strong> évaluent les preuves et rendent la décision.</li>
          <li><strong>Experts techniques :</strong> analysent le code et les systèmes affectés.</li>
          <li><strong>Avocats :</strong> défendent les parties et conseillent sur la conformité.</li>
          <li><strong>Victimes et entreprises :</strong> peuvent déposer plainte et demander réparation.</li>
        </ul>
      </section>

      {/* Section : Jurisprudence et exemples */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Jurisprudence et exemples pratiques</h2>
        <p className="text-gray-700 mb-2 prose">
          Plusieurs affaires illustrent l’application des procédures judiciaires au
          <strong> syntaxerrorisme</strong> :
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <Link href="/juridique/jurisprudence" className="text-indigo-600 hover:underline">
              Affaire du logiciel critique Z
            </Link>{" "}
            — condamnation d’une société pour diffusion de code non sécurisé.
          </li>
          <li>
            Expertises techniques ayant démontré la négligence dans la maintenance de systèmes
            critiques.
          </li>
          <li>
            Actions judiciaires liées à des incidents environnementaux ou politiques causés par
            erreurs de code (cf. <Link href="/history/chronology" className="text-indigo-600 hover:underline">chronologie</Link>).
          </li>
        </ul>
      </section>

      {/* Section : Conseils pratiques */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Conseils pratiques</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Documenter chaque étape du développement et des correctifs.</li>
          <li>Effectuer des audits réguliers pour prévenir les erreurs critiques.</li>
          <li>Former les équipes sur les obligations légales et pénales.</li>
          <li>Mettre en place un plan de prévention pour minimiser les risques d’incidents.</li>
        </ul>
      </section>

      {/* Section SEO */}
      <section className="prose text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">SEO et navigation interne</h2>
        <p>
          Cette page complète la catégorie <strong>juridique</strong> et se connecte aux pages :
          <Link href="/juridique/laws" className="text-indigo-600 hover:underline"> Textes de lois</Link>,{" "}
          <Link href="/juridique/penalcode" className="text-indigo-600 hover:underline">Code pénal</Link>,{" "}
          <Link href="/juridique/jurisprudence" className="text-indigo-600 hover:underline">Jurisprudence</Link> et{" "}
          <Link href="/juridique/prevention" className="text-indigo-600 hover:underline">Prévention</Link>.
        </p>
        <p>Mots-clés ciblés : procédure judiciaire, syntaxerrorisme, code pénal, jurisprudence, responsabilité pénale, audit logiciel, prévention des erreurs critiques.</p>
      </section>
    </main>
  );
}
