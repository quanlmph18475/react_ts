import Header from '@/features/product/_components/Header'
import Menu from '@/features/product/_components/Menu'
import Footer from '@/features/Footer'
import { Link, Outlet } from 'react-router-dom'
import FooterAdmin from '@/features/product/_components/FooterAdmin'


const AdminLayout = () => {
  return (
    <div>
        <Header/>
        <div className="flex mt-4 divide-x">
            <div className="w-[250px] flex-none">
                <Menu/>
            </div>
            <div className="grow px-4">
                          <Outlet/>
            </div>
        </div>

        <FooterAdmin/>
        
    </div>
  )
}

export default AdminLayout