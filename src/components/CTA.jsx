import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.marginY} flex flex-col sm:flex-row justify-center items-center bg-black-gradient-2 rounded-[20px] box-shadow sm:px-24 px-12 sm:py-20 py-10`}
  >
    <div className="flex flex-1 flex-col">
      <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="flex justify-center items-center mt-10 sm:mt-0 sm:mr-10">
      <Button />
    </div>
  </section>
);

export default CTA;
