import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => (
  <section
    id="users"
    className={`${styles.paddingY} flex flex-col justify-center items-center relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="flex w-full justify-between items-center flex-col md:flex-row sm:mb-20 mb-6 z[1]">
      <h2 className={styles.heading2}>
        What people are <br className="hidden sm:block" /> saying about us
      </h2>
      <div className="w-full">
        <p className={`${styles.paragraph}  mt-6 `}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.and grow your business anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="flex justify-evenly flex-wrap sm:justify-between w-full relative feedback-container z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
