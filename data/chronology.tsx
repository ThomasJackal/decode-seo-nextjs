const events = [
  {
    year: "Avant l'ère numérique",
    title: "Erreurs de transmission et d'impression",
    description:
      "Bien avant l’ère numérique, l’humanité a expérimenté la fragilité de l’information. Les erreurs de transmission au télégraphe, les coquilles d’imprimerie et les malentendus ont démontré qu’une simple faute pouvait déclencher des répercussions sociales, politiques et économiques démesurées. Ces 'bugs' avant l’heure ont nourri une peur collective : perdre la fiabilité du message, c’était perdre la confiance dans les technologies de communication.",
    details:
      "La révolution de l’imprimerie a démultiplié les risques : plus un texte circulait vite et largement, plus une erreur pouvait se propager avec un impact irréversible. On peut y voir les prémices de la viralité de l’erreur et de la désinformation de masse, une problématique encore plus critique à l’ère des réseaux sociaux.",
    type: "historique",
  },
  {
    year: "XIXᵉ siècle",
    title: "Babbage & Ada Lovelace : poser la problématique",
    description:
      "Charles Babbage et Ada Lovelace, pionniers de la computation, ont identifié un problème central : l’erreur humaine et mécanique. Leur réflexion anticipait un avenir où déléguer calculs et décisions à des machines n’éliminerait pas les fautes mais les transformerait, avec le risque de les amplifier à une échelle inédite.",
    details:
      "Automatiser le calcul revient à transférer des responsabilités humaines à des systèmes formels. Mais que se passe-t-il lorsqu’un défaut logique, une donnée mal saisie ou une conception erronée survient ? Cette question, posée dès le XIXᵉ siècle, résonne encore dans les crises informatiques et industrielles du XXIᵉ siècle.",
    type: "historique",
    figures: [
      {
        name: "Charles Babbage",
        url: "https://en.wikipedia.org/wiki/Charles_Babbage",
      },
      {
        name: "Ada Lovelace",
        url: "https://en.wikipedia.org/wiki/Ada_Lovelace",
      },
    ],
  },
  {
    year: "1947",
    title: "Premier bug documenté (Harvard Mark II)",
    description:
      "Un événement devenu légendaire : un papillon coincé dans un relais du Harvard Mark II paralysa la machine. Ce 'bug' au sens littéral du terme a transformé une panne banale en symbole de la vulnérabilité technologique. Dès lors, le mot 'bug' s’imposa dans le vocabulaire informatique mondial, rappelant que la moindre perturbation peut provoquer une catastrophe.",
    details:
      "L’incident rappelle que dans tout système complexe, même un facteur extérieur – ici un insecte – peut déclencher un effet domino aux conséquences potentiellement désastreuses. Ce récit fondateur illustre la naissance d’une conscience autour de la fragilité et de la sécurité des machines.",
    type: "technique",
    link: "https://en.wikipedia.org/wiki/Harvard_Mark_II",
    figures: [
      {
        name: "Grace Hopper",
        url: "https://en.wikipedia.org/wiki/Grace_Hopper",
      },
    ],
  },
  {
    year: "1985–1987",
    title: "Therac-25 : quand une faute logicielle tue",
    description:
      "Le Therac-25 reste l’exemple le plus glaçant d’un bug mortel : des erreurs logicielles dans une machine de radiothérapie ont provoqué des irradiations massives, causant plusieurs décès et blessures irréversibles. Cette tragédie rappelle que l’invisible code peut transformer une machine de soin en arme létale.",
    details:
      "Ce drame résulte d’une combinaison fatale : conception défectueuse, absence de tests rigoureux et assurance qualité négligée. Le Therac-25 incarne l’avertissement ultime : un logiciel mal pensé peut tuer. Il reste étudié comme cas d’école pour les ingénieurs, médecins et autorités de régulation.",
    type: "technique",
    link: "https://en.wikipedia.org/wiki/Therac-25",
    figures: [
      {
        name: "Nancy Leveson",
        url: "https://en.wikipedia.org/wiki/Nancy_Leveson",
      },
    ],
    image: "/images/chronology/therac.jpg",
  },
  {
    year: "1988",
    title: "Morris Worm : propagation incontrôlée",
    description:
      "En 1988, Internet, encore balbutiant, connut son premier chaos global : le ver Morris. Ce qui devait être une expérience académique se transforma en catastrophe mondiale, paralysant des milliers de systèmes. Cet incident a prouvé qu’un bug logiciel pouvait devenir une arme incontrôlée.",
    details:
      "Une erreur de logique dans le code transforma une simple expérimentation en désastre. Le ver Morris mit en lumière la vulnérabilité de réseaux interconnectés et fonda la discipline de la cybersécurité moderne. Cet épisode reste une référence incontournable dans les discussions sur la responsabilité légale et éthique des programmeurs.",
    type: "technique",
    link: "https://en.wikipedia.org/wiki/Morris_worm",
    figures: [
      {
        name: "Robert Tappan Morris",
        url: "https://en.wikipedia.org/wiki/Robert_Tappan_Morris",
      },
    ],
    image: "/images/chronology/Morris_Worm.jpg",
  },
  {
    year: "1996",
    title: "Ariane 5 Flight 501 : portage de code et explosion",
    description:
      "En juin 1996, le vol inaugural d’Ariane 5 se solda par une explosion spectaculaire à cause… d’une simple erreur de conversion d’entier dans le logiciel embarqué. En quelques secondes, un projet de plusieurs milliards partit en fumée, illustrant à quel point un détail peut provoquer une perte monumentale.",
    details:
      "La tragédie met en évidence le danger de réutiliser du code sans revalider ses hypothèses dans un nouveau contexte. L’explosion d’Ariane 5 reste l’un des cas les plus cités en ingénierie logicielle pour rappeler que la rigueur dans la validation est vitale.",
    type: "technique",
    link: "https://en.wikipedia.org/wiki/Ariane_5#Flight_501_failure",
    image: "/images/chronology/Ariane_5.jpg",
  },
  {
    year: "1999",
    title: "Mars Climate Orbiter : confusion d’unités",
    description:
      "La perte de la sonde Mars Climate Orbiter fut un choc pour la NASA et le monde scientifique : une confusion entre unités impériales et unités métriques fit dévier la trajectoire, provoquant la destruction de l’appareil. Une erreur d’apparence triviale anéantit des années de travail et des centaines de millions de dollars.",
    details:
      "Ce cas illustre brutalement les dangers de l’absence de standards robustes et d’interopérabilité entre partenaires techniques. La NASA reconnut ce fiasco comme l’un des échecs les plus humiliants de l’exploration spatiale.",
    type: "technique",
    link: "https://en.wikipedia.org/wiki/Mars_Climate_Orbiter",
  },
  {
    year: "1999–2000",
    title: "Y2K : dette technique et mobilisation mondiale",
    description:
      "À l’aube de l’an 2000, le monde entier craignait un effondrement numérique global. Le bogue de l’an 2000 (Y2K) illustre la dette technique accumulée par des décennies de raccourcis informatiques. Les gouvernements, entreprises et ingénieurs se mobilisèrent à l’échelle planétaire pour éviter une catastrophe.",
    details:
      "Grâce à une anticipation massive, les conséquences furent limitées. Mais cet épisode reste un symbole puissant : l’humanité a pris conscience que sa dépendance aux systèmes informatiques pouvait la placer au bord d’une crise mondiale.",
    type: "technique",
    link: "https://en.wikipedia.org/wiki/Year_2000_problem",
  },
  {
    year: "2012",
    title: "Knight Capital : déploiement partiel catastrophique",
    description:
      "En août 2012, une erreur de déploiement logiciel chez Knight Capital fit basculer l’entreprise dans le chaos financier : en 45 minutes, des transactions erronées coûtèrent plus de 440 millions de dollars et détruisirent la société. Une leçon brutale sur la criticité des tests et de la rigueur opérationnelle.",
    details:
      "Ce cas emblématique illustre à quel point un défaut dans les procédures d’intégration et de mise à jour peut déclencher un désastre économique. Knight Capital est devenu un cas d’école pour la finance et l’ingénierie logicielle.",
    type: "technique",
    link: "https://en.wikipedia.org/wiki/Knight_Capital_Group",
    figures: [
      {
        name: "Thomas M. Joyce",
        url: "https://en.wikipedia.org/wiki/Knight_Capital_Group",
      },
    ],
  },
  {
    year: "2014",
    title: "Heartbleed : une faille de validation dans OpenSSL",
    description:
      "La faille Heartbleed, découverte en 2014, fit trembler Internet. Une absence de vérification dans le protocole Heartbeat d’OpenSSL permit à des attaquants de siphonner des données sensibles de millions de serveurs. Le monde découvrit avec effroi que des fondations critiques du Web reposaient sur du code fragile.",
    details:
      "Cet incident a mis en lumière le rôle vital de l’audit de sécurité dans les logiciels open-source. Heartbleed rappelle que même des outils massivement utilisés peuvent contenir des erreurs fatales, avec des conséquences planétaires.",
    type: "technique",
    link: "https://en.wikipedia.org/wiki/Heartbleed",
    figures: [
      {
        name: "Robin Seggelmann",
        url: "https://en.wikipedia.org/wiki/Heartbleed",
      },
    ],
    image: "/images/chronology/heartbleed.png",
  },
  {
    year: "Depuis 2015",
    title: "Automatisation et IA : complexité croissante",
    description:
      "À l’ère de l’intelligence artificielle et des systèmes automatisés, les risques prennent une nouvelle dimension. Biais algorithmiques, décisions opaques, comportements imprévus : l’erreur informatique ne se limite plus à un bug, elle peut désormais influencer la justice, l’économie et même la démocratie.",
    details:
      "L’IA et l’automatisation représentent un champ d’incertitude critique pour l’avenir. Erreurs d’interface, données biaisées ou failles logiques peuvent avoir des répercussions sociétales massives. La question n’est plus seulement technique : elle devient éthique, politique et civilisationnelle.",
    type: "prospectif",
  },
  // Catastrophes environnementales et politiques
  {
    year: "Avril 1986",
    title: "Tchernobyl : erreurs techniques et décisions politiques",
    description:
      "Tchernobyl reste l’accident nucléaire le plus dramatique de l’histoire moderne. Une combinaison mortelle de défauts techniques, d’improvisations hasardeuses et de décisions politiques catastrophiques a provoqué une explosion qui a contaminé l’Europe entière. L’événement a marqué les esprits comme l’exemple absolu de ce qui se produit lorsque transparence et sécurité sont sacrifiées.",
    details:
      "Au-delà de l’accident lui-même, Tchernobyl a révélé le rôle central de la gouvernance et de la gestion de crise dans les infrastructures critiques. La dissimulation initiale, les lenteurs politiques et l’arrogance technocratique ont aggravé une tragédie déjà hors de contrôle.",
    type: "environnemental",
    link: "https://en.wikipedia.org/wiki/Chernobyl_disaster",
    figures: [
      {
        name: "Anatoly Dyatlov",
        url: "https://en.wikipedia.org/wiki/Anatoly_Dyatlov",
      },
    ],
    image: "/images/chronology/chernobyl.jpg",
  },
  {
    year: "1984",
    title: "Bhopal : fuite de gaz et gouvernance défaillante",
    description:
      "La catastrophe de Bhopal, en Inde, est l’une des pires tragédies industrielles de l’humanité. Une fuite massive de gaz toxique transforma un incident industriel en apocalypse humaine, tuant et mutilant des dizaines de milliers de personnes. Elle incarne la négligence criminelle où les économies priment sur la sécurité.",
    details:
      "Bhopal montre comment l’absence de réglementation stricte, la recherche effrénée du profit et le mépris des conditions locales peuvent amplifier une crise jusqu’à l’horreur. Cet événement a marqué à jamais l’histoire des luttes pour la justice environnementale.",
    type: "environnemental",
    link: "https://en.wikipedia.org/wiki/Bhopal_disaster",
    figures: [
      {
        name: "Warren M. Anderson",
        url: "https://en.wikipedia.org/wiki/Warren_Anderson_(American_businessman)",
      },
    ],
    image: "/images/chronology/bhopal.jpg",
  },
  {
    year: "2010",
    title: "Deepwater Horizon : erreurs et pressions économiques",
    description:
      "En avril 2010, l’explosion de la plateforme pétrolière Deepwater Horizon dans le golfe du Mexique provoqua l’une des pires marées noires de l’histoire. Cette catastrophe illustre de manière brutale comment des erreurs techniques, combinées à des pressions économiques, peuvent anéantir un écosystème entier.",
    details:
      "Deepwater Horizon révèle les dangers du compromis entre sécurité et rentabilité. Le désastre a entraîné des pertes humaines, écologiques et financières colossales, devenant le symbole de l’irresponsabilité des multinationales pétrolières.",
    type: "environnemental",
    link: "https://en.wikipedia.org/wiki/Deepwater_Horizon_oil_spill",
    figures: [
      {
        name: "Tony Hayward",
        url: "https://en.wikipedia.org/wiki/Tony_Hayward",
      },
    ],
    image: "/images/chronology/deepwater.webp",
  },
  {
    year: "2011",
    title: "Fukushima : tsunami et vulnérabilités nucléaires",
    description:
      "En mars 2011, un tsunami ravagea la centrale de Fukushima au Japon, provoquant des fusions nucléaires et libérant des radiations massives. Cet accident a révélé au monde la vulnérabilité extrême des infrastructures nucléaires face aux catastrophes naturelles.",
    details:
      "Fukushima est devenu le symbole de la sous-estimation des risques. Le manque de préparation et des choix techniques discutables ont transformé un désastre naturel en crise nucléaire mondiale.",
    type: "environnemental",
    link: "https://en.wikipedia.org/wiki/Fukushima_nuclear_accident",
    figures: [
      {
        name: "Masao Yoshida",
        url: "https://en.wikipedia.org/wiki/Masao_Yoshida_(nuclear_engineer)",
      },
    ],
    image: "/images/chronology/fukushima.avif",
  },
  {
    year: "Janvier 1986",
    title: "Challenger : avertissements ignorés",
    description:
      "La navette spatiale Challenger explosa 73 secondes après son lancement. En cause : un joint défectueux, mais surtout l’ignorance volontaire des avertissements d’ingénieurs inquiets. Cet accident glaçant incarne les dangers des pressions organisationnelles et du sacrifice de la sécurité au profit du calendrier politique.",
    details:
      "L’explosion de Challenger est un rappel cruel que dans les projets à haut risque, ignorer les signaux d’alarme conduit à la catastrophe. L’événement reste gravé comme un exemple de gouvernance défaillante.",
    type: "technique",
    link: "https://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster",
    figures: [
      {
        name: "Roger Boisjoly",
        url: "https://en.wikipedia.org/wiki/Roger_Boisjoly",
      },
    ],
    image: "/images/chronology/challenger.jpg",
  },
  {
    year: "2005",
    title: "Hurricane Katrina : vulnérabilités sociales révélées",
    description:
      "L’ouragan Katrina dévasta La Nouvelle-Orléans en 2005, mais révéla surtout une autre tempête : celle des inégalités sociales et des réponses institutionnelles jugées dramatiquement défaillantes. Katrina est resté comme un double désastre : naturel et politique.",
    details:
      "La crise souligna l’interdépendance entre infrastructures fragiles, inégalités sociales et gouvernance chaotique. Plus qu’un ouragan, Katrina fut une claque pour l’Amérique, dévoilant ses fractures.",
    type: "environnemental",
    link: "https://en.wikipedia.org/wiki/Hurricane_Katrina",
    figures: [
      {
        name: "Michael D. Brown",
        url: "https://en.wikipedia.org/wiki/Michael_D._Brown",
      },
    ],
  },
  {
    year: "2014–",
    title: "Flint : eau contaminée au plomb",
    description:
      "La crise de Flint est devenue l’un des symboles les plus choquants de l’échec des décisions politiques face aux enjeux de santé publique. En changeant la source d’eau de la ville sans contrôles suffisants, des milliers de familles ont été exposées à une contamination au plomb, provoquant une crise sanitaire d’ampleur nationale et un scandale mondial.",
    details:
      "Cet épisode illustre à quel point des choix budgétaires ou administratifs peuvent avoir des effets catastrophiques sur la santé de générations entières. Flint est étudié comme un cas d’école des interactions entre gouvernance défaillante, infrastructures vieillissantes et conséquences humaines dramatiques.",
    type: "environnemental",
    link: "https://en.wikipedia.org/wiki/Flint_water_crisis",
    figures: [
      { name: "Rick Snyder", url: "https://en.wikipedia.org/wiki/Rick_Snyder" },
    ],
  },
  {
    year: "Années 1970",
    title: "Love Canal : décharges toxiques révélées",
    description:
      "À Niagara Falls, la découverte de milliers de tonnes de déchets chimiques enfouis sous un quartier résidentiel a déclenché un scandale sanitaire et écologique majeur. Love Canal symbolise la prise de conscience de l’Amérique face aux décharges toxiques et à leurs conséquences sur la santé publique.",
    details:
      "L’affaire a suscité une mobilisation citoyenne massive menée par Lois Gibbs et conduit à la création de programmes fédéraux de dépollution comme le Superfund. Love Canal a marqué l’histoire comme un tournant dans la reconnaissance des responsabilités industrielles et politiques en matière d’environnement.",
    type: "environnemental",
    link: "https://en.wikipedia.org/wiki/Love_Canal",
    figures: [
      { name: "Lois Gibbs", url: "https://en.wikipedia.org/wiki/Lois_Gibbs" },
    ],
  },
  {
    year: "1989",
    title: "Exxon Valdez : défaillance humaine et marée noire",
    description:
      "En mars 1989, le pétrolier Exxon Valdez s’échoue en Alaska, déversant près de 40 millions de litres de pétrole brut dans une zone naturelle protégée. L’une des pires marées noires de l’histoire moderne met en lumière l’impact colossal des erreurs humaines et de l’insuffisance des systèmes de réponse rapide.",
    details:
      "L’accident a dévasté les écosystèmes marins et détruit des moyens de subsistance locaux. Il reste un cas emblématique de gestion de crise environnementale, démontrant que la combinaison d’une vigilance relâchée et d’une préparation inadéquate peut engendrer un désastre planétaire.",
    type: "environnemental",
    link: "https://en.wikipedia.org/wiki/Exxon_Valdez_oil_spill",
    figures: [
      {
        name: "Joseph Hazelwood",
        url: "https://en.wikipedia.org/wiki/Joseph_Hazelwood",
      },
    ],
    image: "/images/chronology/exxon.webp",
  },
  {
    year: "1979",
    title: "Three Mile Island : accident nucléaire américain",
    description:
      "En mars 1979, un incident technique et humain dans une centrale nucléaire de Pennsylvanie entraîne une fusion partielle du cœur du réacteur. Bien que les rejets radioactifs aient été limités, l’accident a profondément marqué l’opinion publique et modifié le rapport des Américains au nucléaire.",
    details:
      "L’événement a déclenché une vague de méfiance et conduit à un durcissement massif des régulations en matière de sécurité nucléaire. Three Mile Island symbolise la fragilité des systèmes complexes et le poids des erreurs humaines dans la gestion des technologies les plus sensibles.",
    type: "environnemental",
    link: "https://en.wikipedia.org/wiki/Three_Mile_Island_accident",
  },
  {
    year: "2020–2030",
    title: "L’ère des IA génératives : nouveaux risques systémiques",
    description:
      "L’explosion des intelligences artificielles génératives, capables de produire du texte, du code, des images et même des décisions stratégiques, ouvre une nouvelle ère de risques. Les erreurs ne sont plus seulement mécaniques ou logicielles : elles deviennent cognitives, inscrites dans les biais de données, dans la manipulation de l’information et dans la dépendance totale aux algorithmes.",
    details:
      "Nous assistons à un basculement historique : les systèmes d’IA ne se contentent plus d’exécuter, ils interprètent, influencent et parfois décident. Une faille ou une mauvaise conception peut se propager à l’échelle planétaire en quelques secondes, affectant la politique, l’économie, la santé et la sécurité mondiale. Les erreurs d’aujourd’hui ne sont plus des incidents isolés, mais des menaces systémiques à l’échelle des civilisations.",
    type: "prospectif",
  },
  {
    year: "Futur proche",
    title: "Crises climatiques et infrastructures numériques",
    description:
      "La montée des catastrophes climatiques (inondations, tempêtes, canicules) expose la fragilité de nos réseaux numériques et énergétiques. Dans un monde hyperconnecté, une panne électrique ou une coupure de data center peut déclencher des réactions en chaîne catastrophiques.",
    details:
      "Imaginez une panne mondiale de serveurs cloud au moment d’une crise sanitaire ou d’une catastrophe naturelle : la combinaison de vulnérabilités environnementales et numériques pourrait engendrer un effet domino sans précédent, paralysant la finance, la communication, la santé et la sécurité. Ces scénarios ne sont plus de la science-fiction, mais des risques concrets que chercheurs et régulateurs commencent à anticiper.",
    type: "prospectif",
  },
  {
    year: "Horizon 2040",
    title: "Erreurs humaines amplifiées par les machines",
    description:
      "Plus les technologies progressent, plus une décision humaine erronée peut être amplifiée par les systèmes automatisés. L’illusion de la perfection algorithmique masque une vérité brutale : les machines reproduisent, accélèrent et globalisent nos propres erreurs.",
    details:
      "Un bug, une mauvaise donnée ou une règle mal définie dans une IA de gestion des ressources énergétiques, militaires ou médicales pourrait avoir des conséquences d’une ampleur inédite. L’histoire nous montre que chaque saut technologique s’accompagne de crises liées à nos propres limites. L’avenir ne fera pas exception.",
    type: "prospectif",
  },
  {
    year: "Conclusion",
    title:
      "De l’imprimerie à l’intelligence artificielle : la fragilité permanente",
    description:
      "Depuis les premières coquilles typographiques jusqu’aux bugs meurtriers et aux catastrophes environnementales amplifiées par la technologie, une leçon émerge : l’erreur est inhérente à l’humanité et à ses créations. Chaque nouvelle ère technologique déplace le problème sans l’éliminer, tout en multipliant l’échelle et l’impact des défaillances.",
    details:
      "La véritable question n’est pas de savoir si nous parviendrons à éliminer les erreurs, mais comment nous les anticiperons, les gérerons et en limiterons les effets destructeurs. L’histoire des bugs et des catastrophes n’est pas seulement une chronique d’échecs : c’est aussi un guide indispensable pour bâtir une culture de vigilance, de résilience et de responsabilité à l’ère de l’IA et des crises globales.",
    type: "prospectif",
  },
];

export default events;
