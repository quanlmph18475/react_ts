import { useParams } from 'react-router-dom'
import NameForm from '@/features/product/_components/NameForm'
import PriceForm from '@/features/product/_components/PriceForm'
import { useProductQuery } from '@/hooks/useProductQuery'
import ImageForm from './ImageForm'


const Edit = () =>{
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