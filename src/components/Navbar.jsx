import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOn, setIsOn] = useState(false);
  const handleisOn = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <nav className="w-full text-slate-200 bgline1 shadow-[0_0_10px_black] bg-gray-800 bg-opacity-50 sticky top-0 z-50 px-4 py-3 ">
        <div className=" flex justify-between items-center">
          {/* <!-- Logo --> */}
          <div className="justify-self-start flex items-center">
            <a href="#" className="text-xl font-bold">
              <img
                className="h-8 rounded-xl border bg-white"
                src="/src/components/pics/h.png"
              />
            </a>
          </div>

          {/* <!-- Desktop Navigation -->  */}
          <div className="hidden md:flex items-center justify-self-end space-x-1">
            <a
              href="#"
              className="px-3 py-2 hover:text-blue-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-300 hover:after:w-full after:transition-all after:duration-300 flex items-center"
            >
              HOME
            </a>
            <a
              href="#about"
              className="px-3 py-2 hover:text-blue-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-300 hover:after:w-full after:transition-all after:duration-300 flex items-center"
            >
              ABOUT
            </a>
            <a
              href="#skills"
              className="px-3 py-2 hover:text-blue-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-300 hover:after:w-full after:transition-all after:duration-300 flex items-center"
            >
              SKILLS
            </a>
            <a
              href="#contact"
              className="px-3 py-2 hover:text-blue-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-300 hover:after:w-full after:transition-all after:duration-300 flex items-center"
            >
              CONTACT
            </a>
          </div>
          {!isOn ? (
            <div>
              <div className="md:hidden flex items-center">
                <button
                  id="mobile-menu-button"
                  onClick={handleisOn}
                  className="text-black hover:text-blue-300 focus:outline-none"
                >
                  <Menu className="text-white" />
                </button>
              </div>
              <div className="hidden md:hidden absolute top-full left-0 right-0  bg-white text-gray-800 bg-opacity-50 shadow-lg mt-1 p-4 z-50">
                <div className="flex flex-col space-y-3">
                  <a
                    href="#"
                    className="px-3 py-2 hover:text-blue-300 flex items-center"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 hover:text-blue-300 flex items-center"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 hover:text-blue-300 flex items-center"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 hover:text-blue-300 flex items-center"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <button className="cursor-target" onClick={handleisOn}>
              <X />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
