import React from 'react'
import picture1 from "../assets/picture1.png"
import picture2 from "../assets/picture2.png"
import picture3 from '../assets/picture3.png'
import picture4 from '../assets/picture4.png'
import picture5 from '../assets/picture5.png'
import picture6 from '../assets/picture6.png'
import picture7 from '../assets/picture7.png'
import picture8 from '../assets/picture8.png'

const GridSection = ({ users }) => {
  const userArray = Array.from({ length: users - 1 }, (_, index) => index + 2);
  
  const pictures = {
    1: picture1,
    2: picture2,
    3: picture3,
    4: picture4,
    5: picture5,
    6: picture6,
    7: picture7,
    8: picture8,
  };

  const getRightGridCols = (userCount) => {
    if (userCount <= 2) return 'grid-cols-1';
    if (userCount <= 3) return 'grid-cols-1';
    if (userCount <= 4) return 'grid-cols-1 md:grid-cols-2';
    if (userCount <= 6) return 'grid-cols-1 md:grid-cols-2';
    return 'grid-cols-1 md:grid-cols-2';
  };
  const getImageHeight = (userCount) => {
    if (userCount <= 2) return 'h-[65vh] mt-5';
    if (userCount === 3) return 'h-[50vh] md:h-[40vh]';
    if (userCount <= 4) return 'h-[45vh] md:h-[35vh]';
    if (userCount <= 6) return 'h-[35vh] md:h-40';
    if (userCount == 7) return 'h-[35vh] md:h-40';
    if (userCount == 8) return 'h-[35vh] md:h-32';
    return 'h-[30vh] md:h-[25vh]';
  };

  return (
    <div className='flex flex-col md:flex-row h-full gap-10 px-5'>
      <div className='w-full md:w-1/2 h-full'>
        <div className=' p-3 rounded-lg shadow-lg h-full'>
          <img 
            src={pictures[1]}
            alt="Main presenter" 
            className='w-full h-[85%] object-cover rounded-lg'
          />
          <div className='text-white mt-2 text-center'>User 1</div>
        </div>
      </div>

      <div className='w-full md:w-1/2 h-full'>
        <div className={`grid ${getRightGridCols(users)} gap-2 h-full`}>
          {userArray.map((user) => (
            <div key={user}>
              <div className={` rounded-lg shadow-lg  ${getImageHeight(users)} `}>
                <img 
                  src={pictures[user] || pictures[1]}
                  alt={`User ${user}`} 
                  className='w-full h-full object-cover rounded-lg'
                />
                <div className='text-white mt-2 text-xl text-center relative -top-10'>User {user}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GridSection