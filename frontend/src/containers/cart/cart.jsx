import React from 'react';
import { connect } from 'react-redux';
import { addAnItemCart, removeAnItemCart, removeItemCart, clearCart } from '../../redux/actions/cartActions';

const Cart = ({ cartItems }) => {
    console.log(cartItems);
    return (
        <div key="cartItems" id="cartItems">
            {cartItems.length === 0 ? ("The cart is empty") : (
                <div >
                    {cartItems.map((item) => (
                        item.count > 0 && <ul key={item._id}>
                            <span>{item.name}</span>

                            {item.count} X {item.price}
                            <button onClick={() => addAnItemCart(item)} >+</button>
                            <button onClick={() => removeAnItemCart(item)} >-</button>
                            <button onClick={() => removeItemCart(item)}>Remove</button>

                        </ul>
                    ))}
                    <h3> Subtotal ({cartItems.reduce((a, c) => a + c.count, 0)}) items</h3>
                    <h3> Total to pay:{" "}
                        {cartItems.reduce((a, c) => a + c.price * c.count, 0).toFixed(2)} €
                    </h3>
                    <button onClick={() => clearCart()}>Clear Cart</button>
                </div>
            )}
        </div>
    )
};
const mapStateToProps = (state) => ({ cartItems: state.cart.items })
export default connect(mapStateToProps)(Cart);
