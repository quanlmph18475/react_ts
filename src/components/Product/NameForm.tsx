import { useProductMutation } from '@/hooks/useProductMutation'
import { IProduct } from '@/interface/Product'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Pencil } from 'lucide-react'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { toast, useToast } from '../ui/use-toast'
import { SubmitHandler } from 'react-hook-form'

type NameFormProps = {
  data: IProduct
}
type FormControlType = {
  name: string
}

const NameForm = ({data}: NameFormProps) => {
  const { toast }= useToast()
  const [productEditStatus, setProductEditStatus] = useState(false)
  const { form, onSubmit } = useProductMutation({
    action: 'EDIT',
    onSuccess: () =>{
      setProductEditStatus(false)
      toast({
        variant: 'default',
        title: 'Chúc mừng bạn',
        description: 'Cập nhật tiêu đề thành công'
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
            Tên sản phẩm
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
        {!productEditStatus && <p className='text-sm mt-2'>{data?.name}</p>}
        {productEditStatus && (
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onHandleSubmit)} className='flex flex-col gap-y-6'>
                  <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) =>(
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder='Nhập tên sản phẩm'/>
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

export default NameForm