import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

// Métadonnées SEO optimisées style putaclic
export const metadata: Metadata = {
  title: "TOP 10 des Plus Grands Syntaxerroristes de l'Histoire — Vous ne Croirez Jamais le #1 !",
  description:
    "🚨 RÉVÉLATIONS CHOC : Découvrez le Top 10 des plus grands syntaxerroristes de l'histoire ! Le #1 va vous surprendre... Ces hackers ont marqué l'ère numérique à jamais !",
  keywords: [
    "top 10 syntaxerroristes",
    "plus grands hackers",
    "syntaxerroristes célèbres",
    "top hackers histoire",
    "cybercriminels célèbres",
    "hackers légendaires",
    "syntaxerrorisme top",
    "classement hackers",
    "cybercriminalité top",
    "hackers mythiques",
    "syntaxerroristes légendaires",
    "top cybercriminels"
  ],
  openGraph: {
    title: "TOP 10 Syntaxerroristes — Le #1 va vous CHOQUER !",
    description:
      "🚨 DÉCOUVREZ les 10 plus grands syntaxerroristes de l'histoire ! Le #1 est INCROYABLE... Ces révélations vont vous surprendre !",
    url: `${BASE_URL}/games/topten`,
    siteName: "Observatoire du Syntaxerrorisme",
    type: "article",
    images: [
      {
        url: `${BASE_URL}/og-images/topten.jpg`,
        width: 1200,
        height: 630,
        alt: "Top 10 des plus grands syntaxerroristes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOP 10 Syntaxerroristes — Le #1 va vous CHOQUER !",
    description:
      "🚨 DÉCOUVREZ les 10 plus grands syntaxerroristes ! Le #1 est INCROYABLE... Ces révélations vont vous surprendre !",
    images: [`${BASE_URL}/og-images/topten.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/games/topten`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// Données du Top 10 avec style putaclic
const topTenSyntaxerrorists = [
  {
    rank: 1,
    name: "John 'SyntaxError' Doe",
    alias: "Le Père du Syntaxerrorisme",
    description: "Le premier et le plus dangereux syntaxerroriste de l'histoire",
    crimes: ["Première boucle infinie mondiale", "Crash du système bancaire 1985", "Manipulation de code à grande échelle"],
    impact: "RÉVOLUTIONNAIRE",
    sentence: "7 ans de prison",
    externalLinks: [
      { text: "Lire son dossier complet", url: "https://fr.wikipedia.org/wiki/John_Doe" },
      { text: "Voir ses exploits sur YouTube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ],
    shockingFact: "Il a causé le premier black-out informatique mondial en 1985 !",
    image: "/images/syntaxerrorists/john-doe.jpg"
  },
  {
    rank: 2,
    name: "Kevin 'The Ghost' Mitnick",
    alias: "Le Fantôme du Code",
    description: "Le syntaxerroriste le plus recherché de l'histoire",
    crimes: ["Piratage de 40+ entreprises", "Manipulation de systèmes gouvernementaux", "Escroquerie syntaxique massive"],
    impact: "LÉGENDAIRE",
    sentence: "5 ans de prison",
    externalLinks: [
      { text: "Son autobiographie", url: "https://fr.wikipedia.org/wiki/Kevin_Mitnick" },
      { text: "Documentaire Netflix", url: "https://www.netflix.com/title/80133421" }
    ],
    shockingFact: "Il a piraté le FBI avec une simple erreur de syntaxe !",
    image: "/images/syntaxerrorists/kevin-mitnick.jpg"
  },
  {
    rank: 3,
    name: "Julian 'LeakMaster' Assange",
    alias: "Le Révélateur de Vérités",
    description: "Le syntaxerroriste qui a exposé les secrets du monde",
    crimes: ["Publication de codes confidentiels", "Manipulation de données gouvernementales", "Révélation de syntaxes cachées"],
    impact: "MONDIAL",
    sentence: "En cours",
    externalLinks: [
      { text: "WikiLeaks officiel", url: "https://wikileaks.org" },
      { text: "Son procès en direct", url: "https://www.bbc.com/news/topics/c302m85q5ljt/julian-assange" }
    ],
    shockingFact: "Il a révélé des erreurs de code dans les systèmes de surveillance mondiaux !",
    image: "/images/syntaxerrorists/julian-assange.jpg"
  },
  {
    rank: 4,
    name: "Adrian 'Lamo' Lamo",
    alias: "Le Renégat",
    description: "Le syntaxerroriste qui a trahi ses pairs",
    crimes: ["Dénonciation de syntaxerroristes", "Collaboration avec le FBI", "Trahison de la communauté"],
    impact: "CONTROVERSÉ",
    sentence: "Libéré",
    externalLinks: [
      { text: "Son histoire controversée", url: "https://fr.wikipedia.org/wiki/Adrian_Lamo" },
      { text: "Interview exclusive", url: "https://www.wired.com/story/adrian-lamo-hacker-wikileaks/" }
    ],
    shockingFact: "Il a dénoncé Chelsea Manning pour des erreurs de syntaxe !",
    image: "/images/syntaxerrorists/adrian-lamo.jpg"
  },
  {
    rank: 5,
    name: "Gary 'The Worm' McKinnon",
    alias: "Le Ver du Pentagone",
    description: "Le syntaxerroriste qui a infiltré la NASA",
    crimes: ["Piratage de 97 ordinateurs militaires", "Recherche d'OVNIs dans les codes", "Manipulation de systèmes de défense"],
    impact: "GOUVERNEMENTAL",
    sentence: "Évité l'extradition",
    externalLinks: [
      { text: "Son histoire incroyable", url: "https://fr.wikipedia.org/wiki/Gary_McKinnon" },
      { text: "Documentaire BBC", url: "https://www.bbc.com/news/technology-18996369" }
    ],
    shockingFact: "Il cherchait des preuves d'OVNIs dans le code de la NASA !",
    image: "/images/syntaxerrorists/gary-mckinnon.jpg"
  },
  {
    rank: 6,
    name: "Albert 'Phreak' Gonzalez",
    alias: "Le Maître des Données",
    description: "Le syntaxerroriste des cartes de crédit",
    crimes: ["Vol de 130 millions de numéros de cartes", "Manipulation de bases de données", "Fraude syntaxique massive"],
    impact: "FINANCIER",
    sentence: "20 ans de prison",
    externalLinks: [
      { text: "Son procès historique", url: "https://fr.wikipedia.org/wiki/Albert_Gonzalez" },
      { text: "Impact sur l'économie", url: "https://www.nytimes.com/2010/03/26/technology/26security.html" }
    ],
    shockingFact: "Il a volé plus de données que tous les autres syntaxerroristes réunis !",
    image: "/images/syntaxerrorists/albert-gonzalez.jpg"
  },
  {
    rank: 7,
    name: "Jeanson 'Anon' Chan",
    alias: "L'Anonyme",
    description: "Le syntaxerroriste d'Anonymous",
    crimes: ["Attaques DDoS massives", "Manipulation de sites gouvernementaux", "Révélation de syntaxes cachées"],
    impact: "ACTIVISTE",
    sentence: "En cours",
    externalLinks: [
      { text: "Anonymous France", url: "https://fr.wikipedia.org/wiki/Anonymous" },
      { text: "Ses opérations", url: "https://www.lemonde.fr/pixels/article/2012/01/20/anonymous-france_1632014_4408996.html" }
    ],
    shockingFact: "Il a fait tomber des sites gouvernementaux avec des erreurs de syntaxe !",
    image: "/images/syntaxerrorists/jeanson-chan.jpg"
  },
  {
    rank: 8,
    name: "Marcus 'Mafiaboy' Hess",
    alias: "Le Gamin du Chaos",
    description: "Le syntaxerroriste adolescent",
    crimes: ["Attaque de Yahoo et eBay", "Manipulation de serveurs", "Chaos syntaxique mondial"],
    impact: "MÉDIATIQUE",
    sentence: "8 mois de prison",
    externalLinks: [
      { text: "Son histoire", url: "https://fr.wikipedia.org/wiki/Mafiaboy" },
      { text: "Impact sur Internet", url: "https://www.cbc.ca/news/technology/mafiaboy-20-years-later-1.5431234" }
    ],
    shockingFact: "À 15 ans, il a fait tomber Yahoo avec une erreur de syntaxe !",
    image: "/images/syntaxerrorists/mafiaboy.jpg"
  },
  {
    rank: 9,
    name: "Jonathan 'C0mrade' James",
    alias: "Le Tragique",
    description: "Le syntaxerroriste qui s'est suicidé",
    crimes: ["Piratage de la NASA et du DoD", "Manipulation de systèmes critiques", "Vol de logiciels"],
    impact: "TRAGIQUE",
    sentence: "Suicide",
    externalLinks: [
      { text: "Son histoire tragique", url: "https://fr.wikipedia.org/wiki/Jonathan_James" },
      { text: "Impact sur la communauté", url: "https://www.wired.com/2008/05/teen-hacker-jon/" }
    ],
    shockingFact: "Il a été le plus jeune condamné pour syntaxerrorisme à 16 ans !",
    image: "/images/syntaxerrorists/jonathan-james.jpg"
  },
  {
    rank: 10,
    name: "Kevin 'Dark Dante' Poulsen",
    alias: "Le Maître des Télécommunications",
    description: "Le syntaxerroriste des lignes téléphoniques",
    crimes: ["Manipulation de systèmes téléphoniques", "Piratage de radios", "Fraude syntaxique télécoms"],
    impact: "TÉLÉCOMMUNICATIONS",
    sentence: "5 ans de prison",
    externalLinks: [
      { text: "Son histoire", url: "https://fr.wikipedia.org/wiki/Kevin_Poulsen" },
      { text: "Ses exploits", url: "https://www.wired.com/1994/07/poulsen/" }
    ],
    shockingFact: "Il a piraté une radio pour gagner une Porsche avec une erreur de syntaxe !",
    image: "/images/syntaxerrorists/kevin-poulsen.jpg"
  }
];

export default function TopTenPage() {
  // JSON-LD pour le SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TOP 10 des Plus Grands Syntaxerroristes de l'Histoire",
    description: "Découvrez le classement des 10 plus grands syntaxerroristes de l'histoire. Le #1 va vous surprendre !",
    url: `${BASE_URL}/games/topten`,
    author: {
      "@type": "Organization",
      name: "Observatoire du Syntaxerrorisme"
    },
    publisher: {
      "@type": "Organization",
      name: "Observatoire du Syntaxerrorisme",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.png`
      }
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/games/topten`
    },
    image: `${BASE_URL}/og-images/topten.jpg`,
    about: {
      "@type": "Thing",
      name: "Syntaxerrorisme"
    },
    mentions: topTenSyntaxerrorists.map(person => ({
      "@type": "Person",
      name: person.name,
      description: person.description
    }))
  };

  return (
    <>
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header putaclic */}
        <header className="mb-12 text-center">
          <div className="mb-6">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              🚨 EXCLUSIF 🚨
            </span>
          </div>
          <h1 className="text-5xl font-black mb-6 text-gray-900 leading-tight">
            TOP 10 des Plus Grands{" "}
            <span className="text-red-600">Syntaxerroristes</span>{" "}
            de l'Histoire
          </h1>
          <p className="text-2xl text-gray-700 mb-4 font-bold">
            Vous ne Croirez <span className="text-red-600">JAMAIS</span> le #1 !
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            🚨 <strong>RÉVÉLATIONS CHOC</strong> : Découvrez les 10 syntaxerroristes les plus 
            dangereux de l'histoire ! Le #1 va vous <em>surprendre</em>... Ces hackers 
            ont marqué l'ère numérique à jamais ! ⚡
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
              ⚡ 10 révélations choc
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">
              🚨 Le #1 va vous choquer
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              📊 Classement officiel
            </span>
          </div>
        </header>

        {/* Navigation breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link> / 
          <Link href="/games" className="hover:text-indigo-600"> Jeux</Link> / 
          <span className="text-gray-900">Top 10</span>
        </nav>

        {/* Teaser putaclic */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-yellow-50 p-8 rounded-xl border-l-4 border-red-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ⚠️ ATTENTION : Ce Top 10 va vous CHOQUER !
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Après des <strong>années d'enquête</strong>, l'Observatoire du Syntaxerrorisme 
            révèle enfin le <em>classement officiel</em> des 10 plus grands syntaxerroristes 
            de l'histoire. Certaines révélations vont vous <strong>surprendre</strong> !
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow">
              <strong>🔍 Méthodologie :</strong> Analyse de 1000+ affaires
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <strong>📊 Critères :</strong> Impact, innovation, dangerosité
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <strong>⚖️ Sources :</strong> Jurisprudence et archives officielles
            </div>
          </div>
        </section>

        {/* Le Top 10 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            🏆 Le Classement Officiel
          </h2>
          
          <div className="space-y-8">
            {topTenSyntaxerrorists.map((person, index) => (
              <article 
                key={person.rank}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  person.rank <= 3 ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Rank */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xl ${
                      person.rank === 1 ? 'bg-yellow-500' :
                      person.rank === 2 ? 'bg-gray-400' :
                      person.rank === 3 ? 'bg-orange-500' :
                      'bg-gray-300 text-gray-700'
                    }`}>
                      {person.rank}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {person.name}
                        </h3>
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                          {person.alias}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          person.impact === 'RÉVOLUTIONNAIRE' ? 'bg-yellow-100 text-yellow-800' :
                          person.impact === 'LÉGENDAIRE' ? 'bg-purple-100 text-purple-800' :
                          person.impact === 'MONDIAL' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {person.impact}
                        </span>
                      </div>

                      <p className="text-lg text-gray-700 mb-4">
                        {person.description}
                      </p>

                      {/* Shocking fact */}
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                        <p className="text-red-800 font-bold">
                          🚨 <strong>RÉVÉLATION CHOC :</strong> {person.shockingFact}
                        </p>
                      </div>

                      {/* Crimes */}
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-2">🔍 Crimes commis :</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {person.crimes.map((crime, idx) => (
                            <li key={idx}>{crime}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Sentence */}
                      <div className="mb-4">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          <strong>Peine :</strong> {person.sentence}
                        </span>
                      </div>

                      {/* External links */}
                      <div className="flex flex-wrap gap-2">
                        {person.externalLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                          >
                            {link.text} →
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section putaclic bonus */}
        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            🎯 Vous Voulez En Savoir Plus ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                📚 Ressources Exclusives
              </h3>
              <div className="space-y-3">
                <Link 
                  href="/juridique" 
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <strong>📖 Dossier Juridique Complet</strong><br/>
                  <span className="text-gray-600">Tous les textes de lois sur le syntaxerrorisme</span>
                </Link>
                <Link 
                  href="/history" 
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <strong>📅 Chronologie Historique</strong><br/>
                  <span className="text-gray-600">L'histoire complète du syntaxerrorisme</span>
                </Link>
                <Link 
                  href="/portraits" 
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <strong>👤 Portraits Détaillés</strong><br/>
                  <span className="text-gray-600">Biographies complètes des figures marquantes</span>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🔗 Liens Externes Recommandés
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://fr.wikipedia.org/wiki/Hacker_(sécurité_informatique)" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <strong>🌐 Wikipedia - Hackers</strong><br/>
                  <span className="text-gray-600">Encyclopédie complète sur les hackers</span>
                </a>
                <a 
                  href="https://www.interpol.int/fr/Crimes/Cybercriminalite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <strong>🚨 Interpol - Cybercriminalité</strong><br/>
                  <span className="text-gray-600">Informations officielles sur la cybercriminalité</span>
                </a>
                <a 
                  href="https://www.anssi.gouv.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <strong>🛡️ ANSSI - Sécurité</strong><br/>
                  <span className="text-gray-600">Agence nationale de la sécurité des systèmes</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ putaclic */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ❓ Questions Fréquentes
          </h2>
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-lg shadow">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                🤔 Comment ce classement a-t-il été établi ?
              </summary>
              <p className="mt-4 text-gray-700">
                Notre classement est basé sur une <strong>analyse rigoureuse</strong> de plus de 1000 affaires 
                de syntaxerrorisme, en tenant compte de l'impact, de l'innovation technique, et de la 
                dangerosité des actes commis. Chaque syntaxerroriste a été évalué selon des critères 
                <em>scientifiques</em> et <em>juridiques</em>.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                🚨 Le #1 est-il vraiment le plus dangereux ?
              </summary>
              <p className="mt-4 text-gray-700">
                <strong>Absolument !</strong> John 'SyntaxError' Doe a révolutionné le syntaxerrorisme 
                en 1985. Son impact sur l'histoire du crime syntaxique est <em>incomparable</em>. 
                Il a littéralement <strong>changé le monde</strong> avec ses erreurs de code !
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                📊 Y a-t-il des syntaxerroristes plus récents ?
              </summary>
              <p className="mt-4 text-gray-700">
                Bien sûr ! Notre classement évolue constamment. De nouveaux syntaxerroristes 
                émergent régulièrement. <strong>Restez connectés</strong> pour découvrir les 
                <em>dernières révélations</em> de l'Observatoire du Syntaxerrorisme !
              </p>
            </details>
          </div>
        </section>

        {/* CTA putaclic */}
        <section className="mb-12 bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            🚨 Ne Ratez Aucune Révélation !
          </h2>
          <p className="text-xl mb-6">
            Abonnez-vous à notre <strong>newsletter exclusive</strong> pour recevoir 
            les dernières révélations sur le syntaxerrorisme !
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              S'abonner
            </button>
          </form>
        </section>

        {/* Footer SEO */}
        <footer className="text-sm text-gray-600 border-t pt-6">
          <p>
            <strong>Mots-clés :</strong> top 10 syntaxerroristes, plus grands hackers, 
            syntaxerroristes célèbres, top hackers histoire, cybercriminels célèbres, 
            hackers légendaires, syntaxerrorisme top, classement hackers, cybercriminalité top, 
            hackers mythiques, syntaxerroristes légendaires, top cybercriminels, classement 
            syntaxerrorisme, hackers les plus dangereux, cybercriminalité classement.
          </p>
        </footer>
      </main>

      {/* JSON-LD pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        defer
      />
    </>
  );
}
