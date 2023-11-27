import { useProductMutation } from '@/hooks/useProductMutation'
import { IProduct } from '@/common/Product'
import { useEffect, useState } from 'react'
import { Button } from '../../../components/ui/button'
import { Pencil } from 'lucide-react'
import { Form, FormControl, FormField, FormItem } from '../../../components/ui/form'
import { Input } from '../../../components/ui/input'
import { useToast } from '../../../components/ui/use-toast'
import { SubmitHandler } from 'react-hook-form'

type NameFormProps = {
  data: IProduct
}
type FormControlType = {
  image: string
}

const ImageForm = ({data}: NameFormProps) => {
  const { toast }= useToast()
  const [productEditStatus, setProductEditStatus] = useState(false)
  const { form, onSubmit } = useProductMutation({
    action: 'EDIT',
    onSuccess: () =>{
      setProductEditStatus(false)
      toast({
        variant: 'default',
        description: 'Cập nhật ảnh thành công'
      })
    }
  })
  useEffect(() =>{
    if (data && form) {
      form.reset({
        name: data.name || '',
        image: data.image || '',
        price: data.price || 0
      })
    }
  }, [data, form])
  const onHandleSubmit: SubmitHandler<FormControlType> = (values) => {
    onSubmit({ ...data, ...values })
  }
   return (
    <div className='mt-4 border bg-slate-100 rounded-md p-4'>
        <div className='font-medium flex items-center justify-between'>
            Ảnh sản phẩm
          <Button variant='ghost' onClick={() => setProductEditStatus(!productEditStatus)}>
              {productEditStatus ? (
                <>Hủy</>
              ): (
                <>
                  <Pencil className='h-4 w-4 mr-2'/>
                    Chỉnh sửa
                </>
              )}
          </Button>
        </div>
        {!productEditStatus && <p className='text-sm mt-2'>{data?.image}</p>}
        {productEditStatus && (
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onHandleSubmit)} className='flex flex-col gap-y-6'>
                  <FormField
                  control={form.control}
                  name='image'
                  render={({ field }) =>(
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder='Ảnh sản phẩm'/>
                      </FormControl>
                    </FormItem>
                  )}
                  ></FormField>
                    <div>
                      <Button type='submit'>Lưu</Button>
                    </div>
              </form>
          </Form>
        )}
    </div>
  )
}

export default ImageForm