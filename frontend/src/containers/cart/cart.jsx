import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../../redux/actions/cartActions';
import { LockFilled, SmileOutlined } from '@ant-design/icons';
import CartItem from '../../components/cartItem/CartItem.jsx';
import './cart.scss';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const user = useSelector(state => state.user.user);
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0);
    const totalPay = cartItems.reduce((a, c) => a + c.price * c.count, 0).toFixed(2);
    return (
        <div className="cartContainer" key="cartItems" id="cartItems">
            {cartItems.length === 0 ? (<h3>Your cart is empty...<Link to="/products/:_id">go shopping <SmileOutlined /></Link></h3>) : (
                <main >
                    <div className="cartHeader">
                        <h5 className="title">Product</h5>
                        <h5 className="Price">Price</h5>
                        <h5 className="Qty">Quantity</h5>
                        <h5 className="Total">Total</h5>
                    </div>
                    <div className="items" >
                        {cartItems.map((item) => (
                            item.count > 0 && <CartItem key={item._id} item={item} />
                        ))}
                    </div>
                </main>
            )}

            <aside >
                <hr />
                <h4> Subtotal ({totalItems}) items</h4>
                <h4> Total to pay:{" "}<span>€ {totalPay}</span>
                </h4>
                <button className="clear-btn" onClick={() => clearCart()}>Clear Cart</button>
                <br />
                {cartItems.length > 0 && user.isUser ? (<button className="checkout" > < Link to="cart/checkout"> Checkout <LockFilled /></Link></button>) : (<Link to="/signUp">get into your account</Link>)}
            </aside>
        </div >
    )
};

export default Cart;
