import React from 'react'
import Advertisement from '../../components/Advertisement/advertisement'

const Resume = () => {
  return (
    <div>
        <div className='px-5 xl:px-50 py-9 flex mt-10 gap-5 w-full mt-5 bg-gray-100'>
            <div className='w-[100%] py-5 sm:w-[74%]'>
                <img src='https://resumekraft.com/wp-content/uploads/2022/06/Medical-Doctor-Resume-Sample-1.jpg'  className='w-full h-full rounded-lg'/>
            </div>
            <div className='w-[26%] py-5 hidden md:block'>
                <div className='sticky top-19'>
                    <Advertisement/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume