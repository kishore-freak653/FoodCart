import { useState } from "react";
import data from "../assets/Products.json";
import { Product } from "./Product";
import "./Home.css";

export const Home = () => {
  const [products] = useState(data);
  //passing the json data values to the state variable products

  return (
    <div className="product-container">
      {products.map((product) => (
        //Sending the Products json  Values
        //as Props to Product.jsx file

        //key is used for identifying unique objects ,here product id is passed as key to acsess each element

        //and here the product json values are passed as props ,product={product}
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
