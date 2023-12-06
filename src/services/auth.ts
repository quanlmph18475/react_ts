import { IUser } from '@/common/Product'
import instance from '@/core/api'

export const Signup = async (user: IUser) => {
    try {
        const response = await instance.post('/signup', user)
        return response.data
    } catch (error) {
        console.log('CREATE_USER_ERROR', error)
    }
}
export const signin = async (user: IUser) => {
    try {
        const response = await instance.post('/signin', user)
        return response.data
    } catch (error) {
        console.log('SIGNIN_USER_ERROR', error)
    }
}