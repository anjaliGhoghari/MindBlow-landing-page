import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-evenly px-12 py-12 rounded-[20px] gap-2 max-w-[370px] bg-black-gradient my-5 ">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins text-[18px] leading-[32.4px] font-normal my-6 text-white">
      {content}
    </p>
    <div className="flex flex-row items-center">
      <img src={img} className="size-[48px] rounded-full" />
      <div className="ml-4 flex flex-col items-start justify-center">
        <h4 className="font-poppins text-[20px] leading-[32px] font-semibold text-white">
          {name}
        </h4>
        <p className="font-poppins text-[16px] leading-[24px] font-normal text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
