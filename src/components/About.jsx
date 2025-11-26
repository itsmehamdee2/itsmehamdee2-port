import { Award, Briefcase, Code2Icon } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="bottom1 top2">
        <div className="min-h-screen w-full text-slate-900 relative">
          {/* White Sphere Grid Background */}

          <div className="absolute bgline1 inset-0 z-0" />

          <div className="flex relative justify-center items-center  container py-13 mx-auto">
            <div>
              <div>
                <div className="flex justify-center items-center">
                  <h2 className="text-6xl ">
                    ABOUT{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-blue-500">
                      ME{" "}
                    </span>
                  </h2>
                </div>
              </div>

              <div className="grid relative grid-cols-2 py-10 items-center max-md:grid-cols-1">
                <div className="py-10 h-auto mx-6  text-center overflow-hidden relative rounded-2xl">
                  <div className="bg-slate-900  text-white w-auto h-full shadow-[0_0_10px_black] rounded-lg">
                    <div className="flex p-2 gap-1">
                      <div className="">
                        <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                      </div>
                      <div className="circle">
                        <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
                      </div>
                      <div className="circle">
                        <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
                      </div>
                    </div>
                    <div className="card__content">
                      <p className="text-md  text-justify  px-10 py-2">
                        "As an enthusiast and aspiring to be a fullstack web
                        developer. I,{" "}
                        <span className="text-lg font-bold uppercase text-transparent bg-clip-text bg-linear-to-r from-blue-800 to-blue-600">
                          {" "}
                          Ahmed Hamdee Alonto{" "}
                        </span>
                        bring with me a strong foundation in technology as a{" "}
                        <span className="font-bold text-lg text-blue-900">
                          Graduate{" "}
                        </span>
                        of the{" "}
                        <span className="text-blue-600 font-bold text-lg">
                          {" "}
                          Bachelor of Science in Information Technology Major in
                          Multimedia Systems at MSU-IIT{" "}
                        </span>
                        . My passion lies in creating dynamic, user-friendly
                        websites and exploring innovative solutions that bridge
                        design and functionality. With a keen interest in modern
                        web technologies and continuous learning, I am driven to
                        sharpen my skills and contribute to building digital
                        experiences that make a meaningful impact. My journey as
                        a developer is fueled by curiosity, creativity, and the
                        determination to grow into a professional who can turn
                        ideas into interactive realities."
                      </p>
                      <p className="text-md italic text-justify  px-10 py-5">
                        "Any fool can write code that a computer can understand.
                        Good programmers write code that humans can understand."
                        – Martin Fowler.
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="py-5 h-auto  cards text-center overflow-hidden relative rounded-2xl">
                  <div className=" container h-auto card  mx-auto bg-gray-800/50 hover:scale-100 scale-98 transform max-md:scale-95 max-md:hover:scale-96    transition-all duration-300 border border-white py-4 text-center overflow-hidden relative rounded-2xl">
                    <div className="flex flex-row">
                      <div className="mx-2  justify-center border-r items-center flex flex-row">
                        <Code2Icon className="text-slate-900 w-10 hover:rotate-180  transform transition-all duration-500  mx-auto" />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="">WEB DEVELOPER</h1>
                        <p className="text-lg pt-5 font-light md:text-sm text-left relative pl-1">
                          My passion as a Frontend Developer and soon as a
                          Fullstack Developer is as high as the Sky{" "}
                          <span className="italic text-blue-300">
                            "No limits till I achieve it"
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" container card h-auto mx-auto text-center bg-gray-800/50 hover:scale-100 scale-98 transform max-md:scale-95 max-md:hover:scale-96    transition-all duration-300  border border-white py-4 my-2 overflow-hidden relative rounded-2xl">
                    <div className="flex flex-row">
                      <div className="mx-2  justify-center text-white border-r items-center flex flex-row">
                        <Award className="text-slate-900 w-10 hover:rotate-180  transform transition-all duration-500  mx-auto" />
                      </div>
                      <div className="flex w-full text-white flex-col">
                        <h1 className="text-lg ">ACHIEVEMENTS</h1>
                        <ol>
                          <li className="">
                            <h1 className="font-light text-white text-sm text-left pl-1 pt-5 ">
                              CIVIL SERVICE PROFESSIONAL PASSER{" "}
                            </h1>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className=" container  card h-auto mx-auto text-center bg-gray-800/50 hover:scale-100 scale-98 max-md:scale-95 max-md:hover:scale-96   transform transition-all duration-300 border border-white py-4 my-2  overflow-hidden relative rounded-2xl">
                    <div className="flex flex-row">
                      <div className="mx-2  justify-center border-r items-center flex flex-row">
                        <Briefcase className="text-slate-900 w-10 hover:rotate-180  transform transition-all duration-500  mx-auto" />
                      </div>
                      <div className="flex w-full flex-col">
                        <h1 className="text-lg">WORK EXPERIENCE</h1>
                        <ol>
                          <li>
                            <p className="font-light text-sm text-left pt-6">
                              2024: FREELANCE FRONTEND DEVELOPER
                            </p>
                            <p className="font-light text-sm text-left py-1 ">
                              2018-2024: ADMIN CLERK @ PSHS-CMC LANAO DEL NORTE
                            </p>
                            <p className="font-light text-sm text-left py-1">
                              2017-2018: IT TECH SUPPORT @ BI-IMMIGRATION CEBU
                              DISTRICT
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
