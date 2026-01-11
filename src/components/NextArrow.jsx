import { FaArrowAltCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
  const {onClick } = props;
  return (
    <div className={"absolute top-1/2 right-6 -translate-y-1/2 z-20"} onClick={onClick}>
      <FaArrowAltCircleRight className="text-5xl inline-block opacity-20"/>
    </div>
  );
};

export default NextArrow;
