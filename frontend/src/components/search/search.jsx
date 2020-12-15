import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { searchProduct } from '../../redux/actions/productActions';
import './search.scss';




const Searchox = props => {
    const [keyword, setKeyword] = useState('');

    const searchItem = (e) => {

        if (keyword.trim()) {
            props.searchName(keyword);
        }
        setKeyword("");
    };
    const handleChange = e => {
        setKeyword(e.target.value);
    }
    return (
        <div className="search">
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="search..."
                    value={keyword}
                    onChange={handleChange}

                />
                <Link to="products/:id">
                    <span onClick={() => searchItem()}><SearchOutlined /></span>
                </Link>
            </div>
        </div>
    )
}
const mapDispatchToProps = state => ({ searchName: (word) => searchProduct(state, word) });
const connectedSearch = connect(null, mapDispatchToProps)(Searchox);
export default connectedSearch;

