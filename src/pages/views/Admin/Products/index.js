import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

 const ProductsManager = ({ products, onRemove }) => {
    const removeHandle = (id) => {
        // console.log(id)
        swal({
            title: "Bạn biết mình đang làm gì không?",
            text: "Bạn có chắc với hành động của bạn không..Xoá luôn đấy nhá!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((data) => {
            if (data) {
                onRemove(id)
               
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
            <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>
            {/* DataTales Example */}

            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">

                    
                    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the 
          <Link to="/admin/product-add"><button className="btn btn-primary"> <a>Thêm sản phẩm </a> </button></Link></p>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Miêu tả</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price, description }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td width="350">{description}</td>

                                        <td>
                                        <Link className="btn btn-primary mx-1" to={"/admin/Product/edit/" + id}>
                                        Sửa
                                         </Link>
                                            {/* ero function truyền tham số product.id */}
                                            <button type="button" class="btn btn-danger mx-1" onClick={() => removeHandle(id)}>Xóa</button>
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

ProductsManager.propTypes = {

}

export default ProductsManager
