import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const translations = {
  EN: {
    frontendDeveloper: "Frontend Developer",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    store: "Store",
    contact: "Contact",
    letsTalk: "Let's talk",
    lightTheme: "Light theme",
    darkTheme: "Dark theme",
    toggleNavigation: "Toggle navigation",
    language: "Language",
    english: "English",
    french: "French",
    sendMessage: "Send me a message",
    available: "Available for freelance & remote work",
    heroTitle: "Building polished digital experiences",
    heroDescription:
      "I'm Yves, a frontend developer crafting elegant interfaces, smooth motion and memorable user journeys.",
    viewWork: "View my work",
    currentFocus: "Current focus",
    focusTitle: "Fast products, clear storytelling",
    uiSystems: "UI systems",
    uiSystemsDescription: "Design systems and scalable layouts",
    motion: "Motion",
    motionDescription: "Fluid transitions and thoughtful engagement",
    nowShipping: "Now shipping",
    nowShippingDescription:
      "Modern landing pages, portfolio upgrades and interactive web apps.",
    aboutMe: "About me",
    aboutTitle: "Passionate about building",
    greatSoftware: "great software",
    aboutDescription:
      "I'm a frontend developer focused on modern, responsive and visually engaging web experiences. I enjoy turning ideas into interfaces that feel precise, fast and memorable.",
    focusLabel: "What I focus on",
    smoothExperiences: "Smooth user experiences",
    maintainableCode: "Clean and maintainable code",
    modernClarity: "Modern UI movement and clarity",
    location: "Location",
    email: "Email",
    availability: "Availability",
    openForWork: "Open for work",
    workType: "Work type",
    remoteHybrid: "Remote / hybrid",
    techStack: "Tech stack",
    skillsTitle: "Skills & technologies",
    skillsDescription:
      "A mix of frontend craft, UI thinking and modern tooling that helps ship polished products quickly.",
    proficiency: "Proficiency",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    uiSystemsShort: "UI systems",
    responsiveLayouts: "Responsive layouts",
    databaseBasics: "Database basics",
    authFlows: "Auth flows",
    versionControl:
      "Version control, collaborative workflows and reliable handoff are part of every project I build.",
    myWork: "My work",
    featuredProjects: "Featured projects",
    projectsDescription:
      "A snapshot of creative work that blends striking visuals with practical product thinking.",
    viewGithub: "View on GitHub",
    digitalStore: "Digital store",
    templatesTitle: "Ready-made web templates",
    templatesDescription:
      "Launch faster with polished starting points, built to be customized for your brand.",
    instantDelivery: "Instant digital delivery",
    liveDemo: "Live demo",
    requestTemplate: "Request template",
    livePreview: "Live preview",
    getTemplate: "Get this template",
    contactTitle: "Let's build something memorable together",
    contactDescription:
      "Open for freelance projects, full-time roles and interesting collaborations. I usually reply within a day.",
    sendMessageTitle: "Send me a message",
    name: "Name",
    subject: "Subject",
    budget: "Budget",
    message: "Message",
    chooseBudget: "What's your budget?",
    projectSubject: "What's the project about?",
    ideaMessage: "Tell me a bit about your idea...",
    send: "Send message",
    experience: "experience",
    clientsSatisfied: "clients satisfied",
    footerDescription:
      "From your vision to a refined digital experience, with thoughtful design and smooth interaction.",
    allRightsReserved: "All rights reserved.",
    featuredProject: "Featured project",
    from: "From",
  },
  FR: {
    frontendDeveloper: "Developpeur frontend",
    about: "A propos",
    skills: "Competences",
    projects: "Projets",
    store: "Boutique",
    contact: "Contact",
    letsTalk: "Parlons-en",
    lightTheme: "Theme clair",
    darkTheme: "Theme sombre",
    toggleNavigation: "Ouvrir la navigation",
    language: "Langue",
    english: "Anglais",
    french: "Francais",
    sendMessage: "Envoyez-moi un message",
    available: "Disponible pour missions freelance et travail a distance",
    heroTitle: "Je cree des experiences numeriques soignees",
    heroDescription:
      "Moi c'est Yves, developpeur frontend. Je cree des interfaces elegantes, des animations fluides et des parcours memorables.",
    viewWork: "Voir mes projets",
    currentFocus: "Focus actuel",
    focusTitle: "Des produits rapides, une histoire claire",
    uiSystems: "Systemes UI",
    uiSystemsDescription: "Design systems et mises en page evolutives",
    motion: "Animation",
    motionDescription: "Transitions fluides et interactions soignees",
    nowShipping: "En production",
    nowShippingDescription:
      "Landing pages modernes, portfolios et applications web interactives.",
    aboutMe: "A propos",
    aboutTitle: "Passionne par la creation de",
    greatSoftware: "logiciels de qualite",
    aboutDescription:
      "Je suis un developpeur frontend qui cree des experiences web modernes, responsives et visuellement soignee. J'aime transformer les idees en interfaces precises, rapides et memorables.",
    focusLabel: "Mes priorites",
    smoothExperiences: "Des experiences fluides",
    maintainableCode: "Un code propre et maintenable",
    modernClarity: "Mouvement et clarte dans l'interface",
    location: "Localisation",
    email: "E-mail",
    availability: "Disponibilite",
    openForWork: "Disponible pour travailler",
    workType: "Type de travail",
    remoteHybrid: "A distance / hybride",
    techStack: "Technologies",
    skillsTitle: "Competences et technologies",
    skillsDescription:
      "Un melange de savoir-faire frontend, de reflexion UI et d'outils modernes pour livrer rapidement des produits soignes.",
    proficiency: "Niveau",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Outils",
    uiSystemsShort: "Systemes UI",
    responsiveLayouts: "Mises en page responsives",
    databaseBasics: "Bases de donnees",
    authFlows: "Flux d'authentification",
    versionControl:
      "Le controle de version, le travail collaboratif et une livraison fiable font partie de chaque projet.",
    myWork: "Mes projets",
    featuredProjects: "Projets en vedette",
    projectsDescription:
      "Un apercu de projets qui melent visuels marquants et reflexion produit pratique.",
    viewGithub: "Voir sur GitHub",
    digitalStore: "Boutique digitale",
    templatesTitle: "Templates web prets a l'emploi",
    templatesDescription:
      "Lancez votre projet plus vite avec des bases soignees et personnalisables pour votre marque.",
    instantDelivery: "Livraison digitale immediate",
    liveDemo: "Demo live",
    requestTemplate: "Demander le template",
    livePreview: "Apercu live",
    getTemplate: "Obtenir ce template",
    contactTitle: "Construisons quelque chose de memorable",
    contactDescription:
      "Disponible pour des missions freelance, des postes a temps plein et des collaborations interessantes. Je reponds generalement en une journee.",
    sendMessageTitle: "Envoyez-moi un message",
    name: "Nom",
    subject: "Sujet",
    budget: "Budget",
    message: "Message",
    chooseBudget: "Quel est votre budget ?",
    projectSubject: "De quoi parle le projet ?",
    ideaMessage: "Parlez-moi un peu de votre idee...",
    send: "Envoyer le message",
    experience: "experience",
    clientsSatisfied: "clients satisfaits",
    footerDescription:
      "De votre vision a une experience digitale raffinee, avec un design soigne et des interactions fluides.",
    allRightsReserved: "Tous droits reserves.",
    featuredProject: "Projet en vedette",
    from: "A partir de",
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    return savedLanguage === "FR" ? "FR" : "EN";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key) => translations[language][key] || translations.EN[key] || key,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
