import React from 'react'
import userIcon from "../assets/user-icon.jpeg"

const Comment = ({data}) => {
    const {name,description} = data
  return (
    <div className='flex gap-2 items-center p-2 bg-gray-100 m-2'>
        <div><img src={userIcon} alt="user-icon"  className='w-15'/></div>
        <div>
            <h3 className='text-xl'>{name}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Comment