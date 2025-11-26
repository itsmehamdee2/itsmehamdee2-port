import { BowArrow, Github, Link2 } from "lucide-react";
import React, { useState } from "react";
import Pagination from "../add/Pagination";

// import CountUp from "../add/CountUp";

const projects = [
  {
    id: 1,
    title: "UrJewel",
    description: "Frontend Ecommerce Using React, Javascript and TailwindCss",
    image: "/",
    tags: ["TailwindCSS", "React", "JavaScript"],
    demoUrl: "https://react-sample-landingsaaspage-zcs6.vercel.app/",
    githubUrl: "https://github.com/itsmehamdee2",
  },
  {
    id: 2,
    title: "StompAI",
    description: "Frontend SaaS Using React, TypeScript and TailwindCss",
    image: "/",
    tags: ["TailwindCSS", "React", "TypeScript"],
    demoUrl: "https://react-sample-landingsaaspage-zcs6.vercel.app/",
    githubUrl: "https://github.com/itsmehamdee2",
  },
  {
    id: 3,
    title: "What Todo App list",
    description:
      "Todo App list, created using Javascipt, React and TailwindCss",
    image: "/",
    tags: ["TailwindCSS", "React", "JavaScript"],
    demoUrl: "https://react-sample-landingsaaspage-zcs6.vercel.app/",
    githubUrl: "https://github.com/itsmehamdee2",
  },
  {
    id: 4,
    title: "iSHoppe Ecommerce Frontend",
    description:
      "iSHoppe is e-commerce frontend that can search the productss(API)",
    image: "/",
    tags: ["TailwindCSS", "React", "JavaScript", "API"],
    demoUrl: "https://ishoppe-ecommerce.vercel.app//",
    githubUrl: "https://github.com/itsmehamdee2",
  },
];

const mySkills = [
  { id: 1, name: "HTML/CSS", level: 70, category: "frontend" },
  { id: 2, name: "JAVASCRIPT", level: 60, category: "frontend" },
  { id: 3, name: "REACT", level: 60, category: "frontend" },
  { id: 4, name: "TAILWIND", level: 70, category: "frontend" },
  { id: 11, name: "TYPESCRIPT", level: 50, category: "frontend" },
  { id: 5, name: "MYSQL", level: 40, category: "backend" },
  { id: 6, name: "EXPRESS", level: 30, category: "backend" },
  { id: 7, name: "NODEJS", level: 30, category: "backend" },
  { id: 8, name: "VSCODE", level: 70, category: "tools" },
  { id: 9, name: "FIGMA", level: 40, category: "tools" },
  { id: 10, name: "GIT/GITHUB", level: 50, category: "tools" },
  { id: 12, name: "FRAMERMOTION", level: 60, category: "tool" },
];

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(4);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = mySkills.slice(firstPostIndex, lastPostIndex);
  return (
    <section id="skills">
      <div className="bottom2  top1 bgline">
        <div className="min-h-screen w-full text-stone-200 relative">
          {/* White Sphere Grid Background */}
          <div className="container mx-auto flex">
            <div className=" text-center  h-auto w-full">
              <div className="flex flex-row pt-20 gap-2 items-center justify-center">
                <h1 className="text-6xl relative"> SKILLS</h1>

                <h1>
                  {" "}
                  <BowArrow className="text-red-600 "> </BowArrow>
                </h1>
              </div>
              <div>
                <div className="grid grid-cols-3  max-md:flex max-md:flex-col max-md:items-center max-md:justify-center relative container mx-auto mt-15 gap-3 max-sm:grid-cols-1 max:md-grid-cols-2 justify-center  items-center">
                  {currentPost.map((skill, key) => (
                    <div key={key} className="notification px-3">
                      <div className="notiglow"></div>
                      <div className="notiborderglow"></div>
                      <div className="notititle">
                        <h2 className="uppercase font-semibold  text-sky-600 text-md  border px-3 py-1  shadow-[0_0_5px_blue] rounded-2xl bg-transparent bg-linear-to-r from-white via-gray-300 to-white ">
                          {skill.name}
                        </h2>
                      </div>
                      <div className="notibody uppercase">{skill.category}</div>
                      <div className="notibody">{skill.level}%</div>
                    </div>
                  ))}

                  <div className=""> </div>
                  <h2></h2>
                </div>
                <div className="flex items-center justify-center">
                  <Pagination
                    totalPosts={mySkills.length}
                    postPerPage={postPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                </div>
              </div>
              <div className="wavy-line"></div>
            </div>
          </div>
          <div className="container py-10 relative mx-auto">
            <div className="flex items-center pt-10 justify-center">
              <h2 className="text-6xl diagonal text-white max-md:text-3xl uppercase">
                Featured{" "}
                <span
                  className="text-white
                "
                >
                  Projects
                </span>
              </h2>
            </div>
            <div className="flex  items-center  my-7 justify-center">
              <p className="text-lg text-justify mx-4 font-light">
                Here are some of my projects that i'ved done while honing my
                skills and knowledge in Coding, Each project was was carefully
                crafted with attention and details and user experience
              </p>
            </div>
            <div className="">
              <div className="container py-20  max-md:py-0  max-md:pb-8 mx-auto max-md:justify-center max-md:flex max-md:flex-col gap-3 max-md:items-center  max-sm:scale-95 max-md:scale-97 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="w-60 h-80 my-2  bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow"
                  >
                    <div className="w-52 h-40 bg-sky-300 rounded-2xl">
                      {" "}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cpver transition-transform duration-500 group-hover:scale-110"
                      />{" "}
                    </div>
                    <div className="">
                      <p className="font-extrabold">{project.title}</p>
                      <p className="">{project.description}</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
                        <a href={project.demoUrl} target="blank">
                          <Link2 size={20} />
                        </a>
                      </button>
                      <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
                        <a href={project.githubUrl} target="blank">
                          <Github size={20} />
                        </a>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
