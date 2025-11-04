"use client";

import Link from "next/link";
import { useState } from "react";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

// Questions du quiz avec optimisation SEO
const quizQuestions = [
  {
    id: 1,
    question: "Qu'est-ce que le syntaxerrorisme selon l'Observatoire ?",
    options: [
      "Un langage de programmation",
      "Le crime lié aux erreurs ou manipulations syntaxiques à fort impact",
      "Une technique de codage avancée",
      "Un type de virus informatique"
    ],
    correct: 1,
    explanation: "Le syntaxerrorisme désigne le 'crime' lié aux erreurs ou manipulations syntaxiques à fort impact, étudié par notre observatoire."
  },
  {
    id: 2,
    question: "Quelle est la première affaire documentée de syntaxerrorisme ?",
    options: [
      "L'affaire 'Balises mal fermées' (2024)",
      "L'affaire 'Point-virgule manquant' (2023)",
      "L'affaire 'Boucle infinie' (1999)",
      "L'affaire 'Variable non déclarée' (1985)"
    ],
    correct: 2,
    explanation: "L'affaire 'Boucle infinie' de 1999 est considérée comme la première affaire documentée de syntaxerrorisme dans notre chronologie."
  },
  {
    id: 3,
    question: "Quel article du Code pénal traite du syntaxerrorisme ?",
    options: [
      "Article 323-1",
      "Article 323-2",
      "Article 323-3",
      "Article 323-4"
    ],
    correct: 0,
    explanation: "L'article 323-1 du Code pénal traite spécifiquement du syntaxerrorisme et de ses sanctions."
  },
  {
    id: 4,
    question: "Qui est considéré comme le premier syntaxerroriste condamné ?",
    options: [
      "Kevin Mitnick",
      "Julian Assange",
      "Adrian Lamo",
      "John Doe (alias 'SyntaxError')"
    ],
    correct: 3,
    explanation: "John Doe, alias 'SyntaxError', est considéré comme le premier syntaxerroriste condamné en 1985."
  },
  {
    id: 5,
    question: "Quelle est la peine maximale pour syntaxerrorisme aggravé ?",
    options: [
      "2 ans de prison",
      "5 ans de prison",
      "7 ans de prison",
      "10 ans de prison"
    ],
    correct: 2,
    explanation: "La peine maximale pour syntaxerrorisme aggravé est de 7 ans de prison selon l'article 323-3 du Code pénal."
  },
  {
    id: 6,
    question: "Dans quelle juridiction l'affaire 'Balises mal fermées' a-t-elle été jugée ?",
    options: [
      "Tribunal de l'Internet",
      "Cour numérique",
      "Tribunal correctionnel",
      "Cour d'assises"
    ],
    correct: 1,
    explanation: "L'affaire 'Balises mal fermées' a été jugée par la Cour numérique en 2024."
  },
  {
    id: 7,
    question: "Quel est le principal moyen de prévention du syntaxerrorisme ?",
    options: [
      "L'utilisation d'antivirus",
      "La formation des développeurs",
      "Le chiffrement des données",
      "La surveillance réseau"
    ],
    correct: 1,
    explanation: "La formation des développeurs est le principal moyen de prévention du syntaxerrorisme selon nos analyses."
  },
  {
    id: 8,
    question: "Quelle organisation gère l'Observatoire du Syntaxerrorisme ?",
    options: [
      "L'ANSSI",
      "La CNIL",
      "L'Observatoire du Syntaxerrorisme",
      "L'AFNIC"
    ],
    correct: 2,
    explanation: "L'Observatoire du Syntaxerrorisme est une organisation indépendante dédiée à l'étude de ce phénomène."
  }
];

export default function QuizClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "Excellent ! Vous maîtrisez parfaitement le syntaxerrorisme.";
    if (percentage >= 60) return "Bien joué ! Vous avez de bonnes connaissances sur le syntaxerrorisme.";
    if (percentage >= 40) return "Pas mal ! Continuez à vous former sur le syntaxerrorisme.";
    return "Il faut réviser ! Consultez nos ressources pour mieux comprendre le syntaxerrorisme.";
  };

  const getScoreColor = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  // JSON-LD pour le SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: "Quiz Syntaxerrorisme - Testez vos connaissances",
    description: "Quiz interactif pour tester vos connaissances sur le syntaxerrorisme : histoire, lois, figures marquantes et affaires célèbres.",
    url: `${BASE_URL}/games/quizz`,
    author: {
      "@type": "Organization",
      name: "Observatoire du Syntaxerrorisme"
    },
    educationalLevel: "intermediate",
    learningResourceType: "quiz",
    numberOfQuestions: quizQuestions.length,
    timeRequired: "PT5M",
    inLanguage: "fr",
    about: {
      "@type": "Thing",
      name: "Syntaxerrorisme"
    }
  };

  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header SEO optimisé */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3 text-gray-900">
            Quiz Syntaxerrorisme — Testez vos connaissances
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez si vous êtes incollable sur le <strong>syntaxerrorisme</strong> ! 
            Ce quiz interactif teste vos connaissances sur l'histoire, les lois, 
            les figures marquantes et les affaires célèbres du crime syntaxique.
          </p>
          <div className="mt-4 text-sm text-gray-600">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
              {quizQuestions.length} questions • 5 minutes
            </span>
          </div>
        </header>

        {/* Navigation breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-indigo-600">Accueil</Link> / 
          <Link href="/games" className="hover:text-indigo-600"> Jeux</Link> / 
          <span className="text-gray-900">Quiz</span>
        </nav>

        {!quizCompleted ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} sur {quizQuestions.length}</span>
                <span>Score: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {quizQuestions[currentQuestion].question}
              </h2>
              
              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === null
                        ? "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                        : selectedAnswer === index
                        ? index === quizQuestions[currentQuestion].correct
                          ? "border-green-500 bg-green-50 text-green-800"
                          : "border-red-500 bg-red-50 text-red-800"
                        : index === quizQuestions[currentQuestion].correct
                        ? "border-green-500 bg-green-50 text-green-800"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <span className="font-medium mr-3">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <h3 className="font-semibold text-blue-900 mb-2">Explication :</h3>
                <p className="text-blue-800">{quizQuestions[currentQuestion].explanation}</p>
              </div>
            )}

            {/* Next button */}
            {showExplanation && (
              <div className="text-center">
                <button
                  onClick={nextQuestion}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  {currentQuestion < quizQuestions.length - 1 ? "Question suivante" : "Voir les résultats"}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Results */
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Résultats du Quiz</h2>
              <div className={`text-2xl font-semibold mb-4 ${getScoreColor()}`}>
                {score}/{quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
              </div>
              <p className="text-lg text-gray-700 mb-6">{getScoreMessage()}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Continuez votre apprentissage</h3>
                <div className="space-y-2">
                  <Link href="/juridique" className="block text-indigo-600 hover:underline">
                    → Dossier juridique
                  </Link>
                  <Link href="/history" className="block text-indigo-600 hover:underline">
                    → Histoire & chronologie
                  </Link>
                  <Link href="/portraits" className="block text-indigo-600 hover:underline">
                    → Portraits des figures marquantes
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Autres jeux</h3>
                <div className="space-y-2">
                  <Link href="/games/topten" className="block text-indigo-600 hover:underline">
                    → Top 10 des syntaxerroristes
                  </Link>
                  <Link href="/games" className="block text-indigo-600 hover:underline">
                    → Tous les jeux
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={restartQuiz}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Refaire le quiz
              </button>
              <Link
                href="/games"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Autres jeux
              </Link>
            </div>
          </div>
        )}

        {/* Section éducative pour le SEO */}
        <section className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Pourquoi ce quiz sur le syntaxerrorisme ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Apprentissage interactif</h3>
              <p className="text-gray-700 text-sm">
                Ce quiz vous permet de tester vos connaissances sur le <strong>syntaxerrorisme</strong> 
                de manière ludique et interactive. Chaque question est accompagnée d'une explication 
                détaillée pour approfondir votre compréhension.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Connaissances essentielles</h3>
              <p className="text-gray-700 text-sm">
                Le <strong>syntaxerrorisme</strong> est un phénomène complexe qui nécessite une 
                compréhension approfondie de ses aspects juridiques, historiques et techniques. 
                Ce quiz couvre tous ces domaines.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ pour le SEO */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            FAQ - Quiz Syntaxerrorisme
          </h2>
          <div className="space-y-4">
            <details className="p-4 border rounded-lg">
              <summary className="font-medium text-gray-900 cursor-pointer">
                Combien de questions contient ce quiz sur le syntaxerrorisme ?
              </summary>
              <p className="mt-2 text-gray-700">
                Ce quiz contient {quizQuestions.length} questions couvrant l'histoire, les lois, 
                les figures marquantes et les affaires célèbres du syntaxerrorisme.
              </p>
            </details>
            
            <details className="p-4 border rounded-lg">
              <summary className="font-medium text-gray-900 cursor-pointer">
                Comment sont calculés les scores du quiz ?
              </summary>
              <p className="mt-2 text-gray-700">
                Chaque bonne réponse rapporte 1 point. Le score final est exprimé en pourcentage 
                et accompagné d'un message personnalisé selon votre performance.
              </p>
            </details>
            
            <details className="p-4 border rounded-lg">
              <summary className="font-medium text-gray-900 cursor-pointer">
                Puis-je refaire le quiz plusieurs fois ?
              </summary>
              <p className="mt-2 text-gray-700">
                Oui, vous pouvez refaire le quiz autant de fois que vous le souhaitez pour 
                améliorer votre score et vos connaissances sur le syntaxerrorisme.
              </p>
            </details>
          </div>
        </section>

        {/* Footer SEO */}
        <footer className="mt-16 text-sm text-gray-600 border-t pt-6">
          <p>
            <strong>Mots-clés :</strong> quiz syntaxerrorisme, test connaissances syntaxerrorisme, 
            jeu éducatif syntaxerrorisme, quiz crime syntaxique, test syntaxerrorisme, 
            quiz cybersécurité, apprentissage syntaxerrorisme, jeu interactif syntaxerrorisme, 
            quiz hackers, test erreurs code, formation syntaxerrorisme, éducation numérique.
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
