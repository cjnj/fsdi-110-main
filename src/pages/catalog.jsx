import "./catalog.css";
import Product from "../components/products";
import { useEffect, useState } from "react";
import DataService from "../services/dataservice";


<img src="" alt="" />
function Catalog() {
  const [productsState, setProducts] = useState([]);
  const [status, setStatus] = useState("blank");

  useEffect(function () {
    console.log("component is loaded");
    loadCatalog();
  }, []);

  async function loadCatalog() {
    let service = new DataService();
    let products = await service.getProducts();
    setProducts(products);
    setStatus("Ready");
    console.log(products);
  }

  return (
    <div className="catalog">
      <h1>Look at my awsome{productsState.length} products!</h1>
      <h5>Page status: {status}</h5>
      {productsState.map((productArrow) => (
        <Product key={productArrow._id} data={productArrow}></Product>
      ))}
    </div>
  );
}

export default Catalog;
