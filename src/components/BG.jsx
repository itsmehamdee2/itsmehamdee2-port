const BG = () => {
  return (
    <div className="top1">
      <div className="min-h-screen w-full text-stone-100 relative">
        {/* White Sphere Grid Background */}
        <div className="absolute container1 inset-0 z-0" />
        {/* Your Content/Components */}
        <div className="flex max-md:flex-col relative justify-center items-center">
          <div className="flex   max-md:pt-10 pt-30">
            <div className="w-60 mt-10 rounded-lg h-80 bg-gray-50 p-3 flex flex-col gap-1">
              <div className="duration-500   h-48   hover:contrast-100">
                <img
                  className="w-full max-md:w-sm object-cover shadow-[5px_0_10px_white]    h-full "
                  src="./components/burger/deaam2.png"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <span className="text-xl text-black font-bold">BOUNTY</span>
                    <p className="text-xs text-gray-700">ID: NO ACCESS</p>
                  </div>
                  <span className="font-bold  text-red-600">$NULL</span>
                </div>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text text-slate-900">RESUME</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative items-center max-md:pt-3 pt-30 justify-center">
            <h1 className=" myanim1 mx-10 mt-5 font-light pt-20 max-md:pt-0 text-center text-5xl max-md:text-4xl ">
              AHMED HAMDEE ALONTO
            </h1>
            <span className=" mx-5 box text-center animated1 right text-2xl max-md:text-2xl">
              FRONTEND DEVELOPER
            </span>
            <p className="py-3 animated5">FIND ME ON</p>
            {/* github */}
            <div className="flex gap-3 ">
              <a href="https://github.com/itsmehamdee2" target="blank">
                <button className="group w-12 hover:w-44 cursor-pointer h-12 bg-black relative rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-pink-600 before:hover:bg-pink-500 before:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />{" "}
                  </svg>

                  <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    {" "}
                    @itsmehamdee2{" "}
                  </span>
                </button>{" "}
              </a>
              {/* instagram */}
              <a href="https://www.instagram.com/thefroozch" target="blank">
                <button className="group w-12 hover:w-44 cursor-pointer h-12 bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 relative rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-pink-600 before:hover:bg-pink-500 before:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 shrink-0 fill-neutral-50"
                  >
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    @thefroozch{" "}
                  </span>
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/ahamdeealonto/"
                target="blank"
              >
                <button className="group w-12 hover:w-44 h-12 cursor-pointer hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                  <svg
                    y="0"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    width="100"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    height="100"
                    className="w-8 h-8 shrink-0 fill-neutral-50"
                  >
                    <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                  </svg>
                  <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    ahamdeealonto{" "}
                  </span>
                </button>
              </a>
            </div>
            <div className="py-5 mb-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BG;
