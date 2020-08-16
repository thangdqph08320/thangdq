import React, { useState, useEffect } from 'react';
// import dataFake from './dataFake';
import Routers from './routers'
import apiRequest from './api/productApi';
import apiCate from './api/categoryApi';
// import swal from 'sweetalert';

//import AppProduct from './components/AddProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AddProduct from './components/AddProduct';
function App() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);


  useEffect(() => {
    const getCate = async () => {
      try {
        const { data } = await apiCate.getAll();
        setCategory(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCate();
  }, []);
  // XóXóaa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== data.id);
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  // Thêm sản phẩm
  const onHandleAdd = async (product, category) => {
    try {
      const { data } = await apiRequest.create(product,category);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // Cập nhật product 
  const onHandleUpdate = (updateProduct) => {
    const newProducts = products.map(product => (
      product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts);
  }




  // category
  // Danh sách Danh mục
  // useEffect(() => {
  //   const getCategory = async () => {
  //     try {
  //       const { data } = await apiRequest.getAll();
  //       setCategory(data);
  //     } catch (error) {
  //       console.log('failed to request API: ', error)
  //     }
  //   }
  //   getCategory();
  // }, []);


  // Xóa sản phẩm cate
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await apiCate.remove(id);
      const newCategory = category.filter(category => category.id !== data.id);
      setCategory(newCategory);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  // Thêm sản phẩm
  const CateAdd = async (newObj) => {
    try {
      const { data } = await apiCate.create(newObj);
      setCategory([
        ...category,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // Cập nhật category
  const onHandleUpdateCategory = (updateCategory) => {
    const newCategory = category.map(category => (
      category.id === updateCategory.id ? updateCategory : category  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    localStorage.setItem('category', JSON.stringify(newCategory))
    setCategory(newCategory);
  }
  return (
    <div className="App">
      <Routers products={products} onUpdate={onHandleUpdate} onRemove={onHandleRemove} onAdd={onHandleAdd} category={category} onAddCategory={CateAdd} onRemove={onHandleRemoveCate} updateCategory={onHandleUpdateCategory} />
    </div>

    // category
    // <div className="App">
    //   <Routers onUpdateCategory={onHandleUpdate} category={category} onRemoveCategory={onHandleRemove} onAddCategory={onHandleAdd} />
    // </div>
  )

}
export default App;