import React from 'react'
import Context from '../Context/Context'
import User from './User'

const SearchContainer = () => {
 const result = React.useContext(Context)

 const { fetching, data, error } = result

 if (fetching) return <div>Fethinf</div>

  return <>{data !== undefined && data.search.edges.map(user => <User key ={user.node.id} user ={user}  />)}</>
}

export default SearchContainer
