import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  ams,
  heza,
  black,
  dcl,
  meta,
  starbucks,
  tesla,
  amslg,
  Hezaa,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "React Native Developer", icon: mobile },
  { title: "Web Developer", icon: web },
  { title: "Backend Developer", icon: backend },
  { title: "Cybersecurity Analyst", icon: creator },
];

const technologies = [
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Use Timon",
    icon: meta,
    iconBg: "#f4f4f5",
    date: "September 2024 – Present",
    points: [
      "Implement pixel-perfect UI/UX designs, translating wireframes and mockups into high-quality mobile applications.",
      "Integrated a data pipeline solution for analytics and event tracking, enabling enhanced data collection for user interactions, retention analysis, and app performance metrics.",
      "Optimised app flow and onboarding features, increasing customer satisfaction and app retention by 70%.",
      "Handle debugging, troubleshooting, and rolling out updates based on client feedback and emerging needs.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Shipbubble Inc.",
    icon: starbucks,
    iconBg: "#f4f4f5",
    date: "June 2023 – Present",
    points: [
      "Translated UI designs into responsive, high-quality React Native code ensuring seamless user experiences across devices.",
      "Collaborated with product and business teams to define technical requirements and integrate features for financial regulation compliance (e.g. KYC).",
      "Implemented secure authentication systems including multi-factor authentication (MFA) and encryption standards.",
      "Enhanced user experience with five major feature updates, reducing user-reported bugs by 45%.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Agro Market Square",
    icon: amslg,
    iconBg: "#f4f4f5",
    date: "November 2023 – Present",
    points: [
      "Built Agro Market Square's full web services — Nigeria's most accessible agro value chain platform.",
      "Built internal platforms for product inventory and platform maintenance.",
      "Collaborated with cross-functional teams to deliver responsive, high-quality web applications.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Healthzoneafrica",
    icon: Hezaa,
    iconBg: "#f4f4f5",
    date: "April 2022 – May 2024",
    points: [
      "Developed and maintained the mobile application with features including push notifications and location tracking.",
      "Ensured implementation of compliance standards and regulatory requirements in fintech solutions.",
      "Implemented reusable React Native components using JavaScript, resulting in a 20% improvement in code maintainability.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Finesse Codes",
    icon: tesla,
    iconBg: "#f4f4f5",
    date: "December 2020 – May 2021",
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
    name: "Izu Areh",
    designation: "COO",
    company: "Agro Market Square",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a mobile developer who truly cares about their clients' success and the product like Pelumi does.",
    name: "Efosa",
    designation: "CEO",
    company: "Healthzoneafrica",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Pelumi optimised our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Gbenga Ojo",
    designation: "Product Manager",
    company: "DotCircle Labs",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Agro Market Square",
    description:
      "Web-based platform streamlining Nigeria's agro supply chain and empowering stakeholders. Nigeria's most accessible agro value chain platform.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "redux toolkit", color: "blue-text-gradient" },
    ],
    image: ams,
    source_code_link: "https://agromarketsquare.com/",
  },
  {
    name: "HeZa — Health Zone Africa",
    description:
      "Healthcare mobile platform that connects patients to a wide range of qualified Healthcare Professionals, built with React Native.",
    tags: [
      { name: "react native", color: "blue-text-gradient" },
      { name: "async storage", color: "green-text-gradient" },
      { name: "node", color: "pink-text-gradient" },
    ],
    image: heza,
    source_code_link: "https://healthzoneafrica.com/",
  },
  {
    name: "BlackCardChain",
    description:
      "BLACKCARD offers a groundbreaking solution to seamlessly integrate cryptocurrency into everyday life, with staking participation in ecosystem profits.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "framer motion", color: "pink-text-gradient" },
    ],
    image: black,
    source_code_link: "https://www.blackcardchain.com/",
  },
  {
    name: "Dotcircle Labs",
    description:
      "Software development company website — a team of developers, designers, and product managers passionate about building high-quality software products.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "framer motion", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: dcl,
    source_code_link: "https://dotcirclelabs.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
