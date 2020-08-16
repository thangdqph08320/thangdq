import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
// product
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from '../pages/views/Admin/AddProduct'
import EditProduct from '../pages/views/Admin/EditProduct'
import CategoryManager from '../pages/views/Admin/Category'
// import AddCategory from '../pages/views/Admin/AddCategory'
// import EditCategory from '../pages/views/Admin/EditCategory'
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import AddCategory from '../pages/views/Admin/AddCategory';
import EditCategory from '../pages/views/Admin/EditCategory'


// category onAdCategory, onRemoveCategory, onUpdateCategory
const Routers = ({ products, onRemove, onAdd, onUpdate, category, onAddCategory, onEditCategory, onRemoveCategory, onUpdateCategory }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    // const onHandleAdd = (product) => {
    //     onAdd(product)
    // }
    // sửa sản phẩm
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }

    // category
    const onhandleAddCate = (cate) => {
        onAddCategory(cate);
    }
    const onHandleEditCategory = (id) => {
        onEditCategory(id);
    }
    const removeCategory = (id) => {
        onRemoveCategory(id)
    }
    // const onHandleUpdate = (id, product) => {
    //     onUpdate(id, product)
    // }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' exact>
                                <ProductsManager products={products} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/product-add' exact>
                                <AddProduct onAdd={onAdd} category={category} />
                            </Route>
                            <Route path='/admin/product/edit/:id' exact>
                                <EditProduct products={products} category={category} onUpdate={onHandleUpdate} />
                            </Route>

                            <Route path='/admin/category' exact>
                                <CategoryManager category={category} onRemoveCategory={onHandleRemove} />
                            </Route>
                            <Route path='/admin/category-add' exact>
                                <AddCategory onAddCategory={onAddCategory} />
                            </Route>
                            <Route path='/admin/category/edit/:id' exact>
                                <EditCategory category={category} onUpdateCategory={onHandleUpdate} />
                            </Route>

                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router >
    )
}

Routers.propTypes = {

}

export default Routers
