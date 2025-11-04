import type { Metadata } from "next";
import QuizClient from "./QuizClient";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

// Métadonnées SEO optimisées
export const metadata: Metadata = {
  title: "Quiz Syntaxerrorisme — Testez vos connaissances sur le crime syntaxique",
  description:
    "Quiz interactif sur le syntaxerrorisme : testez vos connaissances sur l'histoire, les lois, les figures marquantes et les affaires du crime syntaxique. Apprenez en jouant !",
  keywords: [
    "quiz syntaxerrorisme",
    "test connaissances syntaxerrorisme",
    "jeu éducatif syntaxerrorisme",
    "quiz crime syntaxique",
    "test syntaxerrorisme",
    "quiz cybersécurité",
    "apprentissage syntaxerrorisme",
    "jeu interactif syntaxerrorisme",
    "quiz hackers",
    "test erreurs code",
  ],
  openGraph: {
    title: "Quiz Syntaxerrorisme — Testez vos connaissances",
    description:
      "Quiz interactif pour tester vos connaissances sur le syntaxerrorisme : histoire, lois, figures marquantes et affaires célèbres du crime syntaxique.",
    url: `${BASE_URL}/games/quizz`,
    siteName: "Observatoire du Syntaxerrorisme",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-images/quiz.jpg`,
        width: 1200,
        height: 630,
        alt: "Quiz Syntaxerrorisme - Testez vos connaissances",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz Syntaxerrorisme — Testez vos connaissances",
    description:
      "Quiz interactif sur le syntaxerrorisme : testez vos connaissances sur l'histoire, les lois et les figures du crime syntaxique.",
    images: [`${BASE_URL}/og-images/quiz.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/games/quizz`,
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

export default function QuizPage() {
  return <QuizClient />;
}
