import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import firebase from '../../../../firebase/';
import { Link } from 'react-router-dom'

const AddCategory = ({ onAddCategory }) => {
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
                onAddCategory(newData)
            })
        });
        history.push("/admin/category");
    }
    const handleEditorChange = (content, editor) => {
        setDesc(content);

    }
    return (
        <div>
            <form className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="categoryName">Tên danh muc</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="categorytName"
                        aria-describedby="nameHelp"
                        ref={register}
                    />
                    {errors.name && errors.name.type === "required" && <span>Không để trống</span>}
                    {errors.name && errors.name.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="categoryImage">Ảnh danh mục</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file"
                                className="custom-file-input"
                                id="inputGroupFile02"
                                name="image"
                                ref={register}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                </div>
                <Link to="/admin/category">
                    <button className="btn btn-danger mr-3 ">Hủy</button>
                </Link>
                <button type="submit" className="btn btn-primary">Thêm danh mục</button>
            </form>
        </div >
    )
}
AddCategory.propTypes = {
    onAddCategory: PropTypes.func
}

export default AddCategory