import React from "react";
import { motion } from "framer-motion";
import { HiOutlineLibrary } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaKaggle} from "react-icons/fa"

function ProjectSection() {
  let projects = [
    {
      _id: 1,
      link: "",
      image: <HiOutlineLibrary className="text-white h-60 w-60" />,
      title: "Personal Library",
      summary: "Personal Products and Certificates with Timeline",
    },
    {
      _id: 2,
      link: "https://github.com/Tatyy555",
      image: <AiFillGithub className="text-white h-60 w-60" />,
      title: "Github",
      summary: "Name: Tatyy555",
    },
    {
      _id: 3,
      link: "https://twitter.com/4k7hB",
      image: <AiOutlineTwitter className="text-white h-60 w-60" />,
      title: "Twitter",
      summary: "Name: TATYY",
    },
    {
      _id: 4,
      link: "https://www.kaggle.com/tatyy555",
      image: <FaKaggle className="text-white h-60 w-60" />,
      title: "Kaggle",
      summary: "Name: TATYY555",
    },
  ];

  return (
    <motion.div
      initial={{
        y: -20,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="project-section"
      className="font-Montserrat max-w-7xl mx-auto flex-col min-h-[94vh] flex py-20 px-10 2xl:px-0 snap-center"
    >
      <h1 className="text-center mb-10 text-4xl underline font-extrabold">
        About Myself
      </h1>
      <div className="bg-gray-800 sm:p-10 ">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <a
              key={project?._id}
              href={project?.link}
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105 p-5 bg-my-skyblue/20 m-5 rounded-lg">
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-mine p-2 "
                >
                  {project?.image}
                </motion.div>
                <div className="pt">
                  <h2 className="text-3xl text-center">{project?.title}</h2>
                  <p className="mt-2">{project?.summary}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default ProjectSection;
