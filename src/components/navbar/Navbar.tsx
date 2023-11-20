import React, { useState } from "react";
import { AppBarOptions } from "@config/appBarOptions";
import * as logo from "@assets/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-theme-gray p-4 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Icon on the left */}
          <img src={logo.default} alt="Logo" className="h-8" />

          <div className="hidden md:flex space-x-6 px-5 items-center">
            {AppBarOptions.map((option, index) => (
              <div className="group relative" key={index}>
                <button className="text-gray-900 hover:text-black focus:outline-none">
                  {option.label}
                </button>
                <KeyboardArrowDownIcon />
                {/* Suboptions */}
                <div className="hidden group-hover:block absolute bg-gray-700 py-2 mt-1">
                  {option.options?.map((subOption) => (
                    <p className="px-4 py-2 text-white" key={subOption}>
                      {subOption}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-black rounded-md pl-3 pr-8 py-1 focus:outline-none"
            />
            <div className="bg-indigo-700 rounded-lg absolute inset-y-0 right-0 px-3">
              <SearchOutlinedIcon />
            </div>
          </div>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {/* Your SVG code */}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          {/* Render mobile menu options */}
          <div className="flex flex-col space-y-2 text-white">
            {AppBarOptions.map((option, index) => (
              <div className="group relative" key={index}>
                <button className="text-black hover:text-black focus:outline-none">
                  {option.label}
                </button>
                {/* Suboptions */}
                <div className="hidden group-hover:block absolute bg-gray-700 py-2 mt-1">
                  {option.options?.map((subOption) => (
                    <p className="px-4 py-2 text-white" key={subOption}>
                      {subOption}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
