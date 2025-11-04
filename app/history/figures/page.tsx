import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import figures from "@/data/figures";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title: "Figures marquantes — Observatoire du Syntaxerrorisme",
  description:
    "Découvrez les figures marquantes du syntaxerrorisme : ingénieurs, lanceurs d’alerte, victimes et décideurs qui ont façonné l’histoire des erreurs techniques et humaines.",
  openGraph: {
    title: "Figures marquantes — Observatoire du Syntaxerrorisme",
    description:
      "Panorama des personnalités ayant marqué l’histoire du syntaxerrorisme à travers leurs actes, leurs erreurs ou leurs révélations.",
    url: `${BASE_URL}/history/figures`,
    type: "profile",
  },
  alternates: {
    canonical: `${BASE_URL}/history/figures`,
  },
};

const categoryColors: Record<string, string> = {
  historique: "bg-indigo-100 text-indigo-700",
  scientifique: "bg-blue-100 text-blue-700",
  politique: "bg-red-100 text-red-700",
  éthique: "bg-yellow-100 text-yellow-700",
  numérique: "bg-purple-100 text-purple-700",
  aérospatial: "bg-gray-100 text-gray-700",
};

export default function FiguresPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 text-gray-900">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Figures marquantes du{" "}
          <span className="text-indigo-600">syntaxerrorisme</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Des pionniers du code aux lanceurs d’alerte modernes, ces
          personnalités illustrent les tensions entre innovation, éthique et
          responsabilité dans l’histoire du syntaxerrorisme.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {figures.map((f) => (
          <Card
            key={f.name}
            className="shadow-md border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative w-full h-56">
              <Image
                src={f.image}
                alt={f.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>

            <CardHeader className="pb-0">
              <CardTitle className="text-lg font-bold">{f.name}</CardTitle>
              <p className="text-sm text-gray-600">{f.role}</p>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-gray-700 mt-2 text-sm">{f.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    categoryColors[f.category]
                  }`}
                >
                  {f.category}
                </span>
                <a
                  href={f.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline text-xs"
                >
                  En savoir plus ↗
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12 text-center">
        <p>
          Vous souhaitez proposer une nouvelle figure ? Contactez-nous via la
          page{" "}
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
