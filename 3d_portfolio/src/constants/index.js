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
  
  git,
  figma,

  stock,
  restaurant,
  bank,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: reactjs,
    iconBg: "#383E56",
    
    points: [
      "Implemented advanced React concepts such as Hooks, Context API, Redux in 2 projects, resulting in a more efficient and maintainable codebase",
      "Utilized TypeScript to developed a large-scale React-based project, resulting in a 40% reduction in development time and improved code quality."
        
    ],
  },
 
  {
    title: "Backend Developer",
    
    icon: backend,
    iconBg: "#383E56",
    
    points: [
     "Especially interested in Backend/Web Development, Django, Django Rest Framework, Restful API, PostgreSQL. Creating server and database for website functionality, ensuring cross-platform mobile optimization. Working with APIs and technical documentation. Focusing both on technical and consumer needs to bring up the final Product. "
    
    
     
    ],
  },
  {
    title: "Full stack Developer",
   
    icon: creator,
    iconBg: "#E6DEDD",

    points: [
      "Demonstrated ability to write efficient and maintainable code, leading to a 30% reduction in overall project development time.",
      "Proficient in JavaScript and familiar with TypeScript, with experience in building complex and scalable web applications, resulting in the launch of 5 successful projects."
    ],
  },
];

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
    name: "Stock App",
    description:
      "StockApp: is an online single page web application that enables you to manage orders and inventory with ability to get, add, edit, or delete products, firms, brands, sales, and purchases. Technical Stack; HTML, CSS, JavaScript, React, and Material.UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Js",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "styled",
        color: "pink-text-gradient",
      },
      {
        name: "reduxjs/toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
       
      },
      {
        name: "react-redux",
        color: "blue-text-gradient"
      },
  
    ],
    image: stock,
    source_code_link: "https://github.com/tosunmail/react-work/tree/master/stock-app",
  },
  {
    name: "Restaurant App",
    description:
      "The restaurant webpage offers key details about the restaurant, including its name, location, and contact information. The webpage may include menus, reservation options, and customer reviews to help potential customers make informed decisions. Its main objective is to attract and engage visitors, encouraging them to dine at the restaurant.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "responsive-design",
        color: "green-text-gradient",
      },
    
      
    ],
    image: restaurant,
    source_code_link: "https://github.com/tosunmail/projects/tree/master/restaurant",
  },
  {
    name: "Bank App",
    description:
   " It provides a visually appealing and intuitive design, allowing users to easily navigate through different banking features. The frontend of a bank app focuses on presenting account balances, transaction history, payment options, and other banking functionalities in a user-friendly and responsive manner.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/tosunmail/projects/tree/master/bank_modern_app",
  },
];

export { services, technologies, experiences, testimonials, projects };
