import React from 'react'
import Advertisement from '../../components/Advertisement/advertisement'
import ProfileCard from '../../components/ProfileCard/profileCard'
import Card from '../../components/Card/card'
const Notification = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>

      {/* left side */}
      <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
        <div className='h-fit'>
          <ProfileCard />
        </div>
      </div>

      {/* middle side */}
      <div className='w-[100%] py-5 sm:w-[50%]'>
        
        <div>
            <Card padding={0}>
                <div className='w-full'>

                    {/*For each notification*/}
                    <div className='border-b-1 cursor-pointer flex gap-4 items-center border-gray-300 p-3'>
                        <div>
                            <img src='https://img.freepik.com/free-vector/man-red-shirt-with-white-collar_90220-2873.jpg?semt=ais_hybrid&w=740&q=80'  className='rounded-full cursor-pointer w-15 h-15'/></div>
                            <div>Dummy User has sent you a request</div>
                    </div>

                    <div className='border-b-1 cursor-pointer flex gap-4 items-center border-gray-300 p-3'>
                        <div>
                            <img src='https://img.freepik.com/free-vector/man-red-shirt-with-white-collar_90220-2873.jpg?semt=ais_hybrid&w=740&q=80'  className='rounded-full cursor-pointer w-15 h-15'/></div>
                            <div>Dummy User reacted to your post</div>
                    </div> 

                    <div className='border-b-1 cursor-pointer flex gap-4 items-center border-gray-300 p-3'>
                        <div>
                            <img src='https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?semt=ais_hybrid&w=740&q=80'  className='rounded-full cursor-pointer w-15 h-15'/></div>
                            <div>Dummy User accepted your request</div>
                    </div> 

                   
                </div>
            </Card>
        </div>


      </div>

      {/* right side */}
      <div className='w-[26%] py-5 hidden md:block'>
        <div className='my-5 sticky top-19'>
          <Advertisement />
        </div>
      </div>

    </div>
  )
}

export default Notification