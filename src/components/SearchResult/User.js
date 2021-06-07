import React from 'react'

// external files
import { ImLocation2 } from 'react-icons/im'
import { FaTwitter } from 'react-icons/fa'

const User = () => {
 return (
  <>
   <div className="flex flex-wrap mx-2 my-8">
    <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
     <div className="shadow-md   h-72    p-4 ">
      {/* Profile here first */}
      <div className="profile flex items-start  h-20  w-12/12 ">
       {/* Profile image */}
       <div>
        <a href="#">
         <img
          className="inline-block h-12 w-12 rounded-full object-cover ring-4 ring-white 
          shadow-2xl"
          src="https://www.tailwind-kit.com/images/person/1.jpg"
          alt="Charles"
         />
        </a>
       </div>
       {/* Profile image */}

       {/* Profile name */}
       <div className="name  leading-3 ml-6">
        <h2 className="text-xl truncate w-48 capitalize">
         First nameFirst nameFirst nameFirst nameFirst name
        </h2>
        <p className="text-lg leading-tight">Username</p>
        <p>
         <span>
          <ImLocation2 className="inline mr-2" />
         </span>
         <span className="text-base leading-5">Lagos</span>
        </p>
       </div>
       {/* Profile name */}
      </div>

      {/* Bio/Description */}

      <div className="bio h-16 my-2">
       <p className="h-full overflow-clip  overflow-hidden text-lg font-light leading-snug ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid
        nulla ullam
       </p>
      </div>
      {/* Twitter username */}
      <div className="twitter my-4 h-10 flex items-center justify-ev w-32 justify-between truncate">
       <span>
        <FaTwitter className="h-6 w-6" color="#03A9F4" />
       </span>
       <span className=" ">@tayoakosile</span>
      </div>

      {/* followers count */}
      <div className="followers  h-10 flex justify-between items-center ">
       <div className="text-sm">
        <span className="text-base ">10</span> Followers
       </div>
       <div className="text-sm">
        <span className="text-base ">10</span> Following
       </div>
       <div className="text-sm">
        <span className="text-base ">10</span> Repo
       </div>
      </div>
     </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
     <div className="border  text-sm h-24 text-grey-dark flex items-center justify-center">
      <p>full / half / quarter</p>
     </div>
    </div>
   </div>
  </>
 )
}

export default User
