import { joiResolver } from '@hookform/resolvers/joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useLocalStorage } from './useStorage'
import { formSigninSchema, formSignupSchema } from '@/common/Schema'
import { IUser } from '@/common/Product'
import { Signup, signin } from '@/services/auth'

type FormAuthType = {
    name?: string
    email: string
    password: string,
    confirmPassword?: string
}

type useAuthMutationProps = {
    action: 'SIGN_IN' | 'SIGN_UP'
    defaultValues?: FormAuthType
    onSuccess?: () => void
}

export const useAuthMutation = ({
    action,
    defaultValues = {  email: '', password: '' },
    onSuccess
}: useAuthMutationProps) => {
    const [, setUser] = useLocalStorage('user', {})
    const queryClient = useQueryClient()
    const { mutate, ...rest } = useMutation({
        mutationFn: async (user: IUser) => {
            switch (action) {
                case 'SIGN_IN':
                    return await signin(user)
                case 'SIGN_UP':
                    return await Signup(user)
                default:
                    return null
            }
        },
       onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
            onSuccess && onSuccess()
            setUser(data)
        }
    })
    const form = useForm<FormAuthType>({
        resolver: joiResolver(action === 'SIGN_UP' ? formSignupSchema : formSigninSchema),
        defaultValues
    })

    const onSubmit: SubmitHandler<FormAuthType> = (values) => {
        console.log(values)
        mutate(values)
    }
    return {
        form,
        onSubmit,
        ...rest
    }
}