import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Dialog = () => {
    const [users, setUsers] = useState(0)
    const navigate = useNavigate()
    const dialog = () => {
      if(users >= 2 && users <= 8){
        navigate('/meet' , {state:{users}})
      }else{
        alert('Enter the no of users between 2 and 8')
      }
    }
  return (
    <div className='bg-gray-900 text-white h-screen flex items-center justify-center'>  
    <div className='bg-gray-800 p-10 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-semibold text-center'> Google Meet UI</h1>
       <div className='p-3 text-xl'> Enter the no of Users</div>
       <div>
         <input type="number" className='text-black w-full rounded-lg p-2 my-5' value={users}
         onChange={(e) => setUsers(e.target.value)}  min='2' max='8'/>
       </div>

       <div>
         <button className='w-full p-2 my-2 bg-[#085c9e] text-white rounded-lg'
         onClick={
           () => {
             dialog({users})
           }
         }>
           Enter
         </button>
       </div>
    </div>
 </div>
)
}

export default Dialog