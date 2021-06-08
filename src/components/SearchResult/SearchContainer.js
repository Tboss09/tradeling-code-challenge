import React from 'react'
import Context from '../Context/Context'
import Error from '../DataStates/Error'
import Fetching from '../DataStates/Fetching'
import Repo from './Repo'
import User from './User'

const SearchContainer = () => {
 const result = React.useContext(Context)
 const { result: searchResult, request } = result
 const { fetching, data, error } = searchResult
 if (fetching) return <Fetching />
 if (error) return <Error error={error} />

 return (
  <div className="flex flex-wrap  my-8  font-light">
   {!request
    ? data !== undefined &&
      data.search.edges.map(user => <User key={user.node.id} user={user} />)
    : data !== undefined &&
      data.search.edges.map(repo => <Repo key={repo.node.id} repo={repo} />)}
  </div>
 )
}

export default SearchContainer
