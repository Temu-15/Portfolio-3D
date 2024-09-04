import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { RxGithubLogo } from "react-icons/rx";
import { LuFigma } from "react-icons/lu";
import { FaDocker } from "react-icons/fa";

const about = {
  title: "About Me",
  description:
    "I'm a software engineer with a passion for creating engaging and user-centric experiences.",
  info: [
    {
      title: "Name",
      content: "Temesgen Fikadu",
    },
    {
      title: "Phone",
      content: "+251 929 170 804",
    },
    {
      title: "Email",
      content: "Tamasgenfiqaadu@example.com",
    },
    {
      title: "Location",
      content: "Addis Ababa, Ethiopia",
    },
    {
      title: "Experience",
      content: "2 years",
    },
    {
      title: "Freelance",
      content: "Yes",
    },
    {
      title: "Languages",
      content: "English, Amharic , hindi , oromics",
    },
  ],
};
const technologies = [
  {
    name: "HTML 5",
    icon: FaHtml5,
  },
  {
    name: "CSS 3",
    icon: FaCss3,
  },
  {
    name: "JavaScript",
    icon: DiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React JS",
    icon: FaReact,
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
  {
    name: "Node JS",
    icon: RiNodejsLine,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Three JS",
    icon: TbBrandThreejs,
  },
  {
    name: "git",
    icon: RxGithubLogo,
  },
  {
    name: "figma",
    icon: LuFigma,
  },
  {
    name: "docker",
    icon: FaDocker,
  },
];
export const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "experience",
    title: "experience",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    num: "01",
    title: "Front-end Developer",
    description:
      "design and development documentation for Web Developer Services",
  },

  {
    num: "02",
    title: "Backend Developer",
    description: "building efficient and scalable backend systems",
  },
  {
    num: "03",
    title: "SEO",
    description: "optimizing website's search engine ranking",
  },
  {
    num: "04",
    title: "ThreeJs Specialist",
    description: "creating 3d websites with multiple components ",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Science",
    degree: "Computer Science",
    institution: "University of Texas at Austin",
    date: "2015 - 2019",
  },
  {
    title: "Full stack web development bootcamp",
    degree: "Full Stack Web Development",
    institution: "Udemy",
    date: "2021 - Present",
  },
  {
    title: "Front-end Track",
    degree: "Web Development",
    institution: "Codecademy",
    date: "2019 - 2020",
  },
  {
    title: "Back-end Track",
    degree: "Web Development",
    institution: "Codecademy",
    date: "2018 - 2019",
  },
  {
    title: "the complete web development bootcamp",
    degree: "Web Development",
    institution: "Udemy",
    date: "2017 - 2018",
  },
];

const skills = {
  title: "my skills",
  description:
    "my skills description for the web development project for the website project at https:// website. Ember.com",
};

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
  skills,
  about,
};
