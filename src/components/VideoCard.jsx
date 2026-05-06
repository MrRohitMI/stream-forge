import React from 'react'

const VideoCard = ({data}) => {
    const {snippet , statistics} = data;
    const {channelTitle, thumbnails,title} = snippet
  return (
    <div className='w-120'>
        <img src={thumbnails.medium.url} alt="thumbnail" className='w-full rounded-xl mb-2 h-70' />
        <p className='font-bold'>{title}</p>
        <p className='text-gray-500 text-sm'>{channelTitle}</p>
        <p className='text-gray-500 text-sm'>{statistics.viewCount} Views</p>
    </div>
  )
}

export default VideoCard