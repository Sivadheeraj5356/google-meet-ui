import React, { useEffect } from 'react'
import { useLocation, Navigate, useNavigate } from 'react-router-dom'
import fatimaSmall from '../assets/fatimaSmall.png'
import GridSection from './GridSection'
import Footer from './Footer'

const GoogleMeet = () => {
  const location = useLocation()
  const  navigate = useNavigate()
  if (!location.state?.users) {
    return <Navigate to="/" replace />
  }

   useEffect(()=>{
    if(!location.state?.users){
      navigate('/')
    }
   },[])
  const users = location.state.users

  return (
    <div className='bg-[#313131] text-white h-screen flex flex-col'>
      <div>
        <div className='bg-[#535353] px-3 py-1 mx-5 my-2 rounded-lg shadow-lg text-2xl flex items-center gap-5'>
          <div className='h-10 w-10'>
            <img 
              src={fatimaSmall} 
              alt="Fatima" 
              className='rounded-full h-full w-full object-cover'
            />
          </div>
          Fatima is presenting
        </div>
      </div>

      <div className='flex-1 overflow-auto'>
        <GridSection users={users} />
      </div>
     
      <Footer />
    </div>
  )
}

export default GoogleMeet