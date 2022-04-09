import React from "react";
import './cartproduct.css';

function CartProduct() {
    return ( 
        <div class = "cart_pro">
            <div class = "cart_pro__heart"><i class="far fa-heart"></i></div>
            <div class = "cart_pro__card"><i class="fas fa-shopping-cart"></i></div>
            <div class = "cart_pro__img"><img src="/assets/images/download.png" alt="Nike" /></div>
            <div class = "cart_pro__title">Nike Zoom KD 12</div>
            <div class = "cart_pro__price">99$</div>
            <div class = "cart_pro__size">
                <h3>Size:</h3>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
            </div>
            <div class = "cart_pro__color">
            <h3>Color:</h3>
                <span class="cart_pro__color-green"></span>
                <span class="cart_pro__color-red"></span>
                <span class="cart_pro__color-black"></span>
            </div>
            <div class = "cart_pro__action">
                <button>Buy Now</button>
                <button>Add Cart</button>
            </div>
        </div>
    );
}

export default CartProduct;