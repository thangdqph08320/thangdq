import http from "./axiosHttp";

const getAll = () => {  // list danh sách
    return http.get("/products");
};

const get = id => {  // chi tiết sản phẩm
    return http.get(`/products/${id}`);
};

const create = data => { // thêm sản phẩm
    return http.post("/products", data);
};

const update = (id, data) => {  // sửa sản phẩm
    return http.put(`/products/${id}`, data);
};

const remove = id => { // xóa sản phẩm
    console.log(id);
    return http.delete(`/products/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};