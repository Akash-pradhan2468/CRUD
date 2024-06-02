import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {
  const [User,setUser]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3004")
    .then(result=>setUser(result.data))
    .catch(err=>console.log(err))
  },[])
  const handleDelete=(id)=>{
    axios.delete('http://localhost:3004/deleteUser/'+id)
    .then(res=>{console.log(res)
          window.location.reload()
       })
    .catch(err=>console.log(err))
  }
  return (
    <div>
        <div className='d-flex vh-100 bg-primary  justify-content-center align-items-center'>
          <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success'>Add+</Link>
            <table className='table'>
              <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Age</th>
                      <th>Action</th>
                    </tr>
              </thead>
              <tbody>
                {
                     User.map((User)=>{
                        return <tr>
                          <td>{User.name}</td>
                          <td>{User.email}</td>
                          <td>{User.age}</td>
                          <td>
                          <Link to={`/update/${User._id}`} className='btn btn-success'>Update</Link>
                            <button onClick={(e)=>handleDelete(User._id)} className='btn btn-danger '>Delete</button>
                          </td>
                          
                        </tr>
                     })
                }
               

              </tbody>
            </table>
          </div>
        </div>
    </div>
    
  )
}

export default User
