import Container from "../Container";
import { MdLocalShipping } from "react-icons/md";
import Image from "../Image";
import Return from "/src/assets/return.svg";

const Information = () => {
  return (
    <div className="border border-[#f0f0f0] py-7 font-DMSans">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-4">
            <h3 className="text-3xl font-semibold">2</h3>
            <span className="text-[#6D6D6D] text-base">Two years warranty</span>
          </div>
          <div className="flex items-center gap-x-4">
            <MdLocalShipping className="text-3xl" />
            <span className="text-[#6D6D6D] text-base">Free shipping</span>
          </div>
          <div className="flex items-center gap-x-4">
            <Image src={Return} />
            <span className="text-[#6D6D6D] text-base">
              Return policy in 30 days
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Information;
