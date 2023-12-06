import { IProduct } from "@/common/Product";
import { Button } from "@/components/ui/button";
import { useProductQuery } from "@/hooks/useProductQuery";
import { getProducts } from "@/services/product";
import { original } from "immer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const ProductsPage = () => {
     const {data,isLoading,isError} = useProductQuery()
    useEffect(()=>{
        fetch( 'http://localhost:3000/products')
        .then((respone)=>respone.json())
        .then((data)=>{
          getProducts()
        })
      })
    return (
        <>
            {data?.map((item:IProduct,index:number)=>(
                        <div className="col border border-secondary rounded m-2">
                            <div className="text-center">
                                <Link to="/"><img src={item.image}  className=" px-2 pt-2 rounded text-center " width="270" height="300"  alt=""/></Link>
                            </div>
                            <div className="mx-4 text-center font-semibold ...">
                                <Link to="/"><p className="mb-2">{item.name}</p></Link>
                            </div>
                            <div className="text-danger text-center font-semibold ... rounded-2 text-lg-left h3 fw-bold">
                                <Link  to="/" className="text-red-700 pr-4">{item.price}đ</Link>
                            </div>
                            <div className="flex mt-4 space-x-12 md:mt-0">
                                <Link to="/"><p className="mt-2 px-8">Thêm vào giỏ</p></Link>
                                <Link to={`/products/${item.id}`}><Button>Mua ngay</Button></Link>
                            </div>
                    </div>
                ))}
        </>
            
    )
}

export default ProductsPage