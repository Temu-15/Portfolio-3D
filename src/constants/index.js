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
  FaHtml5,
  FaCss3,
  FaReact,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "services",
    title: "Services",
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

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
  skillSets: [
    {
      name: "React",
      icon: "FaReact",
      color: "blue-text-gradient",
      level: 80,
    },
    // {
    //   name: "Redux",
    //   icon: redux,
    //   color: "blue-text-gradient",
    //   level: 85,
    // },
    {
      name: "HTML",
      icon: "FaHtml5",
      color: "blue-text-gradient",
      level: 90,
    },
    {
      name: "CSS",
      icon: "FaCss3",
      color: "blue-text-gradient",
      level: 95,
    },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    //   color: "blue-text-gradient",
    //   level: 90,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    //   color: "blue-text-gradient",
    //   level: 85,
    // },
    // {
    //   name: "Node.js",
    //   icon: nodejs,
    //   color: "blue-text-gradient",
    //   level: 90,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    //   color: "blue-text-gradient",
    //   level: 80,
    // },
    // {
    //   name: "Three.js",
    //   icon: threejs,
    //   color: "blue-text-gradient",
    //   level: 75,
    // },
  ],
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
};
