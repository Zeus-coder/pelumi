import { ams, heza, black, dcl } from "../assets";

export const navLinks = [
  { id: "about",   title: "About"   },
  { id: "work",    title: "Work"    },
  { id: "contact", title: "Contact" },
];

const experiences = [
  {
    title:        "React Native Developer",
    company_name: "Use Timon",
    date:         "Sep 2024 – Present",
    points: [
      "Implemented pixel-perfect UI/UX designs, translating wireframes and mockups into high-quality mobile applications.",
      "Integrated a data pipeline for analytics and event tracking, enabling enhanced data collection for user interactions, retention analysis, and app performance metrics.",
      "Optimised app flow and onboarding features, increasing customer satisfaction and app retention by 70%.",
      "Handled debugging, troubleshooting, and rolling out updates based on client feedback.",
    ],
  },
  {
    title:        "React Native Developer",
    company_name: "Shipbubble Inc.",
    date:         "Jun 2023 – Present",
    points: [
      "Translated UI designs into responsive, high-quality React Native code ensuring seamless user experiences across devices.",
      "Collaborated with product and business teams to integrate features for financial regulation compliance (e.g. KYC).",
      "Implemented secure authentication systems including multi-factor authentication (MFA) and encryption standards.",
      "Enhanced user experience with five major feature updates, reducing user-reported bugs by 45%.",
    ],
  },
  {
    title:        "React Developer",
    company_name: "Agro Market Square",
    date:         "Nov 2023 – Present",
    points: [
      "Built Agro Market Square's full web services — Nigeria's most accessible agro value chain platform.",
      "Built internal platforms for product inventory and platform maintenance.",
      "Collaborated with cross-functional teams to deliver responsive, high-quality web applications.",
    ],
  },
  {
    title:        "React Native Developer",
    company_name: "Healthzoneafrica",
    date:         "Apr 2022 – May 2024",
    points: [
      "Developed and maintained the mobile application with features including push notifications and location tracking.",
      "Ensured implementation of compliance standards and regulatory requirements in fintech solutions.",
      "Implemented reusable React Native components resulting in a 20% improvement in code maintainability.",
    ],
  },
  {
    title:        "React Native Developer",
    company_name: "Finesse Codes",
    date:         "Dec 2020 – May 2021",
    points: [
      "Started the development of the Zabira mobile app.",
      "Integrated third-party packages required for the application.",
      "Optimised the application for maximum speed and reduction in app size.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Pelumi proved me wrong.",
    name:        "Izu Areh",
    designation: "COO",
    company:     "Agro Market Square",
  },
  {
    testimonial:
      "I've never met a mobile developer who truly cares about their clients' success and the product like Pelumi does.",
    name:        "Efosa",
    designation: "CEO",
    company:     "Healthzoneafrica",
  },
  {
    testimonial:
      "After Pelumi optimised our website, our traffic increased by 50%. We can't thank him enough!",
    name:        "Gbenga Ojo",
    designation: "Product Manager",
    company:     "DotCircle Labs",
  },
];

const projects = [
  {
    name:        "Agro Market Square",
    description: "Web-based platform streamlining Nigeria's agro supply chain and empowering stakeholders — the country's most accessible agro value chain platform.",
    tags: [
      { name: "react",         color: "blue-text-gradient"  },
      { name: "firebase",      color: "green-text-gradient" },
      { name: "tailwind",      color: "pink-text-gradient"  },
      { name: "redux toolkit", color: "blue-text-gradient"  },
    ],
    image:            ams,
    source_code_link: "https://agromarketsquare.com/",
  },
  {
    name:        "HeZa — Health Zone Africa",
    description: "Healthcare mobile platform connecting patients to qualified Healthcare Professionals, built with React Native CLI.",
    tags: [
      { name: "react native",  color: "blue-text-gradient"  },
      { name: "async storage", color: "green-text-gradient" },
      { name: "node",          color: "pink-text-gradient"  },
    ],
    image:            heza,
    source_code_link: "https://healthzoneafrica.com/",
  },
  {
    name:        "BlackCardChain",
    description: "BLACKCARD integrates cryptocurrency into everyday life with staking participation in ecosystem profits.",
    tags: [
      { name: "nextjs",        color: "blue-text-gradient"  },
      { name: "tailwind",      color: "green-text-gradient" },
      { name: "framer motion", color: "pink-text-gradient"  },
    ],
    image:            black,
    source_code_link: "https://www.blackcardchain.com/",
  },
  {
    name:        "Dotcircle Labs",
    description: "Software development company website — a team of developers, designers, and product managers building high-quality software products.",
    tags: [
      { name: "nextjs",        color: "blue-text-gradient"  },
      { name: "framer motion", color: "green-text-gradient" },
      { name: "tailwind",      color: "pink-text-gradient"  },
    ],
    image:            dcl,
    source_code_link: "https://dotcirclelabs.com/",
  },
];

export { experiences, testimonials, projects };
