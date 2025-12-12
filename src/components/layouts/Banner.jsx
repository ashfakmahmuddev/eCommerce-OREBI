import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Image from "../Image";
import bannerOne from "/src/assets/bannerOne.jpg";
import bannerTwo from "/src/assets/bannerTwo.jpg";
import bannerThree from "/src/assets/bannerThree.jpg";

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    // dots: true,
  };
  return (
    <Slider {...settings} className="h-[600px]">
      <Link>
        <Image src={bannerOne} className={"w-full h-[600px]"} />
      </Link>
      <Link>
        <Image src={bannerTwo} className={"w-full h-[600px]"} />
      </Link>
      <Link>
        <Image src={bannerThree} className={"w-full h-[600px]"} />
      </Link>
    </Slider>
  );
};

export default Banner;
