import React from 'react'
import { useStateValue } from "./StateProvider"
import "./Checkout.css"

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/amazon/stories/landingpage/Midbanner_3000x601._CB1586454633_.jpg"
                alt=""
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                </div>
            ) : (
                <div>
                    <h2>Your Shopping Basket</h2>
                </div>
            )}
        </div>
    )
}

export default Checkout
