import React from 'react';
import { useSelector } from 'react-redux';
import { addAnItemCart, removeAnItemCart, removeItemCart, clearCart } from '../../redux/actions/cartActions';
import './cart.scss';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0);
    const totalPay = cartItems.reduce((a, c) => a + c.price * c.count, 0).toFixed(2);
    return (
        <div className="cartContainer" key="cartItems" id="cartItems">
            {cartItems.length === 0 ? (<h3>The cart is empty</h3>) : (
                <main >
                    <div className="cartHeader">
                        <h5 className="title">Product</h5>
                        <h5 className="Price">Price</h5>
                        <h5 className="Qty">Quantity</h5>
                        <h5 className="Total">Total</h5>

                    </div>
                    <div className="items">
                        {cartItems.map((item) => (
                            item.count > 0 && <div className="cart-item" key={item._id}>

                                <img src="" alt=""></img>
                                <span className="name" >{item.name}</span>
                                <h4 className="price" > {item.price} €</h4>
                                <span className="up-btn" onClick={() => addAnItemCart(item)} >+</span>
                                <span className="amount">{item.count}</span>
                                <span className="down-btn" onClick={() => removeAnItemCart(item)} >-</span>
                                <span className="totalPrice" >Total</span>
                                <button className="remove-btn" onClick={() => removeItemCart(item)}>Remove</button>

                            </div>
                        ))}
                    </div>
                </main>
            )
            }

            <aside >
                <hr />
                <h4> Subtotal ({totalItems}) items</h4>
                <h4> Total to pay:{" "}<span>€ {totalPay}</span>
                </h4>
                <button className="clear-btn" onClick={() => clearCart()}>Clear Cart</button>
                <br />
                <button className="checkout">Checkout</button>
            </aside>
        </div >
    )
};

export default Cart;
