import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Products.scss';
import { listProducts } from '../../redux/actions/productActions';

const Products = props => {
    useEffect(() => { listProducts(); }, []);
    return (
        <div className="Container" key="product" id="product">
            { props.product.map((p) => (

                <div className="card" key={p._id} id={p._id}>
                    <Link to={`/products/${p._id}`}>
                        <img src="" alt=""></img>
                        <h4>{p.name}</h4>
                        <span>{p.price}€</span>
                        <div>In Stock: {p.InStock}</div>
                    </Link>
                </div>)

            )}

        </div>
    )
}
const mapStateToProps = (state) => ({ product: state.product.product });
export default connect(mapStateToProps, null)(Products);

