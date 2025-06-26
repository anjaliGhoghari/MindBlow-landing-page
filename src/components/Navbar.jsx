import React, { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants/index";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between w-full py-6 items-center navbar">
      <a href="#">
        <img src={logo} alt="logo" className="w-[120px] h-[32px]" />
      </a>
      <ul className="flex justify-end flex-1 items-center">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-normal hidden sm:flex font-poppins mr-10 text-[16px] text-dimWhite hover:text-white cursor-pointer"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex sm:hidden">
        <img
          src={toggle ? close : menu}
          className="size-[28px] object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 rounded-xl my-2 min-w-[140px] sidebar`}
      >
        <ul className=" list-none flex justify-end flex-col flex-1 items-left">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-normal flex font-poppins text-[16px] mb-4 text-dimWhite hover:text-white cursor-pointer"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
