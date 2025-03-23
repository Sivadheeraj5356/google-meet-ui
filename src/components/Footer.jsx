import React from 'react'

import iIcon from '../assets/i.svg'
import show from '../assets/show.svg'
import chat from '../assets/chat.svg'
import activities from '../assets/activities.svg'

const Footer = () => {
  return (
    <div className='w-full bg-[#313131] p-3'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
        <div className='text-white text-xl md:text-2xl order-1 md:order-1'>
          Class Meeting
        </div>

        <div className='flex flex-wrap justify-center gap-2 md:gap-4 order-3 md:order-2'>
          <div className='h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#535353] flex items-center justify-center'>
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/microphone.png" alt="microphone"/>     
          </div>
          <div className='h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#535353] flex items-center justify-center'>
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/video-call.png" alt="video-call"/>
          </div>
          <div className='h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#535353] flex items-center justify-center'>
            <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/closed-captioning.png" alt="closed-captioning"/>      
          </div>
          <div className='h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#535353] flex items-center justify-center'>
            <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/hand--v2.png" alt="hand"/>
          </div>
          <div className='h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#535353] flex items-center justify-center'>
            <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/share-rounded.png" alt="share"/>
          </div>
          <div className='h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#535353] flex items-center justify-center'>
            <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/FFFFFF/menu-2.png" alt="menu"/>
          </div>
          <div className='h-10 w-16 md:h-12 md:w-20 rounded-full bg-[#ff4343] flex items-center justify-center'>
            <img width="24" height="24" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/FFFFFF/external-end-call-mobile-telephone-those-icons-fill-those-icons.png" alt="end-call"/>
          </div>
        </div>

        <div className='flex gap-4 order-2 md:order-3'>
          <div className='h-6 w-6 md:h-7 md:w-7 flex justify-center items-center rounded-full'>
            <img src={iIcon} alt="information" className='w-full h-full'/>
          </div>
          <div className='h-6 w-6 md:h-7 md:w-7 flex justify-center items-center rounded-full'>
            <img src={show} alt="show participants" className='w-full h-full'/>
          </div>
          <div className='h-6 w-6 md:h-7 md:w-7 flex justify-center items-center rounded-full'>
            <img src={chat} alt="chat" className='w-full h-full'/>
          </div>
          <div className='h-6 w-6 md:h-7 md:w-7 flex justify-center items-center rounded-full'>
            <img src={activities} alt="activities" className='w-full h-full'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer