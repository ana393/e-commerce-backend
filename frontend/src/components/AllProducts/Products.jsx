import React from 'react';
import { connect } from 'react-redux';
//import { listProducts } from '../../redux/actions/productActions';
import './Products.scss';
const Products = ({ product }) => {


    return (
        <div className="Container">
            { product.map((p) => (
                <div className="card" key={p._id} id={p._id}>
                    <img src="" alt=""></img>
                    <h4>{p.name}</h4>
                    <span>{p.price}€</span>
                    <div>In Stock: {p.InStock}</div>

                </div>)
            )}

        </div>
    )
}
const mapStateToProps = ({ product }) => ({ product: product.product });
export default connect(mapStateToProps)(Products);

