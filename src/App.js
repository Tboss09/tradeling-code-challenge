import React from 'react'
import AppHeader from './AppHeader'
import SearchInput from './components/Search/SearchInput'
import UseGitHubApi from './hook/UseGitHubApi'
import SearchContainer from './components/SearchResult/SearchContainer'
import Context from './components/Context/Context'

const App = () => {
 const { result, handleTyping } = UseGitHubApi()

 return (
  <div className="mx-2">
   <AppHeader />
   <SearchInput onTyping={handleTyping} />
   {/* Search Result */}
   <Context.Provider value={result}>
    <SearchContainer />
   </Context.Provider>
  </div>
 )
}

export default App
