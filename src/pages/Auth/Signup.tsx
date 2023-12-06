import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthMutation } from '@/hooks/useAuthMutation'

const SignupPage = () => {
    const { toast } = useToast()
    const navigate = useNavigate()
    const { form, onSubmit } = useAuthMutation({
        action: 'SIGN_UP',
        onSuccess: () => {
            toast({
                description: 'Đăng ký thành công!',
                variant: 'default'
            })
            setTimeout(() => {
                navigate('/signin')
            }, 1000)
        }
    })
    return (
        <div className='my-14 container mx-auto'>
            <Form {...form}>
                <h1 className='text-center font-bold text-2xl'>Đăng ký tài khoản</h1>
                <form
                    className='w-2/4 my-6 mx-auto space-y-6 bg-gray-200 p-8 rounded'
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        name='name'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='name' {...field} placeholder='Tên của bạn' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        name='email'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type='email' {...field} placeholder='Nhập Email của bạn!' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name='password'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} placeholder='Nhập mật khẩu của bạn!' />
                                </FormControl>
                                <FormMessage />
                    </FormItem>
                        )}
                    />
                    <FormField
                        name='confirmPassword'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} placeholder='Nhập lại mật khẩu của bạn!' />
                                </FormControl>
                                <FormMessage />
                    </FormItem>
                        )}
                    />
                    <div className='flex justify-between mx-2 items-center'>
                        <Button className='mt-4'>Đăng ký</Button>
                        <Link to={'/signin'}>Đăng nhập</Link>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default SignupPage