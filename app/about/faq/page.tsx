import type { Metadata } from "next";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "FAQ — Observatoire du Syntaxerrorisme",
  description:
    "Foire aux questions sur le crime de syntaxerrorisme : définitions, aspects juridiques, prévention, histoire et rôle de l’Observatoire.",
  openGraph: {
    title: "FAQ — Observatoire du Syntaxerrorisme",
    description:
      "Toutes les réponses aux questions fréquentes sur le syntaxerrorisme : droit, histoire, prévention, médias et portraits.",
    url: `${BASE_URL}/about/faq`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/about/faq`,
  },
};

export default function FAQ() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Foire Aux Questions (FAQ)</h1>
      <p className="mb-8 text-gray-700">
        Retrouvez ici les réponses aux questions les plus fréquentes concernant
        le <strong>syntaxerrorisme</strong>, son traitement juridique,
        historique, médiatique et humain. Cette page est conçue pour vous aider
        à mieux comprendre notre démarche et pour faciliter votre recherche
        d’informations.
      </p>

      {/* FAQ complète */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Questions fréquentes (FAQ)
        </h2>
        <div className="space-y-3">
          {/* Q1 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Qu’est-ce que le syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Le <strong>syntaxerrorisme</strong> est un concept fictif qui
              illustre les dérives liées aux erreurs de syntaxe dans les
              systèmes numériques et juridiques. Il est traité ici comme un{" "}
              <em>crime numérique</em> à la fois symbolique et pédagogique.
            </p>
          </details>

          {/* Q2 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Pourquoi un observatoire du syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              L’Observatoire a pour mission de{" "}
              <strong>documenter, prévenir et sensibiliser</strong> face à ce
              phénomène, en croisant droit, histoire, médias et portraits.
            </p>
          </details>

          {/* Q3 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Où trouver les textes de lois liés au syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Consultez la section{" "}
              <a
                href="/juridique/laws"
                className="text-indigo-600 hover:underline"
              >
                Textes de lois
              </a>
              , où nous centralisons les bases légales, codes et jurisprudences.
            </p>
          </details>

          {/* Q4 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Le syntaxerrorisme existe-t-il réellement ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Non, il s’agit d’un concept <em>fictionnel</em> et pédagogique
              servant à illustrer des problématiques liées au numérique et au
              droit.
            </p>
          </details>

          {/* Q5 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Comment prévenir le syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              La prévention passe par l’<strong>éducation numérique</strong>, la
              formation et la sensibilisation aux bonnes pratiques dans le code
              et le droit.
            </p>
          </details>

          {/* Q6 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Quelle est la différence entre une erreur de syntaxe et du
              syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Une simple erreur est technique et isolée. Le syntaxerrorisme, en
              revanche, est présenté comme une dérive volontaire ou systémique.
            </p>
          </details>

          {/* Q7 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Quels sont les impacts du syntaxerrorisme dans l’histoire ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Découvrez notre section{" "}
              <a
                href="/history/chronology"
                className="text-indigo-600 hover:underline"
              >
                Chronologie
              </a>{" "}
              pour explorer son évolution fictive dans le temps.
            </p>
          </details>

          {/* Q8 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Quelles figures marquantes sont associées au syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Nous retraçons des{" "}
              <a
                href="/history/figures"
                className="text-indigo-600 hover:underline"
              >
                portraits historiques
              </a>{" "}
              fictifs de personnalités ayant marqué ce phénomène.
            </p>
          </details>

          {/* Q9 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Existe-t-il des victimes du syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Oui, dans notre section{" "}
              <a
                href="/portraits/victims"
                className="text-indigo-600 hover:underline"
              >
                Victimes
              </a>
              , nous abordons les impacts humains de ce crime symbolique.
            </p>
          </details>

          {/* Q10 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Quels avocats ou juristes traitent du syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Retrouvez des professionnels fictifs dans{" "}
              <a
                href="/portraits/lawyers"
                className="text-indigo-600 hover:underline"
              >
                Avocats
              </a>
              .
            </p>
          </details>

          {/* Q11 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Puis-je proposer un article ou un dossier ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Oui, nous acceptons des contributions dans la section{" "}
              <a
                href="/medias/articles"
                className="text-indigo-600 hover:underline"
              >
                Articles
              </a>
              .
            </p>
          </details>

          {/* Q12 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Où trouver une bibliographie sur le sujet ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              La section{" "}
              <a
                href="/medias/bibliography"
                className="text-indigo-600 hover:underline"
              >
                Bibliographie
              </a>{" "}
              centralise les sources.
            </p>
          </details>

          {/* Q13 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Existe-t-il des films ou documentaires sur le syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Oui, visitez{" "}
              <a
                href="/medias/movies"
                className="text-indigo-600 hover:underline"
              >
                Films & documentaires
              </a>
              .
            </p>
          </details>

          {/* Q14 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Comment jouer aux quiz sur le syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Rendez-vous sur la section{" "}
              <a
                href="/games/quizz"
                className="text-indigo-600 hover:underline"
              >
                Quiz
              </a>{" "}
              pour tester vos connaissances.
            </p>
          </details>

          {/* Q15 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Quels sont les 10 faits marquants liés au syntaxerrorisme ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Consultez le classement dans{" "}
              <a
                href="/games/topten"
                className="text-indigo-600 hover:underline"
              >
                Top 10
              </a>
              .
            </p>
          </details>

          {/* Q16 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Comment contacter l’Observatoire ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Via la page{" "}
              <a
                href="/about/contact"
                className="text-indigo-600 hover:underline"
              >
                Contact
              </a>
              .
            </p>
          </details>

          {/* Q17 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Où se trouvent vos mentions légales ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Elles sont accessibles ici :{" "}
              <a
                href="/mentions-legales"
                className="text-indigo-600 hover:underline"
              >
                Mentions légales
              </a>
              .
            </p>
          </details>

          {/* Q18 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Proposez-vous un lexique spécialisé ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Oui, un glossaire est disponible dans{" "}
              <a
                href="/about/lexicon"
                className="text-indigo-600 hover:underline"
              >
                Lexique
              </a>
              .
            </p>
          </details>

          {/* Q19 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Puis-je contribuer à vos travaux ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Absolument, contactez-nous via la section{" "}
              <a
                href="/about/contact"
                className="text-indigo-600 hover:underline"
              >
                Contact
              </a>{" "}
              pour proposer une collaboration.
            </p>
          </details>

          {/* Q20 */}
          <details className="p-3 border rounded">
            <summary className="font-medium">
              Le site est-il optimisé pour les moteurs de recherche ?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              Oui, grâce à une structure claire, un plan du site, des balises
              meta uniques et un maillage interne optimisé.
            </p>
          </details>
        </div>
      </section>

      {/* Bonus SEO : JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qu’est-ce que le syntaxerrorisme ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le syntaxerrorisme est un concept fictif qui illustre les dérives liées aux erreurs de syntaxe dans les systèmes numériques et juridiques. L’Observatoire analyse ses impacts historiques, juridiques et sociaux.",
                },
              },
              {
                "@type": "Question",
                name: "Pourquoi un observatoire du syntaxerrorisme ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L’Observatoire a pour mission de documenter, prévenir et sensibiliser à ce phénomène, en fournissant des ressources pédagogiques et des références juridiques, historiques et médiatiques.",
                },
              },
              {
                "@type": "Question",
                name: "Où trouver les textes de lois et la jurisprudence ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les sections 'Textes de lois' et 'Jurisprudence' répertorient les principales références légales liées au syntaxerrorisme et à ses implications.",
                },
              },
              {
                "@type": "Question",
                name: "Comment prévenir le syntaxerrorisme ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La prévention repose sur l’éducation numérique, la sensibilisation aux bonnes pratiques et la mise à disposition d’outils pédagogiques.",
                },
              },
              {
                "@type": "Question",
                name: "Comment contacter l’Observatoire ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vous pouvez nous écrire via la page Contact. Nous répondons à toutes vos questions ou demandes de collaboration.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
