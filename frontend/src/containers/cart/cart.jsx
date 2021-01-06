import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../../redux/actions/cartActions';
import { LockFilled, SmileOutlined } from '@ant-design/icons';
import CartItem from '../../components/cartItem.jsx/CartItem.jsx';
import './cart.scss';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0);
    const totalPay = cartItems.reduce((a, c) => a + c.price * c.count, 0).toFixed(2);
    return (
        <div className="cartContainer" key="cartItems" id="cartItems">
            {cartItems.length === 0 ? (<h3>Your cart is empty...go shopping <SmileOutlined /></h3>) : (
                <main >
                    <div className="cartHeader">
                        <h5 className="title">Product</h5>
                        <h5 className="Price">Price</h5>
                        <h5 className="Qty">Quantity</h5>
                        <h5 className="Total">Total</h5>
                    </div>
                    <div className="items">
                        {cartItems.map((item) => (
                            item.count > 0 && <CartItem item={item} />
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
                <button className="checkout" ><Link to="/checkout"> Checkout <LockFilled /></Link></button>
            </aside>
        </div >
    )
};

export default Cart;
