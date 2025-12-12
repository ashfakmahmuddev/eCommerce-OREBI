import React from "react";
import Container from "../Container";
import Image from "../Image";
import Ad_1 from "/src/assets/Ad_1.jpg";
import Ad_2 from "/src/assets/Ad_2.jpg";
import Ad_3 from "/src/assets/Ad_3.jpg";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <div className="py-25">
      <Container>
        <div className="flex gap-x-10">
          <div className="w-1/2">
            <Link>
              <Image src={Ad_1} className={"w-full"} />
            </Link>
          </div>
          <div className="w-1/2">
            <Link>
              <Image src={Ad_2} className={"w-full pb-8"} />
            </Link>
            <Link>
              <Image src={Ad_3} className={"w-full"} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ads;
