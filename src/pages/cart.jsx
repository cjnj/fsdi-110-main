import "./cart.css"
import { useEffect, useState } from "react";
import DataService from "../services/dataservice";

function Cart() {
    const [cartList, setCartList] = useState([]);

    useEffect(function () {
        loadCart();
    }, []);

    function loadCart() {
        let service = new DataService()
        let cart = service.readCart()
        console.log(cart);
        setCartList(cart);
    
    }

    function getTotal(prod){
        const total = prod.price * prod.quantity;
        return total.toFixed(2)

    }

    function getOrderTotal(){
        let total = 0;
        for(let i=0; i<cartList.length; i++) {
            let prod = cartList[i];
            total += prod.price * prod.quantity;
        }

        return total.toFixed(2);
    }

    return (
        <div className="cart">
            <h1>Are you ready to pay?</h1>

            <div className="parent">
            <div className="list">
                {cartList.map((prod) => (
                <div className="cart-prod"key={prod._id}>
                    <img src={'/images/' + prod.image} alt=""></img>
                    <div className="info">
                        <h5>{prod.title}</h5>
                        <p>{prod.cattegory}</p>
                    </div>
                    <h5>{prod.title}</h5>
                    <p>{prod.cattegory}</p>
                    <label>${prod.price.toFixed(2)}</label>
                    <label>{prod.quantity}</label>
                    <label>${getTotal(prod)}</label>
                    <button className="btn btn-sm btn-danger">Remove</button>
                </div>
            ))}
            </div>

            <div className="aside">
                <h4>your total</h4>
                <label>${getOrderTotal()}</label>
            </div>
            </div>
        </div>

    );
}





// exports go last
export default Cart;