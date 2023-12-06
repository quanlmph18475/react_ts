export interface IProduct{
    id?: number
    name: string
    image: string
    price: number
    description: string
}
export interface IUser {
    id?: number
    name?: string
    email: string
    password: string,
    confirmPassword?: string
}