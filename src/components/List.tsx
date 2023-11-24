import { IProduct } from '@/interface/Product' 
import { DataTable } from './DataTable'
import { useProductQuery } from '@/hooks/useProductQuery'
import { useProductMutation } from '@/hooks/useProductMutation'
import { useToast } from './ui/use-toast'
import { getColumns } from './Product/Columns'
import { Skeleton } from './ui/skeleton'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'


const List = () => {
    const { toast } = useToast()
    const { data, isLoading, isError } = useProductQuery()
    const { onRemove } = useProductMutation({
        action:"DELETE",
        onSuccess: () =>{
            toast({
                variant:"default",
                description:'Bạn đã xóa thành công'
            })
        }
    })
    if (isLoading)  return (
            <>
                <Skeleton className='w-[200px] h-[20px] rounded-full' />
                <Skeleton className='w-[100px] h-[20px] rounded-full' />
            </>
        )
    if (isError) return <div>Error...</div>
    const columns = getColumns(onRemove)
    return (
        <>
            <h2 className="text-2xl">Quản lý sản phẩm</h2>
            <DataTable columns={columns} data={data as IProduct[]}/>
        </>
    
    )
}

export default List