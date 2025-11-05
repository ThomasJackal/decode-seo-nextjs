"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  // Définition du menu
  const menuItems = [
    {
      label: "Juridique",
      href: "/juridique",
      children: [
        { label: "Textes de lois", href: "/juridique/laws" },
        { label: "Jurisprudence", href: "/juridique/jurisprudence" },
        { label: "Code pénal", href: "/juridique/penalcode" },
        { label: "Procédure", href: "/juridique/procedure" },
        { label: "Prévention", href: "/juridique/prevention" },
      ],
    },
    {
      label: "Histoire",
      href: "/history",
      children: [
        { label: "Chronologie", href: "/history/chronology" },
        { label: "Figures marquantes", href: "/history/figures" },
      ],
    },
    {
      label: "Médias",
      href: "/medias",
      children: [
        { label: "Articles", href: "/medias/articles" },
        { label: "Bibliographie", href: "/medias/bibliography" },
        { label: "Films & documentaires", href: "/medias/movies" },
      ],
    },
    {
      label: "Portraits",
      href: "/portraits",
      children: [
        { label: "Condamnés", href: "/portraits/convicted" },
        { label: "Avocats", href: "/portraits/lawyers" },
        { label: "Politiques", href: "/portraits/political" },
        { label: "Victimes", href: "/portraits/victims" },
      ],
    },
    {
      label: "Jeux",
      href: "/games",
      children: [
        { label: "Quiz", href: "/games/quizz" },
        { label: "Top 10", href: "/games/topten" },
      ],
    },
    {
      label: "À propos",
      href: "/about",
      children: [
        { label: "Contact", href: "/about/contact" },
        { label: "FAQ", href: "/about/faq" },
        { label: "Lexique", href: "/about/lexicon" },
      ],
    },
  ];

  // Déterminer le parent pour la flèche "Précédent"
  const segments = pathname.split("/").filter(Boolean);
  const parentPath =
    segments.length > 0
      ? "/" + segments.slice(0, segments.length - 1).join("/")
      : null;

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm relative">
      {/* Bouton retour si pas sur la home */}
      {pathname !== "/" && parentPath && (
        <Link
          href={parentPath || "/"}
          className=" -bottom-16 left-8 flex absolute items-center gap-1 text-gray-600 hover:text-indigo-600 text-sm"
        >
          <ArrowLeft size={32} />
        </Link>
      )}

      <div className="absolute bottom-0 left-0 w-full flex justify-start px-16 pointer-events-none">
        <Image
          src="/logo.svg"
          alt="Logo Observatoire du Syntaxerrorisme"
          width={50}
          height={50}
          className="opacity-90 pointer-events-none select-none"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Titre */}
        <div>
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-indigo-600"
          >
            Observatoire du Syntaxerrorisme
          </Link>
          <p className="text-sm text-gray-600 mt-1">
            les experts mondiaux du crime syntaxique
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <div key={item.href} className="relative">
              {/* Le "groupe" est uniquement sur le lien parent */}
              <div className="group inline-block">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
                >
                  {item.label}
                  {item.children && <ChevronDown size={16} />}
                </Link>

                {/* Menu enfant : s'affiche uniquement quand le titre est survolé */}
                {item.children && (
                  <div className="absolute left-0 w-48 bg-white border rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
