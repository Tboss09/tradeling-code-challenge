import React from 'react'

// external files
import { ImLocation2 } from 'react-icons/im'
import { FaTwitter } from 'react-icons/fa'

const User = ({ user }) => {
 const {
  name,
  avatarUrl,
  location,
  bio,
  login,
  twitterUsername,
  url,
  followers,
  following,
  repositories,
 } = user.node

 return (
  <>
   <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/6  px-2 mb-4">
    <div className="shadow-xl drop-shadow-xl bg-white rounded-md h-60 pb-3    p-4 ">
     {/* Profile here first */}
     <div className="profile flex items-start  h-20  w-12/12 ">
      {/* Profile image */}
      <div>
       <img
        className="inline-block h-12 w-12 rounded-full object-cover ring-4 ring-gray-200 
          shadow-2xl"
        src={avatarUrl}
        alt={`${name || login}'s Profile`}
       />
      </div>
      {/* Profile image */}

      <div className="name flex leading-3 ml-8">
       <a href={url}>
        <h2 className="text-xl truncate w-48 capitalize text-blue-500 leading-5 font-bold">
         {name ? name : 'Null'}
        </h2>

        {/* Profile name */}
        <p className="text-base  text-gray-600 font-normal     ">
         {login ? login : 'Null'}
        </p>
        <p className="flex items-center">
         <span>
          <ImLocation2 className=" mr-2  h-3 w-3" color="#3684CC" />
         </span>
         <span className="text-sm leading-5 text-gray-600 font-normal w-28  truncate ">
          {location ? location : '?'}
         </span>
        </p>
       </a>
      </div>
      {/* Profile name */}
     </div>

     {/* Bio/Description */}

     <div className="bio  mb-2 mt-0 ml-2   ">
      <p className="h-14 mr-4 text-gray-700 font-light overflow-clip  flex items-center   text-base  leading-snug ">
       {bio
        ? bio.length >= 80
          ? bio.slice(0, 80) + '...'
          : bio
        : 'No Bio Found'}
      </p>
     </div>

     {/* Twitter username */}
     <div className="twitter   ml-2  h-7   flex items-center    truncate">
      <span>
       <FaTwitter className="h-6 w-6 " color="#03A9F4" />
      </span>
      <span className=" pl-4">
       {twitterUsername ? '@twitter ' + twitterUsername : 'Not found'}
      </span>
     </div>

     {/* followers count */}
     <div className="followers mt-3 h-9 flex justify-between items-center ">
      <div className="text-base">
       <span className="text-base font-bold  text-gray-500">
        {followers.totalCount === undefined ? '10' : followers.totalCount}
       </span>{' '}
       <span>Followers</span>
      </div>
      <div className="text-base">
       <span className="text-base font-bold  text-gray-500">
        {following.totalCount === undefined ? '10' : following.totalCount}
       </span>{' '}
       <span> Following</span>
      </div>
      <div className="text-base">
       <span className="text-base font-bold  text-gray-500">
        {repositories.totalCount === undefined ? '10' : repositories.totalCount}
       </span>{' '}
       <span>Repo</span>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default User
