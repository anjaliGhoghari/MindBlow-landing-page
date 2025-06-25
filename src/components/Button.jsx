import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`font-poppins font-medium px-6 py-4 bg-blue-gradient outline-none text-[18px] cursor-pointer rounded-[10px] ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
