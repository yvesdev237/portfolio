import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      metadata: {
        title: "Yves Dev 237 | Freelance Web Developer in Bamenda, Cameroon",
        description: "Yves Dev 237 builds responsive business websites, landing pages, and booking websites for small businesses in Bamenda, Cameroon and worldwide.",
        locale: "en_CM",
      },
      nav: {
        work: "Work",
        services: "Services",
        process: "Process",
        about: "About",
        contact: "Contact",
        startProject: "Start a project",
        openMenu: "Open navigation menu",
        closeMenu: "Close navigation menu",
        language: "Language",
        switchToEnglish: "Switch language to English",
        switchToFrench: "Switch language to French",
      },
      hero: {
        location: "Freelance web developer · Bamenda, Cameroon",
        title: "Websites that help small businesses get more enquiries.",
        description:
          "I build fast, mobile-friendly websites for service businesses in Cameroon and worldwide, designed to present your services clearly and turn visitors into WhatsApp enquiries.",
        discuss: "Discuss your project",
        viewWork: "View selected work",
        badgeMobile: "Mobile-first",
        badgeEnquiries: "Built for enquiries",
        badgeRemote: "Remote worldwide",
        availability: "Currently available for select projects",
        featuredProject: "Featured project",
        visitSite: "Visit live site",
        openProject: "Open {{project}}",
        hotelAlt: "Hotel website preview",
      },
      work: {
        eyebrow: "Selected work",
        title: "Selected work",
        intro:
          "A selection of projects built to make businesses easier to understand, trust, and contact.",
        live: "Live projects",
        concepts: "Concept projects",
      },
      projects: {
        featured: "Featured project",
        seeLive: "See live",
        caseStudy: "Case study",
        details: "Details",
        modalTitle: "Project case study",
        close: "Close case study",
        project: "Project",
        type: "Type",
        goal: "Goal",
        challenge: "Challenge",
        solution: "Solution",
        role: "My role",
        stack: "Stack",
        liveLink: "Live link",
        keyFeatures: "Key features",
        hotel: {
          title: "Hotel booking website",
          category: "Demo project",
          alt: "Hotel booking website preview mockup",
          type: "Demo project - hotel booking system",
          goal: "Create a responsive hotel booking website template that lets users browse rooms, check availability, and make reservations online.",
          challenge:
            "Design a user-friendly interface that makes booking seamless while showcasing the hotel's amenities and services.",
          solution:
            "I designed a clean, intuitive interface focused on user experience, so guests can navigate the site, view room details, and complete reservations easily.",
          features: [
            "Intuitive room browsing and filtering",
            "Real-time availability checking",
            "Streamlined reservation process",
          ],
          role: "UX/UI design, front-end development, responsive layout implementation",
        },
        rental: {
          title: "Rental property website",
          category: "Web project",
          alt: "Rental property website preview mockup",
          type: "Web project",
          goal: "Create a responsive rental property website template that lets users browse properties, check availability, and book online.",
          challenge:
            "Design a user-friendly interface that makes booking seamless while showcasing the property's amenities and services.",
          solution:
            "I designed a clean, intuitive interface focused on user experience, so guests can navigate the site, view property details, and complete bookings easily.",
          features: [
            "Property browsing and filtering",
            "Real-time availability checking",
            "Easy booking process",
            "Authentication and user account management",
          ],
          role: "UX/UI design, front-end development, responsive layout, authentication, and account management",
        },
      },
      services: {
        eyebrow: "Services",
        title: "How I can help",
        items: [
          {
            name: "Business website starter",
            description:
              "A 1–3 page responsive website with your services, contact details, social links, and a WhatsApp enquiry button.",
            price: "From 100,000 FCFA",
          },
          {
            name: "Landing page",
            description:
              "One focused page for a service, offer, event, product, or campaign.",
            price: "From 70,000 FCFA",
          },
          {
            name: "Website support",
            description:
              "Content updates, small fixes, performance checks, and ongoing technical support.",
            price: "From 15,000 FCFA/month",
          },
        ],
        note: "Hosting, domains, paid tools, and major new features are quoted separately when needed.",
        quote: "Get a project quote",
      },
      process: {
        eyebrow: "Process",
        title: "A clear process from idea to launch",
        delivery:
          "Typical delivery: 7–10 working days after content and deposit are received.",
        steps: [
          {
            title: "Tell me about your business",
            description:
              "We discuss your goals, customers, pages, content, and the result you want from the website.",
          },
          {
            title: "Design and build",
            description:
              "I create a responsive website and keep you updated while the project takes shape.",
          },
          {
            title: "Review and launch",
            description:
              "You review the work, we complete agreed revisions, and your site launches after final payment.",
          },
        ],
      },
      about: {
        eyebrow: "About",
        title: "Built with business goals in mind",
        first:
          "I’m Yves, a web developer based in Bamenda, Cameroon. I enjoy turning business ideas into clear, useful digital experiences. My focus is on building fast, responsive websites that help service businesses explain what they do, build trust, and make it simple for customers to reach them.",
        second: "I work remotely with clients in Cameroon and internationally.",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Tailwind CSS",
          "TypeScript",
          "Responsive design",
          "SEO basics",
        ],
        remote: "Remote",
        worldwide: "Worldwide",
        cameroon: "Cameroon",
        bamenda: "Bamenda",
      },
      contact: {
        eyebrow: "Contact",
        title: "Ready to build a website that represents your business well?",
        description:
          "Tell me what your business does and what you want the website to achieve. I’ll reply with clear next steps and a quote.",
        whatsapp: "Message me on WhatsApp",
        whatsappMessage: "Hello Yves, I would like to discuss a website project.",
        form: {
          name: "Name",
          namePlaceholder: "Your name",
          business: "Business name",
          email: "Email address",
          phone: "WhatsApp number (optional)",
          message: "What do you need?",
          messagePlaceholder:
            "Tell me about your business and the website goals.",
          budget: "Estimated budget",
          budgetPlaceholder: "e.g. 100,000-200,000 FCFA",
          submit: "Send enquiry",
          sending: "Sending...",
          privacy: "Your details will only be used to reply to your enquiry.",
        },
        missingKey:
          "An error occurred while submitting the form. Please reach me by WhatsApp or email.",
        success: "Thanks, your enquiry has been sent. I’ll be in touch soon.",
        failure:
          "Your enquiry could not be sent. Please try again or contact me directly.",
        emailSubject: "New portfolio enquiry from {{name}}",
      },
      footer: {
        copyright: "© 2026 Yves Dev 237. All rights reserved.",
        backToTop: "Back to top",
      },
      social: {
        github: "GitHub",
        facebook: "Facebook",
        email: "Email",
      },
    },
  },
  fr: {
    translation: {
      metadata: {
        title: "Yves Dev 237 | Développeur web freelance à Bamenda, Cameroun",
        description: "Yves Dev 237 crée des sites web professionnels responsives, des pages d’atterrissage et des sites de réservation pour les petites entreprises à Bamenda, au Cameroun et partout dans le monde.",
        locale: "fr_CM",
      },
      nav: {
        work: "Réalisations",
        services: "Services",
        process: "Méthode",
        about: "À propos",
        contact: "Contact",
        startProject: "Démarrer un projet",
        openMenu: "Ouvrir le menu de navigation",
        closeMenu: "Fermer le menu de navigation",
        language: "Langue",
        switchToEnglish: "Passer en anglais",
        switchToFrench: "Passer en français",
      },
      hero: {
        location: "Développeur web freelance · Bamenda, Cameroun",
        title:
          "Des sites web qui aident les petites entreprises à recevoir plus de demandes.",
        description:
          "Je crée des sites web rapides et adaptés aux mobiles pour les entreprises de services, au Cameroun et partout dans le monde. Ils présentent clairement vos services et transforment les visiteurs en demandes sur WhatsApp.",
        discuss: "Parlons de votre projet",
        viewWork: "Voir mes réalisations",
        badgeMobile: "Pensé pour le mobile",
        badgeEnquiries: "Conçu pour générer des demandes",
        badgeRemote: "À distance, partout dans le monde",
        availability: "Disponible pour quelques projets",
        featuredProject: "Projet à la une",
        visitSite: "Voir le site",
        openProject: "Ouvrir {{project}}",
        hotelAlt: "Aperçu du site de réservation d’hôtel",
      },
      work: {
        eyebrow: "Réalisations",
        title: "Projets sélectionnés",
        intro:
          "Une sélection de projets conçus pour rendre les entreprises plus faciles à comprendre, à apprécier et à contacter.",
        live: "Projets en ligne",
        concepts: "Projets conceptuels",
      },
      projects: {
        featured: "Projet à la une",
        seeLive: "Voir le site",
        caseStudy: "Étude de cas",
        details: "Détails",
        modalTitle: "Étude de cas du projet",
        close: "Fermer l’étude de cas",
        project: "Projet",
        type: "Type",
        goal: "Objectif",
        challenge: "Défi",
        solution: "Solution",
        role: "Mon rôle",
        stack: "Technologies",
        liveLink: "Lien du site",
        keyFeatures: "Fonctionnalités clés",
        hotel: {
          title: "Site de réservation d’hôtel",
          category: "Projet de démonstration",
          alt: "Aperçu du site de réservation d’hôtel",
          type: "Projet de démonstration - système de réservation hôtelière",
          goal: "Créer un modèle de site hôtelier adapté aux mobiles, permettant de consulter les chambres et disponibilités et de réserver en ligne.",
          challenge:
            "Concevoir une interface simple qui facilite la réservation tout en présentant les équipements et services de l’hôtel.",
          solution:
            "J’ai conçu une interface claire et intuitive, axée sur l’expérience utilisateur, pour permettre aux clients de consulter les chambres et de réserver facilement.",
          features: [
            "Consultation et filtrage intuitifs des chambres",
            "Vérification des disponibilités en temps réel",
            "Processus de réservation simplifié",
          ],
          role: "Design UX/UI, développement front-end et mise en page responsive",
        },
        rental: {
          title: "Site de location immobilière",
          category: "Projet web",
          alt: "Aperçu du site de location immobilière",
          type: "Projet web",
          goal: "Créer un modèle de site immobilier adapté aux mobiles pour consulter les biens, vérifier les disponibilités et réserver en ligne.",
          challenge:
            "Concevoir une interface simple qui facilite la réservation tout en présentant les équipements et services du logement.",
          solution:
            "J’ai conçu une interface claire et intuitive, axée sur l’expérience utilisateur, pour consulter les détails des logements et réserver facilement.",
          features: [
            "Recherche et filtrage de logements",
            "Vérification des disponibilités en temps réel",
            "Réservation simplifiée",
            "Authentification et gestion des comptes utilisateurs",
          ],
          role: "Design UX/UI, développement front-end, mise en page responsive, authentification et gestion des comptes",
        },
      },
      services: {
        eyebrow: "Services",
        title: "Comment je peux vous aider",
        items: [
          {
            name: "Site web pour entreprise",
            description:
              "Un site responsive de 1 à 3 pages avec vos services, coordonnées, liens sociaux et un bouton de contact WhatsApp.",
            price: "À partir de 100 000 FCFA",
          },
          {
            name: "Page d’atterrissage",
            description:
              "Une page ciblée pour un service, une offre, un événement, un produit ou une campagne.",
            price: "À partir de 70 000 FCFA",
          },
          {
            name: "Maintenance de site web",
            description:
              "Mise à jour de contenu, petites corrections, vérifications de performance et assistance technique continue.",
            price: "À partir de 15 000 FCFA/mois",
          },
        ],
        note: "L’hébergement, les noms de domaine, les outils payants et les nouvelles fonctionnalités importantes font l’objet d’un devis séparé si nécessaire.",
        quote: "Demander un devis",
      },
      process: {
        eyebrow: "Méthode",
        title: "Un processus clair, de l’idée au lancement",
        delivery:
          "Délai habituel : 7 à 10 jours ouvrés après réception du contenu et de l’acompte.",
        steps: [
          {
            title: "Parlez-moi de votre activité",
            description:
              "Nous échangeons sur vos objectifs, vos clients, les pages et contenus nécessaires, ainsi que le résultat attendu.",
          },
          {
            title: "Conception et réalisation",
            description:
              "Je crée un site responsive et vous tiens au courant de l’avancement du projet.",
          },
          {
            title: "Validation et lancement",
            description:
              "Vous vérifiez le résultat, nous appliquons les modifications convenues, puis le site est mis en ligne après le paiement final.",
          },
        ],
      },
      about: {
        eyebrow: "À propos",
        title: "Des sites conçus pour vos objectifs d’entreprise",
        first:
          "Je m’appelle Yves et je suis développeur web à Bamenda, au Cameroun. J’aime transformer les idées d’entreprise en expériences numériques claires et utiles. Je crée des sites rapides et responsives qui aident les entreprises de services à présenter leur activité, à gagner la confiance de leurs clients et à faciliter la prise de contact.",
        second:
          "Je travaille à distance avec des clients au Cameroun et à l’international.",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Tailwind CSS",
          "TypeScript",
          "Design responsive",
          "Bases du SEO",
        ],
        remote: "À distance",
        worldwide: "Partout dans le monde",
        cameroon: "Cameroun",
        bamenda: "Bamenda",
      },
      contact: {
        eyebrow: "Contact",
        title: "Prêt à créer un site qui représente bien votre entreprise ?",
        description:
          "Présentez-moi votre activité et ce que vous attendez du site. Je vous répondrai avec les prochaines étapes et un devis clair.",
        whatsapp: "M’écrire sur WhatsApp",
        whatsappMessage: "Bonjour Yves, j’aimerais discuter d’un projet de site web.",
        form: {
          name: "Nom",
          namePlaceholder: "Votre nom",
          business: "Nom de l’entreprise",
          email: "Adresse e-mail",
          phone: "Numéro WhatsApp (facultatif)",
          message: "De quoi avez-vous besoin ?",
          messagePlaceholder:
            "Parlez-moi de votre activité et des objectifs du site.",
          budget: "Budget estimé",
          budgetPlaceholder: "Ex. : 100 000 à 200 000 FCFA",
          submit: "Envoyer la demande",
          sending: "Envoi en cours...",
          privacy:
            "Vos informations seront uniquement utilisées pour répondre à votre demande.",
        },
        missingKey:
          "Une erreur est survenue lors de l’envoi. Contactez-moi par WhatsApp ou par e-mail.",
        success:
          "Merci, votre demande a été envoyée. Je vous répondrai bientôt.",
        failure:
          "Votre demande n’a pas pu être envoyée. Réessayez ou contactez-moi directement.",
        emailSubject: "Nouvelle demande depuis le portfolio de {{name}}",
      },
      footer: {
        copyright: "© 2026 Yves Dev 237. Tous droits réservés.",
        backToTop: "Retour en haut",
      },
      social: {
        github: "GitHub",
        facebook: "Facebook",
        email: "E-mail",
      },
    },
  },
} as const;

const savedLanguage = window.localStorage.getItem("language");

const updateLocalizedMetadata = (language = i18n.resolvedLanguage ?? "en") => {
  const normalizedLanguage = language.startsWith("fr") ? "fr" : "en";
  document.documentElement.lang = normalizedLanguage;
  document.title = i18n.t("metadata.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", i18n.t("metadata.description"));
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", i18n.t("metadata.title"));
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", i18n.t("metadata.description"));
  document
    .querySelector('meta[property="og:locale"]')
    ?.setAttribute("content", i18n.t("metadata.locale"));
  document
    .querySelector('meta[name="twitter:title"]')
    ?.setAttribute("content", i18n.t("metadata.title"));
  document
    .querySelector('meta[name="twitter:description"]')
    ?.setAttribute("content", i18n.t("metadata.description"));
};

void i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage === "fr" ? "fr" : "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
}).then(() => updateLocalizedMetadata());

i18n.on("languageChanged", (language) => {
  updateLocalizedMetadata(language);
  window.localStorage.setItem("language", language.startsWith("fr") ? "fr" : "en");
});

document.documentElement.lang = savedLanguage === "fr" ? "fr" : "en";

export default i18n;
