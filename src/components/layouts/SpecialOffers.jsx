import Container from "../Container";
import Product from "../Product";
import specialOne from "/src/assets/specialOne.jpg";
import specialTwo from "/src/assets/specialTwo.jpg";
import specialThree from "/src/assets/specialThree.jpg";
import specialFour from "/src/assets/specialFour.jpg";

const SpecialOffers = () => {
  return (
    <div className="py-25 font-DMSans">
      <Container>
        <h3 className="text-[#262626] text-[40px] font-bold pb-12 capitalize">
          Special Offers
        </h3>
        <div className="grid grid-cols-4 gap-x-10">
          <div className="">
            <Product
              productImg={specialOne}
              badgeText={"New"}
              productName={"Cap for Boys"}
              productPrice={"$35.00"}
            />
          </div>
          <div className="">
            <Product
              productImg={specialTwo}
              badgeText={"-30%"}
              productName={"Tea Table"}
              productPrice={"$180.00"}
            />
          </div>
          <div className="">
            <Product
              productImg={specialThree}
              badgeText={"-10%"}
              productName={"Headphones"}
              productPrice={"$60.00"}
            />
          </div>
          <div className="">
            <Product
              productImg={specialFour}
              badgeText={"New"}
              productName={"Sun glasses"}
              productPrice={"$120.00"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffers;
