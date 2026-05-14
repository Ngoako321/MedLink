import React from 'react'
import maleUser from "../../assets/male user proile.png";
import ImageIcon from '@mui/icons-material/Image';

const AddModal = () => {
    return (
        <div className=''>
            <div className='flex gap-4 items-center'>
                <div className='relative'>
                    <img src={maleUser} className='w-15 h-15 rounded-full' alt="img" />
                </div>
                <div className='text-2xl'>Dr. N Malowa</div>
            </div>

            <div>
                <textarea cols={50} rows={5} placeholder='What do you want to talk about? ' className='my-3 outline-0 text-xl p-2'></textarea>
            </div>
            <div>
                <img className='w-20 h-20 rounded-xl' src="https://i.fbcd.co/products/original/a-medical-illustration-background-for-worlds-health-day-with-copy-space-4-cf3c72b8b3657425f48024f3055903e4f8ac17cd3cea2666b4277f9448c846ae.jpg" />
            </div>

            <div className='flex justify-between items-center'>
                <div className='my-6'>
                    <label className='cursor-pointer' htmlFor='inputFile'><ImageIcon/></label>
                <input type='file' className='hidden' id='inputFile' />
            </div>
            <div className='bg-blue-950 text-white py-1 px-3 cursor-pointer rounded-2xl h-fit'>Post</div>
        </div>
        </div >
    )
}

export default AddModal