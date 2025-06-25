import React from "react";
import { stats } from "../constants";

const Stats = () => (
  <section className="flex text-white justify-center items-center flex-row flex-wrap mb-6 sm:md-20">
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex-1 flex justify-center items-center m-3"
      >
        <h4 className="font-poppins font-semibold text-white text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px]  ">
          {stat.value}
        </h4>
        <p className="font-poppins uppercase ml-3 font-normal text-gradient text-[15px] xs:text-[20px] leading-[26px] xs:leading-[21px]">
          {" "}
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
