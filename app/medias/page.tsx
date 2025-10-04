import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title:
    "Médias — Analyses, bibliographie et documentaires sur le Syntaxerrorisme",
  description:
    "Découvrez les archives médiatiques du Syntaxerrorisme : articles, films, documentaires et bibliographies dédiées à l’étude du crime syntaxique et de ses représentations publiques.",
  openGraph: {
    title:
      "Médias — Articles, bibliographie et documentaires sur le Syntaxerrorisme",
    description:
      "La médiatisation du Syntaxerrorisme à travers le temps : analyses, sources, et archives documentées.",
    url: `${BASE_URL}/medias`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/medias`,
  },
};

export default function MediasPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Médias & Archives du Syntaxerrorisme
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Les médias jouent un rôle essentiel dans la diffusion, la
          compréhension et parfois la déformation du phénomène de{" "}
          <strong>Syntaxerrorisme</strong>. Cette section explore les{" "}
          <em>articles de presse</em>, les <em>sources académiques</em> et les
          <em>productions audiovisuelles</em> qui ont façonné la perception
          publique de cette criminalité numérique émergente.
        </p>
      </header>

      {/* Contexte historique et médiatique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          La médiatisation du Syntaxerrorisme
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Depuis les années 1990, le <strong>Syntaxerrorisme</strong> a été à la
          fois objet de fascination et de crainte. Des journaux tels que le{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/New_York_Times"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            New York Times
          </Link>{" "}
          ou{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Le_Monde"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Le Monde
          </Link>{" "}
          ont régulièrement couvert des incidents liés à des « crimes
          syntaxiques » : bugs massifs, failles de sécurité, manipulations
          d’algorithmes et scandales technologiques.
        </p>
        <p className="text-gray-700 mb-4">
          Des événements majeurs comme la{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Panne_de_Facebook_de_2021"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            panne mondiale de Facebook (2021)
          </Link>{" "}
          ou la fuite de données révélée par{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Edward_Snowden"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Edward Snowden
          </Link>{" "}
          ont renforcé la place du Syntaxerrorisme dans le débat public. Les
          médias y voient désormais une métaphore du dérèglement informationnel,
          entre bug, désinformation et pouvoir technologique.
        </p>
        <p className="text-gray-700">
          Cette rubrique vous invite à explorer en détail les ressources
          médiatiques et intellectuelles autour du Syntaxerrorisme : analyses
          d’articles, bases bibliographiques, films et documentaires
          emblématiques.
        </p>
      </section>

      {/* Liens vers les sous-pages */}
      <nav className="grid sm:grid-cols-3 gap-6">
        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/medias/articles"
              className="text-indigo-600 hover:underline"
            >
              Articles & Analyses
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Retrouvez une sélection d’articles de presse, billets d’analyse et
            publications scientifiques traitant du Syntaxerrorisme à travers ses
            multiples dimensions : juridique, politique et technologique.
          </p>
        </article>

        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/medias/bibliography"
              className="text-indigo-600 hover:underline"
            >
              Bibliographie
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Accédez à une base de ressources académiques, livres, essais et
            publications spécialisées sur le Syntaxerrorisme, ses origines
            philosophiques et ses implications sociétales.
          </p>
        </article>

        <article className="p-5 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href="/medias/movies"
              className="text-indigo-600 hover:underline"
            >
              Films & Documentaires
            </Link>
          </h3>
          <p className="text-gray-700 text-sm">
            Une sélection d’œuvres audiovisuelles et de documentaires illustrant
            la perception du Syntaxerrorisme à travers la culture populaire et
            le cinéma numérique contemporain.
          </p>
        </article>
      </nav>

      {/* Section approfondissement */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">
          Les médias comme miroir du chaos numérique
        </h2>
        <p className="text-gray-700 mb-4">
          Plusieurs <strong>figures médiatiques controversées</strong> ont
          contribué à populariser ou manipuler la notion de Syntaxerrorisme : de{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Julian_Assange"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Julian Assange
          </Link>{" "}
          à{" "}
          <Link
            href="https://fr.wikipedia.org/wiki/Elon_Musk"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            Elon Musk
          </Link>
          , ces personnalités ont influencé le rapport entre vérité, technologie
          et communication.
        </p>
        <p className="text-gray-700">
          La représentation médiatique du Syntaxerrorisme soulève une question
          essentielle : comment la société perçoit-elle ses propres erreurs ? À
          travers l’information, la satire et la fiction, les médias participent
          à la construction d’un nouveau récit technologique — parfois critique,
          parfois mythique.
        </p>
      </section>

      {/* Bloc SEO final */}
      <footer className="mt-16 text-sm text-gray-600 border-t pt-6">
        <p>
          <strong>Tags SEO :</strong> médias syntaxerrorisme, presse numérique,
          bug informatique, documentaires technologiques, désinformation, Julian
          Assange, Edward Snowden, Elon Musk, cybersécurité, culture numérique,
          communication digitale.
        </p>
      </footer>
    </main>
  );
}
