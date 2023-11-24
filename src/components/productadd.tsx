import { useProductMutation } from '@/hooks/useProductMutation'
import { IProduct } from '@/interface/Product'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'
import { useToast } from './ui/use-toast'

const Add = () =>{
    const { toast } = useToast()
    const { form, onSubmit } = useProductMutation({
        action: 'ADD',
        onSuccess:() =>{
            toast({
                variant:'default',
                title:'Chúc mừng bạn',
                description: 'Bạn đã thêm thành công'
            })
            form.reset()
        }
    })

    return(
        <div className='border p-6'>
            <h2 className='text-xl font-bold'>Thêm sản phẩm</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Tên sản phẩm</FormLabel>
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
                                <FormLabel className='font-bold'>Giá</FormLabel>
                                <FormControl>
                                    <Input placeholder='Giá sản phẩm' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <Button type='submit'>Thêm</Button>
                </form>
            </Form>
        </div>
    )
}

export default Add