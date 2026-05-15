import React from 'react'
import ProfileCard from '../../components/ProfileCard/profileCard'
import Card from '@mui/material/Card'
import Post from '../../components/Post/post'
import Advertisement from '../../components/Advertisement/advertisement'

const SingleActivity = () => {
    return (
        <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>

            {/* Left side */}
            <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
                <div className='h-fit sticky top-20'>
                    <ProfileCard />
                </div>
            </div>

            {/* Middle side */}
            <div className='w-full sm:w-[50%] py-5'>

                <Card padding={1}>
                    <div>
                        <Post />
                    </div>
                </Card>

            </div>

            {/* Right side */}
            <div className='w-[26%] py-5 hidden md:block'>
                <div className='sticky top-20'>
                    <Advertisement />
                </div>
            </div>

        </div>
    )
}

export default SingleActivity