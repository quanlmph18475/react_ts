import React from 'react'
import { Link, Outlet } from 'react-router-dom'



const BaseLayout = () => {
  return (
    <div>
        <header>
            <div className="topnav">
           <Link className="active" to='/'>
             Trang chủ
           </Link>
           <Link to='products'>Sản phẩm</Link>
           <Link to='/#'>Tin tức</Link>
           <Link to='Users'>Contact Us</Link>
         </div>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default BaseLayout