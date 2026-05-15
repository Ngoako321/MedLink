import React from 'react'

const ImageModal = ({ isCircular }) => {
    return (
        <div className='p-5 relative flex items-center flex-col h-full'>
            {
                isCircular ? (
                    <img className='rounded-full w-[150px] h-[150px]' src='http://localhost:5173/src/assets/male%20user%20proile.png' />
                ) : (
                    <img className='rounded-xl w-full h-[200px] object-cover' src='https://i.fbcd.co/products/original/a-medical-illustration-background-for-worlds-health-day-with-copy-space-4-cf3c72b8b3657425f48024f3055903e4f8ac17cd3cea2666b4277f9448c846ae.jpg' />
                )
            }

            <label htmlFor='btn-submit' className='absolute bottom-10 left-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer'>Upload</label>
            <input type='file' className='hidden' id='btn-submit' />

            <div className='absolute bottom-10 right-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer'>Submit</div>

        </div>
    )
}

export default ImageModal