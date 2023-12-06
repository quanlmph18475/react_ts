import Banner from '@/features/Banner'
import Footer from '@/features/Footer'
import Header_base from '@/features/Header_base'
import Menubase from '@/features/Menubase'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BaseLayout = () => {
  
  return (
    <div>
          <Header_base/>
          <Menubase/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default BaseLayout