import React from "react";
import Container from "../Container";
import Product from "../Product";
// import Image from "../Image";
import productOne from "/src/assets/productOne.jpg";
import productTwo from "/src/assets/productTwo.jpg";
import productThree from "/src/assets/productThree.jpg";
import productFour from "/src/assets/productFour.jpg";

const NewArrivals = () => {
  return (
    <div className="pb-25 font-DMSans">
      <Container>
        <h3 className="text-[#262626] text-[40px] font-bold pb-12 capitalize">
          New Arrivals
        </h3>
        <div className="grid grid-cols-4 gap-x-10">
          <div className="">
            <Product
              productImg={productOne}
              badgeText={"New"}
              productName={"Table watch"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="">
            <Product
              productImg={productTwo}
              badgeText={"-30%"}
              productName={"Smart watch "}
              productPrice={"$50.00"}
            />
          </div>
          <div className="">
            <Product
              productImg={productThree}
              badgeText={"-10%"}
              productName={"Basket"}
              productPrice={"$40.00"}
            />
          </div>
          <div className="">
            <Product
              productImg={productFour}
              badgeText={"New"}
              productName={"Totoro"}
              productPrice={"$60.00"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
