import React, { useContext, useState } from 'react'
import { ProductContext } from '../../../store/product'


const Signin = () => {
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
            await fetch('http://localhost:3000/signin', {
              method: 'POST',
              headers: {
                "Content-Type": 'application/json'
              },
              body:JSON.stringify(value)
            })
          ).json()
          dispatch({ type: 'SIGNIN', payload: data})
          
      }catch(error){

      }
    }
    return (
        <div>
            <h1>Signin</h1>
            <form onSubmit={onSubmit}>
                <input type='text' name='email' onChange={onChange} />
                <input type='number' name='password' onChange={onChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signin