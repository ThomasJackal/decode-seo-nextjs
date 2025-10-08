import type { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import ClientTimeline from "@/components/ClientTimeline";

const BASE_URL = "https://observatoire-syntaxerrorisme.vercel.app";

export const metadata: Metadata = {
  title:
    "Syntaxerrorisme — Observatoire, lois, jurisprudence, histoire & prévention",
  description:
    "Découvrez l’Observatoire du Syntaxerrorisme : définitions, textes de lois, jurisprudence, chronologie historique, figures marquantes et ressources de prévention.",
  keywords: [
    "syntaxerrorisme",
    "crime syntaxique",
    "jurisprudence syntaxerrorisme",
    "lois syntaxerrorisme",
    "code pénal syntaxerrorisme",
    "histoire du syntaxerrorisme",
    "prévention syntaxerrorisme",
  ],
  openGraph: {
    title:
      "Observatoire du Syntaxerrorisme — lois, jurisprudence, histoire et prévention",
    description:
      "Analyses, textes de loi, jurisprudence et chronologie pour comprendre et prévenir le crime de syntaxerrorisme.",
    url: BASE_URL,
    siteName: "Observatoire du Syntaxerrorisme",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-images/home.jpg`,
        width: 1200,
        height: 630,
        alt: "Illustration Observatoire du Syntaxerrorisme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Observatoire du Syntaxerrorisme",
    description:
      "Site de référence sur le syntaxerrorisme : lois, jurisprudence, histoire, prévention et figures marquantes.",
    images: [`${BASE_URL}/og-images/home.jpg`],
  },
  alternates: {
    canonical: BASE_URL,
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

export default function Home() {
  const now = new Date().toISOString().slice(0, 10);


  
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#org`,
        name: "Observatoire du Syntaxerrorisme",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/logo.png`,
        },  
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Observatoire du Syntaxerrorisme",
        alternateName: [
          "Observatoire Syntaxerrorisme",
          "Observatoire du Syntax Errorisme",
        ],  
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: BASE_URL + "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Juridique",
            item: BASE_URL + "/juridique",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Histoire",
            item: BASE_URL + "/history",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Qu'est-ce que le syntaxerrorisme ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le syntaxerrorisme est le terme employé ici pour désigner le 'crime' lié aux erreurs ou manipulations syntaxiques à fort impact, étudié par notre observatoire.",
            },
          },
          {
            "@type": "Question",
            name: "Le syntaxerrorisme est-il puni par la loi ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sur ce site nous documentons textes et jurisprudence le concernant ; la nature exacte des sanctions dépend des textes présentés dans la rubrique 'Textes de lois'.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        {/* Préconnect et preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href={BASE_URL} />
        <link
          rel="preload"
          as="image"
          href="/images/juridique-bg.webp"
          imageSrcSet="/images/juridique-bg.webp 1x, /images/juridique-bg@2x.webp 2x"
        />
        {/* CSS critique en inline */}
        <style>{`
          .hero h1 { font-size: 2rem; text-align: center; }
          .explorer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }
        `}</style>
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="hero mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Observatoire du{" "}
            <span className="text-indigo-600">Syntaxerrorisme</span>
          </h1>
          <p className="mt-3 text-gray-700 text-lg">
            Observatoire du Syntaxerrorisme : analyser, prévenir et comprendre
            ce crime syntaxique. Analyses, textes de loi, jurisprudence,
            histoire et ressources pédagogiques.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/juridique"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700"
            >
              Dossier juridique
            </Link>
            <Link
              href="/history"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Histoire & chronologie
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Mis à jour le {now} — contenu optimisé pour le mot-clé principal «
            syntaxerrorisme ».
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Explorer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                href: "/juridique",
                title: "Juridique",
                desc: "Textes de lois, code pénal, jurisprudence et procédures.",
                img: "/images/juridique-bg.webp",
              },
              {
                href: "/history",
                title: "Histoire",
                desc: "Chronologie, figures marquantes et archives historiques.",
                img: "/images/history-bg.webp",
              },
              {
                href: "/medias",
                title: "Médias",
                desc: "Articles, bibliographie et films liés au syntaxerrorisme.",
                img: "/images/medias-bg.webp",
              },
              {
                href: "/portraits",
                title: "Portraits",
                desc: "Condamnés, avocats, politiques et victimes.",
                img: "/images/portraits-bg.webp",
              },
              {
                href: "/games",
                title: "Jeux & quiz",
                desc: "Quiz interactifs et Top 10 pour sensibiliser en s'amusant.",
                img: "/images/games-bg.webp",
              },
              {
                href: "/about",
                title: "À propos",
                desc: "Contact, FAQ et lexique du syntaxerrorisme.",
                img: "/images/about-bg.webp",
              },
            ].map(({ href, title, desc, img }) => (
              <Link
                key={href}
                href={href}
                className="relative p-4 rounded-2xl overflow-hidden group h-40 flex flex-col justify-end text-white shadow-md"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-200 mt-1">{desc}</p>
                </div>
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500 ease-out" />
              </Link>
            ))}
          </div>
        </section>

        {/* FEATURED JURISPRUDENCE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Jurisprudence récente
          </h2>
          <div className="grid gap-4">
            <article className="p-4 border rounded">
              <Link
                href="/juridique/jurisprudence/affaire-balises"
                className="text-lg font-medium text-indigo-600"
              >
                Affaire « Balises mal fermées » — Cour numérique, 2024
              </Link>
              <p className="mt-1 text-sm text-gray-600">
                Résumé : décision majeure sur la responsabilité pour négligence
                syntaxique dans un projet open-source.
              </p>
            </article>
            <article className="p-4 border rounded">
              <Link
                href="/juridique/jurisprudence/point-virgule"
                className="text-lg font-medium text-indigo-600"
              >
                Affaire « Point-virgule manquant » — Tribunal de l'Internet,
                2023
              </Link>
              <p className="mt-1 text-sm text-gray-600">
                Résumé : jurisprudence sur la récidive et les sanctions
                applicables au syntaxerrorisme professionnel.
              </p>
            </article>
          </div>
          <p className="mt-4">
            <Link
              href="/juridique/jurisprudence"
              className="text-sm text-indigo-600 hover:underline"
            >
              Voir toute la jurisprudence →
            </Link>
          </p>
        </section>

        {/* FEATURED LAWS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Textes & Code pénal
          </h2>
          <p className="text-gray-700 mb-4">
            Accédez au recueil des textes de lois, articles commentés et au code
            pénal relatif au syntaxerrorisme pour comprendre les fondements
            juridiques.
          </p>
          <div className="flex gap-3">
            <Link
              href="/juridique/laws"
              className="px-4 py-2 border rounded text-sm hover:bg-gray-50"
            >
              Textes de lois
            </Link>
            <Link
              href="/juridique/penalcode"
              className="px-4 py-2 border rounded text-sm hover:bg-gray-50"
            >
              Code pénal
            </Link>
          </div>
        </section>

        {/* TIMELINE TEASER */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Frise chronologique
          </h2>
          <p className="text-gray-700">
            De l’origine du terme jusqu’aux affaires contemporaines — une frise
            interactive retraçant les étapes clés du syntaxerrorisme.
          </p>
          <ClientTimeline />
        </section>

        {/* CTA / ENGAGEMENT */}
        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-white p-6 rounded">
          <h3 className="text-xl font-semibold text-gray-900">
            Contribuez & restez informé
          </h3>
          <p className="text-gray-700 mt-2">
            Partagez des dossiers, signalez une affaire ou abonnez-vous à notre
            lettre d'information pour recevoir les mises à jour sur le
            syntaxerrorisme.
          </p>
          <form
            method="post"
            action="/api/subscribe"
            className="mt-4 flex max-w-md gap-2"
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="votre@email.fr"
              className="flex-1 rounded border px-3 py-2 text-sm"
              aria-label="Adresse e-mail pour la newsletter"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-indigo-600 text-white text-sm"
            >
              S'abonner
            </button>
          </form>
        </section>

        {/* FAQ SUMMARY */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            FAQ rapide
          </h2>
          <div className="space-y-3">
            <details className="p-3 border rounded">
              <summary className="font-medium">
                Qu'est-ce que le syntaxerrorisme ?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Le syntaxerrorisme désigne, sur ce site, les délits et fautes
                syntaxiques ayant un impact légal, social ou technique
                significatif.
              </p>
            </details>
            <details className="p-3 border rounded">
              <summary className="font-medium">
                Comment signaler une affaire ?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Utilisez notre page{" "}
                <Link
                  href="/about/contact"
                  className="text-indigo-600 hover:underline"
                >
                  Contact
                </Link>{" "}
                pour soumettre un dossier ou une documentation.
              </p>
            </details>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <section className="mb-12 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Observatoire du Syntaxerrorisme —{" "}
            <Link href="/plan-du-site" className="hover:underline">
              Plan du site
            </Link>{" "}
            ·{" "}
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>
          </p>
        </section>
      </main>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        defer
      />
    </>
  );
}
