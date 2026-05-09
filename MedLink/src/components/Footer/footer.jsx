import React from 'react'

const Footer = () => {
    return (
        <div className='w-[100%] bg-gray-200 flex justify-center'>
            <div className='md:p-3 w-[100%] flex flex-col items-center py-4'>
                <div className='flex gap-0 items-center cursor-pointer'>
                    <h3 className='font-bold text-3xl'>
                        <span className='text-blue-900'>Med</span>
                        <span className='text-blue-400'>Link.</span>
                    </h3>
                </div>
                <div className='text-sm'>@Copyright 2026</div>
            </div>
        </div>
    )
}

export default Footer