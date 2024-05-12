import React from "react";

const projectsData = [
  {
    id: 1,
    title: "AGENT RIDER",
    description:
      "Agent Rider is a sophisticated application tailored for real estate agents operating in the Canadian market. Within this platform, users have the capability to either post job listings or apply for real estate-related positions. My role primarily involved backend development, where I adeptly utilized a combination of technologies and methodologies to ensure optimal functionality and performance. We utilized the Express.js framework and TypeScript language for backend development. ",
    image: "/images/projects/1.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "FANTOM PLAY",
    description:
      "Fantom Play is a gaming app where users can participate in various contests to win and earn money, akin to the popular Dream11 platform. As a backend developer for this project, I played a key role in its development. ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Guest Management System",
    description:
      "GMS was a comprehensive web and mobile application designed for restaurant reservations and management of statistical data regarding profits and clients. My primary role in this project was backend development. Leveraging Node.js and Express.js with TypeScript, we adhered to clean architecture principles. MongoDB served as our database solution. Within this project, I undertook tasks including database model design, CRUD operations, implementation of filters, sorting mechanisms, pagination, and more. ",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const page = (params) => {
  console.log(params.params.id);

  const project = projectsData.find(
    (project) => project.id === parseInt(params.params.id)
  );
  if (project.id === undefined) {
    return <div>404 | Not Found</div>;
  }
  return <div className="mt-20">{project.title}</div>;
};

export default page;
