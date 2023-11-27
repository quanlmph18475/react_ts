import React, { useReducer } from 'react'
import { produce } from 'immer'

export const ProductContext  = React.createContext({} as any)

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            const id = action.payload
            state.product = state.products.find((product: any) => product.id === id)
            return 
        case 'GET_USER':
            const users = action.payload
            state.user = state.users.find((user: any) => user.users === users)
            return 
        case 'FETCH_PRODUCTS':
                state.products = action.payload
                return 
        case 'FETCH_USERS':
                state.users = action.payload
        return       
        case 'ADD_PRODUCT':
            state.products.push(action.payload)
        return       
        case 'EDIT_PRODUCT':
            const newProduct = action.payload 
            state.products = state.products.map((product: any) => (product.id === newProduct.id ? newProduct: product))
            return 
        case 'DELETE_PRODUCTS':
            // state.products.delete(action.payload)
            const ids = action.payload
            state.products = state.products.filter((product: any) => product.ids !== ids)
            return 
        case 'SIGNUP':
            state.users.push(action.payload)
            return
        case 'SIGNIN':
            state.users = action.payload
            return
                
        default:
                return state
    }
}

const ProductContextProvider = ({ children }: {children: React.ReactNode}) =>{
    const [state, dispatch] = useReducer(produce(reducer), {
        products: [],
        product: {},
        users: [],
        user: {},
        isLoading: false,
        error: ''
    })
    return (
        <>
            <ProductContext.Provider value={{ state, dispatch}}>{ children }</ProductContext.Provider>
        </>
    )
}

export default ProductContextProvider