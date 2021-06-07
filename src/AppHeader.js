import React from 'react'
import { FiGithub } from 'react-icons/fi'
const AppHeader = () => {
 return (
  <div className="flex  items-center   my-10">
   <div className="icon mr-4">
    <FiGithub className="w-9 h-9 " fill="#000" />
   </div>
   <div className="name">
    <h2 className="text-2xl font-bold leading-5">GitHub Searcher</h2>
    <p className="text-sm">Search users or repositories below</p>
   </div>
  </div>
 )
}

export default AppHeader
