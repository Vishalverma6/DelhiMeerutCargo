import React from 'react'
import Template from '../components/core/auth/Template'
import signupImage from "../assets/signupImage.png"

const Signup = () => {
  return (
    <div className='flex  justify-center min-h-screen  bg-gradient-to-b from-indigo-100 to-gray-100 '>
      <Template
        title="Create Your Delhi Meerut Cargo Account"
        desc1="Join our logistics platform to manage shipments, track deliveries, and access POD documents with ease."
        desc2="Experience secure, fast, and reliable cargo management designed for transport businesses and customers."

        image1={signupImage}
        formtype="signup"
      />
    </div>
  )
}

export default Signup