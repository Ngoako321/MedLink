import Card from '@mui/material/Card'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Conversation from '../../components/Conversation/conversation'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ImageIcon from '@mui/icons-material/Image';
import Advertisement from '../../components/Advertisement/advertisement'

const Messages = () => {
    return (
        <div className='px-5 xl:px-50 py-9 flex gap-5 w-full bg-gray-100 mt-5'>

            <div className='w-full flex pt-5'>

                <div className='w-full md:w-[70%]'><Card sx={{ padding: 0 }}>

                        {/* Header */}
                        <div className='border-b border-gray-300 px-5 py-2 font-semibold text-lg'>Messaging</div>

                        {/* Filter */}
                        <div className='border-b border-gray-300 px-5 py-2'>
                            <div className='py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold flex gap-2 w-fit rounded-2xl text-white'>Focused<ArrowDropDownIcon /></div>
                        </div>

                        {/* Chat layout */}
                        <div className='w-full md:flex'>

                            {/* LEFT */}
                            <div className='h-[590px] overflow-auto w-full md:w-[40%] border-r border-gray-300'>
                                <Conversation />
                            </div>

                            {/* RIGHT */}
                            <div className='w-full md:w-[60%]'>

                                {/* Header */}
                                <div className='border-b border-gray-300 py-2 px-4 flex justify-between items-center'>
                                    <div>
                                        <p className='text-sm font-semibold'>User 1</p>
                                        <p className='text-sm text-gray-400'>Hey This user 1</p>
                                    </div>
                                    <MoreHorizIcon className='cursor-pointer' />
                                </div>

                                {/* Messages */}
                                <div className='h-[360px] w-full overflow-auto border-b border-gray-300'>

                                    {/* message 1 */}
                                    <div className='flex w-full gap-3 p-4'>
                                        <img className='w-8 h-8 rounded-full cursor-pointer' src='https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png' />

                                        <div className='w-full'>
                                            <div className='text-md'>User 1</div>
                                            <div className='text-sm mt-2 hover:bg-gray-200'> This is a message</div>

                                            <img className='w-[240px] h-[180px] rounded-md mt-2' src='https://static.vecteezy.com/system/resources/thumbnails/004/987/898/small/doctor-in-medical-lab-coat-with-a-stethoscope-doctor-in-hospital-background-with-copy-space-low-poly-wireframe-vector.jpg' />
                                        </div>
                                    </div>

                                    {/* message 2 */}
                                    <div className='flex w-full gap-3 p-4'>
                                        <img className='w-8 h-8 rounded-full cursor-pointer' src='https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png' />

                                        <div className='w-full'>
                                            <div className='text-md'>User 2</div>
                                            <div className='text-sm mt-2 hover:bg-gray-200'>We will discuss on the meeting</div>


                                        </div>
                                    </div>

                                </div>

                                {/* space or typing msgs */}
                                <div className='p-2 w-full border-b-1 border-gray-200'>
                                    <textarea rows={4} className='bg-gray-200 outline-0 rounded-xl text-sm w-full p-3' placeholder='Write a message' />
                                </div>

                                <div className='p-3 flex justify-between items-center'>
                                    <div>
                                        <label htmlFor='messageImage' className='cursor-pointer'><ImageIcon /></label>
                                        <input id="messageImage" type='file' className='hidden' />
                                    </div>
                                    <div className='px-3 py-1 cursor-pointer rounded-2xl border-1 bg-blue-950 text-white'>Send</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                {/* Right side */}
                <div className='hidden md:flex md:w-[25%] pl-7'>
                    <div className='sticky top-19 '>
                        <Advertisement/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages