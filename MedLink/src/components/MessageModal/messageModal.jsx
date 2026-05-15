import React from 'react'

const MessageModal = () => {
  return (
    <div className='my-5'>
      
      <div className='w-full mb-4'>
        <textarea className='w-full p-3 mt-1 border border-gray-600 rounded-md outline-none resize-none' placeholder='Enter Message' rows={8}></textarea>
      </div>
      <div className='bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl'>Save</div>
    </div>
  )
}

export default MessageModal