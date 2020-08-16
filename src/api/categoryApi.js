import http from "./axiosHttp";

const getAll = () => {  // list danh sách
    return http.get("/category");
};

const get = id => {  // chi tiết sản phẩm
    return http.get(`/category/${id}`);
};

const create = data => { // thêm sản phẩm
    return http.post("/category", data);
};

const update = (id, data) => {  // sửa sản phẩm
    return http.put(`/category/${id}`, data);
};

const remove = id => { // xóa sản phẩm
    console.log(id);
    return http.delete(`/category/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};