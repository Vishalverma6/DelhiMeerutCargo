import React from 'react'
import { useSelector } from 'react-redux'
import { NavbarLinks } from '../../data/navbar-links';
import { Link, matchPath, useLocation } from 'react-router-dom';
import ProfileDropDown from '../core/auth/ProfileDropDown';

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const location = useLocation();


    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }




    return (
        <div className='shadow-md z-50 fixed w-full h-14'>
            <div className="flex justify-between items-center px-2 lg:px-8 py-5 shadow-md bg-white">
                <Link to="/">
                    <h1 className="hidden font-bold text-blue-700 lg:flex lg:text-2xl ">
                        Delhi Meerut Cargo
                    </h1>
                </Link>

                {/* Nav Links  */}
                <nav >
                    <ul className='flex flex-col lg:flex-row gap-x-4 '>
                        {
                            NavbarLinks?.map((link, index) => {

                                return (
                                    <li key={index}>
                                        <Link to={link?.path} className="flex gap-6 text-gray-700 font-medium">
                                            <p className={`${matchRoute(link.path) ? "text-yellow-400" : "text-black"} hover:translate-y-0.5 flex`}>
                                                {link?.title}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </nav>

                {/* Signup And login Button */}
                <div className='flex gap-x-3 md:gap-x-4 lg:mr-16'>
                    {
                        token === null && (
                            <Link to="/login">
                                <button className='cursor-pointer text-gray-700 font-medium border border-richblack-700 bg-richblack-800 px-[10px] py-[6px]
                                text-richblack-100 rounded-md'>
                                    Log In
                                </button>
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/signup">
                                <button className='cursor-pointer text-gray-700 font-medium border px-[10px] py-[6px]
                                  rounded-md'>
                                    Sign Up
                                </button>
                            </Link>
                        )
                    }

                    {/* Profile Dropdown */}
                    {
                        token !== null && (
                            <ProfileDropDown />
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar
