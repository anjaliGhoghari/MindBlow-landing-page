import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`font-poppins font-medium px-6 py-4 bg-blue-gradient outline-none text-[18px] cursor-pointer rounded-[10px] hover:brightness-110 hover:scale-105 transition duration-300 ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
