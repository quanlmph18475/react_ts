import Add from '@/features/product/_components/productUpdate'
import Edit from '@/features/product/_components/productUpdate'
import List from '@/features/product/_components/List'
import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import ProductDetailPage from '@/pages/ProductDetail'
import ProductsPage from '@/pages/ProductsPage'
import ManageDashboardPage from '@/pages/manager/dashboard'
import ManagerProductPage from '@/pages/manager/product'
import { Route, Routes } from 'react-router-dom'
import AddPage from '@/pages/manager/product/AddPage'
import EditPage from '@/pages/manager/product/EditPage'
import HomePage from '@/pages/HomePage'
import SignupPage from '@/pages/Auth/Signup'
import Signin from '@/pages/Auth/Signin'

const Routers = () => {
    // const [user, , removeUser] = useLocalStorage('user', {})
    // const reload = () => window.location.reload()
    return (
        <>
            {/* <div>
                {!user || Object.keys(user).length === 0 ? null : (
                    <button
                        className='absolute top-12 right-10 px-3 py-1 bg-gray-500 rounded hover:bg-gray-800 text-white'
                        onClick={() => {
                            removeUser()
                            reload()
                        }}
                    >
                        Logout
                    </button>
                )}
            </div> */}
            <Routes>
                <Route path='/' element={<BaseLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='products' element={<ProductsPage /> } />
                    <Route path='products/:id' element={<ProductDetailPage />} />
                    <Route path='signup' element={<SignupPage/>}/>
                    <Route path='signin' element={<Signin />} />
                </Route>
                
            <Route
                    path='admin'
                    element={
                        // <PrivateRoute
                        //     isAllowed={!!user && Object.keys(user).length > 0 && user?.user?.roles?.includes('admin')}
                        // >
                            <AdminLayout />
                        // </PrivateRoute>
                    }
                >
                <Route index element={<ManageDashboardPage />} />
                    <Route path='products' element={<ManagerProductPage />} >
                        <Route index element={<List/>}/>
                        <Route path='add' element={<AddPage />}/>
                        <Route path=':id/edit' element={<EditPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
        
    )
}

export default Routers