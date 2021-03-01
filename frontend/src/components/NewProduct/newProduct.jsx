import React, { useState } from 'react';
import { connect } from 'react-redux';
import { notification, Input } from 'antd';
import { insertProduct } from '../../redux/actions/productActions';
import FileUploader from './fileUploader.jsx';
import './newProduct.scss';



const NewProduct = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const register = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.get('name');
        formData.getAll("category");
        formData.get('price');
        formData.get('InStock');
        formData.append("imgURL", selectedFile);
        console.log('category', formData.get('category'));
        insertProduct(formData).then(() => {
            notification.success({ message: 'Register', description: 'New Product created!' })
        }).catch(error => {
            console.error(error)
            notification.error({ message: 'Error', description: 'Unable to create new product!' })
        })

    }
    return (
        <div className="newProduct">
            <h2>Create New Product</h2>
            <div className="form">

                <form className="updateForm" onSubmit={register}>
                    <Input type="name" name="name" placeholder="name" />
                    <select type="category" label="Category" name="category" value="Category" >
                        <option value="Food">Food</option>
                        <option value="Technology">Technology</option>
                        <option value="Books">Books</option>
                        <option value="Cloths">Cloths</option>
                        <option value="Sofware&Games">Sofware&Games</option>
                    </select>
                    <Input type="Price" label="Price" name="price" placeholder="price" />
                    <Input type="InStock" label="InStock" name="InStock" placeholder="InStock" />
                    <FileUploader
                        onFileSelectSuccess={(file) => setSelectedFile(file)}
                        onFileSelectError={({ error }) => alert(error)}
                    />
                    <button className="newProduct-btn" type="submit">Submit new Product </button>
                </form>
            </div>

        </div>
    )
}
const mapStateToProps = ({ product }) => ({ product: product.product });
export default connect(mapStateToProps, null)(NewProduct);
