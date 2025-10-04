const figures = [
  {
    name: "Grace Hopper",
    role: "Pionnière de l’informatique",
    description:
      "Amirale et informaticienne américaine, Grace Hopper fut l’une des premières à identifier et populariser le terme 'bug' en informatique. Sa rigueur et son humour ont profondément influencé la culture des développeurs.",
    image: "/images/figures/grace_hopper.jpg",
    link: "https://fr.wikipedia.org/wiki/Grace_Hopper",
    category: "historique",
  },
  {
    name: "Karen Sandler",
    role: "Avocate du logiciel libre et sécurité critique",
    description:
      "Directrice exécutive de la Software Freedom Conservancy, elle milite pour l’audit du code dans les systèmes embarqués critiques — notamment les pacemakers, illustrant le lien vital entre open source et sécurité.",
    image: "/images/figures/karen_sandler.jpg",
    link: "https://en.wikipedia.org/wiki/Karen_Sandler",
    category: "éthique",
  },
  {
    name: "Robert Oppenheimer",
    role: "Physicien et conscience technologique",
    description:
      "Le ‘père de la bombe atomique’ incarne la tension entre innovation scientifique et responsabilité morale. Son célèbre ‘Now I am become Death’ symbolise l’angoisse des créateurs face à leurs créations.",
    image: "/images/figures/robert_oppenheimer.jpg",
    link: "https://fr.wikipedia.org/wiki/Robert_Oppenheimer",
    category: "scientifique",
  },
  {
    name: "Edward Snowden",
    role: "Lanceur d’alerte",
    description:
      "Ancien employé de la NSA, il a révélé l’ampleur de la surveillance mondiale opérée via des erreurs ou abus de systèmes informatiques. Son geste a bouleversé la perception publique de la cybersécurité.",
    image: "/images/figures/edward_snowden.jpg",
    link: "https://fr.wikipedia.org/wiki/Edward_Snowden",
    category: "politique",
  },
  {
    name: "Frances Haugen",
    role: "Ex-ingénieure chez Facebook",
    description:
      "Lanceuse d’alerte ayant révélé les choix algorithmiques controversés de Meta, elle incarne les dilemmes moraux liés aux plateformes sociales et à leurs effets sur la société.",
    image: "/images/figures/frances_haugen.jpg",
    link: "https://en.wikipedia.org/wiki/Frances_Haugen",
    category: "numérique",
  },
  {
    name: "Roger Boisjoly",
    role: "Ingénieur chez Morton Thiokol",
    description:
      "Il avait averti la NASA du risque de défaillance des joints toriques de la navette Challenger. Ignoré, il assista impuissant à la catastrophe de 1986, devenant un symbole d’éthique technique.",
    image: "/images/figures/roger_boisjoly.jpg",
    link: "https://fr.wikipedia.org/wiki/Roger_Boisjoly",
    category: "aérospatial",
  },
  {
    name: "Tim Berners-Lee",
    role: "Inventeur du World Wide Web",
    description:
      "Créateur du Web, il milite aujourd’hui pour une gouvernance éthique et décentralisée d’Internet, afin de corriger les dérives issues de son invention.",
    image: "/images/figures/tim_berners_lee.jpg",
    link: "https://fr.wikipedia.org/wiki/Tim_Berners-Lee",
    category: "technologique",
  },
  {
    name: "Aaron Swartz",
    role: "Activiste du numérique libre",
    description:
      "Militant pour l’accès libre au savoir, il est devenu une icône tragique du combat pour un Internet éthique et ouvert après sa mort prématurée.",
    image: "/images/figures/aaron_swartz.jpg",
    link: "https://fr.wikipedia.org/wiki/Aaron_Swartz",
    category: "numérique",
  },
  {
    name: "Shoshana Zuboff",
    role: "Sociologue du capitalisme de surveillance",
    description:
      "Professeure à Harvard, elle a théorisé le 'capitalisme de surveillance', analysant comment la collecte de données influence la liberté individuelle.",
    image: "/images/figures/shoshana_zuboff.jpg",
    link: "https://fr.wikipedia.org/wiki/Shoshana_Zuboff",
    category: "sociologique",
  },
  {
    name: "Julian Assange",
    role: "Fondateur de WikiLeaks",
    description:
      "Figure controversée du journalisme d’investigation numérique, il a bouleversé la relation entre secret d’État et transparence publique.",
    image: "/images/figures/julian_assange.jpg",
    link: "https://fr.wikipedia.org/wiki/Julian_Assange",
    category: "médiatique",
  },
  {
    name: "Greta Thunberg",
    role: "Activiste environnementale",
    description:
      "Symbole mondial de la lutte climatique, elle a popularisé la notion d’urgence systémique — un parallèle pertinent avec les crises du numérique.",
    image: "/images/figures/greta_thunberg.jpg",
    link: "https://fr.wikipedia.org/wiki/Greta_Thunberg",
    category: "écologique",
  },
  {
    name: "Elon Musk",
    role: "Entrepreneur et provocateur technologique",
    description:
      "Figure ambivalente de l’innovation, entre conquête spatiale et chaos communicationnel sur X (ancien Twitter).",
    image: "/images/figures/elon_musk.jpg",
    link: "https://fr.wikipedia.org/wiki/Elon_Musk",
    category: "industriel",
  },
  {
    name: "Linus Torvalds",
    role: "Créateur de Linux",
    description:
      "Il a initié un mouvement mondial du logiciel libre, incarnant l’idée qu’une erreur de syntaxe peut devenir une opportunité collective d’apprentissage.",
    image: "/images/figures/linus_torvalds.jpeg",
    link: "https://fr.wikipedia.org/wiki/Linus_Torvalds",
    category: "logiciel",
  },
  {
    name: "Ada Lovelace",
    role: "Première programmeuse de l’histoire",
    description:
      "Visionnaire du XIXᵉ siècle, elle pressentit la capacité des machines à traiter non seulement des nombres mais aussi des symboles — préfigurant le syntaxerrorisme moderne.",
    image: "/images/figures/ada_lovelace.jpg",
    link: "https://fr.wikipedia.org/wiki/Ada_Lovelace",
    category: "historique",
  },
  {
    name: "Laurence Lessig",
    role: "Juriste et militant du numérique ouvert",
    description:
      "Fondateur de Creative Commons, il défend un Internet libre face aux logiques de privatisation et d’erreurs structurelles dans la législation numérique.",
    image: "/images/figures/lawrence_lessig.jpg",
    link: "https://fr.wikipedia.org/wiki/Lawrence_Lessig",
    category: "juridique",
  },
  {
    name: "Cathy O’Neil",
    role: "Mathématicienne et critique des algorithmes",
    description:
      "Autrice de 'Weapons of Math Destruction', elle dénonce les biais et erreurs systémiques inscrits dans les modèles algorithmiques.",
    image: "/images/figures/cathy_oneil.jpg",
    link: "https://fr.wikipedia.org/wiki/Cathy_O%27Neil",
    category: "algorithme",
  },
  {
    name: "Yuval Noah Harari",
    role: "Historien et penseur de la technologie",
    description:
      "Ses travaux sur l’intelligence artificielle et le pouvoir des données offrent une perspective philosophique sur les dérives du syntaxerrorisme.",
    image: "/images/figures/yuval_noah_harari.jpg",
    link: "https://fr.wikipedia.org/wiki/Yuval_Noah_Harari",
    category: "philosophique",
  },
  {
    name: "Marion Maréchal",
    role: "Femme politique française",
    description:
      "Souvent citée dans les débats autour de la désinformation et des bulles médiatiques, elle illustre la politisation des erreurs de communication numérique.",
    image: "/images/figures/marion_marechal.jpg",
    link: "https://fr.wikipedia.org/wiki/Marion_Maréchal",
    category: "politique",
  },
  {
    name: "Noam Chomsky",
    role: "Linguiste et critique du pouvoir médiatique",
    description:
      "Père de la grammaire générative et penseur politique majeur, il a posé les bases théoriques reliant syntaxe, langage et manipulation de l’information.",
    image: "/images/figures/noam_chomsky.jpg",
    link: "https://fr.wikipedia.org/wiki/Noam_Chomsky",
    category: "linguistique",
  },
  {
    name: "Karen Spärck Jones",
    role: "Pionnière de la recherche d’information",
    description:
      "Elle a inventé le concept de TF-IDF, fondement du classement des moteurs de recherche. Ses travaux ont façonné la compréhension syntaxique des machines.",
    image: "/images/figures/karen_sparck_jones.jpg",
    link: "https://en.wikipedia.org/wiki/Karen_Sp%C3%A4rck_Jones",
    category: "informatique",
  },
];

export default figures;
