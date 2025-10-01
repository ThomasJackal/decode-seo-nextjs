import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-red-700">Syntaxerrorisme</h1>
          <ul className="flex gap-6 text-sm sm:text-base">
            <li>
              <a href="/about" className="hover:text-red-600">
                Qui nous sommes
              </a>
            </li>
            <li>
              <a href="/laws" className="hover:text-red-600">
                Textes de lois
              </a>
            </li>
            <li>
              <a href="/jurisprudence" className="hover:text-red-600">
                Jurisprudence
              </a>
            </li>
            <li>
              <a href="/history" className="hover:text-red-600">
                Histoire
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-red-600">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-red-700 mb-4">
            Le crime de Syntaxerrorisme
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
            Le <strong>syntaxerrorisme</strong> est une infraction grave contre
            la logique, la syntaxe et la clarté du langage, qu’il s’agisse de
            code informatique ou de communication écrite. Découvrez son origine,
            ses lois et ses implications culturelles.
          </p>
        </section>

        {/* Feature cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">⚖️ Jurisprudence</h3>
            <p>
              Explorez les grands procès qui ont marqué l’histoire du
              syntaxerrorisme.
            </p>
            <a href="/jurisprudence" className="text-red-600 hover:underline">
              En savoir plus →
            </a>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">📜 Textes de lois</h3>
            <p>
              Consultez le code pénal et les articles officiels réprimant ce
              crime.
            </p>
            <a href="/laws" className="text-red-600 hover:underline">
              Lire les lois →
            </a>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">📚 Histoire</h3>
            <p>Découvrez l’évolution du syntaxerrorisme à travers le temps.</p>
            <a href="/history" className="text-red-600 hover:underline">
              Explorer l’histoire →
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Observatoire du Syntaxerrorisme — Tous
        droits réservés
      </footer>
    </div>
  );
}
