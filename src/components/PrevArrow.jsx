import { FaArrowAltCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {
  const {onClick } = props;
  return (
    <div
      className={"absolute top-1/2 left-6 -translate-y-1/2 z-20"}
      onClick={onClick}
    >
      <FaArrowAltCircleLeft className="text-5xl inline-block opacity-20"/>
    </div>
  );
};

export default PrevArrow;
