import type { Metadata } from "next";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Observatoire du Syntaxerrorisme",
  description:
    "Politique de confidentialité de l’Observatoire du Syntaxerrorisme : protection des données, cookies, emails et respect du RGPD.",
  openGraph: {
    title: "Politique de Confidentialité — Observatoire du Syntaxerrorisme",
    description:
      "Découvrez comment l’Observatoire du Syntaxerrorisme protège vos données personnelles conformément au RGPD.",
    url: `${BASE_URL}/politique-de-confidentialite`,
    type: "article",
  },
  alternates: {
    canonical: `${BASE_URL}/politique-de-confidentialite`,
  },
};

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
      <p className="mb-6 text-gray-700">
        Cette politique de confidentialité décrit la manière dont{" "}
        <strong>l’Observatoire du Syntaxerrorisme</strong> collecte, utilise et
        protège vos données personnelles conformément au Règlement Général sur
        la Protection des Données (RGPD) et aux lois françaises en vigueur.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">1. Identité</h2>
        <p>
          Le site <strong>Observatoire du Syntaxerrorisme</strong> est édité
          dans le but d’informer, d’analyser et de sensibiliser autour du{" "}
          <strong>crime syntaxerrorisme</strong>, ses aspects juridiques,
          historiques et médiatiques.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">2. Données collectées</h2>
        <p>Nous collectons uniquement les données nécessaires :</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Adresse e-mail (si vous vous inscrivez à la newsletter ou utilisez
            le formulaire de contact).
          </li>
          <li>
            Données techniques (cookies, adresse IP anonymisée, navigation) à
            des fins statistiques.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">3. Finalité</h2>
        <p>Les données sont utilisées pour :</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Répondre à vos demandes via le formulaire de contact.</li>
          <li>
            Vous envoyer notre newsletter concernant le{" "}
            <strong>syntaxerrorisme</strong>.
          </li>
          <li>Améliorer le contenu et la performance du site.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">4. Cookies</h2>
        <p>
          Nous utilisons des cookies de mesure d’audience (Google Analytics,
          Plausible, etc.) et des cookies strictement nécessaires au bon
          fonctionnement du site. Vous pouvez gérer vos préférences dans votre
          navigateur.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          5. Durée de conservation
        </h2>
        <p>
          Vos données sont conservées uniquement le temps nécessaire à nos
          échanges ou à votre désinscription de la newsletter.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">6. Partage</h2>
        <p>
          Vos données ne sont jamais vendues. Elles peuvent être partagées avec
          des services tiers de confiance (hébergeur Vercel, outil d’emailing)
          uniquement si nécessaire.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Droit d’accès à vos données</li>
          <li>Droit de rectification ou suppression</li>
          <li>Droit d’opposition au traitement</li>
          <li>Droit à la portabilité de vos données</li>
        </ul>
        <p className="mt-2">
          Pour exercer ces droits, contactez-nous à{" "}
          <a
            href="mailto:contact@observatoire-syntaxerrorisme.vercel.app"
            className="text-indigo-600 hover:underline"
          >
            contact@observatoire-syntaxerrorisme.vercel.app
          </a>
          .
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">8. Hébergement</h2>
        <p>
          Le site est hébergé par <strong>Vercel Inc.</strong>, société basée à
          San Francisco, garantissant un haut niveau de sécurité et de
          disponibilité.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">9. Modifications</h2>
        <p>
          Cette politique peut être mise à jour. La dernière mise à jour date du{" "}
          {new Date().toISOString().slice(0, 10)}.
        </p>
      </section>

      <p className="mt-8 text-sm text-gray-600">
        © {new Date().getFullYear()} Observatoire du Syntaxerrorisme — Tous
        droits réservés.
      </p>
    </main>
  );
}
