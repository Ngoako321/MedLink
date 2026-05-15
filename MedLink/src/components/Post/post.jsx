import React from 'react'
import maleUser from "../../assets/male user proile.png";
import Card from '../Card/card';
import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendIcon from '@mui/icons-material/Send';

const Post = ({ profile }) => {
    const [seeMore, setSeeMore] = useState(false);
    const [comment, setComment] = useState(false)
    const handleSendComment = (e) => {
        e.preventDefault();
    }

    const desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veniam provident consequatur, similique deleniti dicta ipsa illum tempore eos reprehenderit, magnam repellendus! Accusamus impedit nam eveniet, itaque quo non neque.`
    return (
        <div>
            <Card padding={0}>
                <div className='flex gap-3 p-4'>
                    <div className='w-12 h-12 rounded-4xl'>
                        <img src={maleUser} className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer' />
                    </div>
                    <div>
                        <div className='text-lg font-semibold'>Dr. Malowa </div>
                        <div className='text-xs text-gray-500'>Cardiologist @NetCare Chris Bernard</div>
                    </div>
                </div>

                <div className='text-md p-4 my-3 whitespace-pre-line flex-grow'>
                    {seeMore ? desc : `${desc.slice(0, 50)}...`} <span onClick={() => setSeeMore(prev => !prev)} className='cursor-pointer text-gray-500'>{seeMore ? 'See Less' : 'See More'}</span>
                </div>

                <div className='w-[100%] h-[300px]'>
                    <img className='w-full h-full' src='https://i.fbcd.co/products/original/a-medical-illustration-background-for-worlds-health-day-with-copy-space-4-cf3c72b8b3657425f48024f3055903e4f8ac17cd3cea2666b4277f9448c846ae.jpg' />
                </div>

                <div className='my-2 p-4 flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                        <ThumbUpIcon sx={{ color: 'blue', fontSize: 12 }} /> <div className='text-sm text-gray-600'>3 Likes</div>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <div className='text-sm text-gray-600'>2  Comments</div>
                    </div>
                </div>

                {!profile && <div className='flex p-1'>
                    <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'><ThumbUpIcon sx={{ fontSize: 22, color: 'blue' }} />  <span>Like</span></div>
                    <div onClick={() => setComment(true)} className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'><CommentOutlinedIcon sx={{ fontSize: 22, color: 'black' }} />  <span>Comment</span></div>
                    <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'><SendIcon sx={{ fontSize: 22, color: 'black' }} />  <span>Share</span></div>
                </div>
                }

                {/* Comment Section */}
                {
                    comment && <div className='p-4 w-full'>
                        <div className='flex gap-2 items-center'>
                            <img src={maleUser} className='rounded-full w-12 h-12 border-2 border-white cursor-pointer' />

                            <form className='w-full flex gap-2' onSubmit={handleSendComment} >
                                <input placeholder='Add a comment...' className='w-full border-1 py-3 px-5 rounded-3xl hover:bg-gray-100' />
                                <button type='submit' className='cursor-pointer bg-blue-800 text-white rounded-3xl px-1 py-3'>Send</button>
                            </form>
                        </div>

                        {/* other comment sec */}
                        <div className='w-full p-4'>
                            <div className='my-4'>
                                <div className='flex gap-3'>
                                    <img src={maleUser} className='rounded-full w-10 h-10 border-2 border-white cursor-pointer' />
                                    <div className='cursor-pointer'>
                                        <div className='text-md'>Dr. N Malowa</div>
                                        <div className='text-sm text-gray-500'>Cardiologist @NetCare Chris Bernard</div>
                                    </div>
                                </div>

                                <div className='px-11 my-2 '>Love this!</div>
                            </div>

                        </div>
                    </div>
                }
            </Card>
        </div>
    )
}

export default Post