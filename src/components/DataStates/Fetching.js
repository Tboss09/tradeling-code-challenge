import React from 'react'

// external files
import Loader from 'react-loader-spinner'
const Fetching = () => {
 return (
  <div className="flex justify-center m-0 transform mt-64 -translate-y-2/4 ">
   <Loader type="Circles" color="#00BFFF" height={150} width={150} />
  </div>
 )
}

export default Fetching
