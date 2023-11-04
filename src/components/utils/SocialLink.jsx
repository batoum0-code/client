import React from 'react'
import { Link } from 'react-router-dom'
const SocialLink = ({ icon }) => {
  return (
   <Link>
      <img
        src={icon}
        alt="icon/social"
        className="w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-300
         hover:scale-110 bg-orange-400 rounded-[100%] p-1 hover:bg-orange-500 "
      />
   </Link>
  )
}

export default SocialLink