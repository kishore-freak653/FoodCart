import { cartContext } from "../App";
import "./Product.css";

import { useContext } from "react";


export const Product = ({product}) => {

  const { cart, setCart } = useContext(cartContext);

  //Receiving the Product values as a props 
const name = product.name.length>21? product.name.substring(0,20) +"..": product.name;

const addCart = () =>{
  setCart([...cart,product]);
};
const removeCart = () =>{
  setCart(cart.filter((c)=> c.id !== product.id));
};

  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs : {product.amt}</p>
        {cart.includes(product) ? (
          <button onClick={removeCart}className='btnRemove'>Remove from Cart</button>
        ) : (
          <button onClick={addCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}
