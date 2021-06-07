import React from 'react'
import AppHeader from './AppHeader'
import SearchInput from './components/Search/SearchInput'
import SearchContainer from './SearchContainer'
const App = () => {
 return (
  <div className ="mx-3">
   <AppHeader />
   <SearchInput />
   {/* Search Result */}
   <SearchContainer />
  </div>
 )
}

export default App
