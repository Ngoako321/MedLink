import React, { useState } from 'react'
import medlinkLogo from "../../assets/mediLink.png";
import maleUser from "../../assets/male user proile.png";
import './navbar2.css';
import { useLocation,Link  } from 'react-router-dom'

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
                <Link to='/feeds'>
                    <img src={medlinkLogo} alt="MedLinkLogo" className='w-8 h-8 md:w-10 md:h-10'
                    />
                </Link>

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
                <Link to={'/feeds'} className='flex flex-col items-center cursor-pointer text-gray-500 hover:text-black'>
                    <HomeIcon sx={{color: location.pathname==='/feeds'?"black":"gray"}} />
                    <div className= {`text-sm text-gray-500 ${location.pathname==='/feeds'?"border-b-3 ":""}`}>Home</div>
                </Link>

                {/* Network */}
                <Link to={'/myNetwork'} className='flex flex-col items-center cursor-pointer text-gray-500 hover:text-black'>
                    <GroupIcon sx={{color: location.pathname==='/myNetwork'?"black":"gray"}} />
                    <div className= {`text-sm text-gray-500 ${location.pathname==='/myNetwork'?"border-b-3 ":""}`}>Network</div>
                </Link>

                {/* Resume */}
                <Link to={'/resume'} className='hidden sm:flex flex-col items-center cursor-pointer text-gray-500 hover:text-black'>
                    <WorkIcon sx={{color: location.pathname==='/resume'?"black":"gray"}} />
                    <div className= {`text-sm text-gray-500 ${location.pathname==='/resume'?"border-b-3 ":""}`}>Resume</div>
                </Link>

                {/* Messages */}
                <Link to={'/messages'} className='hidden sm:flex flex-col items-center cursor-pointer text-gray-500 hover:text-black'>
                    <MessageIcon sx={{color: location.pathname==='/messages'?"black":"gray"}} />
                    <div className= {`text-sm text-gray-500 ${location.pathname==='/messages'?"border-b-3 ":""}`}>Messages</div>
                </Link>

                {/* Notifications */}
                <Link to={'/notification'} className='flex flex-col items-center cursor-pointer text-gray-500 hover:text-black'>
                    <div><NotificationsNoneIcon sx={{color: location.pathname==='/notification'?"black":"gray"}}/><span className='p-1 rounded-full text-sm bg-red-700 text-white'>1</span></div>
                    <div className= {`text-sm text-gray-500 ${location.pathname==='/notification'?"border-b-3 ":""}`}>Notifications</div>
                </Link>

                {/* Profile */}
                <Link to={'profile/vation'} className='flex flex-col items-center cursor-pointer'>
                    <img className='w-6 h-6 md:w-8 md:h-8 rounded-full' src={maleUser} alt='MaleUser' />
                    <div className= {`text-sm text-gray-500 ${location.pathname==='/me'?"border-b-3 ":""}`}>Me</div>
                </Link>
            </div>
        </div>

    )
}

export default Navbar2