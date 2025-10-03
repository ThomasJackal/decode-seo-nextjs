"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Back */}
        <div className="flex items-center gap-4">
          {/* Bouton retour si pas sur la home */}
          {pathname !== "/" && parentPath && (
            <Link
              href={parentPath || "/"}
              className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 text-sm"
            >
              <ArrowLeft size={16} />
            </Link>
          )}

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
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <DropdownMenu
              key={index}
              open={openIndex === index}
              onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}
            >
              <div
                className="relative"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                {/* Lien parent cliquable */}
                <DropdownMenuTrigger asChild>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
                  >
                    {item.label}
                    {item.children && <ChevronDown size={16} />}
                  </Link>
                </DropdownMenuTrigger>

                {/* Dropdown enfant au hover */}
                {item.children && (
                  <DropdownMenuContent>
                    {item.children.map((child, i) => (
                      <DropdownMenuItem key={i} asChild>
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                )}
              </div>
            </DropdownMenu>
          ))}
        </nav>
      </div>
    </header>
  );
}
