import React, { useState,useContext } from 'react'
import { IProduct } from '../interface/Product'
import { ProductContext } from '../context/product'
import { useParams } from 'react-router-dom'
import NameForm from '@/components/Product/NameForm'
import PriceForm from '@/components/Product/PriceForm'
import { useProductQuery } from '@/hooks/useProductQuery'
import ImageForm from './Product/ImageForm'

type Props = {}
const Edit = (props: Props) =>{
    const { id } = useParams()
    const { data } = useProductQuery(id)
    return(
          <div className='grid grid-cols-2 gap-8 max-w-4xl mx-auto'>
                <NameForm data={data}/>
                <ImageForm data={data}/>
                <PriceForm data={data}/>
          </div>
    )
}

export default Edit