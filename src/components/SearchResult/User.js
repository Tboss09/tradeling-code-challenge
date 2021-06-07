import React from 'react'

// external files
import { ImLocation2 } from 'react-icons/im'
import { FaTwitter } from 'react-icons/fa'

const User = ({ user }) => {
 console.log(user.node)
 const {
  name,
  avatarUrl,
  location,
  bio,
  login,
  twitterUsername,
  url,
  followers: { totalCount: followers },
  following: { totalCount: noOfFollows },
  repositories: { totalCount: noOfRepos },
 } = user.node

 return (
  <>
   <div className="flex flex-wrap  my-8  font-light">
    <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
     <div className="shadow-md bg-white rounded-md h-64 pb-3    p-4 ">
      {/* Profile here first */}
      <div className="profile flex items-start  h-20  w-12/12 ">
       {/* Profile image */}
       <div>
        <a href="#">
         <img
          className="inline-block h-12 w-12 rounded-full object-cover ring-4 ring-gray-200 
          shadow-2xl"
          src={avatarUrl}
          alt={`${name || login}'s Profile`}
         />
        </a>
       </div>
       {/* Profile image */}

       {/* Profile name */}
       <div className="name flex leading-3 ml-4">
        <a href={url}>
         <h2 className="text-xl truncate w-48 capitalize text-blue-500 leading-5 font-bold">
          {name ? name : 'Null'}
         </h2>

         <p className="text-lg  text-gray-600 font-normal     ">
          {login ? login : '?'}
         </p>
         <p className="flex items-center">
          <span>
           <ImLocation2 className=" mr-2  h-4 w-4" color="#3684CC" />
          </span>
          <p className="text-base leading-5 text-gray-600 font-normal w-20  truncate ">
           {location ? location : '?'}
          </p>
         </p>
        </a>
       </div>
       {/* Profile name */}
      </div>

      {/* Bio/Description */}

      <div className="bio  mb-2 mt-0    ">
       <p className="h-16 mr-4 text-gray-700 font-light overflow-clip  flex items-center  overflow-hidden text-base  leading-snug ">
        {bio
         ? bio.length >= 80
           ? bio.slice(0, 80) + '...'
           : bio
         : 'No Bio Found'}
       </p>
      </div>

      {/* Twitter username */}
      <div className="twitter   mt-1 mb-1 h-8  flex items-center justify-ev w-32 justify-between truncate">
       <span>
        <FaTwitter className="h-6 w-6" color="#03A9F4" />
       </span>
       <span className=" ">
        {twitterUsername ? '@' + twitterUsername : 'Not found'}
       </span>
      </div>

      {/* followers count */}
      <div className="followers mt-3 h-9 flex justify-between items-center ">
       <div className="text-base">
        <span className="text-base font-bold  text-gray-500">
         {followers === undefined ? '10' : followers}
        </span>{' '}
        <span>Followers</span>
       </div>
       <div className="text-base">
        <span className="text-base font-bold  text-gray-500">
         {noOfFollows === undefined ? '10' : noOfFollows}
        </span>{' '}
        <span> Following</span>
       </div>
       <div className="text-base">
        <span className="text-base font-bold  text-gray-500">
         {noOfRepos === undefined ? '10' : noOfRepos}
        </span>{' '}
        <span>Repo</span>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default User
