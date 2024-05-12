"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>NextJs/ReactJs</li>
        <li>MongoDB</li>
        <li>Prisma</li>
        <li>Firebase</li>
        <li>Strapi</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Masters in Information Technology | 2021-2023</li>
        <li>BSC Information Technology | 2018-2021</li>
        <li>Higher Secondary Certificate | 2016-2018</li>
        <li>Secondary School Certificate | 2016</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Power PLatform Fundamentals | MICROSOFT</li>
        <li>Data Analytics Professional | GOOGLE</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {` Hello, I'm Mansi Sable, a proficient full stack developer
            specializing in TypeScript, Express.js, and Next.js, along with a
            strong foundation in HTML, CSS, and JavaScript. With a year of
            hands-on experience as a backend developer, I've adeptly utilized
            Sequelize and Prisma as an ORM tool. I have a keen understanding of
            database technologies including MySQL, MongoDB, and PostgreSQL. My
            expertise extends to modern front-end libraries like React.
            Additionally, I've effectively implemented cloud services such as
            AWS and Firebase, and CMS platforms like Strapi. My focus is on
            crafting robust and user-friendly digital solutions.`}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
