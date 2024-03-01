import "./admin.css";
import { useState } from "react";

// create the component
function Admin() {
    const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
});

function handleInputChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    // creat the copy , modify it and asend tit back
    let copy = {...product};
    copy[name] = val;
    setProduct(copy);

}

function saveProduct() {
    console.log(product);
    // save the sever

}

function clearform() {
    setProduct({
        title: "",
        category: "",
        price: "",
        image: "",
    })
}

return (
    <div className="admin page">
        <h1>Data Manager</h1>

    <div classsName="paranet-container">
        <h3>Register Products</h3>
    </div>

    <div>
        <label>Title</label>
        <input
            value={product.title}
            onChange={handleInputChange}
            name="title"
            type="text"
            className="form-control"
        ></input>
    </div>

    <div>
        <label>Price</label>
        <input
            value={product.Price}
            onChange={handleInputChange}
            name="price"
            type="text"
            className="form-control"
        ></input>
    </div>

    <div>
        <label>Category</label>
        <input
            value={product.category}
            onChange={handleInputChange}
            name="category"
            type="text"
            className="form-control"
        ></input>
    </div>

    <div>
        <label>Image</label>
        <input
            value={product.title}
            onChange={handleInputChange}
            name="image"
            type="text"
            className="form-control"
        ></input>

    <div>
        <button className="btn btn-dark" onClick={saveProduct}>Save Product</button>
    </div>

    </div>
    </div>
);
}

// exports go last
export default Admin;
