import React, { useState } from 'react'
import { Search } from 'semantic-ui-react'
import { findResults, style } from './locationSearchHelper'

function LocationSearch(props) {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])

  function handleSearchChange(event) {
    const val = event.target.value
    setValue(val)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setResults(findResults(val))
    }, 300)
    // handle search here
  }

  function handleResultSelect(event) {
    console.log('hi');
  }

  return (
    <div style={style} id='search-bar'>
      <Search
        minCharacters={1}
        loading={isLoading}
        size={'large'}
        value={value}
        results={results}
        onSearchChange={handleSearchChange}
        onResultSelect={(event) => handleResultSelect(event, results, setResults)}>
      </Search>
    </div>
  )
}

export default LocationSearch