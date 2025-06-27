import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";

const Hero = () => (
  <section
    id="home"
    className={`flex flex-col md:flex-row ${styles.paddingY} `}
  >
    <div className="flex-1 flex justify-center items-start mb-6 md:mb-0 flex-col px-6 sm:px-16 xl:px-0">
      <div className=" flex items-center flex-row bg-discount-gradient rounded-[10px] px-4 py-[6px] font-poppins mb-2">
        <img src={discount} className="size-[32px] " />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> DISCOUNT FOR{" "}
          <span className="text-white">1 MONTH </span> ACCOUNT
        </p>
      </div>
      <div className="flex flex-row font-poppins">
        <h1 className="text-white flex-1 font-semibold text-[52px] ss:text-[72px] leading-[75px] ss:leading-[100px]">
          The Next <br className="hidden sm:block" />
          <span className="text-gradient">Generation </span>
        </h1>
      </div>
      <h1 className="text-white font-semibold text-[52px] ss:text-[72px] leading-[75px] ss:leading-[100px]">
        Payment Method.
      </h1>
      <p className={`mt-5 max-w-[470px] ${styles.paragraph}`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
      <Button styles="mt-8 " />
    </div>
    <div className="flex flex-1 justify-center items-center md:my-0 my-10 relative ">
      <img src={robot} className="size-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
