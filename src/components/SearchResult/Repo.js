import React from 'react'
// external files
import {  AiOutlineStar } from 'react-icons/ai'
import { GiSnowflake1 } from 'react-icons/gi'
import { VscIssues } from 'react-icons/vsc'

const Repo = ({ repo }) => {
 const {
  shortDescriptionHTML,
  nameWithOwner,
  issues,
  stargazers,
  languages,
  owner: { avatarUrl, login },
 } = repo.node
 console.log()

 const language = {
  codeName: languages.nodes[0] ? languages.nodes[0].name : 'Null',
  backgroundColor: languages.nodes[0] ? languages.nodes[0].color : '#000',
 }

 return (
   <div className="w-full md:w-1/2 lg:w-2/6 px-2 mb-5">
    <div className="shadow-xl bg-white rounded-md h-64 pb-3 p-4">
     {/* Repo/RepoName */}
     <div className="repo">
      <div className="repoName flex items-center h-12 ">
       <div>
       <svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" /></svg>
       </div>
       <h2 className=" text-blue-500 font-bold pl-3 text-xl whitespace-nowrap w-72 truncate capitalize">
        {nameWithOwner}
       </h2>
      </div>
     </div>
     {/* Repo/RepoName */}
     {/* Language name/language color */}
     <div className="languageNameAndColor flex items-center h-6 ml-2   ">
      <div className="h-3 w-3 rounded-full " style={language}></div>
      <p className="pl-3 text-lg font-normal text-gray-500">
       {language.codeName}
      </p>
     </div>
     {/* Language name/language color */}

     {/* Bio of Repo */}
     <div className="mt-2 h-16 flex items-center ml-2  overflow-hidden overflow-clip mr-3">
      <p className="text-lg leading-snug font-light  text-gray-500">
       {shortDescriptionHTML ? shortDescriptionHTML : 'No Description given'}
      </p>
     </div>

     {/* Stars of the Repo */}
     <div className=" h-9   flex justify-between items-end  ">
      <div className="flex items-end">
       <span>
        <AiOutlineStar className="h-5 w-5" />
       </span>
       <span className="pl-1">
        {stargazers.totalCount === undefined ? '10' : stargazers.totalCount}
       </span>
      </div>

      <div className="flex items-center">
       <span>
        <GiSnowflake1 className="h-5 w-5" />
       </span>
       <span className="pl-1"> 10</span>
      </div>
      <div className="flex items-center">
       <span>
        <VscIssues className="h-5 w-5" />
       </span>
       <span className="pl-1">
        {' '}
        {issues.totalCount === undefined ? '10' : issues.totalCount}
       </span>
      </div>
     </div>
    </div>
    {/* onwers name and url */}

    <div className="flex items-center  flex-row-reverse  w-48 -mt-10 ml-3">
     <img
      alt={`${login}'s Repo`}
      src={avatarUrl}
      className="mx-auto object-cover rounded-full shadow-2xl ring-white ring-4 h-8 w-8 "
     />
     <span className="w-40 mr-3 block whitespace-nowrap truncate ">
      Owned by, {login}
     </span>
    </div>
   </div>
 )
}

export default Repo
