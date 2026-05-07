import React from 'react'
import medlinkLogo from "../../assets/mediLink.png";

const Navbar1 = () => {
    return (
        <nav className='w-full bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border'>

            <div className="flex justify-between">
                
                <div className="flex gap-3 items-center cursor-pointer">
                    <img 
                        src={medlinkLogo} 
                        alt="MedLinkLogo" 
                        className='w-9 h-9' 
    />

                    <h3 className="text-blue-800 font-bold text-3xl">
                        MedLink
                    </h3>
                </div>

            </div>

            <div className='flex md:gap-4 gap-2 justify-center items-center'>

                <div className='md:px-4 md:py-2 px-3 py-2 text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer'>Join</div>
                <div className='px-4 py-2 border text-blue-800 border-blue-800 rounded-3xl text-xl hover:bg-blue-50 cursor-pointer'>Sign In</div>
            </div>
        </nav>
    )
}

export default Navbar1