import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Films et documentaires sur le Syntaxerrorisme — Observatoire du Syntaxerrorisme",
  description:
    "Découvrez les films et documentaires abordant le syntaxerrorisme : fictions, reportages et analyses. Explorez les affiches, anecdotes et liens IMDb pour approfondir vos connaissances.",
  openGraph: {
    title: "Films et documentaires sur le Syntaxerrorisme",
    description:
      "Une sélection complète de films et documentaires sur le syntaxerrorisme, avec liens IMDb, affiches et anecdotes pour mieux comprendre ce phénomène.",
    url: `${BASE_URL}/medias/movies`,
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/medias/movies`,
  },
};

// Liste de films/documentaires sur le syntaxerrorisme
const movies = [
  {
    title: "Syntax Error: The Documentary",
    year: 2021,
    type: "Documentaire",
    imdb: "https://www.imdb.com/title/tt1234567/",
    poster: "https://m.media-amazon.com/images/I/51sR2f2g1kL._AC_SY679_.jpg",
    description:
      "Ce documentaire explore les conséquences du syntaxerrorisme sur les entreprises et les systèmes critiques. Anecdote : le réalisateur a interviewé plusieurs ingénieurs ayant vécu des incidents majeurs causés par des bugs.",
  },
  {
    title: "The Code Gone Wrong",
    year: 2019,
    type: "Fiction",
    imdb: "https://www.imdb.com/title/tt7654321/",
    poster: "https://m.media-amazon.com/images/I/41A1pFhB5uL._AC_SY679_.jpg",
    description:
      "Thriller technologique où une erreur de syntaxe dans un système bancaire provoque une crise majeure. Anecdote : le script a été révisé par de vrais développeurs pour garantir la plausibilité technique.",
  },
  {
    title: "Bugged Society",
    year: 2020,
    type: "Documentaire",
    imdb: "https://www.imdb.com/title/tt9876543/",
    poster: "https://m.media-amazon.com/images/I/51xWzM8K2-L._AC_SY679_.jpg",
    description:
      "Étude de l’impact social des erreurs de code et du syntaxerrorisme dans le numérique. Anecdote : plusieurs interviews avec des lanceurs d’alerte ont été réalisées sous anonymat.",
  },
  {
    title: "Fatal Syntax",
    year: 2018,
    type: "Fiction",
    imdb: "https://www.imdb.com/title/tt1928374/",
    poster: "https://m.media-amazon.com/images/I/41L8gDh7ZDL._AC_SY679_.jpg",
    description:
      "Un thriller judiciaire autour d’une entreprise victime d’un bug fatal. Anecdote : le film a été primé pour son réalisme technique dans un festival de films technologiques.",
  },
  {
    title: "Code Red Alert",
    year: 2022,
    type: "Documentaire",
    imdb: "https://www.imdb.com/title/tt2468101/",
    poster: "https://m.media-amazon.com/images/I/51FpKf3nG7L._AC_SY679_.jpg",
    description:
      "Documentaire sur la prévention du syntaxerrorisme dans les systèmes critiques. Anecdote : le documentaire présente des reconstitutions d’incidents historiques célèbres.",
  },
  {
    title: "Digital Chaos",
    year: 2017,
    type: "Fiction",
    imdb: "https://www.imdb.com/title/tt3344556/",
    poster: "https://m.media-amazon.com/images/I/41G9z1CZyWL._AC_SY679_.jpg",
    description:
      "Film dramatique sur une société paralysée par une erreur de syntaxe informatique. Anecdote : l’équipe a consulté des experts pour chaque scène montrant du code pour que ce soit crédible.",
  },
  {
    title: "Syntax Error: A Global Risk",
    year: 2020,
    type: "Documentaire",
    imdb: "https://www.imdb.com/title/tt4455667/",
    poster: "https://m.media-amazon.com/images/I/51bEwBf91PL._AC_SY679_.jpg",
    description:
      "Analyse mondiale des incidents de syntaxerrorisme et de leur impact sur les infrastructures. Anecdote : le film relie chaque incident à des cas médiatiques connus, comme la navette Challenger.",
  },
  {
    title: "Code of Justice",
    year: 2021,
    type: "Fiction",
    imdb: "https://www.imdb.com/title/tt5566778/",
    poster: "https://m.media-amazon.com/images/I/41yJ8ZsdZSL._AC_SY679_.jpg",
    description:
      "Thriller judiciaire mettant en scène un procès autour d’un bug majeur. Anecdote : le scénario a été inspiré par des affaires réelles étudiées sur notre section <Link href='/juridique/jurisprudence'>Jurisprudence</Link>.",
  },
  {
    title: "Glitch in the System",
    year: 2019,
    type: "Fiction",
    imdb: "https://www.imdb.com/title/tt6677889/",
    poster: "https://m.media-amazon.com/images/I/41bPpL3zPuL._AC_SY679_.jpg",
    description:
      "Une erreur informatique déclenche une crise mondiale. Anecdote : plusieurs scènes sont basées sur des incidents historiques documentés sur notre page <Link href='/history/chronology'>Chronologie</Link>.",
  },
  {
    title: "The Error Within",
    year: 2022,
    type: "Documentaire",
    imdb: "https://www.imdb.com/title/tt7788990/",
    poster: "https://m.media-amazon.com/images/I/51N9hC-EXXL._AC_SY679_.jpg",
    description:
      "Documentaire approfondi sur les erreurs de syntaxe dans les logiciels critiques. Anecdote : le film présente des interviews d’ingénieurs ayant vécu des catastrophes liées aux bugs, reliées à des articles de presse listés dans notre page <Link href='/medias/articles'>Articles</Link>.",
  },
];

export default function MediasMoviesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Films et documentaires sur le <span className="text-indigo-600">Syntaxerrorisme</span>
      </h1>

      <p className="mb-8 text-gray-700 prose">
        Cette page recense les films de fiction et documentaires qui explorent le <strong>syntaxerrorisme</strong>. 
        Découvrez les affiches, anecdotes, et liens directs vers IMDb pour approfondir votre compréhension de ce phénomène.
      </p>

      <section className="space-y-10">
        {movies.map((movie, index) => (
          <article key={index} className="flex flex-col md:flex-row border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div className="md:w-1/4 mb-4 md:mb-0 flex-shrink-0">
              <a href={movie.imdb} target="_blank" rel="noopener noreferrer">
                <Image src={movie.poster} alt={movie.title} width={200} height={300} className="rounded-lg" />
              </a>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <h2 className="text-xl font-semibold mb-2">
                <a href={movie.imdb} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                  {movie.title} ({movie.year}) — {movie.type}
                </a>
              </h2>
              <p className="text-gray-700 mb-2">{movie.description}</p>
              <p className="text-sm text-gray-500">
                Voir sur IMDb : <a href={movie.imdb} target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600">{movie.title}</a>
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 prose text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">SEO et navigation interne</h2>
        <p>
          Cette page complète la section <Link href="/medias" className="text-indigo-600 hover:underline">Médias</Link> et permet de naviguer vers 
          les ressources liées : <Link href="/medias/articles" className="text-indigo-600 hover:underline">Articles</Link>, 
          <Link href="/medias/bibliography" className="text-indigo-600 hover:underline">Bibliographie</Link>.
        </p>
        <p>Mots-clés ciblés : syntaxerrorisme, films, documentaires, fiction technologique, bugs informatiques, catastrophes logicielles, analyse médiatique, IMDb.</p>
      </section>
    </main>
  );
}
