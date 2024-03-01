import DataService from "../services/dataservice";
import "./products.css";
import QuantityPicker from "./quantitypicker";
import { useEffect } from "react";
import { useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(function () {
    console.log("Hello im a product");
  }, []);

  function onQuantityChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    const total = props.data.price * quantity;
    // do magic
    return total.toFixed(2);
  }

  function add() {
    const prod4Cart = {
      ...props.data,
      quantity: quantity,
    };

    let service = new DataService();
    service.addToCart(prod4Cart);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>
      {<h5>{props.data.title}</h5>}

      <div className="prices">
        <label className="total">${getTotal()}</label>
        <label className="price">${props.data.price.toFixed(2)}</label>
      </div>

      <div className="controls">
        <QuantityPicker onQuantityChange={onQuantityChange}></QuantityPicker>
        <button onClick={add} type="button" class="btn btn-primary btn-sm">
          ADD
        </button>
      </div>
    </div>
  );
}

export default Product;

// function addProduct
//  onCLick = addProduct
//  console.log (product added)
//
//
