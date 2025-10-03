import type { Metadata } from "next";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Mentions légales — Observatoire du Syntaxerrorisme",
  description:
    "Mentions légales du site Observatoire du Syntaxerrorisme : éditeur, hébergeur, propriété intellectuelle, protection des données et cadre juridique du projet.",
  openGraph: {
    title: "Mentions légales — Observatoire du Syntaxerrorisme",
    description:
      "Consultez les mentions légales de l’Observatoire du Syntaxerrorisme : informations légales sur l’éditeur, hébergement, droits d’auteur et politique juridique.",
    url: `${BASE_URL}/mentions-legales`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/mentions-legales`,
  },
};

export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <p className="mb-8 text-gray-700">
        Conformément à la loi française n°2004-575 du 21 juin 2004 pour la
        confiance dans l’économie numérique (LCEN), vous trouverez ci-dessous
        les mentions légales du site{" "}
        <strong>Observatoire du Syntaxerrorisme</strong>. Ce site est dédié à
        l’étude, la prévention et la documentation du{" "}
        <em>crime syntaxerrorisme</em>, sous ses aspects{" "}
        <strong>juridiques</strong>, <strong>historiques</strong> et{" "}
        <strong>médiatiques</strong>.
      </p>

      {/* Éditeur */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Éditeur du site</h2>
        <p>
          <strong>Observatoire du Syntaxerrorisme</strong> <br />
          Association de recherche et de sensibilisation <br />
          Adresse : 123 Rue de la Syntaxe, 75000 Paris, France <br />
          Email : contact@observatoire-syntaxerrorisme.fr
        </p>
      </section>

      {/* Responsable de publication */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Responsable de la publication
        </h2>
        <p>
          Directeur de publication : <strong>Jean Dupont</strong>, président de
          l’association.
        </p>
      </section>

      {/* Hébergeur */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Hébergement</h2>
        <p>
          Le site est hébergé par : <br />
          <strong>Vercel Inc.</strong> <br />
          340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis <br />
          Site web :{" "}
          <a
            href="https://vercel.com"
            className="text-indigo-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://vercel.com
          </a>
        </p>
      </section>

      {/* Propriété intellectuelle */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Propriété intellectuelle
        </h2>
        <p>
          L’ensemble des contenus du site{" "}
          <strong>observatoire-syntaxerrorisme.vercel.app</strong> (textes,
          images, graphiques, logos, bases de données, etc.) est protégé par le
          droit d’auteur et les droits de propriété intellectuelle. Toute
          reproduction ou utilisation sans autorisation est strictement
          interdite.
        </p>
      </section>

      {/* Protection des données */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Protection des données personnelles
        </h2>
        <p>
          Le site peut collecter des données personnelles via ses formulaires
          (newsletter, contact, etc.). Conformément au RGPD (Règlement Général
          sur la Protection des Données), vous disposez d’un droit d’accès, de
          rectification et de suppression de vos données en nous contactant à
          l’adresse :{" "}
          <a
            href="mailto:contact@observatoire-syntaxerrorisme.fr"
            className="text-indigo-600 hover:underline"
          >
            contact@observatoire-syntaxerrorisme.fr
          </a>
          .
        </p>
      </section>

      {/* Responsabilité */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Responsabilité</h2>
        <p>
          L’Observatoire du Syntaxerrorisme s’efforce de fournir des
          informations fiables et mises à jour. Toutefois, aucune garantie n’est
          donnée quant à l’exactitude ou l’exhaustivité des données publiées.
          L’utilisateur est responsable de l’usage qu’il fait des informations
          disponibles sur le site.
        </p>
      </section>

      {/* Juridiction */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Loi applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige, les tribunaux compétents seront ceux de Paris (France).
        </p>
      </section>

      {/* Note SEO */}
      <div className="mt-12 text-sm text-gray-600">
        <p>
          Ce site s’inscrit dans une démarche éducative et documentaire autour
          du <strong>syntaxerrorisme</strong>, en offrant des ressources
          juridiques, historiques et pédagogiques accessibles à tous.
        </p>
      </div>
    </main>
  );
}
