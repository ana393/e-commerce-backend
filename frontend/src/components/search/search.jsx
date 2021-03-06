import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { searchProduct } from '../../redux/actions/productActions';
import './search.scss';


const SearchBox = props => {
    const [keyword, setKeyword] = useState("");

    const searchProduct = (e) => {
        if (keyword) {
            props.searchItem(keyword)
        }
        setKeyword("")
    };
    const handleChange = e => {
        setKeyword(e.target.value);
    }
    return (
        <div className="Search">
            <div className="searchbar">

                <input
                    autoFocus
                    type="text"
                    placeholder="search..."
                    value={keyword}
                    onChange={handleChange}
                />
                <Link to="/products/:id">
                    <span onClick={() => searchProduct()}>< SearchOutlined className="loop" /></span>
                </Link>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({ searchItem: (word) => searchProduct(dispatch, word) });
const connectedSearchBox = connect(null, mapDispatchToProps)(SearchBox)
export default connectedSearchBox;

