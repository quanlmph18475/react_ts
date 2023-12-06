import React, { useEffect } from 'react'
import ProductsPage from './ProductsPage'
import { useProductQuery } from '@/hooks/useProductQuery'
import { getProducts } from '@/services/product'
import { IProduct } from '@/common/Product'


const HomePage = () => {
    const {data,isLoading,isError} = useProductQuery()
    useEffect(()=>{
        fetch( 'http://localhost:3000/products')
        .then((respone)=>respone.json())
        .then((data)=>{
          getProducts()
        })
      })
       
    return (
    <div>
        

        <h1 className="ml-20 mt-10 text-lg ">SẢN PHẨM CHUNG</h1> 
        <div className="product ">
            <div className=" grid grid-cols-4 gap-1 m-10">
                <ProductsPage />
            </div>
        </div>
        <div className="phukien mx-[100px]">
            <div className="grid grid-cols-2 mb-5 ">
                <h1 className="ml-20 mt-10 text-lg">PHỤ KIỆN</h1>
                <a href="#" className="ml-20 mt-10 ">Xem tất cả</a>
            </div>
            <div className="grid grid-cols-9 gap-4 mx-20">
                <div className="bg-[#FFB8B8] rounded-lg">
                <p className="text-white">Phụ kiện Apple</p>
                <img src="./src/assets/image/phukien.jpg" alt=""/>
            </div>
            {data?.map((item:IProduct,index:number) => (
            <div className="bg-[#FF94EB] rounded-lg">
            <p className="text-white">{item?.name}</p>
                <img src={item?.image} alt=""/>
            </div>
            ))}
        </div>
        </div>
  
  <br></br>
    </div>
    )
    
}

export default HomePage