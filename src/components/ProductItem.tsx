import { useProductMutation } from '@/hooks/useProductMutation'
import { IProduct } from '@/interface/Product' 
import { useState } from 'react'
import Joi from 'joi'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'
import { useToast } from './ui/use-toast'

type ProductItemProps = {
    product: IProduct
}
type formControlDataType = {
    name: string,
    image: string,
    price: number
}
const formSchema = Joi.object({
        name: Joi.string().min(2).max(50),
        image: Joi.string(),
        price: Joi.number
})

const ProductItem = ({ product }: ProductItemProps) => {
    const { toast } = useToast()
    const [productEditId, setProductEditId] = useState(null as number | null)
    const [editProduct, setProductEdit] = useState({} as IProduct)
    const { form, onSubmit } = useProductMutation({
        action: 'EDIT',
        onSuccess: () => {
            setProductEditId(null)
            toast({
                variant:'destructive',
                title:'Chúc mừng bạn',
                description:'Bạn đã cập nhật thành công'
            })
        }
    })
    const handleClick = (product: IProduct) => {
            setProductEditId(product.id!)
            setProductEdit(product)
            form.reset({
                name: product.name || '',
                price: product.price || 0
            })
        }
    const handleOnSubmit = (values: IProduct) => {
        onSubmit({ ...editProduct, ...values })
    }
    
    return (
        <div>
            {productEditId === product.id ? (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='Tên sản phẩm' {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        ></FormField>
                        <FormField
                        control={form.control}
                        name='image'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Ảnh sản phẩm</FormLabel>
                                <FormControl>
                                    <Input placeholder='Ảnh sản phẩm' {...field} />
                                    
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                        <FormField
                            control={form.control}
                            name='price'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='Giá sản phẩm' {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        ></FormField>
                        <button type='submit'>Lưu</button>
                    </form>
                </Form>
            ) : (
                <>
                    {product.name} - {product.price}
                    <button onClick={() => handleClick(product)}>Sửa</button>
                </>
            )}
        </div>
    )
}

export default ProductItem