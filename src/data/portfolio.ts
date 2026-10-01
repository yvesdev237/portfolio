export type NavLink = {
  label: string;
  href: string;
};

export type ProjectCaseStudy = {
  project: string;
  type: string;
  goal: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  myRole: string;
  stack: string;
  liveLink: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  isConcept?: boolean;
  caseStudy?: ProjectCaseStudy;
};

export type Service = {
  name: string;
  description: string;
  price: string;
  initial: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  whatsapp:
    "https://wa.me/237699959447?text=Hello%20Yves%2C%20I%20want%20to%20discuss%20a%20website%20project.",
  email: "mailto:yvesdev237@gmail.com",
  github: "https://github.com/yvesdev237",
  facebook: "https://web.facebook.com/yvesdev237",
};

export const projects: Project[] = [
    {
    title: "Hotel Booking Website",
    category: "Demo project",
    description: "A hotel booking website template with a clean design and responsive layout.",
    image: "/images/montcameroon.png",
    imageAlt: "Hotel booking website preview mockup",
    tags: ["React", "Tailwind CSS", "Responsive design"],
    isConcept: true,
    caseStudy: {
      project: "Mont Cameroon Hotel Booking Website",
      type: "Demo project - hotel booking system",
      goal: "Create a responsive hotel booking website template that allows users to easily browse rooms, check availability, and make reservations online.",
      challenge:
        "The challenge was to design a user-friendly interface that provides a seamless booking experience while showcasing the hotel's amenities and services effectively.",
      solution: "I designed a clean, intuitive interface with a focus on user experience, ensuring that guests could easily navigate the site, view room details, and complete their reservations without any hassle.",
      keyFeatures: [
        "Intuitive room browsing and filtering",
        "Real-time availability checking",
        "Streamlined reservation process",
      ],
      myRole: "UX/UI design, front-end development, responsive layout implementation",
      stack: "React, Tailwind CSS, responsive design",
      liveLink: "https://hotelwebsitetemplate.vercel.app",
    },
  },
  {
    title: "rental property website",
    category: "Web project",
    description: "A rental property website template with a clean design and responsive layout.",
    image: "/images/zilohomewb.png",
    imageAlt: "Rental property website preview mockup",
    tags: ["React", "Tailwind CSS", "Responsive design"],
    caseStudy: {
      project: "Zilo Home",
      type: "Web project",
      goal: "Create a responsive rental property website template that allows users to easily browse properties, check availability, and book online.",
      challenge:
        "The challenge was to design a user-friendly interface that provides a seamless booking experience while showcasing the rental property's amenities and services effectively.",
      solution: "I designed a clean, intuitive interface with a focus on user experience, ensuring that guests could easily navigate the site, view property details, and complete their booking without any hassle.",
      keyFeatures: [
        "property browsing and filtering",
        "Real-time availability checking",
        "Easy booking process",
        "authentication and user account management", 
      ],
      myRole: "UX/UI design, front-end development, responsive layout implementation , authentication and user account management",
      stack: "React, Tailwind CSS, Supabase, responsive design",
      liveLink: "https://zilohomerentals.vercel.app",
    },
  },
];

export const services: Service[] = [
  {
    name: "Business website starter",
    description:
      "A 1–3 page responsive website with your services, contact details, social links, and a WhatsApp enquiry button.",
    price: "From 100,000 FCFA",
    initial: "01",
  },
  {
    name: "Landing page",
    description:
      "One focused page for a service, offer, event, product, or campaign.",
    price: "From 70,000 FCFA",
    initial: "02",
  },
  {
    name: "Website support",
    description:
      "Content updates, small fixes, performance checks, and ongoing technical support.",
    price: "From 15,000 FCFA/month",
    initial: "03",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell me about your business",
    description:
      "We discuss your goals, customers, pages, content, and the result you want from the website.",
  },
  {
    number: "02",
    title: "Design and build",
    description:
      "I create a responsive website and keep you updated while the project takes shape.",
  },
  {
    number: "03",
    title: "Review and launch",
    description:
      "You review the work, we complete agreed revisions, and your site launches after final payment.",
  },
];

export const skillTags = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Responsive design",
  "SEO basics",
];
