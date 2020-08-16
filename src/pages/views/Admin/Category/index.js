import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import apiRequest from '../../../../api/categoryApi'
const CategoryManager = ({ category, onRemoveCategory }) => {
    // khai báo remove

    const removeHandleCate = (id) => {
        console.log(id)
        swal({
            title: "Bạn biết mình đang làm gì không?",
            text: "Bạn có chắc với hành động của bạn không..Xoá luôn đấy nhá!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((data) => {
            if (data) {
                onRemoveCategory(id)
               
              swal("Chúc mừng bạn đã xoá đi thứ vô dụng!", {
                icon: "success",
              }
             
              );
            } else {
              swal("Thế là đúng đấy!");
            }
          });
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Quản lý danh mục</h1>
            {/* DataTales Example */}

            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    <Link to="/admin/category-add">
                        <button className="btn btn-primary ">Thêm danh mục</button>
                    </Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map(({ id, name, image }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="150" /></td>
                                        <td>
                                            <Link className="btn btn-success" to={"/admin/category/edit/" + id}>Sửa</Link>
                                            {/* ero function truyền tham số product.id */}
                                            <button type="button" class="btn btn-danger mx-1" onClick={() => removeHandleCate(id)}>Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

CategoryManager.propTypes = {

}

export default CategoryManager
