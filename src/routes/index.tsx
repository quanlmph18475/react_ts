import Add from '@/features/product/_components/productUpdate'
import Edit from '@/features/product/_components/productUpdate'
import List from '@/features/product/_components/List'
import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import HomePage from '@/pages/HomePage'
import ProductDetailPage from '@/pages/ProductDetail'
import ProductsPage from '@/pages/ProductsPage'
import ManageDashboardPage from '@/pages/manager/dashboard'
import ManagerProductPage from '@/pages/manager/product'

import { Route, Routes } from 'react-router-dom'
import AddPage from '@/pages/manager/product/AddPage'
import EditPage from '@/pages/manager/product/EditPage'
import AuthPage from '@/pages/Auth'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />}>
                <Route index element={<HomePage />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='products/:id' element={<ProductDetailPage />} />
                <Route path='Users' element={<AuthPage />} />
            </Route>
            <Route path='admin' element={<AdminLayout />}>
                <Route index element={<ManageDashboardPage />} />
                <Route path='products' element={<ManagerProductPage />} />
                <Route path='products/add' element={<AddPage />}/>
                <Route path='products/:id' element={<EditPage/>}/>
            </Route>
        </Routes>
    )
}

export default Routers