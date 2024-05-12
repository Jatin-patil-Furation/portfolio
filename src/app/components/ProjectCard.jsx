import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  id,
}) => {
  return (
    <Link
      href={`/project/${id}`}
      className=" rounded-t-xl bg-[#181818] h-full rounded-b-md flex flex-col justify-between items-center overflow-hidden group transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="rounded-t-xl h-52   relative object-cover object-center overflow-hidden w-full">
        <Image
          src={imgUrl}
          alt="project-img"
          width={300}
          height={200}
          className="w-full h-full"
        />
      </div>
      <div className="text-white mt-3   px-4 py-2">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] line-clamp-5">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
