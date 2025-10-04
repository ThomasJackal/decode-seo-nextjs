import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import events from "@/data/chronology";
import Image from "next/image";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Chronologie du Syntaxerrorisme — Observatoire du Syntaxerrorisme",
  description:
    "Chronologie enrichie : événements, erreurs et affaires ayant façonné la notion de 'syntaxerrorisme'.",
  openGraph: {
    title: "Chronologie du Syntaxerrorisme — Observatoire du Syntaxerrorisme",
    description:
      "Frise enrichie retraçant incidents techniques, juridiques et environnementaux liés au syntaxerrorisme.",
    url: `${BASE_URL}/history/chronology`,
    type: "article",
  },
  alternates: {
    canonical: `${BASE_URL}/history/chronology`,
  },
};

const typeColors: Record<string, string> = {
  technique: "bg-indigo-100 text-indigo-700",
  environnemental: "bg-green-100 text-green-700",
  organisationnel: "bg-yellow-100 text-yellow-700",
};

export default function ChronologyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-900">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Chronologie enrichie du{" "}
          <span className="text-indigo-600">syntaxerrorisme</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Cette page présente une chronologie détaillée des incidents
          techniques, environnementaux et politiques liés au concept de{" "}
          <strong>syntaxerrorisme</strong>, enrichie d’enseignements et de
          contextes.
        </p>
      </header>

      <nav className="mb-10 border-b pb-4 text-sm">
        <ul className="flex flex-wrap gap-4 justify-center text-indigo-600 font-medium">
          {events.map((event) => (
            <li key={event.year}>
              <a href={`#${event.year}`} className="hover:underline">
                {event.year}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.year} id={event.year}>
            <Card className="shadow-lg border rounded-2xl h-full flex flex-col">
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                <CardTitle className="text-xl font-bold">
                  {event.year} — {event.title}
                </CardTitle>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium mt-2 md:mt-0 ${
                    typeColors[event.type]
                  }`}
                >
                  {event.type}
                </span>
              </CardHeader>

              <CardContent className="space-y-3 flex-grow flex flex-col">
                {event.image && (
                  <div className="relative w-full h-56 rounded-xl overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}

                <p className="text-gray-700">{event.description}</p>
                <p className="text-sm text-gray-600 italic">{event.details}</p>

                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    Source ↗
                  </a>
                )}

                {event.figures && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">
                      Personnalités associées :{" "}
                      {event.figures.map((f, i) => (
                        <span key={f.name}>
                          <a
                            href={f.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline"
                          >
                            {f.name}
                          </a>
                          {i < event.figures.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <section className="mt-12 text-gray-700">
        <h2 className="text-2xl font-bold mb-3">Enseignements transverses</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Tester rigoureusement chaque hypothèse de conception.</li>
          <li>Écouter les signaux d’alerte venant du terrain.</li>
          <li>Renforcer la transparence et la gouvernance lors de crises.</li>
          <li>
            Prévoir l’imprévisible en intégrant la complexité sociale et
            technique.
          </li>
        </ul>
      </section>

      <section className="mt-8 text-center">
        <p>
          Pour proposer de nouvelles entrées, rendez-vous sur la page{" "}
          <Link
            href="/about/contact"
            className="text-indigo-600 hover:underline"
          >
            Contact
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
