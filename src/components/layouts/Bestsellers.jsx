import Container from "../Container";
import Product from "../Product";
import bestsellerOne from "/src/assets/bestsellerOne.jpg";
import bestsellerTwo from "/src/assets/bestsellerTwo.jpg";
import bestsellerThree from "/src/assets/bestsellerThree.jpg";
import bestsellerFour from "/src/assets/bestsellerFour.jpg";

const Bestsellers = () => {
  return (
    <div className="pb-25 font-DMSans">
      <Container>
        <h3 className="text-[#262626] text-[40px] font-bold pb-12">
          New Arrivals
        </h3>
        <div className="grid grid-cols-4 gap-x-10">
          <div className="">
            <Product
              productImg={bestsellerOne}
              badgeText={"New"}
              productName={"Flower Base"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="">
            <Product
              productImg={bestsellerTwo}
              badgeText={"-30%"}
              productName={"New Backpack"}
              productPrice={"$50.00"}
            />
          </div>
          <div className="">
            <Product
              productImg={bestsellerThree}
              badgeText={"-10%"}
              productName={"Household materials"}
              productPrice={"$40.00"}
            />
          </div>
          <div className="">
            <Product
              productImg={bestsellerFour}
              badgeText={"New"}
              productName={"Travel Bag"}
              productPrice={"$60.00"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bestsellers;
