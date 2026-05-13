import React from 'react'
import Card from '../Card/card'
import maleUser from "../../assets/male user proile.png";
const ProfileCard = () => {
  return (
    <Card padding={0}>
        <div className='relative h-25'>
            <div className='relative w-full h-22 rounded-md'>
                <img src='https://thumbs.dreamstime.com/b/travel-banner-beach-paradise-sunset-palm-trees-tropical-summer-holidays-vacation-getaway-colorful-concept-photo-44168694.jpg' className='rounded-t-md h-full w-full' />
            </div> 
            <div className='absolute top-14 left-6 z-10'>
                <img src={maleUser} className='rounded-full border-2 h-16 w-16 border-white cursor-pointer' />
            </div>
        </div>

        <div className='p-5 '>
            <div className='text-xl'>Dr. Ngoako Malowa</div>
            <div className='text-sm my-1'>Cardiologist</div>
            <div className='text-sm my-1'>Cape Town, South Africa</div>
            <div className='text-sm my-1'>Chris Bernard NetCare</div>
        </div>
    </Card>
  )
}

export default ProfileCard