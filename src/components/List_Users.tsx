import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/product'



const List_Users = () => {
  const { state, dispatch } = useContext(ProductContext)
  useEffect(() =>{
    ;(async () =>{
      try{
        const data = await (await fetch('http://localhost:3000/users')).json()
        dispatch({ type: 'FETCH_USERS', payload: data })
      }catch(error){
        
      }finally{
        
      }
    })()
  },[dispatch])
  return (
        <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Tên</th>
              <th scope="col">Mật khẩu</th>
            </tr>
          </thead>
          <tbody>
            {state.users?.map((user: any, index: any) => (
            <tr key={index }>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default List_Users