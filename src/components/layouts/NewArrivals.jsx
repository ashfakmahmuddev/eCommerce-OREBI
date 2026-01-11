import Container from "../Container";
import Product from "../Product";
import productOne from "/src/assets/productOne.jpg";
import productTwo from "/src/assets/productTwo.jpg";
import productThree from "/src/assets/productThree.jpg";
import productFour from "/src/assets/productFour.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const NewArrivals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="pb-25 font-DMSans">
      <Container>
        <h3 className="text-[#262626] text-[40px] font-bold pb-12 capitalize">
          New Arrivals
        </h3>
        <Slider {...settings} className="-mx-5">
          <div>
            <Product
              productImg={productOne}
              badgeText={"New"}
              productName={"Table watch"}
              productPrice={"$44.00"}
            />
          </div>
          <div>
            <Product
              productImg={productTwo}
              badgeText={"New"}
              productName={"Smart watch"}
              productPrice={"$50.00"}
            />
          </div>
          <div>
            <Product
              productImg={productThree}
              badgeText={"New"}
              productName={"Basket"}
              productPrice={"$40.00"}
            />
          </div>
          <div>
            <Product
              productImg={productFour}
              badgeText={"New"}
              productName={"Totoro"}
              productPrice={"$60.00"}
            />
          </div>
          <div>
            <Product
              productImg={productTwo}
              badgeText={"New"}
              productName={"Smart watch"}
              productPrice={"$50.00"}
            />
          </div>
          <div>
            <Product
              productImg={productThree}
              badgeText={"New"}
              productName={"Basket"}
              productPrice={"$40.00"}
            />
          </div>
          <div>
            <Product
              productImg={productFour}
              badgeText={"New"}
              productName={"Totoro"}
              productPrice={"$60.00"}
            />
          </div>
          <div>
            <Product
              productImg={productTwo}
              badgeText={"New"}
              productName={"Smart watch"}
              productPrice={"$50.00"}
            />
          </div>
          <div>
            <Product
              productImg={productThree}
              badgeText={"New"}
              productName={"Basket"}
              productPrice={"$40.00"}
            />
          </div>
          <div>
            <Product
              productImg={productFour}
              badgeText={"New"}
              productName={"Totoro"}
              productPrice={"$60.00"}
            />
          </div>
          <div>
            <Product
              productImg={productTwo}
              badgeText={"New"}
              productName={"Smart watch"}
              productPrice={"$50.00"}
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default NewArrivals;
