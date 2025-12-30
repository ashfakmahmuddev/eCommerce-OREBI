import Container from "../Container";
import Product from "../Product";
import productOne from "/src/assets/productOne.jpg";
import productTwo from "/src/assets/productTwo.jpg";
import productThree from "/src/assets/productThree.jpg";
import productFour from "/src/assets/productFour.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
  };
  return (
    <div className="pb-25 font-DMSans">
      <Container>
        <h3 className="text-[#262626] text-[40px] font-bold pb-12 capitalize">
          New Arrivals
        </h3>
        <Slider {...settings} className="-mx-5">
          <Link>
            <Product
              productImg={productOne}
              badgeText={"New"}
              productName={"Table watch"}
              productPrice={"$44.00"}
            />
          </Link>
          <Link>
            <Product
              productImg={productTwo}
              badgeText={"-30%"}
              productName={"Smart watch"}
              productPrice={"$50.00"}
            />
          </Link>
          <Link>
            <Product
              productImg={productThree}
              badgeText={"-10%"}
              productName={"Basket"}
              productPrice={"$40.00"}
            />
          </Link>
          <Link>
            <Product
              productImg={productFour}
              badgeText={"New"}
              productName={"Totoro"}
              productPrice={"$60.00"}
            />
          </Link>
          <Link>
            <Product
              productImg={productTwo}
              badgeText={"-30%"}
              productName={"Smart watch"}
              productPrice={"$50.00"}
            />
          </Link>
          <Link>
            <Product
              productImg={productThree}
              badgeText={"-10%"}
              productName={"Basket"}
              productPrice={"$40.00"}
            />
          </Link>
          <Link>
            <Product
              productImg={productFour}
              badgeText={"New"}
              productName={"Totoro"}
              productPrice={"$60.00"}
            />
          </Link>
          <Link>
            <Product
              productImg={productTwo}
              badgeText={"-30%"}
              productName={"Smart watch"}
              productPrice={"$50.00"}
            />
          </Link>
          <Link>
            <Product
              productImg={productThree}
              badgeText={"-10%"}
              productName={"Basket"}
              productPrice={"$40.00"}
            />
          </Link>
          <Link>
            <Product
              productImg={productFour}
              badgeText={"New"}
              productName={"Totoro"}
              productPrice={"$60.00"}
            />
          </Link>
          <Link>
            <Product
              productImg={productTwo}
              badgeText={"-30%"}
              productName={"Smart watch"}
              productPrice={"$50.00"}
            />
          </Link>
        </Slider>
      </Container>
    </div>
  );
};

export default NewArrivals;
