import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Products.scss';
import { listProducts } from '../../redux/actions/productActions';
import { addCart } from '../../redux/actions/cartActions';

const Products = ({ product, cart }) => {

    const totalItems = cart?.reduce((a, c) => a + c.count, 0);
    useEffect(() => { listProducts(); }, []);

    return (
        <div className="Container" key="product" id="product">
            { product?.map((p) => (

                <div className="card" key={p._id} id={p._id}>
                    <Link to={`/products/${p._id}`}>
                        <img src="" alt=""></img>
                        <h4>{p.name}</h4>
                        <span>{p.price}€</span>
                        <div>{p.InStock > 0 ? (<span>In Stock: {p.InStock} </span>) : 'Out of Stock'}</div>
                        <button onClick={() => addCart(p)} className="add" disabled={p.InStock === 0}> Add To Cart</button>

                    </Link>
                </div>)
            )}
            <span>{totalItems}</span>
        </div>
    )
}
const mapStateToProps = state => ({ product: state.product.product, cart: state.cart.cart });
export default connect(mapStateToProps)(Products)


