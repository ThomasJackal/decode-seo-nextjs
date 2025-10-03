import type { Metadata } from "next";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Contact — Observatoire du Syntaxerrorisme",
  description:
    "Page de contact officielle de l’Observatoire du Syntaxerrorisme : adresse, email, formulaire et informations pour joindre notre équipe.",
  openGraph: {
    title: "Contact — Observatoire du Syntaxerrorisme",
    description:
      "Besoin d’informations sur le syntaxerrorisme ? Contactez l’Observatoire du Syntaxerrorisme via notre formulaire, email ou adresse officielle.",
    url: `${BASE_URL}/about/contact`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/about/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Contact — Observatoire du Syntaxerrorisme
      </h1>

      <p className="mb-6 text-gray-700">
        Vous souhaitez en savoir plus sur le <strong>syntaxerrorisme</strong>,
        signaler une affaire, proposer une collaboration ou simplement poser une
        question ? L’équipe de l’
        <strong>Observatoire du Syntaxerrorisme</strong> est à votre
        disposition.
      </p>

      {/* Coordonnées */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Coordonnées</h2>
        <p>
          Observatoire du Syntaxerrorisme <br />
          123 Rue de la Syntaxe <br />
          75000 Paris, France <br />
          Email :{" "}
          <a
            href="mailto:contact@observatoire-syntaxerrorisme.fr"
            className="text-indigo-600 hover:underline"
          >
            contact@observatoire-syntaxerrorisme.fr
          </a>
        </p>
      </section>

      {/* Formulaire de contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Formulaire de contact</h2>
        <p className="text-gray-700 mb-4">
          Remplissez le formulaire ci-dessous pour nous envoyer directement un
          message.
        </p>

        <form
          method="post"
          action="/api/contact"
          className="space-y-4 max-w-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded border px-3 py-2 mt-1 text-sm"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded border px-3 py-2 mt-1 text-sm"
              placeholder="votre@email.fr"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded border px-3 py-2 mt-1 text-sm"
              placeholder="Votre message..."
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 rounded bg-indigo-600 text-white text-sm hover:bg-indigo-700"
          >
            Envoyer
          </button>
        </form>
      </section>

      {/* FAQ mini intégrée */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Questions fréquentes (FAQ)
        </h2>
        <div className="space-y-3">
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Quand puis-je obtenir une réponse ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Nous faisons de notre mieux pour répondre dans un délai de{" "}
              <strong>48 heures</strong>.
            </p>
          </details>
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Puis-je proposer un article ou un dossier ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Oui, nous acceptons des contributions. Contactez-nous via le
              formulaire ou par email avec votre proposition détaillée.
            </p>
          </details>
        </div>
      </section>

      {/* Note SEO */}
      <section className="text-sm text-gray-600">
        <p>
          Cette page de contact officielle vise à renforcer la transparence et
          l’accessibilité de l’Observatoire du Syntaxerrorisme. Elle contribue à
          la lutte contre le <strong>crime syntaxique</strong> en favorisant le
          dialogue avec chercheurs, journalistes, avocats et citoyens
          intéressés.
        </p>
      </section>
    </main>
  );
}
