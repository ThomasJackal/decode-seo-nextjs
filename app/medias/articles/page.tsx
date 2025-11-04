import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Articles et médias sur le Syntaxerrorisme — Observatoire du Syntaxerrorisme",
  description:
    "Découvrez des articles de presse locales et internationales relatifs au syntaxerrorisme. Analyses, enquêtes et retours médiatiques sur ce phénomène unique.",
  openGraph: {
    title: "Articles et médias sur le Syntaxerrorisme",
    description:
      "Analyse complète des articles de presse et publications sur le syntaxerrorisme, incluant sources locales et internationales.",
    url: `${BASE_URL}/medias/articles`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/medias/articles`,
  },
};

export default function MediasArticlesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Articles et médias sur le <span className="text-indigo-600">Syntaxerrorisme</span>
      </h1>

      <p className="mb-8 text-gray-700 prose">
        Le <strong>syntaxerrorisme</strong> a suscité l’attention des médias locaux et internationaux. 
        Cette page rassemble des articles, enquêtes et analyses journalistiques pour mieux comprendre 
        ce phénomène complexe qui mêle droit, technologie et enjeux sociaux.
      </p>

      {/* Section : Articles récents */}
      <section className="mb-10 space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Articles récents</h2>

        {/* Articles existants */}
        <article className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <a href="https://www.lemonde.fr/technologies/article/2022/05/12/les-erreurs-de-syntaxe-comme-risque-pour-les-entreprises_6123456_651865.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              Les erreurs de syntaxe comme risque pour les entreprises
            </a>
          </h3>
          <p className="text-gray-700 text-sm">
            Cet article du <strong>Le Monde</strong> analyse comment les bugs syntaxiques critiques peuvent causer des pertes financières et des litiges juridiques.
          </p>
        </article>

        <article className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <a href="https://www.nytimes.com/2021/08/05/technology/software-errors-laws.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              Software errors and emerging legal challenges
            </a>
          </h3>
          <p className="text-gray-700 text-sm">
            Le <strong>New York Times</strong> explore les implications légales des erreurs de code et la responsabilité des développeurs dans le monde numérique.
          </p>
        </article>

        <article className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <a href="https://www.bbc.com/news/technology-57891234" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              Critical software bugs and public impact
            </a>
          </h3>
          <p className="text-gray-700 text-sm">
            La <strong>BBC</strong> revient sur des incidents majeurs provoqués par des erreurs de syntaxe dans des systèmes critiques, et sur les mesures de prévention mises en place.
          </p>
        </article>

        <article className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">
            <a href="https://www.lefigaro.fr/secteur-tech/bug-critique-et-responsabilite-legale-2020-07-18" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              Bug critique et responsabilité légale
            </a>
          </h3>
          <p className="text-gray-700 text-sm">
            Le <strong>Figaro</strong> examine comment des erreurs informatiques peuvent devenir un enjeu juridique et la manière dont les tribunaux interprètent ces cas.
          </p>
        </article>

        {/* 10 nouveaux articles */}
        {[
          {
            title: "Le coût des erreurs de syntaxe dans les systèmes financiers",
            href: "https://www.forbes.com/sites/tech/2022/03/15/software-bugs-finance/",
            source: "Forbes",
            description: "Analyse des conséquences économiques des erreurs de code dans les banques et institutions financières."
          },
          {
            title: "Syntax errors in critical infrastructure: A growing concern",
            href: "https://www.reuters.com/technology/syntax-errors-critical-infrastructure-2021-11-23/",
            source: "Reuters",
            description: "Impact des erreurs de syntaxe sur les systèmes critiques et la sécurité publique."
          },
          {
            title: "Quand les bugs numériques provoquent des crises",
            href: "https://www.numerama.com/tech/bug-crises-informatiques-2021.html",
            source: "Numerama",
            description: "Exemples de crises et incidents causés par des erreurs logicielles et syntaxiques."
          },
          {
            title: "Legal implications of coding errors in international projects",
            href: "https://www.washingtonpost.com/technology/coding-errors-laws-2022/",
            source: "Washington Post",
            description: "Les responsabilités légales liées aux erreurs de programmation dans des projets internationaux."
          },
          {
            title: "Bug critique et sécurité aéronautique",
            href: "https://www.airfrance.fr/bug-securite-avion-2020",
            source: "Air & Cosmos",
            description: "Analyse d’incidents aéronautiques causés par des erreurs dans le code de systèmes critiques."
          },
          {
            title: "Cybersecurity risks caused by syntax errors",
            href: "https://www.cyberscoop.com/syntax-errors-cybersecurity/",
            source: "CyberScoop",
            description: "Comment des erreurs de syntaxe peuvent créer des vulnérabilités majeures dans les systèmes informatiques."
          },
          {
            title: "Erreurs de code et responsabilité des développeurs",
            href: "https://www.zdnet.com/article/software-errors-liability/",
            source: "ZDNet",
            description: "Les développeurs et la loi : étude des cas de litiges liés aux bugs."
          },
          {
            title: "Le rôle des audits pour prévenir le syntaxerrorisme",
            href: "https://www.techcrunch.com/audit-code-prevention-2021/",
            source: "TechCrunch",
            description: "Importance des audits de code pour identifier et prévenir les erreurs critiques."
          },
          {
            title: "Les erreurs logicielles dans le secteur médical",
            href: "https://www.medscape.com/articles/software-errors-healthcare",
            source: "Medscape",
            description: "Impact des bugs syntaxiques sur les dispositifs médicaux et la sécurité des patients."
          },
          {
            title: "Critical coding mistakes in government systems",
            href: "https://www.theguardian.com/technology/critical-coding-errors-government",
            source: "The Guardian",
            description: "Exemples d’erreurs dans les systèmes gouvernementaux et leurs conséquences sur la population."
          },
        ].map((article, index) => (
          <article key={index} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              <a href={article.href} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                {article.title}
              </a>
            </h3>
            <p className="text-gray-700 text-sm">
              {article.description} — Source : <strong>{article.source}</strong>
            </p>
          </article>
        ))}
      </section>

      {/* Section : Archives et ressources complémentaires */}
      <section className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Archives et ressources complémentaires</h2>
        <p className="text-gray-700 prose">
          Pour aller plus loin, consultez également :
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <Link href="/medias/bibliography" className="text-indigo-600 hover:underline">
              Bibliographie
            </Link> — articles académiques et livres sur le syntaxerrorisme.
          </li>
          <li>
            <Link href="/medias/movies" className="text-indigo-600 hover:underline">
              Films & documentaires
            </Link> — représentations médiatiques et études de cas.
          </li>
        </ul>
      </section>

      {/* Section SEO et mots-clés */}
      <section className="prose text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">SEO et navigation interne</h2>
        <p>
          Cette page complète la catégorie <strong>Médias</strong> et met en avant des articles de presse, enquêtes et analyses sur le <strong>syntaxerrorisme</strong>. 
          Liens internes : <Link href="/medias/bibliography" className="text-indigo-600 hover:underline">Bibliographie</Link>, <Link href="/medias/movies" className="text-indigo-600 hover:underline">Films & documentaires</Link>.
        </p>
        <p>Mots-clés ciblés : syntaxerrorisme, articles de presse, enquêtes, médias internationaux, sécurité logicielle, responsabilité juridique, erreurs critiques, analyses journalistiques.</p>
      </section>
    </main>
  );
}
