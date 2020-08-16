import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'

const EditProduct = ({ products, onUpdate,category }) => {
    let { id } = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);

    const [currentProduct, setCurrentProduct] = useState(product);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onUpdate(currentProduct);
        history.push('/admin/products');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit} className="w-50">
            <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control" />
                </div>
                <div  className="form-group">
                    <label htmlFor="productName">Ảnh Cũ </label> <br/>
                    <img  src={currentProduct.image} width="350"/>

                </div>
                <div className="form-group">
                    <label htmlFor="productName">Ảnh sản phẩm</label>
                    <input type="text" name='name' value={currentProduct.image} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Danh Mục</label>
                    <select className="form-control" name="cate_id">
                        {category.map(cate =>(
                            <option value={cate.id}>{cate.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name='price' value={currentProduct.price} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Miêu tả sản phẩm</label>
                    <input type="text" name='price' value={currentProduct.description} onChange={onHandleChange} className="form-control" />
                </div>
                <Link to="/admin/products">
                    <button className="btn btn-danger mr-3 ">Hủy</button>
                </Link>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct