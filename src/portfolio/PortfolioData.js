const header = {
  homepage: "#",
  title: "Susi",
};

const about = {
  name: "Susi Zhang",
  role: "Full Stack Web Developer and UX/UI Designer",
  description: {
    title1: "Exploration makes my life exciting.",
    paragraph1:
      " I am from China, where I went to university and worked for 5 years before I moved to Germany to live in Bayern in 2021. To learn new skills, knowledge and to explore different places is what I enjoy. I have traveled to more than 15 countries. ",
    title2:
      " Currently, I am looking for a Frontend web programming or full-stack web programming job that can combine using my UX-UI design work experience. ",

    paragraph3:
      " 1) When I was working at Unilever China in 2014, I learned about UX-UI as a career and I found it very interesting and fascinating. Then I went to UX-UI classes every day after work. This also led me to a successful job in UX-UI 3 months later, and it lasted until I came to Germany. ",

    paragraph4:
      " At that time, I was trying to learn HTML and CSS to work better with programmers, which made me very interested and eager to explore programming. ",
    paragraph5:
      " So after I came to Germany, I joined the full-stack web development bootcamp at WBS. Here I learned JavaScript, react, nodejs and other technologies and worked with a team to complete projects, which I really enjoyed. ",
    paragraph6: " 2) Countries I have traveled or lived in: ",
    paragraph7:
      " China, Germany, Netherlands, Belgium, Czech Republic, Austria, Switzerland, Canada, Finland, Thailand, Singapore, Australia, Italy, France, Spain",
  },
  resume:
    "https://drive.google.com/file/d/1RgDr_0tgBT9pj6pTI_9xg2Tt9ZtrIoWR/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/susizhang/",
    github: "https://github.com/susizhang",
  },
};

const projects = [
  {
    id: 1,
    name: "German-mindmap-dictionary",
    description:
      "This project is trying to visualize a German dictionary as mindmaps, so that German learners can learn German words easier, faster and more effectively!",
    stack: [
      "React",
      "context",
      "Ant-design",
      "Nodejs",
      "express",
      "MongoDB/mongoose",
      "UX/UI",
    ],
    sourceCode:
      "https://github.com/susizhang/German_Mindmap_Dictionary_frontend",
    livePreview: "german-mindmap-dictionary",
    imageUrl: "imgs/lustig.png",
  },
  {
    id: 2,
    name: "React-typescript-Shopping-Cart",
    description:
      "This project is a fully functional shopping cart using Vite, React, TypeScript, and Bootstrap",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com/susizhang/React-ts-Shopping-Cart",
    livePreview: "Shopping-Cart",
    imageUrl: "imgs/ts-shopping-cart.png",
  },
  {
    id: 3,
    name: "Pokebattle game",
    description:
      "This is a  full-stack Pokefight application using React, MongoDB, React-Router and Tailwindcss",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com/susizhang/pokemon_frontend",
    livePreview: "Pokebattle",
    imageUrl: "imgs/pokefight.png",
  },
];

const skills = [
  "React",
  "Redux Toolkit",
  "Javascript(ES6)",
  "Typescript",
  "Express",
  "Nodejs",
  "HTML",
  "CSS",
  "MongoDB/Mongoose",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Linux",
  "User interviews",
  "Concept Sketches",
  "Storyboarding",
  "Wireframing",
  "Figma",
  "Ant-design",
  "Tailwindcss",
  "Bootstrap",
];

const contact = {
  email: "susizhang2017@gmail.com",
};

export { header, about, projects, skills, contact };
