import React from 'react'
import SignupForm from './SignupForm'
import LoginupForm from './LoginupForm'
import logo from "../../../assets/logo.png"

const Template = ({ title, desc1, desc2, image1, formtype }) => {
    return (
        <div className='flex w-11/12 max-w-[1100px] min-h-screen justify-between items-center py-12 pt-28 md:pt-2 mt-7 md:gap-x-36 bg-gradient-to-l from-blue-50 '>

            {/* Left Section */}
            <div className='mx-auto w-full  max-w-[500px] md:mx-0 px-10 sm:mt-20 '>

                {/* Logo */}
                {/* <div className=' bg-gradient-to-bl from-blue-100 to-orange-100'>
                    <img
                        src={logo}
                        alt="Delhi Meerut Cargo Logo"
                        className='w-[200px]'
                    />
                </div> */}


                <h1 className='text-2xl md:text-3xl opacity-70 font-bold text-[#F97316] mt-1'>
                    <span>{title}</span>
                </h1>

                {/* Description */}
                <p className='mt-2 text-gray-600 text-lg leading-9 max-w-[550px]'>
                    <span>{desc1}</span>
                    <br />
                    <span className='font-edu-sa font-bold italic' >{desc2}</span>
                </p>
                {
                    formtype === "signup"
                        ? <SignupForm />
                        : <LoginupForm />
                }

            </div>

            {/* Right Section */}
            <div className={`${formtype === "signup" ? "-mt-[214px]": "-mt-40" }  hidden w-11/12 max-w-[450px] md:flex  shadow-2xl shadow-slate-800`}>

                <img
                    src={image1}
                    width={500}
                    height={600}
                    alt="Truck"
                    className='bg-gradient-to-b from-blue-100 to-orange-200 p-6'
                    loading='lazy'
                />

            </div>


        </div>
    )
}

export default Template