import React from "react";
import { stats } from "../constants";

const Stats = () => (
  <section className="flex text-white justify-center md:justify-between gap-5 items-center flex-row flex-wrap mb-6 sm:mb-20">
    {stats.map((stat) => (
      <div key={stat.id} className="flex justify-center items-center">
        <h4 className="font-poppins font-semibold text-white text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px]  ">
          {stat.value}
        </h4>
        <p className="font-poppins ml-3 uppercase font-normal text-gradient text-[15px] xs:text-[20px] leading-[26px] xs:leading-[21px]">
          {" "}
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
