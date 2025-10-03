import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-12 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* Bloc 1 : Présentation */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">
            Observatoire du Syntaxerrorisme
          </h3>
          <p className="mb-3">
            L’Observatoire du Syntaxerrorisme documente et analyse le crime de
            <strong> syntaxerrorisme</strong> à travers ses aspects juridiques,
            historiques, médiatiques et humains. Notre mission : informer,
            prévenir et sensibiliser.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Observatoire du Syntaxerrorisme — Tous
            droits réservés
          </p>
        </div>

        {/* Bloc 2 : Juridique */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Juridique</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/juridique/laws" className="hover:underline">
                Textes de lois
              </Link>
            </li>
            <li>
              <Link href="/juridique/jurisprudence" className="hover:underline">
                Jurisprudence
              </Link>
            </li>
            <li>
              <Link href="/juridique/penalcode" className="hover:underline">
                Code pénal
              </Link>
            </li>
            <li>
              <Link href="/juridique/procedure" className="hover:underline">
                Procédure
              </Link>
            </li>
            <li>
              <Link href="/juridique/prevention" className="hover:underline">
                Prévention
              </Link>
            </li>
          </ul>
        </div>

        {/* Bloc 3 : Histoire & Médias */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Histoire</h4>
          <ul className="space-y-1 mb-4">
            <li>
              <Link href="/history" className="hover:underline">
                Introduction
              </Link>
            </li>
            <li>
              <Link href="/history/chronology" className="hover:underline">
                Chronologie
              </Link>
            </li>
            <li>
              <Link href="/history/figures" className="hover:underline">
                Figures marquantes
              </Link>
            </li>
          </ul>
          <h4 className="font-semibold text-gray-800 mb-2">Médias</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/medias/articles" className="hover:underline">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/medias/bibliography" className="hover:underline">
                Bibliographie
              </Link>
            </li>
            <li>
              <Link href="/medias/movies" className="hover:underline">
                Films & documentaires
              </Link>
            </li>
          </ul>
        </div>

        {/* Bloc 4 : Portraits, Jeux, À propos */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Portraits</h4>
          <ul className="space-y-1 mb-4">
            <li>
              <Link href="/portraits/convicted" className="hover:underline">
                Condamnés
              </Link>
            </li>
            <li>
              <Link href="/portraits/lawyers" className="hover:underline">
                Avocats
              </Link>
            </li>
            <li>
              <Link href="/portraits/political" className="hover:underline">
                Politiques
              </Link>
            </li>
            <li>
              <Link href="/portraits/victims" className="hover:underline">
                Victimes
              </Link>
            </li>
          </ul>
          <h4 className="font-semibold text-gray-800 mb-2">Jeux</h4>
          <ul className="space-y-1 mb-4">
            <li>
              <Link href="/games/quizz" className="hover:underline">
                Quiz
              </Link>
            </li>
            <li>
              <Link href="/games/topten" className="hover:underline">
                Top 10
              </Link>
            </li>
          </ul>
          <h4 className="font-semibold text-gray-800 mb-2">À propos</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/about/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about/lexicon" className="hover:underline">
                Lexique
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page SEO */}
      <div className="mt-8 text-center text-xs text-gray-500 max-w-5xl mx-auto px-4">
        <p>
          Mots-clés liés : syntaxerrorisme, crime syntaxique, droit numérique,
          jurisprudence web, prévention des erreurs de syntaxe, histoire du
          syntaxerrorisme, figures marquantes, victimes, avocats spécialisés,
          observatoire numérique, code pénal fictif.
        </p>
        <p className="mt-2">
          <Link href="/mentions-legales" className="hover:underline">
            Mentions légales
          </Link>{" "}
          ·
          <Link
            href="/politique-de-confidentialite"
            className="hover:underline ml-2"
          >
            Politique de confidentialité
          </Link>{" "}
          ·
          <Link href="/plan-du-site" className="hover:underline ml-2">
            Plan du site
          </Link>
        </p>
      </div>
    </footer>
  );
}
