import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/product'


const Signup = () => {
    const { state, dispatch } = useContext(ProductContext)
    const [value, setValue] = useState({})
    const onChange = (e: any) => {
        const target = e.target
        const name = target.name

        setValue({
            ...value,
            [name]: target.value
        })
    }
    const onSubmit = async (e: any) => {
        e.preventDefault()
        try{
          const data = await (
            await fetch('http://localhost:3000/register', {
              method: 'POST',
              headers: {
                "Content-Type": 'application/json'
              },
              body:JSON.stringify(value)
            })
          ).json()
          alert('Bạn đã đăng kí thành công')
          dispatch({ type: 'SIGNUP', payload: data})
      }catch(error){

      }
    }
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={onSubmit}>
                <input type='text' name='email' onInput={onChange} placeholder='email'/>
                <input type='number' name='password' onInput={onChange} placeholder='matkhau'/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup