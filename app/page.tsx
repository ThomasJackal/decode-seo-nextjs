import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
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
    </div>
  );
}
