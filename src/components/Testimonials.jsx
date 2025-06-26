import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} flex flex-col justify-center items-center relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="flex justify-between items-center flex-col md:flex-row sm:mb-20 mb-6 z[1]">
      <h2 className={styles.heading2}>
        What people are <br className="hidden sm:block" /> saying about us
      </h2>
      <div className="w-full">
        <p className={`${styles.paragraph} text-left mt-6 max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="flex justify-center flex-wrap sm:justify-start w-full relative feedback-container z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
