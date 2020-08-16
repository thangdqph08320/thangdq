import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import firebase from '../../../../firebase';
import { Link } from 'react-router-dom'
import firebase from "../../../../firebase";

const AddProduct = ({ onAdd, category }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const [desc, setDesc] = useState("");
    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    image: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
            })
        });
        history.push("/admin/products");
    }
    // const handleEditorChange = (content, editor) => {
    //     setDesc(content);

    // }
    return (
        <div>
            <form className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="productName"
                        aria-describedby="nameHelp"
                        ref={register({required:true,minLength:5})}
                    />
                    {errors.name && errors.name.type === "required" && <span>Không để trống</span>}
                    {errors.name && errors.name.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="productImage">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file"
                                className="custom-file-input"
                                id="inputGroupFile02"
                                name="image"
                                ref={register({required:true})}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                </div>
                 <div className="form-group">
                    <label>Danh Mục</label>
                    <select className="form-control" name="cate_id" ref={register}>
                        {category.map(cate =>(
                            <option value={cate.id}>{cate.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Giá sản phẩm</label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        id="productPrice"
                        aria-describedby="priceHelp"
                        ref={register({required:true,minLength:1})}
                        />
                        {errors.price && errors.price.type === "required" && <span>Không để trống</span>}
                        {errors.price && errors.price.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">Miêu tả sản phẩm</label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        id="productDescription"
                        aria-describedby="priceHelp"
                        ref={register({required:true,minLength:5})}
                        />
                        {errors.description && errors.description.type === "required" && <span>Không để trống</span>}
                        {errors.description && errors.description.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
                </div>
                <Link to="/admin/products">
                    <button className="btn btn-danger mr-3 ">Hủy</button>
                </Link>
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div >
    )
}
AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct