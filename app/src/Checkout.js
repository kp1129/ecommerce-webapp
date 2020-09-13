import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';

const Checkout = () => {
    return (
        <div className="checkout">


            {/* list products in the cart */}
            <div className="checkout__left">
                <img className="checkout__ad" alt="" src=""/>


                <h2>Your Shopping Cart</h2>
                {/* items from the shopping cart will go here */}
            </div>

            {/* subtotal */}
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
