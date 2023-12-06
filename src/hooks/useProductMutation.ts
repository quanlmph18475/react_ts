import { addProduct, deleteProduct, updateProduct } from '@/services/product'
import { IProduct } from '@/common/Product'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

type formControlDataType = {
    name: string
    image: string
    price: number
    description: string
}
// Định validate form sử dụng joi
const formSchema = Joi.object({
    name: Joi.string().min(2).max(90),
    image: Joi.string(),
    price: Joi.number(),
    description: Joi.string()
})
type useProductMutationProps = {
    action: 'ADD' | 'EDIT' | 'DELETE' 
    defaultValues?: IProduct
    onSuccess?: () => void
}
export const useProductMutation = ({ 
    action,
    defaultValues = { name: '', price: 0, image: '',description:'' },
    onSuccess }: useProductMutationProps) => {
        const queryClient = useQueryClient()
    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case 'ADD':
                    await addProduct(product)
                    return 
                case 'EDIT':
                     await updateProduct(product)
                     return
                case 'DELETE':
                     await deleteProduct(product)
                     return
                default:
                    return null
            }
        },
        onSuccess: () => { 
                // Thêm | Cập nhật | Xóa thành công
            queryClient.invalidateQueries({
                queryKey: ['PRODUCT']
            })
           onSuccess && onSuccess()
        }
    })
    const form = useForm({
        resolver: joiResolver(formSchema),
        defaultValues
    })
    const onSubmit: SubmitHandler<formControlDataType> = (values) => {
        console.log(values);
        mutate(values)
    }
    const onRemove = (product: IProduct) =>{
        mutate(product)
    }
    return {
        form,
        onSubmit,
        onRemove,
        ...rest
    }
}