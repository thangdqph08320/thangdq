import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import {BrowserRouter as Router, useParams, useHistory,Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import apiCategory from '../../../../api/categoryApi';

const EditCategory = ({ categories, onEdit }) => {
    const getAllCategory = async () => {
        try {
            const {data} = await apiCategory.getAll();
            return data;
        } catch (error) {
          console.log('failed to request API: ', error)
        }
      }
      useEffect(()=>{
        if(categories.length == 0){
            console.log(categories)
            getAllCategory().then(categorie=>{
                let category= categorie.find(cate => cate.id == id);
                return setinfoCate(category);
            });
        }else{
            let category= categories.find(cate => cate.id == id);
            return setinfoCate(category);
        }
    },[])
    const { register, handleSubmit, errors } = useForm();
    let { id } = useParams();
    console.log(id)
    let history = useHistory();
    // const category = categories.find(cate => cate.id == id);
    const [infoCate, setinfoCate] = useState({});
    // console.log(infoCate)npm
    const onHandleSubmit = (data) => {
        console.log(data);
        const newObj = {
            id: infoCate.id,
            ...data
        }
        onEdit(newObj);
        window.location = "/admin/category";
    }
    return (
    <div>
        <form className="w-50" onSubmit={handleSubmit(onHandleSubmit)} method="POST">
            <div className="form-group">
                <label htmlFor="cateName">Tên Danh Mục</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="cateName"
                    aria-describedby="nameHelp"
                    defaultValue={infoCate.name}
                    ref={register({required:true,minLength:5})}
                />
                {errors.name && errors.name.type === "required" && <span>Không để trống</span>}
                {errors.name && errors.name.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
            </div>
            <button type="submit" className="btn btn-primary">Cập nhật</button>
            <Link to="/admin/Category">
                <button type="button" class="btn btn-danger mx-3">Hủy</button>
            </Link>
        </form>
    </div >
    )
}
EditCategory.propTypes = {
    Category: PropTypes.array
}
export default EditCategory