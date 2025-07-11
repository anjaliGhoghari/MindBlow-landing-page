import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row py-6 p-3 bg-black-gradient feature-card ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } rounded-[20px]`}
  >
    <div className="bg-dimBlue w-[64px] h-[64px] rounded-full flex justify-center items-center">
      <img src={icon} className="size-[50%] object-contain" />
    </div>
    <div className="flex flex-col flex-1 ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Bussiness = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle the
        money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionInfo} flex-col md:mt-0 mt-8`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Bussiness;
