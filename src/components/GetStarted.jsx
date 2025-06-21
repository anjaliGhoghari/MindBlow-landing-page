import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className="flex justify-center items-center size-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px] ">
    <div className="flex justify-center items-center flex-col bg-primary hover:bg-cyan-800 transition-all duration-500 w-full h-full rounded-full">
      <div className="flex justify-center items-start flex-row group">
        <p className="font-medium text-[18px] leading-[23px] font-poppins mr-2 text-gradient">
          Get
        </p>
        <img src={arrowUp} />
      </div>
      <p className="font-medium text-[18px] leading-[23px] font-poppins text-gradient group-hover:text-black">
        Started
      </p>
    </div>
  </div>
);

export default GetStarted;
