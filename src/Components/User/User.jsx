import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
        const {userId}=useParams();

  return (
    <div className='text-white text-2xl bg-gray-700  w-full m-1 p-1  flex items-center justify-center h-14 '>
      User :{userId}
    </div>
  )
}

export default User
