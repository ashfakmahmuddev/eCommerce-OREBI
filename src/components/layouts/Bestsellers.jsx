import Container from "../Container";
import Product from "../Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Bestsellers = () => {
  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function all() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    all();
  });
  return (
    <div className="pb-25 font-DMSans">
      <Container>
        <h3 className="text-[#262626] text-[40px] font-bold pb-12 capitalize">
          Our Bestsellers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {allData.slice(5, 9).map((item) => (
            <Product
              key={item.id}
              productImg={item.thumbnail}
              badgeText={"New"}
              productName={item.title}
              productPrice={item.price}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Bestsellers;
