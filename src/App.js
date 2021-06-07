import React from 'react'
import AppHeader from './AppHeader'
import SearchInput from './components/Search/SearchInput'
import UseGitHubApi from './hook/UseGitHubApi'
import SearchContainer from './components/SearchResult/SearchContainer'
import Context from './components/Context/Context'

const App = () => {
 const { result, handleTyping, handleRequest, request } = UseGitHubApi()

 return (
  <div className="mx-1">
   <AppHeader />
   <SearchInput onTyping={handleTyping} handleRequest={handleRequest} />
   {/* Search Result */}
   <Context.Provider value={{ result: result, request: request }}>
    <SearchContainer />
   </Context.Provider>
  </div>
 )
}

export default App
