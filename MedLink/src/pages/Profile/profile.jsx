import React, { useState } from 'react'
import Advertisement from '../../components/Advertisement/advertisement'
import Card from '../../components/Card/card'
import maleUser from "../../assets/male user proile.png";
import EditIcon from '@mui/icons-material/Edit';
import Post from '../../components/Post/post';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../../components/Modal/modal';
import ImageModal from '../../components/Conversation/ImageModal/imageModal';
import EditinfoModal from '../../components/EditInfoModal/editinfoModal';

const Profile = () => {

    const [imageSetModal, setImageModal] = useState(false);
    const [circularImage, setCircularImage] = useState(true);

    const [infoModal, setInfoModal] = useState(false);

    const handleInfoModal = () => {
        setInfoModal(prev=>!prev)
    }

    const handleImageModalOpenClose = () => {
        setImageModal(prev => !prev)
    }

    const handleOnEditCover = () => {
        setImageModal(true);
        setCircularImage(false);
    }

    const handleCircularimageOpen = () => {
        setImageModal(true);
        setCircularImage(true);
    }

    return (
        <div className='px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full pt-12 bg-gray-100'>
            <div className='flex justify-between'>

                {/* left side main section */}
                <div className=' pt-5 w-full md:w-[70%]'>
                    <div>
                        <Card padding={0}>
                            <div className='w-full h-fit'>
                                <div className='relative w-full h-[200px]'>
                                    <div className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white' onClick={handleOnEditCover}><EditIcon /></div>
                                    <img src='https://i.fbcd.co/products/original/a-medical-illustration-background-for-worlds-health-day-with-copy-space-4-cf3c72b8b3657425f48024f3055903e4f8ac17cd3cea2666b4277f9448c846ae.jpg' className='w-full h-[200px] rounded-tr-lg rounded-tl-lg' />
                                    <div onClick={handleCircularimageOpen} className='absolute object-cover top-24 left-6 z-10'><img className='rounded-full border-2 border-white cursor-pointer w-35 h-35' src={maleUser} />

                                    </div>
                                </div>

                                <div className='mt-10 relative px-8 py-2'>
                                    <div className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white' onClick={handleInfoModal}><EditIcon /></div>
                                    <div className='text-2xl'>User 1</div>
                                    <div className='text-gray-700'>I am a Medical Doctor</div>
                                    <div className='text-sm text-gray-500'>Cape Town, South Africa</div>
                                    <div className='text-md text-blue-800 w-fit cursor-pointer hover:underline'> 10 connections</div>

                                    <div className='md:flex w-full justify-between'>
                                        <div className='my-5 flex gap-5'>
                                            <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Open to</div>
                                            <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Share</div>
                                            <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Log Out</div>
                                        </div>
                                        <div className='my-5 flex gap-5'>
                                            <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Message</div>
                                            <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Connect</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className='mt-5'>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className='text-xl'>About</div>
                                <div className='cursor-pointer'><EditIcon /></div>
                            </div>
                            <div className='text-gray-700 text-md w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur aperiam voluptatem illo sequi quidem ipsum rem amet iure illum ab, reiciendis corrupti natus, numquam placeat quod velit hic libero!</div>
                        </Card>
                    </div>

                    <div className='mt-5'>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className='text-xl'>Skills</div>
                            </div>
                            <div className='text-gray-700 text:md my-2 w-full flex gap-4 flex-wrap'>

                                <div className='py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg'>Cardiac Imaging</div>
                                <div className='py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg'>TEE</div>
                                <div className='py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg'>Angioplasty</div>
                                <div className='py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg'>CDM</div>
                            </div>
                        </Card>
                    </div>
                    <div className='mt-5'>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className='text-xl'>Activities</div>
                            </div>
                            <div className='cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-green-800 text-white  font-semibold'>Post</div>

                            {/* parent div for scrollable activities */}
                            <div className='overflow-x-auto my-2 flex gap-1 overflow-y-hidden w-full'>

                                <div className='cursor-pointer shrink-0 w-[350px]'>
                                    <Post profile={1} />
                                </div>

                                <div className='cursor-pointer shrink-0 w-[350px]'>
                                    <Post profile={1} />
                                </div>

                                <div className='cursor-pointer shrink-0 w-[350px]'>
                                    <Post profile={1} />
                                </div>
                            </div>
                        </Card>
                    </div>


                    <div className='mt-5'>
                        <Card padding={1}>
                            <div className='flex justify-between items-center'>
                                <div className='text-xl'>Experience</div>
                                <div className='cursor-pointer'><AddIcon /></div>
                            </div>

                            <div className='mt-5'>

                                <div className='p-2 border-t-1 border-gray-300 flex justify-between'>
                                    <div>
                                        <div className='text-lg'> Cardiologist </div>
                                        <div className='text-sm'> NetCare Chris Bernard</div>
                                        <div className='text-sm text-gray-500'>June 2024 - Present </div>
                                        <div className='text-sm text-gray-500'>Cape Town, South Africa</div>
                                    </div>

                                    <div className='cursor-pointer'><EditIcon /></div>
                                </div>

                                <div className='p-2 border-t-1 border-gray-300 flex justify-between'>
                                    <div>
                                        <div className='text-lg'> Cardiologist </div>
                                        <div className='text-sm'> NetCare Chris Bernard</div>
                                        <div className='text-sm text-gray-500'>June 2024 - Present </div>
                                        <div className='text-sm text-gray-500'>Cape Town, South Africa</div>
                                    </div>

                                    <div className='cursor-pointer'><EditIcon /></div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>



                {/* right side add */}
                <div className='pt-5 hidden md:flex md:w-[28%]'>
                    <div className='sticky top-19'>
                        <Advertisement />
                    </div>

                </div>
            </div>

            {
                imageSetModal && <Modal title="Upload Image" closeModal={handleImageModalOpenClose}>
                    <ImageModal isCircular={circularImage} />
                </Modal>
            }

            {
                infoModal && <Modal title='Edit Info' closeModal={handleInfoModal}>
                    <EditinfoModal/>
                </Modal>
            }
        </div>
    )
}

export default Profile