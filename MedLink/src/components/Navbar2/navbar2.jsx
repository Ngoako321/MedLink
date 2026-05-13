import React, { useState } from 'react'
import medlinkLogo from "../../assets/mediLink.png";
import maleUser from "../../assets/male user proile.png";
import './navbar2.css';
import { useLocation } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navbar2 = () => {

    const [dropdown, setDropDown] = useState(false);
    const location = useLocation();

    console.log(location)
    return (

        <div className='bg-white flex justify-between items-center py-2 px-3 md:px-6 xl:px-20 fixed top-0 w-full z-50 shadow-sm'>

            {/* Left Side */}
            <div className='flex gap-2 items-center'>

                {/* Logo */}
                <div>
                    <img src={medlinkLogo} alt="MedLinkLogo" className='w-8 h-8 md:w-10 md:h-10'
                    />
                </div>

                {/* Search */}
                <div className='relative'>

                    <input className='searchInput bg-gray-100 rounded-md h-9 md:h-10 px-3 md:px-4 w-32 sm:w-48 md:w-64 outline-none' placeholder='Search'
                        onFocus={() => setDropDown(true)}
                        onBlur={() => setTimeout(() => setDropDown(false), 200)}
                    />

                    {/* Dropdown */}
                    {
                        dropdown && (
                            <div className='absolute w-full left-0 bg-white p-2 rounded-md mt-1 shadow-md border'>

                                <div className='flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded'>

                                    <img className='w-10 h-10 rounded-full' src={maleUser} alt='MaleUser' />

                                    <div>Thato</div>

                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

            {/* Right Side */}
            <div className='flex gap-3 sm:gap-5 md:gap-8 items-center'>

                {/* Home */}
                <div className='flex flex-col items-center cursor-pointer text-gray-500 hover:text-black'>
                    <HomeIcon sx={{color: location.pathname==='/feeds'?"black":"gray"}} />
                    <span className='hidden md:block text-xs'>Home</span>
                </div>

                {/* Network */}
                <div className='flex flex-col items-center cursor-pointer text-gray-500 hover:text-black'>
                    <GroupIcon sx={{color: location.pathname==='/mynetwork'?"black":"gray"}} />
                    <span className='hidden md:block text-xs'>Network</span>
                </div>

                {/* Resume */}
                <div className='hidden sm:flex flex-col items-center cursor-pointer text-gray-500 hover:text-black'>
                    <WorkIcon sx={{color: location.pathname==='/resume'?"black":"gray"}} />
                    <span className='hidden md:block text-xs'>Resume</span>
                </div>

                {/* Messages */}
                <div className='hidden sm:flex flex-col items-center cursor-pointer text-gray-500 hover:text-black'>
                    <MessageIcon sx={{color: location.pathname==='/messages'?"black":"gray"}} />
                    <span className='hidden md:block text-xs'>Message</span>
                </div>

                {/* Notifications */}
                <div className='flex flex-col items-center cursor-pointer text-gray-500 hover:text-black'>
                    <div><NotificationsNoneIcon sx={{color: location.pathname==='/notifications'?"black":"gray"}}/><span className='p-1 rounded-full text-sm bg-red-700 text-white'>1</span></div>
                    <span className='hidden md:block text-xs'>Notifications</span>
                </div>

                {/* Profile */}
                <div className='flex flex-col items-center cursor-pointer'>
                    <img className='w-6 h-6 md:w-8 md:h-8 rounded-full' src={maleUser} alt='MaleUser' />
                    <span className='hidden md:block text-xs text-gray-500'>Me</span>
                </div>
            </div>
        </div>

    )
}

export default Navbar2