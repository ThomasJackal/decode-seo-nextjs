"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
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

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl font-bold text-gray-800">
            Observatoire du Syntaxerrorisme
          </Link>
          <p className="text-sm text-gray-600 mt-1">
            les experts mondiaux du crime syntaxique
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  {item.label}
                  {item.children && <ChevronDown size={16} />}
                </Button>
              </DropdownMenuTrigger>
              {item.children && (
                <DropdownMenuContent>
                  {item.children.map((child, i) => (
                    <DropdownMenuItem key={i} asChild>
                      <Link href={child.href}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          ))}
        </nav>
      </div>
    </header>
  );
}
