import React from 'react'

const Conversation = () => {
    return (
        <div className='flex items-center w-full cursor-pointer border-b border-gray-300 gap-3 p-4 hover:bg-gray-200'>
            <div className='shrink'>
                <img className='w-12 h-12 rounded-full' src='https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg' />
                <div>
                </div>
                <div className='text-md'>User</div>
                <div className='text-sm text-gray-500'>Neurologist</div>
            </div>
        </div>
    )
}

export default Conversation 